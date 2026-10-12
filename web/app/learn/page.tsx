"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

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
          <span>📁</span>
          <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
            cool-project
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
          <span>📁</span>
          <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
            other-project
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
    { emoji: "🍴", label: "Fork" },
    { emoji: "🛠️", label: "Fix" },
    { emoji: "📤", label: "Pull Request" },
    { emoji: "👀", label: "Review" },
  ];

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {steps.map((step, i) => (
        <div key={step.label} className="flex items-center gap-2">
          <div
            className="flex flex-col items-center gap-1 px-4 py-3 rounded-md"
            style={{ background: "var(--surface)", border: "1px solid var(--border)", minWidth: "72px" }}
          >
            <span className="text-lg">{step.emoji}</span>
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
          <span className="text-xs font-medium whitespace-nowrap" style={{ color: issue.suitable ? "#3fb950" : "var(--text-secondary)" }}>
            {issue.label}
          </span>
          <span className="text-xs flex-1" style={{ color: issue.suitable ? "var(--text-primary)" : "var(--text-secondary)" }}>
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

  useEffect(() => {
    localStorage.setItem("merge-path-step", "learn");
  }, []);

  function handleNext() {
    if (step < CARDS.length - 1) {
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
        <button
          onClick={handleSkip}
          className="text-sm px-4 py-1.5 rounded-md font-medium transition-colors"
          style={{
            background: "var(--surface)",
            color: "var(--text-primary)",
            border: "1px solid var(--border)",
            cursor: "pointer",
          }}
        >
          I know what a fork is, skip this
        </button>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <div className="max-w-lg w-full space-y-6">
          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className="w-2 h-2 rounded-full transition-colors"
                style={{
                  background:
                    i < step
                      ? "var(--accent-fg)"
                      : i === step
                      ? "var(--text-primary)"
                      : "var(--border)",
                }}
              />
            ))}
          </div>

          {/* Card */}
          <div
            className="rounded-lg border p-8 space-y-5"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}
          >
            {/* Card counter */}
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}
            >
              {card.number} / {CARDS.length}
            </span>

            {/* Headline */}
            <h2 className="text-lg font-semibold leading-snug" style={{ color: "var(--text-primary)" }}>
              {card.headline}
            </h2>

            {/* Body */}
            <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: "1.75" }}>
              {card.body}
            </p>

            {/* Bullets (find a project that…) */}
            {card.bullets && (
              <ul className="space-y-1.5 pl-1">
                {(card.bullets as readonly string[]).map((b) => (
                  <li key={b} className="text-sm" style={{ color: "var(--text-secondary)" }}>
                    {b}
                  </li>
                ))}
              </ul>
            )}

            {/* Small line (highlighted callout) */}
            {card.smallLine && (
              <p
                className="text-xs px-3 py-2 rounded-md"
                style={{
                  background: "#1f3a5f",
                  color: "var(--link)",
                  borderLeft: "3px solid #388bfd",
                }}
              >
                {card.smallLine}
              </p>
            )}

            {/* Visual */}
            <div className="pt-2">
              <Visual type={card.visual} />
            </div>

            {/* Closing line */}
            {card.closingLine && (
              <p className="text-xs text-center" style={{ color: "var(--text-secondary)" }}>
                {card.closingLine}
              </p>
            )}
          </div>

          {/* Action button */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
              style={{ background: "var(--accent)", color: "#fff", cursor: "pointer", border: "none" }}
            >
              {isLast ? "Show me the repo" : "Next"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
