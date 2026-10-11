# Repo briefs (build in this order)

## 1. weatherly (verdict: leave)
CLI printing current weather. Abandoned: last commit 430 days before asOf, 20 open PRs, none answered, maintainer silent 13 months. No CONTRIBUTING.
Issues: #2 KeyError 'main' crash (API changed; reproducible) | #3 "Is this still maintained?" (11 months, no reply) | #5 Fahrenheit option, labelled good first issue (nobody will review it) | #7 claimed 10 months ago | #9 "API key invalid?" (missing info)
PRs: #19 open 9 months, already fixes #2 | #16 changes requested, contributor replied, silence 11 months | #11 last merge, 14 months ago.
Lesson: none of these is the right pick. Walk away.

## 2. gradewise (healthy)
CGPA and semester calculator. Replies in 1 to 2 days. Friendly CONTRIBUTING, CI.
Issues: #2 division by zero on empty semester (GOOD PICK, maintainer says "yes please, tests welcome") | #4 other grading scales, good first issue (fake-easy, design decision) | #6 CGPA wrong after deleting a course (fixed by PR #17) | #8 credit rounding (assigned a week ago) | #10 "CGPA looks wrong sometimes" (missing info)
PRs: #12 newcomer docstring merged | #17 merged fix | #19 changes requested for missing test, fixed politely.

## 3. snip-link (mixed signals)
Flask + SQLite URL shortener. Commits 5 days ago, but 14 open PRs, oldest 7 weeks.
Issues: #4 custom slugs overwrite links (claimed 3 weeks ago, maintainer asked "still on it?", no reply) | #6 expired links redirect (fixed by PR #21) | #9 click analytics, good first issue (fake-easy: schema change) | #11 "500 sometimes" (missing info) | #13 invalid URLs accepted (GOOD PICK)
PRs: #21 merged fix | #26 newcomer .gitignore, changes requested then fixed | open pile.
Lesson: active commits do not mean fast PR review.

## 4. mdlite (strict)
Markdown-to-HTML library. Two maintainers, 2-day replies. Strict CONTRIBUTING: branch fix/<issue>-desc, tests required, black, CI must pass, PR checklist.
Issues: #5 nested lists, good first issue (fake-easy: parser rewrite) | #8 script tag not escaped (GOOD PICK, needs a test) | #10 __bold__ wrong (fixed by PR #31) | #12 docs typo (claimed 3 days ago, draft PR linked) | #15 "links break sometimes" (missing info)
PRs: #29 newcomer test merged | #31 merged fix | #30 changes requested, CI failed on formatting, fixed.
Lesson: follow CONTRIBUTING exactly.

## 5. spendly (no rules file)
Expense tracker CLI. Friendly maintainer, 1-day replies. No CONTRIBUTING.md, README says "PRs welcome. Open an issue first."
Issues: #3 negative amounts accepted (GOOD PICK) | #5 CSV drops category (fixed by PR #18) | #7 rounding in monthly total (claimed 6 weeks ago, no PR) | #9 spending charts, good first issue (new dependency, design) | #11 "doesn't work on my machine" (missing info)
PRs: #14 newcomer README typo merged | #18 merged fix | #20 changes requested for no test, fixed. Past PRs share a convention: "fix:" titles, one change each, test included.
Lesson: learn the norms from merged PRs.
