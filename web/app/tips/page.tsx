"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// ── Tips data ──────────────────────────────────────────────────────────────

const TIPS = [
  {
    number: 1,
    headline: "README first. Code later.",
    body: "Before you open a single source file, read the README. It tells you what the project is, how to set it up, and whether it's even the kind of thing you want to contribute to.",
  },
  {
    number: 2,
    headline: "You don't need to understand the whole codebase.",
    body: "You need to understand enough to fix the one thing you picked. Most first-time contributors change two or three files. That's normal and expected.",
  },
  {
    number: 3,
    headline: '"good first issue" doesn\'t mean easy.',
    body: 'It means the maintainers think it\'s a reasonable entry point. "Good" is relative to the project. Some good first issues touch complex modules. Read the issue before you commit to it.',
  },
  {
    number: 4,
    headline: "Read the comments before you start.",
    body: "Someone may have already claimed the issue, found a blocker, or figured out it's actually not a bug. The comments are part of the issue. Skipping them wastes your time and the maintainer's.",
  },
  {
    number: 5,
    headline: "Reproduce the bug before you write any fix.",
    body: "If you can't reproduce it, you don't actually know what's broken. The fix you write might not help. And sometimes the bug was already fixed by a PR you missed.",
  },
] as const;

// ── Page ───────────────────────────────────────────────────────────────────

export default function TipsPage() {
  const router = useRouter();

  useEffect(() => {
    localStorage.setItem("merge-path-step", "tips");
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Top nav */}
      <nav
        className="border-b px-6 py-3 flex items-center"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Merge Path
        </span>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center px-4 py-12">
        <div className="max-w-xl w-full space-y-8">
          {/* Title */}
          <div className="space-y-2">
            <h1 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
              A few things before you go in
            </h1>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              These habits will save you time in the next 15 minutes and every contribution after.
            </p>
          </div>

          {/* Tips list */}
          <div className="space-y-3">
            {TIPS.map((tip) => (
              <div
                key={tip.number}
                className="rounded-lg border p-5 flex gap-4"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                {/* Number badge */}
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{
                    background: "#1f3a5f",
                    color: "var(--link)",
                    border: "1px solid #388bfd",
                  }}
                >
                  {tip.number}
                </span>

                {/* Text */}
                <div className="space-y-1.5">
                  <p className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                    {tip.headline}
                  </p>
                  <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>
                    {tip.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex justify-end pt-2">
            <button
              onClick={() => router.push("/repos")}
              className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
              style={{
                background: "var(--accent)",
                color: "#fff",
                cursor: "pointer",
                border: "none",
              }}
            >
              I&apos;m ready →
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
