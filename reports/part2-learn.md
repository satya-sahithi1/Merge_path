# Part 2 — /learn (Basics)
**Report:** part2-learn  
**Date:** 2026-10-10  
**Cross-ref:** ui_report01.md, Part 2 row  
**File:** `web/app/learn/page.tsx`  
**Build:** ✓ passed (exit 0, no warnings)

---

## What was built

The `/learn` page — a 3-card sequential basics flow that sets `merge-path-step = "learn"` in localStorage on arrival.

---

## Card content

| Card | Headline | Body | Small line | Visual |
|---|---|---|---|---|
| 1 / 3 | Public code isn't always open source. | Open source means the code is public and its license lets you use, change and share it. A public repo with no license is a different story: by default, you don't have permission to reuse it. | Always check for a LICENSE file. | Two repo cards side by side: one with a green MIT License badge, one with a red ⚠ No license warning |
| 2 / 3 | You can't push to someone else's project. So how does anyone contribute? | You fork it (make your own copy), change your copy, and open a pull request, which asks the maintainers to take your change. It's a request, not a gift: a person has to review it, and they might say no or ask for changes. | — | Three boxes in a row: Their repo → Your fork (highlighted green) → Pull request |
| 3 / 3 | The hard part isn't the code. | It's choosing: which repo is alive, which issue is still real, whether someone is already on it. Beginners often get stuck there, before they write a line. That's what you're about to practice. | — | Five-step loop: Pick → Reproduce → Fix → PR → Review, with Pick and Reproduce highlighted in blue |

---

## Navigation behaviour

| Element | Location | Action |
|---|---|---|
| Skip button | Top-right of nav bar | Goes directly to `/tips` from any card |
| Next | Bottom-right of card | Advances to the next card |
| Show me the repo | Bottom-right on card 3 only | Goes to `/tips` |
| Progress dots | Above the card | Filled green = past, white = current, dim = upcoming |

The skip button has the same visual weight as the Next button (solid border, same font size) — not a ghost or secondary button.

---

## Visuals (inline, no images)

All three visuals are rendered as pure JSX/CSS inside the card — no image files, no SVG imports.

- **LicenseVisual** — two bordered repo cards side by side. Left card: green border, MIT License badge. Right card: red border, ⚠ No license badge.
- **ForkFlowVisual** — three small boxes connected by arrows. "Your fork" box has a green accent border to draw the eye.
- **LoopVisual** — five pill labels (Pick, Reproduce, Fix, PR, Review) separated by arrows. Pick and Reproduce rendered in blue (`--link` colour) to show where in the loop the learner currently is.

---

## Step persistence

`useEffect` on mount writes `merge-path-step = "learn"` to localStorage. Step is not re-written as cards advance — it marks arrival at the route, not card position.

---

## Implementation notes

- `CARDS` is a `const` array typed with `as const` so `visual` is a literal union — `Visual` component switches on it without a fallback risk.
- Each visual is a separate named function component (`LicenseVisual`, `ForkFlowVisual`, `LoopVisual`) for readability.
- `card.smallLine` is typed as `string | null` — rendered only when truthy, avoiding empty space on cards 2 and 3.
- No external dependencies added.

---

## Verified

```
Route (app)
├ ○ /learn    ← static, correct
```

Build output: exit 0, TypeScript clean, no ESLint warnings.
