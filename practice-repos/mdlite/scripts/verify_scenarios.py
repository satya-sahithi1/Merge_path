"""
verify_scenarios.py — run mdlite scenario regression tests and write
scenarios/verified.json.

Usage (from the mdlite repo root):
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
    candidates = [
        os.path.join(REPO_ROOT, "../../notes-app/.venv/bin/pytest"),
        os.path.join(REPO_ROOT, "../notes-app/.venv/bin/pytest"),
        os.path.join(REPO_ROOT, ".venv/bin/pytest"),
    ]
    for c in candidates:
        if os.path.isfile(os.path.abspath(c)):
            return os.path.abspath(c)
    import shutil
    return shutil.which("pytest3") or shutil.which("pytest")


PYTEST = _find_pytest()
SCENARIO_FILE = os.path.join(REPO_ROOT, "scenarios", "test_scenarios.py")
OUT_FILE = os.path.join(REPO_ROOT, "scenarios", "verified.json")

REGRESSION_TEST_IDS = [
    "mdlite/bold-underscore",
    "mdlite/raw-html-passthrough",
]


def run_pytest():
    cmd = [PYTEST, SCENARIO_FILE, "-v", "--tb=short"] if PYTEST else \
          [sys.executable, "-m", "pytest", SCENARIO_FILE, "-v", "--tb=short"]
    return subprocess.run(cmd, capture_output=True, text=True, cwd=REPO_ROOT)


def parse_results(proc):
    lines = proc.stdout.splitlines()
    passed = [l.strip() for l in lines if " PASSED" in l]
    failed = [l.strip() for l in lines if " FAILED" in l or " ERROR" in l]
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
        "repo": "mdlite",
        "generated_at": datetime.now(timezone.utc).isoformat(),
        "all_pass": all_pass,
        "summary": summary,
        "regression_tests": [
            {"regressionTestId": tid, "verifiedByTest": all_pass}
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

    print(f"[{'PASS' if all_pass else 'FAIL'}] {summary}")
    print(f"Written: {OUT_FILE}")
    if not all_pass:
        for l in failed:
            print(" ", l)
        sys.exit(1)


if __name__ == "__main__":
    main()
