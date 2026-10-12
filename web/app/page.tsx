"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { clearAllProgress } from "@/lib/progress";
import { REPO_IDS } from "@/lib/loader";
import { fadeUp, staggerContainer, scaleIn } from "@/lib/motion";

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
  const shouldReduce = useReducedMotion();

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

  // When reduced motion is requested, skip all Motion animation (instant display)
  const containerVariants = shouldReduce ? {} : staggerContainer;
  const itemVariants = shouldReduce ? {} : fadeUp;
  const ctaVariants = shouldReduce ? {} : scaleIn;

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

      <motion.div
        className="relative max-w-xl w-full text-center space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Headline */}
        <motion.h1
          className="text-3xl font-semibold"
          style={{ color: "var(--text-primary)" }}
          variants={itemVariants}
        >
          Merge Path
        </motion.h1>

        {/* Sub-lines */}
        <motion.p
          className="text-lg"
          style={{ color: "var(--text-secondary)" }}
          variants={itemVariants}
        >
          Learn to tell in minutes whether a repo and an issue are worth your time.
        </motion.p>

        <motion.p
          className="text-sm"
          style={{ color: "var(--text-secondary)" }}
          variants={itemVariants}
        >
          Practice on a fake repo. Get it wrong. It costs nothing here.
        </motion.p>

        {/* CTA */}
        <motion.div variants={ctaVariants}>
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
            <motion.div
              whileHover={shouldReduce ? {} : { scale: 1.03 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              style={{ display: "inline-block" }}
            >
              <Link
                href={buttonHref}
                className="inline-block px-6 py-3 rounded-md text-sm font-medium btn-glow"
                style={{ background: "var(--accent)", color: "#fff" }}
              >
                {buttonLabel}
              </Link>
            </motion.div>
          )}
        </motion.div>

        {resume.status === "resume" && (
          <motion.p
            className="text-xs"
            style={{ color: "var(--text-secondary)" }}
            variants={itemVariants}
          >
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
          </motion.p>
        )}
      </motion.div>
    </main>
  );
}
