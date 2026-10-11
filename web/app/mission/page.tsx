"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

// ── Page ───────────────────────────────────────────────────────────────────

export default function MissionPage() {
  const router = useRouter();

  useEffect(() => {
    // Set step on arrival — landing page will resume here if user leaves
    localStorage.setItem("merge-path-step", "mission");
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

      {/* Main content — centred vertically and horizontally */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-8">
          {/* Mission card */}
          <div
            className="rounded-lg border p-8 space-y-6"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {/* Label */}
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}
            >
              Your mission
            </span>

            {/* Body */}
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-primary)", lineHeight: "1.8" }}
            >
              You&apos;ve just found this repo. Find one issue you could realistically take on.
              One you could start on without asking for clarification first.
            </p>

            {/* Soft time hint */}
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              You have about 3 minutes. There&apos;s no hard lock — the point is to go in with a goal,
              not to click around with no direction.
            </p>

            {/* Divider */}
            <hr style={{ borderColor: "var(--border)" }} />

            {/* CTA */}
            <div className="flex justify-end">
              <button
                onClick={() => router.push("/repo/notes-app")}
                className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
                style={{
                  background: "var(--accent)",
                  color: "#fff",
                  cursor: "pointer",
                  border: "none",
                }}
              >
                Start exploring →
              </button>
            </div>
          </div>

          {/* Back link for users who want to re-read the tips */}
          <p className="text-center text-sm" style={{ color: "var(--text-secondary)" }}>
            Want to re-read the tips?{" "}
            <a href="/tips" style={{ color: "var(--link)" }}>
              Go back
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
