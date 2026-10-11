"""
verify_scenarios.py — run gradewise scenario regression tests and write
scenarios/verified.json.

Usage (from the gradewise repo root):
    python3 scripts/verify_scenarios.py

Output: scenarios/verified.json
"""

import subprocess
import sys
import os
import json
from datetime import datetime, timezone

REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))

def _find_pytest():
    """Locate pytest: prefer the shared venv, then PATH."""
    candidates = [
        os.path.join(REPO_ROOT, "../../notes-app/.venv/bin/pytest"),
        os.path.join(REPO_ROOT, "../notes-app/.venv/bin/pytest"),
        os.path.join(REPO_ROOT, ".venv/bin/pytest"),
    ]
    for c in candidates:
        if os.path.isfile(os.path.abspath(c)):
            return os.path.abspath(c)
    import shutil
    found = shutil.which("pytest3") or shutil.which("pytest")
    if found:
        return found
    # Last resort: run as a module via sys.executable
    return None

PYTEST = _find_pytest()

SCENARIO_FILE = os.path.join(REPO_ROOT, "scenarios", "test_scenarios.py")
OUT_FILE = os.path.join(REPO_ROOT, "scenarios", "verified.json")

REGRESSION_TEST_IDS = [
    "gradewise/keyerror-grade",
    "gradewise/cgpa-ignores-credits",
    "gradewise/empty-semester-crash",
]


def run_pytest():
    if PYTEST:
        cmd = [PYTEST, SCENARIO_FILE, "-v", "--tb=short"]
    else:
        cmd = [sys.executable, "-m", "pytest", SCENARIO_FILE, "-v", "--tb=short"]
    result = subprocess.run(
        cmd,
        capture_output=True,
        text=True,
        cwd=REPO_ROOT,
    )
    return result


def parse_results(proc):
    lines = proc.stdout.splitlines()
    passed = []
    failed = []
    for line in lines:
        if " PASSED" in line:
            passed.append(line.strip())
        elif " FAILED" in line or " ERROR" in line:
            failed.append(line.strip())

    # Extract summary line
    summary = next(
        (l for l in reversed(lines) if "passed" in l or "failed" in l or "error" in l),
        "unknown",
    )
    return passed, failed, summary


def main():
    print("Running scenario tests …")
    proc = run_pytest()
    passed, failed, summary = parse_results(proc)

    all_pass = proc.returncode == 0

    verified = {
        "repo": "gradewise",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "all_pass": all_pass,
        "summary": summary,
        "regression_tests": [
            {
                "regressionTestId": tid,
                "verifiedByTest": all_pass,
            }
            for tid in REGRESSION_TEST_IDS
        ],
        "passed_count": len(passed),
        "failed_count": len(failed),
        "passed": passed,
        "failed": failed,
        "stdout": proc.stdout,
    }

    os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)
    with open(OUT_FILE, "w") as f:
        json.dump(verified, f, indent=2)

    status = "PASS" if all_pass else "FAIL"
    print(f"[{status}] {summary}")
    print(f"Written: {OUT_FILE}")

    if not all_pass:
        print("\n--- failures ---")
        for line in failed:
            print(" ", line)
        sys.exit(1)


if __name__ == "__main__":
    main()
