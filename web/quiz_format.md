A question can’t be answered without exploring the repo.
Wrong options are real beginner mistakes, not jokes.
The correct option is not the longest.
Every wrong option gets its own explanation, saying why it’s tempting and why it fails.
No question or explanation reveals another question’s answer.
Test decisions, not recall.
Every claim in an explanation is true or hedged.


example questions (for to-do repo)


Q1. Repo health (select two)
Which two signals tell you most about whether your PR would get a response?

Star count
Date of the most recent merged PR ✓
How quickly maintainers replied on issues ✓
Number of forks
Size of the README

Feedback: Stars and forks show popularity, not whether anyone reviews outside PRs. Last commit date helps, but a repo can keep getting commits while ignoring contributors.

Q2. Applying CONTRIBUTING.md (select all that apply)
Your plan for #12: branch named my-fix, no tests, PR title “fixed”. Which parts conflict with CONTRIBUTING.md?
Build the options from your file’s real rules (branch naming, tests required, PR title format). Right now your file needs at least two or three specific rules for this to work.

Q3. Claiming a claimed issue
#7 was claimed 4 months ago and no PR exists. Which comment do you leave?

“I’ll take this.” (ignores the original claim)
“Is this still being worked on? If not, I’d like to take it.” ✓
“Any update?” (asks, but offers nothing)
“This has been abandoned, so I’m starting.” (assumes)

Q4. Open but already fixed
You reproduce #15, but PR #38, which is merged, mentions it. What do you do?

Pick it, since it’s still open
Comment linking PR #38, ask whether the issue can be closed, then choose another ✓
Open a new PR fixing it again
Ignore it without saying anything

Q5. First pick (options show titles only)
Pick one: #12 empty title validation, #15 case-insensitive search, #19 mutable list return, #23 notes disappearing.
Feedback per wrong option: #15 was fixed by PR #38. #19 carries the good first issue label, but [explain the real reason it’s hard, e.g. changing the return type affects other callers]. #23 has no reproduction info.

Q6. Missing information
#23 says “notes disappear” and nothing else. Which comment helps most?

“Doesn’t work for me either.”
“This report is too vague to act on.”
“Could you share your Python version, the steps you followed, and what you expected versus saw?” ✓

The reproduce panel itself should be a task, not a quiz question: the user runs #12’s steps and the site checks the result.

Q7. Git workflow
Your fork’s main is 12 commits behind the original repo. What do you do before starting on #12?

Branch from your fork’s main as it is
Sync with the original repo, then branch from the updated main ✓
Make changes directly on your fork’s main
Delete the fork and fork again

Q8. Review feedback
The maintainer writes: “Looks good. Can you add a test for a whitespace-only title too?” What do you do?

Open a new PR with the test
Reply “ok” and change nothing
Add the test, push to the same branch, and reply once it’s done ✓
Explain why the test isn’t needed

If you want a harder variant, have the reviewer ask for something you disagree with, and test whether the user explains their reasoning politely instead of arguing.

Instructions  :
Write questions that cannot be answered without exploring the repo. Do not state evidence in the question text. Each wrong option must be a realistic beginner mistake with its own explanation. The correct option must not be the longest. No question may reveal another question’s answer. Base every question on a field in the truth sheet.
