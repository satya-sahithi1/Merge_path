# Part 1 — Landing Page
**Report:** part1-landing  
**Date:** 2026-10-10  
**Cross-ref:** ui_report01.md, Part 1 row  
**File changed:** `web/app/page.tsx`  
**Build:** ✓ passed (exit 0, no warnings)

---

## What was built

The landing page (`/`) was rewritten as a `"use client"` component with resume logic driven by `merge-path-step` in localStorage.

### Behaviour

| State | Button label | Button destination |
|---|---|---|
| Loading (pre-hydration) | Loading… | — (not a link, placeholder span) |
| Fresh (no step in localStorage) | Start exploring → | `/learn` |
| Resume (step found) | Continue → | Route matching the saved step |

### Step → route mapping

| `merge-path-step` value | Resume destination |
|---|---|
| `learn` | `/learn` |
| `tips` | `/tips` |
| `mission` | `/mission` |
| `exploring` | `/repo/notes-app` |
| `pick` | `/repo/notes-app/pick` |
| `quiz` | `/repo/notes-app/quiz` |
| `done` | `/repo/notes-app/quiz` (results screen not yet built — fallback) |

### Start over

When a saved step is present, a "start over" link appears below the button. Clicking it removes both `merge-path-step` and `merge-path-events` from localStorage and immediately transitions the button back to "Start exploring →" without a page reload.

---

## Implementation notes

- `useEffect` reads localStorage only after hydration, so the server render and client render match on the loading placeholder — no hydration mismatch.
- `STEP_ROUTES` is a plain object at module level. Adding a new step only requires adding one entry there.
- The "start over" button clears both localStorage keys so the event log doesn't carry over into a new session.
- No external dependencies added. Uses only `react`, `next/link`.

---

## What is not in scope for this part

- Writing `merge-path-step` to localStorage. That happens on arrival at each downstream route, built in Parts 2–8.
- The event logger itself. Built in Part 5.

---

## Verified

```
Route (app)
┌ ○ /                ← static, correct
```

Build output: exit 0, TypeScript clean, no ESLint warnings.
