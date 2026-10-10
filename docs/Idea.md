Open Source Contribution Trainer: Flow

A practice site for users  who want to make their first open source PR and don't know where to start.

Why this exists:

Most of us know git add, commit, push. That's not what stops people. What actually happens:

We spend days trying to "understand open source" and never open a repo.
We pick a repo with 40k stars, get lost in the folder structure, and quit.
We grab a good first issue that someone claimed 6 months ago, or one that's already fixed.
We open a PR without reading CONTRIBUTING.md, and it sits there or gets closed.
Around Hacktoberfest, a lot of us (and a lot of people everywhere) send low-effort PRs that maintainers have to clean up.

The skill we're missing isn't git. It's judgment: is this repo alive, is this issue still real, is anyone already on it, is this small enough for a first PR.

This site trains that judgment on a fake repo, where getting it wrong costs nothing .

The flow

Total time for one run: about 15 to 20 minutes.

1. Landing

One line: learn to tell in minutes whether a repo and an issue are worth your time. One start button. No login.

2. Basics (2 min, skippable)

Three cards for people who've never done this:

What open source is: public code under a license, anyone can read it, and the license decides what you can do with it.
How contribution works: you don't push to the main repo. You fork, change your copy, and ask the maintainers to pull your change (PR).
The loop: find repo, read README and CONTRIBUTING, pick an issue, reproduce, branch, fix, PR, handle review.
3. "Things I wish I knew" (short version)

Five tips shown before the practice, so people go in with the right habits:

README first. Code later.
You don't need to understand the whole codebase.
good first issue doesn't mean easy.
Read the comments before you start.
Reproduce the bug before you write any fix.

The full list comes back at the end.

4. Mission

You've just found this repo. Find one issue you could realistically take on. You have about 3 minutes.

A soft timer, not a hard lock. The point is to stop people from clicking around with no goal.

Check whether you can raise a new issue .

5. Explore the practice repo

One of six fake repos, picked at random. It's built to look like GitHub:

README and CONTRIBUTING.md
File tree
Issue list with labels, comments and assignees
Open and merged PRs with review comments
Commit history and last activity date

The site records what you opened and what you skipped. It doesn't tell you yet.

6. Repo health check

Before picking an issue, you answer a few questions from what you saw:

When was the last commit?
How long do PRs take to get a first response?
How many open PRs are sitting untouched?
Does CONTRIBUTING.md exist, and is there CI?
Do maintainers reply in issues?

Then you rate it: worth contributing / risky / dead. The site tells you if you read it right.

7. Reproduce the issue

Every issue has a Reproduce tab with the report's steps, expected result and actual result. You follow the steps in a small simulated panel and mark one:

Reproduced
Can't reproduce (maybe fixed by a later merged PR)
Not enough info (steps missing, no version, no logs)

The site checks your answer. Some issues in the repo are already fixed, and that's on purpose.

8. Pick an issue and justify it

You choose one and write a one-line reason. Feedback is immediate and specific, for example:

"Someone commented 'I'll take this' 4 months ago and never opened a PR. Ask before you start."
"Labeled good first issue, but it touches the auth module and needs a design decision."
"Reasonable pick. Clear steps, reproducible, small scope."
9. Contribution walkthrough

Simulated terminal where you type or click through:

fork → clone → git remote add upstream → git checkout -b fix/issue-12
→ change → run tests → commit → push → open PR

Also covers: how to claim an issue politely, writing a PR description that links the issue, and why you keep PRs small.

10. Review simulation

The maintainer comments "Changes requested" on your practice PR. You pick a response from realistic options (argue, ignore, silently push, or reply and update). The point: review comments are about the code, and a change request isn't a rejection.

11. Quiz

About 6 questions, generated from what you actually did in the session. If you skipped the comments, one question asks what the comments on your chosen issue said. Formats are things like "which file do you read first" and "which of these three issues do you take", not definitions.

12. Results and next step
Score plus what you got right and wrong
The full "Things I wish I knew" list
A finder for real good first issue and help wanted listings, filtered by language and recent activity
Optional: save progress (GitHub login)
What every practice repo contains

All six repos share one template so each run teaches the same lessons with a different story. Each has:

Slot	What it teaches
An issue already claimed in comments	Check comments, ask before starting
An old issue already fixed by a merged PR	Reproduce first, check PR history
A good first issue that is actually hard	Labels aren't a guarantee
An issue with no reproduction steps	Ask for info instead of guessing
One genuinely good first pick	What a good one looks like
A merged PR from a newcomer	How a good first PR looks
A PR with "changes requested" that was fixed politely	How review goes

Health also varies by repo: one active and responsive, one slow but alive, one abandoned.

Topics (examples): to-do app, weather CLI, recipe site, expense tracker, notes app, small Python library.

Contribution etiquette we'll teach

These are real habits that maintainers care about:

Comment on the issue to say you're working on it, and wait for a reply or assignment on busy repos.
One issue per PR. Don't bundle fixes.
Follow the repo's commit and branch conventions if they have them.
Don't ping maintainers repeatedly. Give it a week or more.
Don't submit AI-generated changes you haven't understood or tested. Maintainers can tell, and it wastes their time.
Don't open PRs just for a count (typo spam, whitespace changes).
Docs fixes are real contributions.
Tech (v1)

Keep it small so it actually gets built.


Once user completes all the tasks at last along with things i wish  i knew earlier card ; the urls of goodfirstissues.dev , goodfirstissues.org will be displayed showing search your first open-source repo here .
