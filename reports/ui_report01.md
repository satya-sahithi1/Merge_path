# UI Build Plan — Merge Path
**Report:** ui_report01  
**Date:** 2026-10-10  
**Source:** docs/ui_flow.md  
**Status:** Plan only — no implementation yet

---

## What exists

The Next.js 16 app in `web/` already has:

| File / Route | Status |
|---|---|
| `web/app/page.tsx` | Exists — but skips straight to `/repo/notes-app`, no resume logic |
| `/repo/[repoId]/page.tsx` | Exists — files, issues, PRs, commits tabs |
| `/repo/[repoId]/issues/[issueId]/page.tsx` | Exists — reproduce tab included |
| `/repo/[repoId]/file/page.tsx` | Exists |
| `/repo/[repoId]/quiz/page.tsx` | Exists |
| `/repo/[repoId]/prs/[prId]/page.tsx` | Exists |
| `web/lib/types.ts` | Exists — full type definitions |
| `web/lib/loader.ts` | Exists — JSON data loader |
| `web/app/globals.css` | Exists — dark GitHub-style design tokens |

## What is missing

Routes and logic defined in `docs/ui_flow.md` that are not yet built:

| Missing | Notes |
|---|---|
| `/learn` | 3-card sequential basics flow with skip |
| `/tips` | 5 tips on one screen |
| `/mission` | Mission card, sets step in localStorage |
| `/repo/[repoId]/pick` | Placeholder for issue pick + justification |
| Landing resume logic | Button should read "Continue →" and link to correct route if `merge-path-step` is set |
| Event logger | `merge-path-events` in localStorage — `file_open`, `issue_open`, `comments_seen`, `reproduce_tab`, `readme_open`, `contributing_open` |
| Step persistence | `merge-path-step` written on arrival at each route |
| Mission banner | Pinned timer + "I've chosen an issue →" button on repo explorer |
| Issue detail event hooks | Log `issue_open`, `comments_seen` via IntersectionObserver |
| File viewer event hooks | Log `readme_open`, `contributing_open`, or `file_open` based on filename |
| Reproduce tab event hook | Log `reproduce_tab` on first click per issue per session |

---

## Build parts — cross-verification table

Each part will be implemented fully, the app built to verify no errors, and a report doc written before moving to the next part.

| Part | What gets built | Route(s) affected | Report doc |
|---|---|---|---|
| **Part 1** | Landing page — resume logic, correct button label and link based on `merge-path-step` | `/` | `reports/part1-landing.md` |
| **Part 2** | `/learn` — 3-card sequential flow, skip button ("I know what a fork is, skip this →"), "Got it →" to `/tips` | `/learn` | `reports/part2-learn.md` |
| **Part 3** | `/tips` — 5 tips on one screen, "I'm ready →" to `/mission` | `/tips` | `reports/part3-tips.md` |
| **Part 4** | `/mission` — mission card, "Start exploring →" to `/repo/notes-app` | `/mission` | `reports/part4-mission.md` |
| **Part 5** | Event logger utility + step persistence — `merge-path-events` and `merge-path-step` in localStorage, shared hooks/utils | `web/lib/events.ts` (new) | `reports/part5-event-logger.md` |
| **Part 6** | Mission banner on repo explorer — pinned, count-up timer, amber at 8:00, "I've chosen an issue →" gated on event log | `/repo/[repoId]` | `reports/part6-mission-banner.md` |
| **Part 7** | Event logging hooks on issue detail and file viewer — `issue_open`, `comments_seen` (IntersectionObserver), `reproduce_tab`, `readme_open`, `contributing_open`, `file_open` | `/repo/[repoId]/issues/[issueId]`, `/repo/[repoId]/file` | `reports/part7-event-logging.md` |
| **Part 8** | `/repo/[repoId]/pick` placeholder — "You've picked an issue." message, back link | `/repo/[repoId]/pick` | `reports/part8-pick.md` |

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
