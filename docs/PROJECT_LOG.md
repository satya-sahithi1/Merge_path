# Project Log

After finishing any task, append an entry here. Never edit or delete old entries.

---

### 2026-10-10: Part 1 — Landing page resume logic

**Changed:**
- `web/app/page.tsx` — rewritten as `"use client"`. Reads `merge-path-step` from localStorage after hydration. Three states: loading (pre-hydration placeholder), fresh (Start exploring →), resume (Continue → with mapped route). Added "start over" button that clears `merge-path-step` and `merge-path-events`.

**Added:** nothing

**Issues hit:** none

**Decisions:** Used a loading placeholder span during hydration to avoid SSR/client mismatch. Reason: stated — prevent hydration error.

**Checks:** `next build` — exit 0, `○ /` static route confirmed.

**Next:** `/learn` page (Part 2)

---

### 2026-10-10: Part 2 — /learn basics flow

**Changed:**
- `web/app/learn/page.tsx` — created. Three-card sequential flow. Skip button ("I know what a fork is, skip this →") same visual weight as Next. Progress dots. Three inline JSX visuals: LicenseVisual, ForkFlowVisual, LoopVisual. Sets `merge-path-step = "learn"` on mount.

**Added:** nothing

**Issues hit:** none

**Decisions:** Sequential cards (not all-at-once) per spec. Skip button styled as solid border, not ghost, so it's as easy to find as Next. Reason: stated in ui_flow.md.

**Checks:** `next build` — exit 0, `○ /learn` confirmed.

**Next:** `/tips` (Part 3)

---

### 2026-10-11: Part 3 — /tips page

**Changed:**
- `web/app/tips/page.tsx` — created. Five tips on one screen, no pagination. Numbered blue badge per tip. "I'm ready →" routes to `/repos`. Sets `merge-path-step = "tips"` on mount.

**Added:** nothing

**Issues hit:** none

**Decisions:** No skip button — all content is inline, nothing to skip past. Reason: (not stated)

**Checks:** `next build` — exit 0, `○ /tips` confirmed.

**Next:** `/mission` (Part 4)

---

### 2026-10-11: Part 4 — /mission page

**Changed:**
- `web/app/mission/page.tsx` — created. Single centred card with mission body, soft 3-minute hint, "Start exploring →" to `/repo/notes-app`, back link to `/tips`. Sets `merge-path-step = "mission"` on mount.

**Added:** nothing

**Issues hit:** none

**Decisions:** Hardcoded destination `/repo/notes-app` for v1. Reason: stated in ui_flow.md ("randomised when more repos exist"). Later updated to read `?repo=` param — see 2026-10-11 grid entry.

**Checks:** `next build` — exit 0, `○ /mission` confirmed.

**Next:** Event logger utility (Part 5)

---

### 2026-10-11: Part 5 — Event logger utility

**Changed:**
- `web/lib/events.ts` — created. Exports `LogEvent`, `EventType`, `logEvent`, `getEvents`, `hasEvent`, `getEventsFor`, `clearEvents`. SSR-safe (`typeof window` guard), parse-safe (try/catch + array check), write-safe (quota errors swallowed).

**Added:** nothing

**Issues hit:** none

**Decisions:** `timestamp` optional in `logEvent` — defaults to `new Date().toISOString()`, overridable for tests. Reason: test affordance.

**Checks:** `next build` — exit 0, TypeScript clean.

**Next:** Mission banner (Part 6), event hooks (Part 7), `/pick` placeholder (Part 8)

---

### 2026-10-11: Quiz scoring fix — multi-select partial credit

**Changed:**
- `web/app/repo/[repoId]/quiz/page.tsx` — `isCorrect()` multi rule changed. Was: must select every correct option and nothing else. Now: at least one correct option selected, no wrong options selected.

**Added:** nothing

**Issues hit:** none

**Decisions:** Award multi questions if at least one correct option chosen with no wrong picks. Reason: stated by user.

**Checks:** `next build` — exit 0.

**Next:** (none for this change)

---

### 2026-10-11: notes-app files.json — add notes_fixed.py to file tree

**Changed:**
- `web/lib/data/notes-app/files.json` — added `notes_fixed.py` as a file node inside the `src/` dir entry.
- `practice-repos/notes-app/data/files.json` — synced to match.

**Added:** nothing

**Issues hit:** `notes_fixed.py` existed in `src/` and was imported by the visible test file, but was not listed as a file node — learner couldn't read it in the explorer. Fix: added it as a sibling to `notes.py` in `src/` children.

**Decisions:** Include `notes_fixed.py` in the visible file tree. Reason: test file imports it; learner should be able to inspect it.

**Checks:** JSON validated with `python3`. `next build` — exit 0.

**Next:** (none for this change)

---

### 2026-10-11: weatherly — initial build

**Changed:**
- `practice-repos/weatherly/` — created. `src/weather.py` (buggy v1.0.0), `src/weather_fixed.py`, `tests/test_weather.py`, `tests/__init__.py`, `requirements.txt`, `README.md`, `LICENSE`, `data/meta.json`, `data/issues.json`, `data/prs.json`, `data/commits.json`, `data/files.json`.
- `web/lib/data/weatherly/` — created, all data files copied in.
- `web/lib/loader.ts` — `REPO_IDS` updated to `["notes-app", "weatherly"]`.

**Added:** nothing

**Issues hit:** none at initial build. Full audit in next entry.

**Decisions:** Built weatherly as repo 1 (verdict: leave) per `docs/repo_ideas.md` build order. Reason: stated.

**Checks:** pytest via notes-app venv — 7/7 passed. `next build` — exit 0.

**Next:** Audit and fix

---

### 2026-10-11: weatherly — audit fixes (answer leaks, timeline, code/story mismatches)

**Changed:**
- `src/weather.py` — stripped all `# BUG:` comments, answer-leaking docstring lines, "API recently changed" copy.
- `src/cli.py` — created. 10-line CLI entry point.
- `src/weather_fixed.py` → moved to `scenarios/fixes/weather_fixed.py`. Updated to fix both issue #2 (missing `main` key) and issue #7 (empty `weather` list).
- `tests/test_weather.py` — replaced with 4 HEAD-only tests. No fixed-file imports, no `test_buggy_*`/`test_fixed_*` names.
- `scenarios/test_scenarios.py` — created. Full buggy/fixed regression tests, hidden from learner.
- `data/issues.json` — renumbered to #2, #5, #7, #20, #22. Dates corrected. `kind` field added. Lesson labels corrected (`fix_pending_unmerged`, `health_signal`). Answer-leaking comment on #2 removed. `reproduction: null` for non-bug issues.
- `data/prs.json` — added PR #13 and PR #14. Now 4 open PRs matching `meta.json`.
- `data/commits.json` — all messages rewritten to only describe code present in `weather.py`.
- `data/meta.json` — added `asOf`, `verdict: "leave"`. `avg_pr_response_days` → `null`. `health` field removed.
- `README.md` — removed inline MIT claim, replaced with "See LICENSE."
- `data/files.json` — regenerated. `weather_fixed.py` not in tree. `cli.py` included.
- `web/lib/data/weatherly/` — all files resynced.

**Added:** nothing

**Issues hit:**
- `weather_fixed.py` visible in file tree — moved to hidden `scenarios/fixes/`.
- Comment on #2 named PR #19 — removed.
- Issue #3 said "over a year" but last commit was only 4 months prior — renumbered to #22, redated to 2026-07-20.
- `meta.json` said 4 open PRs but data had 2 — added #13 and #14.
- Original issue #7 duplicated the story of #2 — replaced with a distinct IndexError on `data["weather"][0]`.
- Commits described features not in `weather.py` — renamed.
- `avg_pr_response_days: 0` misleading — set to `null`.
- Non-bug issues had fake reproduce steps — set `reproduction: null`, added `kind` field.

**Decisions:**
- `weather_fixed.py` covers both open bugs. Reason: both exist in HEAD.
- `health` removed from display data — it is the answer the learner works out. Reason: stated.
- Buggy output changed from hand-typed text to Python traceback format. Reason: stated — never type error output by hand.

**Checks:** pytest — 9/9 passed. JSON validated on all 5 files. `next build` — exit 0.

**Next:** Write quiz.json for weatherly

---

### 2026-10-11: weatherly — quiz.json (8 questions)

**Changed:**
- `practice-repos/weatherly/data/quiz.json` — created. 8 questions.
- `web/lib/data/weatherly/quiz.json` — synced.

**Added:** nothing

**Issues hit:** none

**Decisions:** 8 questions matching notes-app count. Coverage: repo_health (Q1, Q2, Q6), issue_judgment (Q3, Q4, Q5), contributing (Q7), review (Q8). Q2 multi-select. Q3 correct answer is "none of these" (verdict: leave). Correct answers spread across A–E. Reason: question content and structure specified by user.

**Checks:** JSON validated. Quiz structure verified: 8 questions, 7 single + 1 multi, correct option counts confirmed. `next build` — exit 0.

**Next:** Repo grid UI

---

### 2026-10-11: UI — repo grid, progress utility, updated landing and mission

**Changed:**
- `web/lib/progress.ts` — created. Per-repo progress tracker. `localStorage` for completed records (survives tab close). `sessionStorage` for in-flight quiz state (clears on refresh). Exports: `getRepoProgress`, `getAllProgress`, `setRepoStep`, `completeRepo`, `allComplete`, `anyComplete`, `clearAllProgress`, `getSession`, `saveSession`, `clearSession`, `startSession`.
- `web/app/repos/page.tsx` — created. Repo grid. 2 live cards. Card states: not_started, in_progress (Continue →, blue badge), complete (View results →, green badge + score bar). Nav: "Finish and see summary →" once ≥1 complete. "Start over" with two-step confirm.
- `web/app/page.tsx` — updated. All repo-level steps now route to `/repos`. "Start over" also calls `clearAllProgress`.
- `web/app/mission/page.tsx` — updated. Reads `?repo=` param. Shows repo badge. Routes `setRepoStep` on start.
- `web/app/tips/page.tsx` — "I'm ready →" destination changed from `/mission` to `/repos`.

**Added:** nothing

**Issues hit:** `useSearchParams` in App Router requires `Suspense` boundary — wrapped `MissionContent` in `<Suspense>`. Reason: Next.js App Router requirement.

**Decisions:**
- Grid at `/repos`, splash stays at `/`. Reason: cleaner separation.
- `REPO_BRIEFS` inline in grid page, not loaded from `meta.json`. Reason: (not stated)
- Tips routes directly to `/repos`; mission is now per-repo, entered from grid card. Reason: multi-repo flow redesign.

**Checks:** `next build` — exit 0, TypeScript clean, `○ /repos` static route confirmed.

**Next:** Per-repo results page (`/repo/[repoId]/results`), final summary (`/summary`), mission banner (Part 6), event hooks (Part 7), `/pick` placeholder (Part 8)
