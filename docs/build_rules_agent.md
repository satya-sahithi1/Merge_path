# Practice repo rules

Reference implementation: practice-repos/notes-app. Match its structure exactly.

## Structure per repo
practice-repos/<name>/
  README.md (200 words or fewer), CONTRIBUTING.md (150 words or fewer, unless the brief says none), LICENSE
  requirements.txt
  src/*.py              HEAD version, containing every bug that is still open
  tests/test_*.py
  scenarios/repo.json, issues.json, pull-requests.json, commits.json
  scenarios/fixes/issue-N/   fixed files, never listed in the explorer
Register the repo in repos.json.

## Content rules
- asOf is 2026-09-15. Every date is relative to it.
- Max 5 issues, 3 PRs, 12 visible files, 10 recent commits.
- Python 3.12 only. Each bug is 3 to 5 lines of realistic beginner-level Python.
- Write order: truth entry, then buggy code and fix, then issue body and comments, then PRs.
- Never type error output by hand. It comes from scripts/verify_scenarios.py into scenarios/verified.json.
- Visible text must not state the answer the learner is meant to work out.
- Every issue has correctOutcome, outcomeFeedback and a truth object (trap, isGoodPick, feedback).
- Exactly one good pick per repo, except when verdict is "leave" (zero).
- Required slots: claimed, already-fixed, fake-easy, missing-info, good pick.
- Comment authors come from the shared pool in scenarios/usernames.json.

## Done means
1. scripts/verify_scenarios.py passes.
2. The lint and consistency tests pass.
3. A summary lists anything where code, output and truth entries disagree.
Then STOP and wait. Do not start the next repo.
