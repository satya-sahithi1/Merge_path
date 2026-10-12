"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clearAllProgress } from "@/lib/progress";
import { REPO_IDS } from "@/lib/loader";

const STEP_ROUTES: Record<string, string> = {
  learn: "/learn",
  tips: "/tips",
  mission: "/repos",
  exploring: "/repos",
  pick: "/repos",
  quiz: "/repos",
  results: "/repos",
  done: "/repos",
};

type ResumeState = { status: "loading" } | { status: "fresh" } | { status: "resume"; href: string };

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

  function handleStartOver() {
    localStorage.removeItem("merge-path-step");
    localStorage.removeItem("merge-path-events");
    clearAllProgress(REPO_IDS);
    setResume({ status: "fresh" });
  }

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
      className="min-h-screen flex flex-col items-center justify-center px-4 grid-bg"
      style={{ background: "var(--background)" }}
    >
      {/* Radial vignette over the grid so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, var(--background) 100%)",
        }}
      />

      <div className="relative max-w-xl w-full text-center space-y-6">
        {/* Headline */}
        <h1
          className="text-3xl font-semibold animate-fade-up"
          style={{ color: "var(--text-primary)" }}
        >
          Merge Path
        </h1>

        {/* Sub-lines staggered */}
        <p
          className="text-lg animate-fade-up stagger-2"
          style={{ color: "var(--text-secondary)" }}
        >
          Learn to tell in minutes whether a repo and an issue are worth your time.
        </p>
        <p
          className="text-sm animate-fade-up stagger-3"
          style={{ color: "var(--text-secondary)" }}
        >
          Practice on a fake repo. Get it wrong. It costs nothing here.
        </p>

        {/* CTA */}
        <div className="animate-fade-up stagger-4">
          {isLoading ? (
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
              className="inline-block px-6 py-3 rounded-md text-sm font-medium btn-glow"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              {buttonLabel}
            </Link>
          )}
        </div>

        {resume.status === "resume" && (
          <p className="text-xs animate-fade-in stagger-5" style={{ color: "var(--text-secondary)" }}>
            or{" "}
            <button
              onClick={handleStartOver}
              style={{
                color: "var(--text-secondary)",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
                textDecoration: "underline",
              }}
            >
              start over
            </button>
          </p>
        )}
      </div>
    </main>
  );
}
