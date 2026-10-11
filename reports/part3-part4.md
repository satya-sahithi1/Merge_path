# Parts 3 & 4 — /tips and /mission
**Report:** part3-part4  
**Date:** 2026-10-11  
**Cross-ref:** ui_report01.md, Parts 3 and 4 rows  
**Files created:**
- `web/app/tips/page.tsx`
- `web/app/mission/page.tsx`

**Build:** ✓ passed (exit 0, TypeScript clean, no warnings — both parts in the same build)

---

## Part 3 — `/tips`

### What was built

The `/tips` page: all 5 tips shown on one screen (no pagination), with an "I'm ready →" button that routes to `/mission`. Sets `merge-path-step = "tips"` in localStorage on arrival.

### Tip content

| # | Headline |
|---|---|
| 1 | README first. Code later. |
| 2 | You don't need to understand the whole codebase. |
| 3 | "good first issue" doesn't mean easy. |
| 4 | Read the comments before you start. |
| 5 | Reproduce the bug before you write any fix. |

### Layout

Five bordered cards stacked vertically. Each card:
- Numbered blue badge (`#1f3a5f` background, `#388bfd` border, `var(--link)` text) top-left of the row.
- Headline in `var(--text-primary)`, semibold.
- Body in `var(--text-secondary)`, 1.7 line height.

Single "I'm ready →" green button (`var(--accent)`) at the bottom-right of the screen.

No skip button — all content is inline and the screen is a single scroll. Nothing to skip past.

### Navigation

| Element | Action |
|---|---|
| **I'm ready →** (bottom-right) | `router.push("/mission")` |

### Step persistence

`useEffect` on mount writes `merge-path-step = "tips"` to localStorage. Landing page will route here when the user resumes a session left at this step.

### Implementation notes

- `TIPS` is a module-level `const` array typed with `as const`. No `useState` needed — no per-item interaction.
- `"use client"` required only for `useEffect` and `useRouter`.
- No external dependencies added.
- Matches existing design system: `var(--surface)` cards, `var(--border)`, `var(--accent)` CTA.

### Verified

```
Route (app)
└ ○ /tips    ← static, correct
```

---

## Part 4 — `/mission`

### What was built

The `/mission` page: a single centred card with the mission brief, a soft time hint, and a "Start exploring →" button that routes to `/repo/notes-app`. Sets `merge-path-step = "mission"` in localStorage on arrival.

### Card content

| Section | Content |
|---|---|
| Label | `YOUR MISSION` (small-caps, `var(--text-secondary)`) |
| Body | "You've just found this repo. Find one issue you could realistically take on. One you could start on without asking for clarification first." |
| Hint | "You have about 3 minutes. There's no hard lock — the point is to go in with a goal, not to click around with no direction." |
| CTA | **Start exploring →** → `/repo/notes-app` |
| Back link | "Want to re-read the tips? Go back" → `/tips` |

### Navigation

| Element | Action |
|---|---|
| **Start exploring →** (card bottom-right) | `router.push("/repo/notes-app")` (hardcoded for v1) |
| **Go back** (below card) | `<a href="/tips">` |

Note: destination `/repo/notes-app` matches the spec exactly ("hardcoded for v1; randomised when more repos exist"). The step written is `"mission"` — the repo explorer (`/repo/[repoId]`) will overwrite this with `"exploring"` on arrival (Part 6).

### Step persistence

`useEffect` on mount writes `merge-path-step = "mission"`. Landing page will resume here when the user returns at this step.

### Implementation notes

- `"use client"` for `useEffect` and `useRouter` only.
- Card is centred with `flex items-center justify-center` on `main` — gives the mission card the right focus and weight.
- Body copy uses `&apos;` escapes for apostrophes to satisfy React's JSX escaping rule (no lint warnings).
- No external dependencies added.

### Verified

```
Route (app)
├ ○ /mission    ← static, correct
└ ○ /tips
```

---

## Full route map after Parts 3 & 4

```
/              ✓  Landing (resume logic)
/learn         ✓  Basics — 3-card flow
/tips          ✓  5 tips, single screen       ← Part 3
/mission       ✓  Mission card                ← Part 4
/repo/[repoId]     Repo explorer (mission banner pending — Part 6)
/repo/[repoId]/issues/[issueId]   Issue detail (event hooks pending — Part 7)
/repo/[repoId]/file               File viewer (event hooks pending — Part 7)
/repo/[repoId]/quiz               Quiz (unchanged)
/repo/[repoId]/prs/[prId]         PR detail (unchanged)
/repo/[repoId]/pick               Placeholder (Part 8)
```

## Parts remaining

| Part | What gets built |
|---|---|
| Part 5 | Event logger utility (`web/lib/events.ts`) |
| Part 6 | Mission banner on repo explorer (timer, gated button) |
| Part 7 | Event logging hooks on issue detail and file viewer |
| Part 8 | `/repo/[repoId]/pick` placeholder |
