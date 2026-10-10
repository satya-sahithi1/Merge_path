"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

// Maps the merge-path-step value to the route the user should resume at.
// Keys must stay in sync with the step values written by each route.
const STEP_ROUTES: Record<string, string> = {
  learn: "/learn",
  tips: "/tips",
  mission: "/mission",
  exploring: "/repo/notes-app",
  pick: "/repo/notes-app/pick",
  quiz: "/repo/notes-app/quiz",
  done: "/repo/notes-app/quiz", // results screen not built yet — fallback to quiz
};

type ResumeState =
  | { status: "loading" }
  | { status: "fresh" }
  | { status: "resume"; href: string };

export default function Home() {
  const [resume, setResume] = useState<ResumeState>({ status: "loading" });

  useEffect(() => {
    const step = localStorage.getItem("merge-path-step");
    if (step && STEP_ROUTES[step]) {
      setResume({ status: "resume", href: STEP_ROUTES[step] });
    } else {
      setResume({ status: "fresh" });
    }
  }, []);

  const buttonHref = resume.status === "resume" ? resume.href : "/learn";
  const buttonLabel =
    resume.status === "loading"
      ? "Loading…"
      : resume.status === "resume"
      ? "Continue →"
      : "Start exploring →";
  const isLoading = resume.status === "loading";

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{ background: "var(--background)" }}
    >
      <div className="max-w-xl w-full text-center space-y-6">
        <h1
          className="text-3xl font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          Merge Path
        </h1>

        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          Learn to tell in minutes whether a repo and an issue are worth your
          time.
        </p>

        <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Practice on a fake repo. Get it wrong. It costs nothing here.
        </p>

        {isLoading ? (
          // Placeholder button during hydration — same size, no interaction
          <span
            className="inline-block px-6 py-3 rounded-md text-sm font-medium"
            style={{
              background: "var(--surface)",
              color: "var(--text-secondary)",
              cursor: "default",
            }}
          >
            Loading…
          </span>
        ) : (
          <Link
            href={buttonHref}
            className="inline-block px-6 py-3 rounded-md text-sm font-medium transition-colors"
            style={{ background: "var(--accent)", color: "#fff" }}
          >
            {buttonLabel}
          </Link>
        )}

        {/* Show a reset link when the user has a saved step so they can start fresh */}
        {resume.status === "resume" && (
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            or{" "}
            <button
              onClick={() => {
                localStorage.removeItem("merge-path-step");
                localStorage.removeItem("merge-path-events");
                setResume({ status: "fresh" });
              }}
              className="underline"
              style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              start over
            </button>
          </p>
        )}
      </div>
    </main>
  );
}
