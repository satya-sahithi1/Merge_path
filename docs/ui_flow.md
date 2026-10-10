# UI Flow — Merge Path

Decided: 2026-10-10. Supersedes the flow notes in Idea.md for implementation purposes.

---

## Route map

```
/                       Landing
/learn                  Basics (3 cards, skippable)
/tips                   Tips (5 tips, "A few things before you go in")
/mission                Mission card
/repo/[repoId]          Repo explorer (with persistent mission banner)
/repo/[repoId]/issues/[issueId]   Issue detail (with event logging)
/repo/[repoId]/prs/[prId]         PR detail
/repo/[repoId]/file               File viewer (with event logging)
/repo/[repoId]/quiz               Quiz (existing)
/repo/[repoId]/pick               Issue pick + justification (placeholder for now)
```

---

## Step persistence

Current step stored in localStorage under the key `merge-path-step`.

Values: `"learn"` | `"tips"` | `"mission"` | `"exploring"` | `"pick"` | `"quiz"` | `"done"`

The landing page reads this key. If a step is already set, the Start button label changes to "Continue" and links to the correct route instead of /learn. This lets users resume after closing the tab.

Step is updated on arrival at each route (client-side, in a useEffect).

---

## Event logger

All logged events go to localStorage under the key `merge-path-events`, stored as a JSON array.

Shape of each event:

```ts
type LogEvent = {
  repoId: string;
  type: EventType;
  target: string;   // filename, issue id, "readme", "contributing", "reproduce-tab", etc.
  timestamp: string; // ISO 8601
};

type EventType =
  | "file_open"
  | "issue_open"
  | "comments_seen"
  | "reproduce_tab"
  | "issue_chosen"
  | "readme_open"
  | "contributing_open";
```

README and CONTRIBUTING are file opens with specific type overrides (`readme_open`, `contributing_open`) rather than generic `file_open`, so the quiz and results screens can check them separately.

Comments seen uses IntersectionObserver: fires when the comments section is at least 50% visible for at least 1 second. Only fires once per issue per session.

The quiz reads from this log to determine which issues were opened, which comments were seen, and whether the reproduce tab was used. This is used later to personalise quiz questions (not yet built).

---

## Screen by screen

### 1. Landing (`/`)

- Headline: **Merge Path**
- Subline: Learn to tell in minutes whether a repo and an issue are worth your time.
- Body: Practice on a fake repo. Get it wrong. It costs nothing here.
- Button: **Start exploring →** → goes to `/learn`
- If `merge-path-step` is set in localStorage, button label is **Continue →** and links to the correct route.

No other content. No login.

---

### 2. Basics (`/learn`)

Title: none (the cards are the content).

Three cards shown in sequence (Next →) or all at once — to decide during build, but sequential is preferred so people actually read them.

**Card 1**
Open source is public code anyone can read and propose changes to.

**Card 2**
You don't edit the main repo. You copy it (fork), change your copy, and ask the maintainers to take your change (PR).

**Card 3**
The loop: find a repo, read the README and CONTRIBUTING, pick an issue, reproduce it, fix it, open a PR.

**Skip:** Prominent button above or beside the cards — "I know what a fork is, skip this →" — one click, goes directly to `/tips`. Not styled as a ghost or secondary button. It should be as easy to find as the Next button.

**Proceed:** After card 3, a "Got it →" button goes to `/tips`.

On arrival, sets `merge-path-step = "learn"` in localStorage.

---

### 3. Tips (`/tips`)

Title: **A few things before you go in**

All 5 tips shown on one screen. No pagination.

1. README first. Code later.
2. You don't need to understand the whole codebase.
3. "good first issue" doesn't mean easy.
4. Read the comments before you start.
5. Reproduce the bug before you write a fix.

One button: **I'm ready →** → goes to `/mission`.

On arrival, sets `merge-path-step = "tips"` in localStorage.

---

### 4. Mission (`/mission`)

Title: **Your mission**

Body:
> You've just found this repo. Find one issue you could realistically take on. One you could start on without asking for clarification first.

One button: **Start exploring →** → goes to `/repo/notes-app` (hardcoded for v1; randomised when more repos exist).

On arrival, sets `merge-path-step = "exploring"` in localStorage.

---

### 5. Repo explorer (`/repo/[repoId]`)

Existing explorer (files, issues, PRs, commits tabs) unchanged, except:

**Persistent mission banner** pinned at the top of the page, below the nav.

Banner contains:
- Mission text: "Find one issue you could realistically take on."
- Timer: count-up from 0:00. Updates every second. At 8:00, timer text turns amber and a line appears below it: "Taking your time is fine. Pick the one you'd be comfortable starting on."
- Button: **I've chosen an issue →** — disabled until at least one issue page has been opened (checked from the event log in localStorage). When enabled, links to `/repo/[repoId]/pick`.

The banner does not scroll away. It does not block content. It does not lock anything.

Timer state lives in component state (not localStorage). If the user refreshes, the timer resets. This is intentional — the timer is a nudge, not a record.

---

### 6. Issue detail (`/repo/[repoId]/issues/[issueId]`)

Existing page unchanged, except:

- On mount: logs `issue_open` event with `target: issueId`.
- README/CONTRIBUTING detection: if the issue title or the file viewer was for README or CONTRIBUTING, log `readme_open` or `contributing_open`. (These are better detected in the file viewer — see below.)
- Comments section: IntersectionObserver on the first comment card. Fires `comments_seen` event when at least 50% visible for at least 1 second. Only fires once per issue per session (checked against existing log before firing).

---

### 7. File viewer (`/repo/[repoId]/file`)

Existing page unchanged, except:

- On mount: reads the `name` query param.
  - If name is `README.md` → logs `readme_open`
  - If name is `CONTRIBUTING.md` → logs `contributing_open`
  - Otherwise → logs `file_open` with `target: name`

---

### 8. Issue detail — reproduce tab

Existing reproduce tab unchanged, except:

- When the user clicks the "▶ Try reproducing" tab: logs `reproduce_tab` event with `target: issueId`.
- Only fires on the first click per issue per session.

---

### 9. Issue pick (`/repo/[repoId]/pick`) — placeholder

For now: a simple page that says "You've picked an issue. Issue pick and justification coming next." with a back link to the repo.

Step set to `"pick"` in localStorage on arrival.

This is where the issue-pick-with-justification screen will live in the next build.

---

## What is not built yet

- Health check quiz (step 6 in Idea.md)
- Issue pick with justification and feedback (step 8)
- Contribution walkthrough / simulated terminal (step 9)
- Review simulation (step 10)
- "Things I wish I knew" full list on results screen
- Real issue finder links on results (partially done in quiz results for 7+ score)
- Session-aware quiz questions (quiz reads from event log)
- Multiple repos (only notes-app exists)
- GitHub login / save progress
