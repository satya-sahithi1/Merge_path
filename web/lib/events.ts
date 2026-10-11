// Event logger — Part 5
//
// All learner activity is written to localStorage under the key
// `merge-path-events` as a JSON array of LogEvent objects.
//
// Rules:
//   - logEvent() is safe to call on the server (it no-ops when localStorage
//     is unavailable, so pages that accidentally call it during SSR won't crash).
//   - hasEvent() lets callers guard "fire once per session" events like
//     comments_seen and reproduce_tab before calling logEvent().
//   - clearEvents() is called by the landing page "start over" action.
//   - getEvents() is the read path for the quiz and results screens.

// ── Types ──────────────────────────────────────────────────────────────────

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
  /** filename, issue id, "readme", "contributing", "reproduce-tab", etc. */
  target: string;
  /** ISO 8601 */
  timestamp: string;
};

// ── Storage key ────────────────────────────────────────────────────────────

const STORAGE_KEY = "merge-path-events";

// ── Helpers ────────────────────────────────────────────────────────────────

/** Returns true when running in a browser context with localStorage available. */
function canUseStorage(): boolean {
  return typeof window !== "undefined" && typeof localStorage !== "undefined";
}

/** Reads the raw array from localStorage. Returns [] on any parse failure. */
function readLog(): LogEvent[] {
  if (!canUseStorage()) return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as LogEvent[]) : [];
  } catch {
    return [];
  }
}

/** Writes the array back to localStorage. Silently ignores errors (e.g. quota). */
function writeLog(events: LogEvent[]): void {
  if (!canUseStorage()) return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  } catch {
    // Storage quota exceeded or unavailable — non-fatal.
  }
}

// ── Public API ─────────────────────────────────────────────────────────────

/**
 * Appends a new event to the log.
 *
 * @example
 * logEvent({ repoId: "notes-app", type: "issue_open", target: "12" });
 */
export function logEvent(
  event: Omit<LogEvent, "timestamp"> & { timestamp?: string }
): void {
  const entry: LogEvent = {
    ...event,
    timestamp: event.timestamp ?? new Date().toISOString(),
  };
  const log = readLog();
  log.push(entry);
  writeLog(log);
}

/**
 * Returns all logged events for the current session.
 * Safe to call during SSR — returns [] when localStorage is unavailable.
 */
export function getEvents(): LogEvent[] {
  return readLog();
}

/**
 * Returns all events matching the given repoId and type.
 * Optionally filter further by target.
 *
 * @example
 * // Has the learner opened issue 12?
 * hasEvent("notes-app", "issue_open", "12");
 *
 * // Has the learner seen any comments?
 * hasEvent("notes-app", "comments_seen");
 */
export function hasEvent(
  repoId: string,
  type: EventType,
  target?: string
): boolean {
  const log = readLog();
  return log.some(
    (e) =>
      e.repoId === repoId &&
      e.type === type &&
      (target === undefined || e.target === target)
  );
}

/**
 * Returns events for a specific repoId, optionally filtered by type.
 * Used by the quiz to build session-aware questions.
 *
 * @example
 * getEventsFor("notes-app", "issue_open");
 */
export function getEventsFor(repoId: string, type?: EventType): LogEvent[] {
  const log = readLog();
  return log.filter(
    (e) => e.repoId === repoId && (type === undefined || e.type === type)
  );
}

/**
 * Clears all logged events.
 * Called by the landing page "start over" action alongside clearing
 * `merge-path-step`.
 */
export function clearEvents(): void {
  if (!canUseStorage()) return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // Non-fatal.
  }
}
