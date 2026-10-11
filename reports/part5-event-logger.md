# Part 5 — Event Logger Utility
**Report:** part5-event-logger  
**Date:** 2026-10-11  
**Cross-ref:** ui_report01.md, Part 5 row  
**File created:** `web/lib/events.ts`  
**Build:** ✓ passed (exit 0, TypeScript clean, no warnings)

---

## What was built

A pure TypeScript utility module (`web/lib/events.ts`) that owns all reads and writes to the `merge-path-events` localStorage key. No component imports this and also touches localStorage directly — all event I/O goes through this module.

---

## Types

```typescript
export type EventType =
  | "file_open"
  | "issue_open"
  | "comments_seen"
  | "reproduce_tab"
  | "issue_chosen"
  | "readme_open"
  | "contributing_open";

export type LogEvent = {
  repoId: string;
  type: EventType;
  target: string;    // filename, issue id, "readme", etc.
  timestamp: string; // ISO 8601
};
```

Matches the spec in `docs/ui_flow.md` exactly.

---

## Public API

| Function | Signature | Purpose |
|---|---|---|
| `logEvent` | `(event: Omit<LogEvent, "timestamp"> & { timestamp?: string }) => void` | Appends one event to the log. Timestamp defaults to `new Date().toISOString()` if omitted. |
| `getEvents` | `() => LogEvent[]` | Returns the full log. Read path for quiz and results screens. |
| `hasEvent` | `(repoId, type, target?) => boolean` | Checks if a matching event already exists. Used to guard "fire once per session" events (`comments_seen`, `reproduce_tab`). |
| `getEventsFor` | `(repoId, type?) => LogEvent[]` | Returns all events for a repo, optionally filtered by type. Used by quiz for session-aware questions. |
| `clearEvents` | `() => void` | Removes `merge-path-events` from localStorage. Called by landing page "start over". |

---

## Design decisions

**SSR safety.** Every function starts with `canUseStorage()` which checks `typeof window !== "undefined"`. Functions return empty arrays or no-op silently on the server. Pages that call these in `useEffect` (client-only) won't hit this path, but it prevents crashes if a function is ever called outside a `useEffect`.

**Parse safety.** `readLog()` wraps `JSON.parse` in a try/catch and validates that the result is an array. If the stored value is malformed (e.g. manually edited, or from a different version), it returns `[]` rather than throwing.

**Write safety.** `writeLog()` also wraps in try/catch. localStorage quota errors (rare but possible on some mobile browsers) are swallowed as non-fatal — the session continues, just without the full log.

**`logEvent` timestamp override.** The `timestamp` field can be supplied by the caller. This is a test affordance — production callers omit it and get `new Date().toISOString()` automatically.

**`hasEvent` target is optional.** Passing no `target` checks for any event of that type for the repo. Passing a `target` checks for an exact match. This covers both:
- "Has the learner seen any issue comments?" → `hasEvent(repoId, "comments_seen")`  
- "Has the learner opened issue 12?" → `hasEvent(repoId, "issue_open", "12")`

---

## How downstream parts use this

| Part | Uses |
|---|---|
| Part 6 (mission banner) | `hasEvent(repoId, "issue_open")` — gates the "I've chosen an issue →" button |
| Part 7 (issue detail) | `logEvent(...)` for `issue_open`; `hasEvent` + `logEvent` for `comments_seen` (once per issue) |
| Part 7 (file viewer) | `logEvent(...)` for `readme_open`, `contributing_open`, `file_open` |
| Part 7 (reproduce tab) | `hasEvent` + `logEvent` for `reproduce_tab` (once per issue) |
| Quiz (future) | `getEventsFor(repoId, "issue_open")` to see which issues the learner opened; `hasEvent(repoId, "comments_seen")` to personalise comment-related questions |
| Landing "start over" | `clearEvents()` — already manually calls `localStorage.removeItem("merge-path-events")`, can be updated to use this function |

---

## Implementation notes

- No external dependencies added.
- Not a React hook — it's a plain utility module. Components call it from `useEffect` or event handlers.
- `LogEvent` and `EventType` are exported — downstream pages import them alongside the functions they need.
- The `STORAGE_KEY` constant is module-private. No external code should reference the raw key string.

---

## Verified

Build output: exit 0, TypeScript clean, no ESLint warnings.  
The module compiles and is tree-shaken cleanly — it doesn't add to any route bundle until imported.
