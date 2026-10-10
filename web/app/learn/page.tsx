"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const CARDS = [
  {
    number: 1,
    body: "Open source is public code anyone can read and propose changes to. A license tells you what you're allowed to do with it.",
  },
  {
    number: 2,
    body: "You don't edit the main repo. You copy it (fork), change your copy, and ask the maintainers to take your change — that request is called a Pull Request (PR).",
  },
  {
    number: 3,
    body: "The loop: find a repo → read the README and CONTRIBUTING → pick an issue → reproduce it → fix it → open a PR → handle review.",
  },
];

export default function LearnPage() {
  const router = useRouter();
  const [step, setStep] = useState(0); // 0-indexed card index

  // Set merge-path-step on arrival
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
    <div
      className="min-h-screen flex flex-col"
      style={{ background: "var(--background)" }}
    >
      {/* Top nav */}
      <nav
        className="border-b px-6 py-3 flex items-center justify-between"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
          Merge Path
        </span>
        {/* Skip — prominent, same visual weight as Next */}
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
          I know what a fork is, skip this →
        </button>
      </nav>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-lg w-full space-y-8">
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
            className="rounded-lg border p-8 space-y-4"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <span
              className="text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--text-secondary)" }}
            >
              {card.number} / {CARDS.length}
            </span>
            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--text-primary)", lineHeight: "1.75" }}
            >
              {card.body}
            </p>
          </div>

          {/* Action button */}
          <div className="flex justify-end">
            <button
              onClick={handleNext}
              className="px-6 py-2.5 rounded-md text-sm font-medium transition-colors"
              style={{
                background: "var(--accent)",
                color: "#fff",
                cursor: "pointer",
                border: "none",
              }}
            >
              {isLast ? "Got it →" : "Next →"}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
