# Part 2 — /learn (Basics)
**Report:** part2-learn  
**Date:** 2026-10-10  
**Cross-ref:** ui_report01.md, Part 2 row  
**File created:** `web/app/learn/page.tsx`  
**Build:** ✓ passed (exit 0, no warnings)

---

## What was built

The `/learn` page — a 3-card sequential basics flow that sets `merge-path-step = "learn"` in localStorage on arrival.

---

## Card content

| Card | Text |
|---|---|
| 1 / 3 | Open source is public code anyone can read and propose changes to. A license tells you what you're allowed to do with it. |
| 2 / 3 | You don't edit the main repo. You copy it (fork), change your copy, and ask the maintainers to take your change — that request is called a Pull Request (PR). |
| 3 / 3 | The loop: find a repo → read the README and CONTRIBUTING → pick an issue → reproduce it → fix it → open a PR → handle review. |

---

## Navigation behaviour

| Element | Location | Action |
|---|---|---|
| Skip button | Top-right of nav bar | Goes directly to `/tips` from any card |
| Next → | Bottom-right of card | Advances to the next card |
| Got it → | Bottom-right on card 3 only | Goes to `/tips` |
| Progress dots | Above the card | Filled = past, bright = current, dim = upcoming |

The skip button has the same visual weight as the Next button (solid border, same font size) — not styled as a ghost or secondary button, as specified in the UI flow doc.

---

## Step persistence

`useEffect` runs on mount and writes `merge-path-step = "learn"` to localStorage. This means:
- If the user closes the tab on the learn page and returns to `/`, the landing page will show **Continue →** linking back to `/learn`.
- Step is not updated again as cards advance — the step marks arrival at the route, not card position.

---

## Implementation notes

- `CARDS` array is module-level — adding or editing cards requires no structural changes.
- `useRouter` from `next/navigation` handles the imperative navigation for both skip and got-it.
- No external dependencies added.

---

## Verified

```
Route (app)
├ ○ /learn    ← static, correct
```

Build output: exit 0, TypeScript clean, no ESLint warnings.
