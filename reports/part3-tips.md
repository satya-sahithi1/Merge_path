# Part 3 — /tips
**Report:** part3-tips  
**Date:** 2026-10-11  
**Cross-ref:** ui_report01.md, Part 3 row  
**File created:** `web/app/tips/page.tsx`  
**Build:** ✓ passed (exit 0, no warnings, TypeScript clean)

---

## What was built

The `/tips` page — all 5 tips on a single screen, with an "I'm ready →" button that routes to `/mission`. Sets `merge-path-step = "tips"` in localStorage on arrival.

---

## Tip content

| # | Headline | Body summary |
|---|---|---|
| 1 | README first. Code later. | Read it before any source file — tells you what the project is and how to set up. |
| 2 | You don't need to understand the whole codebase. | You need to understand enough for the one thing you picked. Most first PRs change 2–3 files. |
| 3 | "good first issue" doesn't mean easy. | Relative to the project. Some touch complex modules. Read before committing. |
| 4 | Read the comments before you start. | Someone may have claimed it, found a blocker, or it may already be fixed. |
| 5 | Reproduce the bug before you write any fix. | If you can't reproduce it, you don't know what's broken. A merged PR may have already fixed it. |

---

## Layout

All 5 tips shown on one screen. No pagination. Each tip is a bordered card (`var(--surface)` background, `var(--border)`) with:
- A numbered badge (blue accent, `#1f3a5f` background, `#388bfd` border) — top-left of the card row.
- Headline in `var(--text-primary)`.
- Body in `var(--text-secondary)`.

---

## Navigation

| Element | Action |
|---|---|
| **I'm ready →** (bottom-right) | `router.push("/mission")` — goes to Part 4 |

No skip button needed on this page (there's nothing to skip past — tips are all inline, single scroll).

---

## Step persistence

`useEffect` on mount writes `merge-path-step = "tips"` to localStorage. This means:
- The landing page will show "Continue →" linking to `/tips` if the user left at this step.
- Once the user clicks "I'm ready →" and lands on `/mission`, the step advances to `"mission"`.

---

## Implementation notes

- `TIPS` is a module-level `const` array typed with `as const` — no dynamic state needed since there's no pagination.
- `"use client"` required only for `useEffect` (localStorage write) and `useRouter`.
- No external dependencies added.
- Visual pattern matches `/learn`: same nav bar, same `var(--surface)` card style, same green CTA button.

---

## Verified

```
Route (app)
└ ○ /tips    ← static, correct
```

Build output: exit 0, TypeScript clean, no ESLint warnings.
