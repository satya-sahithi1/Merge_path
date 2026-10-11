// progress.ts — per-repo progress tracker
//
// Completed repo records persist in localStorage so the grid
// survives tab close. In-flight quiz state lives in sessionStorage
// and clears on refresh — as requested.

export type RepoStatus = "not_started" | "in_progress" | "complete";

export type RepoProgress = {
  status: RepoStatus;
  step?: "mission" | "exploring" | "pick" | "quiz" | "results";
  score?: number;
  maxScore?: number;
  correct?: number;
  wrong?: number;
  completedAt?: string;
};

export type ActiveSession = {
  repoId: string;
  correct: number;
  wrong: number;
  answers: Record<number, { selected: string[]; submitted: boolean }>;
};

const PROGRESS_KEY = "merge-path-progress";
const sessionKey = (repoId: string) => `merge-path-session-${repoId}`;

function canUse(store: "local" | "session"): boolean {
  try {
    return typeof (store === "local" ? localStorage : sessionStorage) !== "undefined";
  } catch {
    return false;
  }
}

function readProgress(): Record<string, RepoProgress> {
  if (!canUse("local")) return {};
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed !== null ? parsed : {};
  } catch {
    return {};
  }
}

function writeProgress(data: Record<string, RepoProgress>): void {
  if (!canUse("local")) return;
  try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(data)); } catch {}
}

export function getRepoProgress(repoId: string): RepoProgress {
  return readProgress()[repoId] ?? { status: "not_started" };
}

export function getAllProgress(): Record<string, RepoProgress> {
  return readProgress();
}

export function setRepoStep(repoId: string, step: RepoProgress["step"]): void {
  const all = readProgress();
  all[repoId] = { ...all[repoId], status: "in_progress", step };
  writeProgress(all);
}

export function completeRepo(
  repoId: string,
  result: { score: number; maxScore: number; correct: number; wrong: number }
): void {
  const all = readProgress();
  all[repoId] = { status: "complete", ...result, completedAt: new Date().toISOString() };
  writeProgress(all);
  clearSession(repoId);
}

export function allComplete(repoIds: readonly string[]): boolean {
  const all = readProgress();
  return repoIds.every((id) => all[id]?.status === "complete");
}

export function anyComplete(repoIds: readonly string[]): boolean {
  const all = readProgress();
  return repoIds.some((id) => all[id]?.status === "complete");
}

export function clearAllProgress(repoIds: readonly string[]): void {
  if (!canUse("local")) return;
  try { localStorage.removeItem(PROGRESS_KEY); } catch {}
  repoIds.forEach(clearSession);
}

export function getSession(repoId: string): ActiveSession | null {
  if (!canUse("session")) return null;
  try {
    const raw = sessionStorage.getItem(sessionKey(repoId));
    return raw ? (JSON.parse(raw) as ActiveSession) : null;
  } catch { return null; }
}

export function saveSession(session: ActiveSession): void {
  if (!canUse("session")) return;
  try { sessionStorage.setItem(sessionKey(session.repoId), JSON.stringify(session)); } catch {}
}

export function clearSession(repoId: string): void {
  if (!canUse("session")) return;
  try { sessionStorage.removeItem(sessionKey(repoId)); } catch {}
}

export function startSession(repoId: string): ActiveSession {
  const session: ActiveSession = { repoId, correct: 0, wrong: 0, answers: {} };
  saveSession(session);
  return session;
}
