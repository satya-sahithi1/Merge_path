Display actual practice-repo files, README, CONTRIBUTING, issues, PRs, and commits in your own interface. Files and scenario data are bundled with the app.

Learners can navigate the file tree and inspect source code.

The app records what they open and skip.

No GitHub API, login, or network dependency is required.

You can control the learning path and reproduce bugs deterministically.


#12 — Saving an empty note crashes
Labels: bug, good first issue

Steps to reproduce

Open the notes app.

Create a new note.

Leave the title empty.

Click Save.

Expected result: The app displays a validation message.

Actual result: The app throws an error.

Try the simulated reproduction


Version 1.0 — before the fix

Version 1.1 — after the fix
Illustrative UI demonstration only. Your implementation should derive these results from the actual scenario and its executable behavior.
