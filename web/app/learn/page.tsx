"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// ── Card data ──────────────────────────────────────────────────────────────

const CARDS = [
  {
    number: 1,
    headline: "Public code isn't always open source.",
    body: "Open source means the code is public and its license lets you use, change and share it. A public repo with no license is a different story: by default, you don't have permission to reuse it.",
    smallLine: "Always check for a LICENSE file.",
    visual: "license",
  },
  {
    number: 2,
    headline: "You can't push to someone else's project. So how does anyone contribute?",
    body: "You fork it (make your own copy), change your copy, and open a pull request, which asks the maintainers to take your change. It's a request, not a gift: a person has to review it, and they might say no or ask for changes.",
    smallLine: null,
    visual: "fork-flow",
  },
  {
    number: 3,
    headline: "The hard part isn't the code.",
    body: "It's choosing: which repo is alive, which issue is still real, whether someone is already on it. Beginners often get stuck there, before they write a line. That's what you're about to practice.",
    smallLine: null,
    visual: "loop",
  },
] as const;

type CardVisual = (typeof CARDS)[number]["visual"];

// ── Visuals ────────────────────────────────────────────────────────────────

function LicenseVisual() {
  return (
    <div className="flex gap-3 justify-center flex-wrap">
      {/* Repo with MIT license */}
      <div
        className="rounded-md border p-4 w-44 space-y-2"
        style={{ borderColor: "#238636", background: "#0d1f0d" }}
      >
        <div className="flex items-center gap-1.5">
          <span style={{ color: "#3fb950" }}>📁</span>
          <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
            cool-project
          </span>
        </div>
        <div
          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
          style={{ background: "#1a3a1a", color: "#3fb950", border: "1px solid #238636" }}
        >
          ✓ MIT License
        </div>
        <p className="text-xs" style={{ color: "#3fb950" }}>
          Free to use, modify and share.
        </p>
      </div>

      {/* Repo with no license */}
      <div
        className="rounded-md border p-4 w-44 space-y-2"
        style={{ borderColor: "#da3633", background: "#1f0d0d" }}
      >
        <div className="flex items-center gap-1.5">
          <span style={{ color: "#f85149" }}>📁</span>
          <span className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>
            other-project
          </span>
        </div>
        <div
          className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full"
          style={{ background: "#3a1a1a", color: "#f85149", border: "1px solid #da3633" }}
        >
          ⚠ No license
        </div>
        <p className="text-xs" style={{ color: "#f85149" }}>
          No permission to reuse by default.
        </p>
      </div>
    </div>
  );
}

function ForkFlowVisual() {
  const box = (label: string, sub: string, accent?: boolean) => (
    <div
      className="rounded-md border px-4 py-3 text-center w-32"
      style={{
        borderColor: accent ? "var(--accent)" : "var(--border)",
        background: accent ? "#0d1f0d" : "var(--surface)",
      }}
    >
      <p className="text-xs font-medium" style={{ color: "var(--text-primary)" }}>{label}</p>
      <p className="text-xs mt-0.5" style={{ color: "var(--text-secondary)" }}>{sub}</p>
    </div>
  );

  const arrow = () => (
    <span className="text-lg self-center" style={{ color: "var(--text-secondary)" }}>→</span>
  );

  return (
    <div className="flex items-center justify-center gap-2 flex-wrap">
      {box("Their repo", "main project")}
      {arrow()}
      {box("Your fork", "your copy", true)}
      {arrow()}
      {box("Pull request", "back to them")}
    </div>
  );
}

function LoopVisual() {
  const steps = ["Pick", "Reproduce", "Fix", "PR", "Review"];
  const highlighted = [0, 1]; // first two

  return (
    <div className="flex items-center justify-center gap-1 flex-wrap">
      {steps.map((s, i) => (
        <div key={s} className="flex items-center gap-1">
          <span
            className="text-xs px-3 py-1.5 rounded-md font-medium"
            style={{
              background: highlighted.includes(i) ? "#1f3a5f" : "var(--surface)",
              color: highlighted.includes(i) ? "var(--link)" : "var(--text-secondary)",
              border: `1px solid ${highlighted.includes(i) ? "#388bfd" : "var(--border)"}`,
            }}
          >
            {s}
          </span>
          {i < steps.length - 1 && (
            <span className="text-xs" style={{ color: "var(--border)" }}>→</span>
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

            {/* Small line */}
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
