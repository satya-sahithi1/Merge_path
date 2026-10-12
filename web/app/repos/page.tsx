"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { getAllProgress, anyComplete, clearAllProgress } from "@/lib/progress";
import type { RepoProgress } from "@/lib/progress";
import { REPO_IDS } from "@/lib/loader";
import { fadeUp, staggerContainer, fastTransition, defaultTransition } from "@/lib/motion";

const REPO_BRIEFS: Record<string, { name: string; brief: string; language: string }> = {
  "notes-app": {
    name: "notes-app",
    brief: "A minimal command-line notes manager written in Python.",
    language: "Python",
  },
  "weatherly": {
    name: "weatherly",
    brief: "A small Python module and CLI for parsing weather API responses.",
    language: "Python",
  },
  "gradewise": {
    name: "gradewise",
    brief: "a CGPA and semester calculator.",
    language: "Python",
  },
  "mdlite": {
    name: "mdlite",
    brief: "A small Python library that converts Markdown to HTML.",
    language: "Python",
  },
};

type GridState = "loading" | "ready";

export default function ReposPage() {
  const router = useRouter();
  const [gridState, setGridState] = useState<GridState>("loading");
  const [progress, setProgress] = useState<Record<string, RepoProgress>>({});
  const [confirmClear, setConfirmClear] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    setProgress(getAllProgress());
    setGridState("ready");
  }, []);

  const liveRepoIds = REPO_IDS as readonly string[];
  const hasAnyComplete = gridState === "ready" && anyComplete(liveRepoIds);

  function handleStartOver() {
    if (!confirmClear) { setConfirmClear(true); return; }
    clearAllProgress(liveRepoIds);
    localStorage.removeItem("merge-path-step");
    localStorage.removeItem("merge-path-events");
    router.push("/");
  }

  function repoHref(repoId: string): string {
    const p = progress[repoId];
    if (!p || p.status === "not_started") return `/mission?repo=${repoId}`;
    if (p.status === "in_progress") {
      const stepRoutes: Record<string, string> = {
        mission: `/mission?repo=${repoId}`,
        exploring: `/repo/${repoId}`,
        pick: `/repo/${repoId}/pick`,
        quiz: `/repo/${repoId}/quiz`,
        results: `/repo/${repoId}/results`,
      };
      return stepRoutes[p.step ?? "exploring"] ?? `/repo/${repoId}`;
    }
    return `/repo/${repoId}/results`;
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Nav */}
      <nav
        className="border-b px-6 py-3 flex items-center justify-between"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
          Merge Path
        </span>
        <div className="flex items-center gap-4">
          {hasAnyComplete && (
            <motion.button
              onClick={() => router.push("/summary")}
              className="text-sm px-4 py-1.5 rounded-md font-medium"
              style={{ background: "var(--accent)", color: "#fff", border: "none", cursor: "pointer" }}
              whileHover={shouldReduce ? {} : { scale: 1.03 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={fastTransition}
            >
              Finish and see summary →
            </motion.button>
          )}
          {gridState === "ready" && (
            confirmClear ? (
              <span className="flex items-center gap-2 text-sm">
                <span style={{ color: "var(--text-secondary)" }}>Are you sure?</span>
                <button onClick={handleStartOver} style={{ color: "#f85149", background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                  Yes, clear everything
                </button>
                <button onClick={() => setConfirmClear(false)} style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0, textDecoration: "underline" }}>
                  Cancel
                </button>
              </span>
            ) : (
              <button onClick={handleStartOver} style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0, fontSize: "0.875rem", textDecoration: "underline" }}>
                Start over
              </button>
            )
          )}
        </div>
      </nav>

      {/* Main */}
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-10 space-y-8">
        {/* Section header */}
        <motion.div
          className="space-y-1"
          variants={shouldReduce ? {} : fadeUp}
          initial="hidden"
          animate="visible"
        >
          <h1 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            Pick a repo
          </h1>
          <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Explore each one. Find an issue worth taking on. Take the quiz when you&apos;re done.
          </p>
        </motion.div>

        {gridState === "loading" ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-lg border p-6 h-40 animate-pulse"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            variants={shouldReduce ? {} : staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {liveRepoIds.map((repoId, index) => (
              <RepoCard
                key={repoId}
                repoId={repoId}
                brief={REPO_BRIEFS[repoId]}
                progress={progress[repoId] ?? { status: "not_started" }}
                href={repoHref(repoId)}
                index={index}
              />
            ))}
          </motion.div>
        )}
      </main>
    </div>
  );
}

function RepoCard({
  brief, progress, href,
}: {
  repoId: string;
  brief: { name: string; brief: string; language: string };
  progress: RepoProgress;
  href: string;
  index: number;
}) {
  const { status } = progress;
  const shouldReduce = useReducedMotion();

  const badge =
    status === "complete"
      ? { label: `✓  ${progress.score}/${progress.maxScore}`, bg: "#1a3a1a", color: "#3fb950", border: "#238636" }
      : status === "in_progress"
      ? { label: "In progress", bg: "#1f3a5f", color: "#58a6ff", border: "#388bfd" }
      : null;

  const borderColor = status === "complete" ? "#238636" : status === "in_progress" ? "#388bfd" : "var(--border)";
  const hoverBorderColor = status === "complete" ? "#2ea043" : status === "in_progress" ? "#58a6ff" : "#6e7681";

  return (
    <motion.a
      href={href}
      variants={shouldReduce ? {} : fadeUp}
      whileHover={shouldReduce ? {} : {
        y: -3,
        borderColor: hoverBorderColor,
        boxShadow: "0 8px 24px rgba(0,0,0,0.35)",
        transition: fastTransition,
      }}
      whileTap={shouldReduce ? {} : { scale: 0.99, transition: { duration: 0.1 } }}
      className="rounded-lg border p-6 flex flex-col gap-4 block"
      style={{
        borderColor,
        background: "var(--surface)",
        textDecoration: "none",
        transition: "border-color 0.2s ease",
      }}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="space-y-0.5">
          <p className="text-sm font-semibold" style={{ color: "var(--link)" }}>{brief.name}</p>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{brief.language}</p>
        </div>
        {badge && (
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap"
            style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}
          >
            {badge.label}
          </span>
        )}
      </div>

      <p className="text-sm flex-1" style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>
        {brief.brief}
      </p>

      {status === "complete" && progress.score !== undefined && progress.maxScore !== undefined && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>{progress.correct} correct · {progress.wrong} wrong</span>
            <span>{Math.round((progress.score / progress.maxScore) * 100)}%</span>
          </div>
          <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--background)" }}>
            <motion.div
              className="h-1.5 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(progress.score / progress.maxScore) * 100}%` }}
              transition={{ ...defaultTransition, delay: 0.15 }}
              style={{
                background: progress.score / progress.maxScore >= 0.7 ? "#3fb950" : progress.score / progress.maxScore >= 0.5 ? "#d29922" : "#f85149",
              }}
            />
          </div>
        </div>
      )}

      <p className="text-xs font-medium" style={{ color: "var(--link)" }}>
        {status === "complete" ? "View results →" : status === "in_progress" ? "Continue →" : "Start →"}
      </p>
    </motion.a>
  );
}
