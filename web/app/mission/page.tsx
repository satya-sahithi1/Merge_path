"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import { setRepoStep } from "@/lib/progress";
import { REPO_IDS } from "@/lib/loader";
import { scaleIn, fadeUp, staggerContainer, fastTransition, defaultTransition } from "@/lib/motion";

function MissionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [repoId, setRepoId] = useState<string>(REPO_IDS[0]);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const param = searchParams.get("repo");
    const valid = (REPO_IDS as readonly string[]).includes(param ?? "");
    const resolved = valid ? (param as string) : REPO_IDS[0];
    setRepoId(resolved);
    localStorage.setItem("merge-path-step", "mission");
    setRepoStep(resolved, "mission");
  }, [searchParams]);

  function handleStart() {
    setRepoStep(repoId, "exploring");
    router.push(`/repo/${repoId}`);
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      <nav
        className="border-b px-6 py-3 flex items-center justify-between"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>Merge Path</span>
        <a href="/repos" className="text-sm" style={{ color: "var(--text-secondary)" }}>← All repos</a>
      </nav>

      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full space-y-8">

          {/* Mission card */}
          <motion.div
            className="rounded-lg border p-8 space-y-6"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            variants={shouldReduce ? {} : scaleIn}
            initial="hidden"
            animate="visible"
          >
            {/* Header row */}
            <motion.div
              className="flex items-center gap-2"
              variants={shouldReduce ? {} : fadeUp}
            >
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "var(--text-secondary)" }}
              >
                Your mission
              </span>
              <motion.span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: "#1f3a5f", color: "var(--link)", border: "1px solid #388bfd" }}
                key={repoId}
                initial={shouldReduce ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={fastTransition}
              >
                {repoId}
              </motion.span>
            </motion.div>

            {/* Body copy — staggered */}
            <motion.div
              className="space-y-4"
              variants={shouldReduce ? {} : staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                className="text-base"
                style={{ color: "var(--text-primary)", lineHeight: "1.8" }}
                variants={shouldReduce ? {} : fadeUp}
              >
                You&apos;ve just found this repo. Find one issue you could realistically take on.
                One you could start on without asking for clarification first.
              </motion.p>

              <motion.p
                className="text-sm"
                style={{ color: "var(--text-secondary)" }}
                variants={shouldReduce ? {} : fadeUp}
              >
                You have about 3 minutes. There&apos;s no hard lock — the point is to go in
                with a goal, not to click around without direction.
              </motion.p>
            </motion.div>

            <hr style={{ borderColor: "var(--border)" }} />

            <div className="flex justify-end">
              <motion.button
                onClick={handleStart}
                className="px-6 py-2.5 rounded-md text-sm font-medium"
                style={{ background: "var(--accent)", color: "#fff", cursor: "pointer", border: "none" }}
                whileHover={shouldReduce ? {} : { scale: 1.03, transition: fastTransition }}
                whileTap={shouldReduce ? {} : { scale: 0.97, transition: { duration: 0.1 } }}
                transition={defaultTransition}
              >
                Start exploring →
              </motion.button>
            </div>
          </motion.div>

          <motion.p
            className="text-center text-sm"
            style={{ color: "var(--text-secondary)" }}
            variants={shouldReduce ? {} : fadeUp}
            initial="hidden"
            animate="visible"
          >
            Changed your mind?{" "}
            <a href="/repos" style={{ color: "var(--link)" }}>Pick a different repo</a>
          </motion.p>
        </div>
      </main>
    </div>
  );
}

export default function MissionPage() {
  return (
    <Suspense>
      <MissionContent />
    </Suspense>
  );
}
