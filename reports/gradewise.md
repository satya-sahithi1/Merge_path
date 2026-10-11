# Practice Repo Report: gradewise

**Repo:** amaan-dev/gradewise  
**Language:** Python  
**Health:** Active  
**Report date:** 2026-10-11

---

## What this repo teaches

gradewise is a CGPA and semester GPA calculator on the 10-point scale. It is the third practice repo in Merge Path. A learner who explores it should come away knowing how to spot a fake-easy feature request, recognise an already-fixed bug by checking PR history, understand why an assigned issue is off-limits, ask for missing information before guessing at a fix, and identify the one genuinely claimable good pick.

---

## Repo health summary

| Signal | Value |
|---|---|
| Last commit | 2026-09-12 |
| Most recent merged PR | 2026-08-14 (PR #8) |
| Avg PR response time | 1–2 days |
| Open issues | 5 |
| Open PRs | 0 |
| Merged PRs last 90 days | 2 |
| Maintainer replies in issues | Yes, within 1–2 days |
| CONTRIBUTING.md | Present, friendly |
| CI | Present (.github/workflows/ci.yml) |

**Verdict:** Active and responsive. Worth contributing to — one clear unclaimed issue.

---

## Issues and what each teaches

### Issue #2 — Support 4.0 GPA scale
- **Kind:** feature  
- **Label:** good first issue  
- **State:** Open, unclaimed  
- **Lesson:** good_first_issue_hard  
- **What it teaches:** The maintainer called it easy, but a comment from April 20 points out there are at least three different 4.0 mappings (US standard, WES conversion, university-specific) with no agreement on which to use. The learner cannot write the code without a design decision that hasn't been made. The label is not wrong — the design gap is.

### Issue #3 — KeyError when using grade 'A+'
- **Kind:** bug  
- **State:** Open (tracker not updated)  
- **correctOutcome:** cant_reproduce  
- **Lesson:** already_fixed_by_pr  
- **What it teaches:** Two people confirmed this bug in May 2026. PR #5 silently fixed it on June 2 without linking the issue, so the tracker still shows it open. A learner who runs the code today gets 9.0 with no error. Checking closed PRs before starting is the skill this issue tests.

### Issue #6 — cgpa() ignores credit weights
- **Kind:** bug  
- **State:** Open, assigned to lena-open-source (2026-09-07)  
- **correctOutcome:** reproduced  
- **Lesson:** claimed_never_started  
- **What it teaches:** The bug is real and confirmed (buggy: 8.0, correct: 7.0 for the spec example). But it was assigned three weeks before asOf with no PR. The learner should leave a comment asking if it's still in progress before touching it. The math: (2×10 + 6×6)/(2+6) = 7.0.

### Issue #9 — CGPA looks wrong sometimes
- **Kind:** bug  
- **State:** Open, no follow-up  
- **correctOutcome:** not_enough_info  
- **Lesson:** no_reproduction_steps  
- **What it teaches:** No grades, no credits, no expected vs actual values, no Python version. The maintainer asked for details the next day and got no reply. The learner cannot reproduce this and should not guess — they should ask for the missing inputs.

### Issue #10 — semester_gpa([]) raises ZeroDivisionError
- **Kind:** bug  
- **Label:** bug, good first issue  
- **State:** Open, unclaimed  
- **correctOutcome:** reproduced  
- **Lesson:** genuine_good_pick  
- **What it teaches:** The only correct pick. Clear steps, immediate reproduction, maintainer confirmed the fix (`if not courses: return 0.0`) and explicitly asked for a test. Nobody has claimed it. Fix is one line.

---

## Pull requests and what each teaches

### PR #5 — fix: add A+ and B+ to GRADE_POINTS (merged 2026-06-02)
- **Author:** dev-rohan  
- **Lesson:** good_newcomer_pr  
- **What it teaches:** Small scope, correct values, clean merge with one approving comment. The one miss: no `Fixes #3` in the description, so the issue tracker was never closed. Always link the issue.

### PR #7 — docs: fix cgpa example in README (merged 2026-07-16)
- **Author:** meera-writes-code  
- **Lesson:** (none)  
- **What it teaches:** Quick, focused docs fix. Merged in two days. No drama.

### PR #8 — fix: reject non-positive credits (merged 2026-08-14)
- **Author:** preethi-codes  
- **Lesson:** polite_review_response  
- **What it teaches:** Maintainer asked for tests covering the error path, not just the happy path. Contributor added them the same day without pushback. That responsiveness is what gets PRs merged fast.

---

## Source code: the two live bugs

HEAD code has two bugs deliberately left unfixed (issues #6 and #10):

| Bug | Function | Behaviour | Fix |
|---|---|---|---|
| Empty list crash | semester_gpa | ZeroDivisionError when courses=[] | `if not courses: return 0.0` at top |
| Unweighted CGPA | cgpa | Averages semester GPAs ignoring credits | Sum all grade×credit across all semesters, divide by total credits |

Fixed versions live in `scenarios/fixes/issue-6/` and `scenarios/fixes/issue-10/`. Old buggy version (missing A+/B+) lives in `scenarios/history/issue-3/`. All verified by `scenarios/test_scenarios.py` (10/10 pass).

---

## Quiz coverage

| Domain | Questions |
|---|---|
| Repo health | Q1 (multi — PR merge speed + issue reply speed), Q2 (what PRs say to include) |
| Issue judgment | Q3 (pick the right issue), Q4 (label weight), Q5 (missing info — what do you need) |
| Issue judgment | Q6 (can't reproduce — what to do) |
| Contributing | Q7 (assigned issue etiquette) |
| Review | Q8 (maintainer wants 0.0, you want an error — what do you do) |

Score bands: 7–8 = Ready, 5–6 = Getting there, 0–4 = Review the tips.

---

## What a learner should take away from this repo

1. "Easy" in an issue comment is someone's guess, not a guarantee. Read the thread.
2. Open issues are not always unsolved. Check closed PRs first — 30 seconds would have caught #3.
3. Assigned means hands off until you've asked. A week is not long enough to assume someone quit.
4. You cannot fix what you cannot reproduce. No inputs means no starting point.
5. When the maintainer tells you the fix in a comment, that is the spec. Follow it.
6. One test is often all that stands between a PR and a merge. Add it before you're asked.
