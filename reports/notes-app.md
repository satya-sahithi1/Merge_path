# Practice Repo Report: notes-app

**Repo:** tariq-dev/notes-app  
**Language:** Python  
**Health:** Active  
**Report date:** 2026-10-10

---

## What this repo teaches

notes-app is a minimal command-line notes manager in Python. It is one of the practice repos in Merge Path. A learner who explores it should come away knowing how to read repo health signals, identify which issues are worth taking on, and understand why reproducing a bug comes before writing a fix.

---

## Repo health summary

| Signal | Value |
|---|---|
| Last commit | 2026-09-18 |
| Most recent merged PR | 2026-09-14 (PR #41) |
| Avg PR response time | 3 days |
| Open issues | 5 |
| Open PRs | 1 (stale) |
| Merged PRs last 90 days | 2 |
| Maintainer replies in issues | Yes, within 1-2 days |
| CONTRIBUTING.md | Present, specific |
| CI | Present |

**Verdict:** Active and responsive. A learner who reads the signals correctly should rate this repo as worth contributing to.

---

## Issues and what each teaches

### Issue #12 — Saving a note with an empty title silently creates a broken note
- **Label:** bug, good first issue  
- **State:** Open, unclaimed  
- **Lesson:** genuine_good_pick  
- **What it teaches:** This is the one issue a learner should pick. Clear reproduction steps, maintainer confirmed it as a good first contribution, small focused fix (one check after strip()), no one has claimed it. The learner should recognise all of these signals.
- **Reproduction:** Call save_note with an empty title. The buggy version returns {"status": "saved"} with no error. The fixed version returns {"error": "Title cannot be empty."}. Verified by regression test notes-app/empty-title-crash.

### Issue #7 — KeyError crash when deleting a note that does not exist
- **Label:** bug, good first issue  
- **State:** Open, comment-claimed 4 months ago, no PR  
- **Lesson:** claimed_never_started  
- **What it teaches:** Someone said they would take it and never opened a PR. The learner should not start without first leaving a comment to ask if it is still being worked on. There is also a stale open PR (#29) from the same person with unaddressed review feedback.
- **Reproduction:** Call delete_note(999) with no note at that ID. Buggy version raises KeyError. Fixed version returns a clean error dict. Verified by regression test notes-app/delete-keyerror.

### Issue #15 — search_notes does not find notes when query case does not match
- **Label:** bug  
- **State:** Open (but already fixed)  
- **Lesson:** already_fixed_by_pr  
- **What it teaches:** PR #38, merged in August 2026, fixed this exact bug. The issue is still marked open. A learner who checks closed PRs before picking an issue will catch this. One who does not will start working on something already done.
- **Reproduction:** The bug is no longer present in the current codebase. The correct reproduce outcome is "can't reproduce", and the explanation is that PR #38 already merged the fix.

### Issue #19 — list_notes returns live objects, mutations affect the internal store
- **Label:** bug, good first issue  
- **State:** Open, unclaimed  
- **Lesson:** good_first_issue_hard  
- **What it teaches:** The label says good first issue, but the issue body and the maintainer's comment both warn that understanding shallow vs deep copy semantics is required before writing the fix. The fix itself is one line, but it should not be written without understanding why. A learner who reads the comments carefully will know this is not the right starting point if they are unfamiliar with Python copy semantics.
- **Reproduction:** Save a note, call list_notes(), mutate the returned dict, call list_notes() again. Buggy version shows the mutation persisted. Fixed version does not. Verified by regression test notes-app/mutable-list.

### Issue #23 — Notes disappear sometimes when I add a lot of them
- **Label:** bug  
- **State:** Open, no follow-up from reporter  
- **Lesson:** no_reproduction_steps  
- **What it teaches:** No steps, no version, no error message. The maintainer already asked for more information and the reporter has not responded. A learner should recognise they cannot reproduce or fix this, and should ask for the missing information rather than guessing at a fix.

---

## Pull requests and what each teaches

### PR #38 — fix: make search_notes case-insensitive (merged)
- **Author:** lena-open-source  
- **Lesson:** good_newcomer_pr  
- **What it teaches:** Small scope (one line changed), linked to the issue, clear description of what changed and why, tests added, and the author responded to review feedback without argument. This is the model for a good first PR.
- **Review note:** Maintainer asked for an additional test covering the reverse case (uppercase query, lowercase title). Contributor added it and replied promptly. PR merged the next day.

### PR #41 — fix: validate title is not empty before saving note (merged)
- **Author:** dev-rohan  
- **Lesson:** polite_review_response  
- **What it teaches:** Maintainer asked for two changes: move the check to after strip(), and add a period to the error message. Contributor made both changes, explained what they updated, and thanked the reviewer. This shows a change request is not a rejection, and that responding well to review is what gets PRs merged.

### PR #29 — fix: handle KeyError in delete_note (open, stale)
- **Author:** anon-contributor  
- **Lesson:** (none — stale context)  
- **What it teaches:** Maintainer requested a different approach (explicit check instead of try/except) and asked for tests. Contributor never came back. Issue #7 remains unresolved as a result. This is why issue #7 has the claimed_never_started lesson — the claim and the stale PR are connected.

---

## Source code: the four bugs

All four bugs are in src/notes.py (v1.0.0). The fixed versions are in src/notes_fixed.py (v1.1.0).

| Bug | Function | Behaviour | Fix |
|---|---|---|---|
| Empty title saves silently | save_note | No validation on title after strip() | Check if clean_title is empty, return error |
| KeyError on invalid delete | delete_note | del _notes[note_id] raises KeyError if id absent | Check note_id in _notes before deleting |
| Case-sensitive search | search_notes | Direct substring match misses different case | Lowercase both query and title before comparing |
| Mutable return from list_notes | list_notes | Returns references to internal dicts, not copies | Return dict(note) for each note |

Regression tests in tests/test_notes.py cover all four bugs, with separate test classes for the buggy and fixed versions.

---

## Quiz coverage

The 8-question quiz for this repo covers:

| Domain | Questions |
|---|---|
| Repo health | Q1 (which signals matter for PR response) |
| CONTRIBUTING.md | Q2 (which parts of a plan conflict with the rules) |
| Issue judgment | Q3 (claimed but abandoned), Q4 (already fixed by PR), Q5 (pick the best issue) |
| Issue judgment — missing info | Q6 (what comment helps on a vague report) |
| Git workflow | Q7 (fork out of date, what to do before branching) |
| Review response | Q8 (maintainer requests changes, correct response) |

Score bands: 7-8 = Ready, 5-6 = Getting there, 0-4 = Review the tips.

---

## What a learner should take away from this repo

1. Repo health is readable in under 2 minutes. Last merged PR date and maintainer responsiveness in issues are the two most useful signals.
2. Open issues are not always unresolved. Always check closed PRs before starting.
3. Labels are not guarantees. Read the issue body and comments, not just the label.
4. Reproduction comes before the fix. You cannot fix what you have not verified is still broken.
5. Claiming etiquette prevents wasted effort. One comment before you start costs nothing.
6. Review feedback is not rejection. Making the changes and explaining them is how PRs land.
