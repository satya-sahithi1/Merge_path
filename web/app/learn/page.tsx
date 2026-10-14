"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import {
  staggerContainer,
  fadeUp,
  fadeIn,
  slideTransition,
  fastTransition,
  defaultTransition,
} from "@/lib/motion";

import { ForkIcon, PROpenIcon, CodeReviewIcon, WrenchIcon, FolderIcon } from "@/app/components/GithubIcons";

// ── Card data ──────────────────────────────────────────────────────────────

const CARDS = [
  {
    number: 1,
    headline: "Public code ≠ Open source.",
    body: "Anyone can view a public repository. But an open source license gives people permission to use, modify, and share its code.",
    bullets: null,
    smallLine: "Always check the license.",
    closingLine: null,
    visual: "license",
  },
  {
    number: 2,
    headline: "You don't need to own a project to improve it.",
    body: "Find a problem. Fix it. Ask the maintainers to review your changes.",
    bullets: null,
    smallLine: null,
    closingLine: "Your code. Their project. One step toward making it better.",
    visual: "fork-flow",
  },
  {
    number: 3,
    headline: "The hardest part? Finding the right issue.",
    body: "Not every repository is active. Not every issue needs fixing. And not every project is beginner-friendly.",
    bullets: ["🟢 Active", "🐛 In need of a real fix", "🌱 Right for your skill level"],
    smallLine: null,
    closingLine: "Your first contribution starts with the right choice.",
    visual: "loop",
  },
] as const;

type CardVisual = (typeof CARDS)[number]["visual"];

// ── Visuals ────────────────────────────────────────────────────────────────

function LicenseVisual() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {/* Repo with MIT license */}
      <div
        className="rounded-md border p-4 w-48 space-y-2.5"
        style={{ borderColor: "#238636", background: "#0d1f0d" }}
      >
        <div className="flex items-center gap-1.5">
          <FolderIcon size={15} style={{ color: "#d29922" }} />
          <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
            project-1
          </span>
        </div>
        <div
          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: "#1a3a1a", color: "#3fb950", border: "1px solid #238636" }}
        >
          ✓ MIT License
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "#3fb950" }}>
          Open source. Use, modify &amp; share under its terms.
        </p>
      </div>

      {/* Repo with no license */}
      <div
        className="rounded-md border p-4 w-48 space-y-2.5"
        style={{ borderColor: "#da3633", background: "#1f0d0d" }}
      >
        <div className="flex items-center gap-1.5">
          <FolderIcon size={15} style={{ color: "#d29922" }} />
          <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
            project-2
          </span>
        </div>
        <div
          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
          style={{ background: "#3a1a1a", color: "#f85149", border: "1px solid #da3633" }}
        >
          ⚠ No license
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "#f85149" }}>
          Visible, but not open source by default.
        </p>
      </div>
    </div>
  );
}

function ForkFlowVisual() {
  const steps = [
    { icon: <ForkIcon size={18} />, label: "Fork" },
    { icon: <WrenchIcon size={18} />, label: "Fix" },
    { icon: <PROpenIcon size={18} />, label: "Pull Request" },
    { icon: <CodeReviewIcon size={18} />, label: "Review" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          <div
            className="flex flex-col items-center gap-1 px-4 py-3 rounded-md"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", minWidth: "72px" }}
          >
            <span className="flex items-center justify-center" style={{ color: "var(--text-secondary)" }}>
              {step.icon}
            </span>
            <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
              {step.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <span className="text-base" style={{ color: "var(--text-secondary)" }}>→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function LoopVisual() {
  const issues = [
    { label: "🟢 Active", title: "Fix broken dark mode toggle", suitable: true },
    { label: "⚪ Stale", title: "Add i18n support", suitable: false },
    { label: "🔴 Complex", title: "Refactor entire auth layer", suitable: false },
  ];

  return (
    <div className="flex flex-col gap-2 w-full max-w-xs mx-auto">
      {issues.map((issue) => (
        <div
          key={issue.title}
          className="flex items-center gap-3 px-3 py-2.5 rounded-md"
          style={{
            background: issue.suitable ? "#0d1f0d" : "var(--surface)",
            border: `1px solid ${issue.suitable ? "#238636" : "var(--border)"}`,
          }}
        >
          <span
            className="text-xs font-medium whitespace-nowrap"
            style={{ color: issue.suitable ? "#3fb950" : "var(--text-secondary)" }}
          >
            {issue.label}
          </span>
          <span
            className="text-xs flex-1"
            style={{ color: issue.suitable ? "var(--text-primary)" : "var(--text-secondary)" }}
          >
            {issue.title}
          </span>
          {issue.suitable && (
            <span
              className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: "#1a3a1a", color: "#3fb950", border: "1px solid #238636" }}
            >
              ← pick this
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

function Visual({ type }: { type: CardVisual }) {
  if (type === "license") return <LicenseVisual />;
  if (type === "fork-flow") return <ForkFlowVisual />;
  if (type === "loop") return <LoopVisual />;
  return null;
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function LearnPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  // Track direction so slide exits left on Next, right on Prev (future-proofing)
  const [direction, setDirection] = useState(1);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    localStorage.setItem("merge-path-step", "learn");
  }, []);

  function handleNext() {
    if (step < CARDS.length - 1) {
      setDirection(1);
      setStep((s) => s + 1);
    } else {
      router.push("/tips");
    }
  }

  function handleSkip() {
    router.push("/tips");
  }

  const card = CARDS[step];
  const isLast = step === CARDS.length - 1;

  // Reduced-motion: collapse all animation state changes to instant
  const slideVariants = shouldReduce ? fadeIn : slideTransition;
  const contentVariants = shouldReduce ? {} : staggerContainer;
  const itemVariants = shouldReduce ? {} : fadeUp;

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--background)" }}>
      {/* Top nav */}
      <nav
        className="border-b px-6 py-3 flex items-center justify-between"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Merge Path
        </span>
        <motion.button
          onClick={handleSkip}
          className="text-sm px-4 py-1.5 rounded-md font-medium"
          style={{
            background: "var(--surface)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
            cursor: "pointer",
          }}
          whileHover={shouldReduce ? {} : { opacity: 0.8 }}
          whileTap={shouldReduce ? {} : { scale: 0.97 }}
        >
          I know what a fork is, skip this
        </motion.button>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full space-y-6">
          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            {CARDS.map((_, i) => (
              <motion.span
                key={i}
                className="w-2 h-2 rounded-full"
                animate={{
                  background:
                    i < step
                      ? "var(--accent-fg)"
                      : i === step
                      ? "var(--text-primary)"
                      : "var(--border)",
                  scale: i === step ? 1.3 : 1,
                }}
                transition={fastTransition}
              />
            ))}
          </div>

          {/* Sliding card panel */}
          <div style={{ position: "relative", overflow: "hidden" }}>
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={step}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="rounded-lg border p-8"
                style={{ borderColor: "var(--border)", background: "var(--surface)" }}
              >
                {/* Inner content — staggered */}
                <motion.div
                  className="space-y-5"
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Card counter */}
                  <motion.span
                    className="text-xs font-medium uppercase tracking-widest block"
                    style={{ color: "var(--text-secondary)" }}
                    variants={itemVariants}
                  >
                    {card.number} / {CARDS.length}
                  </motion.span>

                  {/* Headline */}
                  <motion.h2
                    className="text-lg font-semibold leading-snug"
                    style={{ color: "var(--text-primary)" }}
                    variants={itemVariants}
                  >
                    {card.headline}
                  </motion.h2>

                  {/* Body */}
                  <motion.p
                    className="text-sm"
                    style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}
                    variants={itemVariants}
                  >
                    {card.body}
                  </motion.p>

                  {/* Bullets */}
                  {card.bullets && (
                    <motion.ul className="space-y-1.5 pl-1" variants={itemVariants}>
                      {(card.bullets as readonly string[]).map((b) => (
                        <li key={b} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                          {b}
                        </li>
                      ))}
                    </motion.ul>
                  )}

                  {/* Small line (highlighted callout) */}
                  {card.smallLine && (
                    <motion.p
                      className="text-xs px-3 py-2 rounded-md"
                      style={{
                        background: "#1f3a5f",
                        color: "var(--link)",
                        borderLeft: "3px solid #388bfd",
                      }}
                      variants={itemVariants}
                    >
                      {card.smallLine}
                    </motion.p>
                  )}

                  {/* Visual */}
                  <motion.div className="pt-2" variants={itemVariants}>
                    <Visual type={card.visual} />
                  </motion.div>

                  {/* Closing line */}
                  {card.closingLine && (
                    <motion.p
                      className="text-xs text-center"
                      style={{ color: "var(--text-secondary)" }}
                      variants={itemVariants}
                    >
                      {card.closingLine}
                    </motion.p>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Action button */}
          <div className="flex justify-end">
            <motion.button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-md text-sm font-medium"
              style={{
                background: "var(--accent)",
                color: "#fff",
                cursor: "pointer",
                border: "none",
              }}
              whileHover={shouldReduce ? {} : { scale: 1.03 }}
              whileTap={shouldReduce ? {} : { scale: 0.97 }}
              transition={defaultTransition}
            >
              {isLast ? "Show me the repo" : "Next"}
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
}
