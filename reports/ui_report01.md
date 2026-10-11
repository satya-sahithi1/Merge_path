# UI Build Plan — Merge Path
**Report:** ui_report01  
**Date:** 2026-10-10  
**Source:** docs/ui_flow.md  
**Status:** In progress — 4 of 8 parts complete  
**Last updated:** 2026-10-10

---

## What exists

The Next.js 16 app in `web/` — state as of last update:

| File / Route | Status |
|---|---|
| `web/app/page.tsx` | ✓ Updated — resume logic done (Part 1) |
| `web/app/learn/page.tsx` | ✓ Created — 3-card sequential flow (Part 2) |
| `/repo/[repoId]/page.tsx` | Exists — files, issues, PRs, commits tabs (unchanged) |
| `/repo/[repoId]/issues/[issueId]/page.tsx` | Exists — reproduce tab included (event hooks pending Part 7) |
| `/repo/[repoId]/file/page.tsx` | Exists (event hooks pending Part 7) |
| `/repo/[repoId]/quiz/page.tsx` | Exists (unchanged) |
| `/repo/[repoId]/prs/[prId]/page.tsx` | Exists (unchanged) |
| `web/lib/types.ts` | Exists — full type definitions |
| `web/lib/loader.ts` | Exists — JSON data loader |
| `web/app/globals.css` | Exists — dark GitHub-style design tokens |

## What is still missing

Routes and logic defined in `docs/ui_flow.md` not yet built:

| Missing | Notes |
|---|---|
| `/tips` | 5 tips on one screen — Part 3 |
| `/mission` | Mission card, sets step in localStorage — Part 4 |
| `/repo/[repoId]/pick` | Placeholder for issue pick + justification — Part 8 |
| Event logger utility | `merge-path-events` in localStorage — Part 5 |
| Mission banner | Pinned timer + gated button on repo explorer — Part 6 |
| Issue detail event hooks | `issue_open`, `comments_seen` via IntersectionObserver — Part 7 |
| File viewer event hooks | `readme_open`, `contributing_open`, `file_open` — Part 7 |
| Reproduce tab event hook | `reproduce_tab` on first click per issue — Part 7 |

---

## Build parts — cross-verification table

Each part will be implemented fully, the app built to verify no errors, and a report doc written before moving to the next part.

| Part | What gets built | Route(s) affected | Report doc | Status |
|---|---|---|---|---|
| **Part 1** | Landing page — resume logic, correct button label and link based on `merge-path-step` | `/` | `reports/part1-landing.md` | ✓ Done |
| **Part 2** | `/learn` — 3-card sequential flow, skip button ("I know what a fork is, skip this →"), "Got it →" to `/tips` | `/learn` | `reports/part2-learn.md` | ✓ Done |
| **Part 3** | `/tips` — 5 tips on one screen, "I'm ready →" to `/mission` | `/tips` | `reports/part3-tips.md` | ✓ Done |
| **Part 4** | `/mission` — mission card, "Start exploring →" to `/repo/notes-app` | `/mission` | `reports/part3-part4.md` | ✓ Done |
| **Part 5** | Event logger utility + step persistence — `merge-path-events` and `merge-path-step` in localStorage, shared hooks/utils | `web/lib/events.ts` (new) | `reports/part5-event-logger.md` | Pending |
| **Part 6** | Mission banner on repo explorer — pinned, count-up timer, amber at 8:00, "I've chosen an issue →" gated on event log | `/repo/[repoId]` | `reports/part6-mission-banner.md` | Pending |
| **Part 7** | Event logging hooks on issue detail and file viewer — `issue_open`, `comments_seen` (IntersectionObserver), `reproduce_tab`, `readme_open`, `contributing_open`, `file_open` | `/repo/[repoId]/issues/[issueId]`, `/repo/[repoId]/file` | `reports/part7-event-logging.md` | Pending |
| **Part 8** | `/repo/[repoId]/pick` placeholder — "You've picked an issue." message, back link | `/repo/[repoId]/pick` | `reports/part8-pick.md` | Pending |

---

## Implementation notes per completed part

### Part 1 — Landing page (`/`)

`web/app/page.tsx` converted from a server component to `"use client"`. A `useEffect` reads `merge-path-step` from localStorage after hydration. Three render states:
- **Loading** — pre-hydration, shows a placeholder span to avoid layout shift.
- **Fresh** — no step found, shows "Start exploring →" linking to `/learn`.
- **Resume** — step found, shows "Continue →" linking to the mapped route via a `STEP_ROUTES` lookup object.

A "start over" button appears only in resume state and clears both `merge-path-step` and `merge-path-events` from localStorage without a page reload. The previous page.tsx hard-linked to `/repo/notes-app` and had no resume logic.

Full detail: `reports/part1-landing.md`

---

### Part 2 — Basics (`/learn`)

`web/app/learn/page.tsx` created as `"use client"`. Card content is a module-level `CARDS` array (3 items). Current card index is held in `useState(0)`. On mount, `useEffect` writes `merge-path-step = "learn"` to localStorage.

Navigation:
- **Skip button** lives in the top-right of the nav bar, same visual weight as the Next button (solid border, not ghost), goes to `/tips` from any card — matching the spec's requirement that it be as easy to find as Next.
- **Next →** advances the card index.
- **Got it →** replaces Next on card 3 and navigates to `/tips` via `useRouter`.
- Three progress dots above the card show past (filled green), current (white), upcoming (dim).

Full detail: `reports/part2-learn.md`

---

### Part 3 — Tips (`/tips`)

`web/app/tips/page.tsx` created as `"use client"`. `TIPS` is a module-level `const` array of 5 items. On mount, `useEffect` writes `merge-path-step = "tips"` to localStorage. All 5 tips displayed on a single screen — no pagination. Each tip is a bordered card with a numbered blue badge, headline in `text-primary`, and body in `text-secondary`.

Navigation: one button "I'm ready →" at the bottom-right routes to `/mission` via `useRouter`. No skip button (nothing to skip past on this screen).

Full detail: `reports/part3-tips.md`

---

### Part 4 — Mission (`/mission`)

`web/app/mission/page.tsx` created as `"use client"`. On mount, `useEffect` writes `merge-path-step = "mission"` to localStorage. A single centred card contains: a small-caps `YOUR MISSION` label, the mission body ("You've just found this repo…"), a soft 3-minute hint, and a "Start exploring →" button routing to `/repo/notes-app` (hardcoded for v1). A "Go back" link below the card links to `/tips`.

The destination sets the step to `"exploring"` on arrival (Part 6 — mission banner), so the `"mission"` step correctly represents "user has read the mission but hasn't entered the repo yet".

Full detail: `reports/part3-part4.md`

---

## Step persistence values

From `docs/ui_flow.md` — `merge-path-step` in localStorage:

| Value | Set on arrival at |
|---|---|
| `"learn"` | `/learn` |
| `"tips"` | `/tips` |
| `"mission"` | `/mission` |
| `"exploring"` | `/repo/[repoId]` |
| `"pick"` | `/repo/[repoId]/pick` |
| `"quiz"` | `/repo/[repoId]/quiz` |
| `"done"` | (results screen, not yet built) |

## Event types

From `docs/ui_flow.md` — events written to `merge-path-events` array in localStorage:

| Event type | Fired when |
|---|---|
| `file_open` | File viewer opens any file that is not README or CONTRIBUTING |
| `readme_open` | File viewer opens `README.md` |
| `contributing_open` | File viewer opens `CONTRIBUTING.md` |
| `issue_open` | Issue detail page mounts |
| `comments_seen` | Comments section is ≥50% visible for ≥1 second (IntersectionObserver), once per issue per session |
| `reproduce_tab` | "▶ Try reproducing" tab is clicked, once per issue per session |
| `issue_chosen` | Learner arrives at `/repo/[repoId]/pick` |

---

## Design constraints (from existing code)

- Framework: Next.js 16, React 19, TypeScript
- Styling: Tailwind v4 + CSS custom properties (no component library)
- Design tokens already in `globals.css`: `--background`, `--surface`, `--border`, `--text-primary`, `--text-secondary`, `--accent`, `--link`
- All new pages must match the existing dark GitHub-style visual pattern
- localStorage is the only persistence mechanism (no accounts, no API in v1)
- New client-side logic (localStorage, timers, observers) goes in `"use client"` components

---

## Notes

- The quiz at `/repo/[repoId]/quiz` already exists and is not touched in this build plan.
- The repo explorer tabs (files, issues, PRs, commits) are not changed — only the mission banner is added.
- `/repo/[repoId]/pick` is a placeholder for v1. Full issue-pick-with-justification is a later build.
- All 8 parts follow the same pattern: implement → build → write report doc.
