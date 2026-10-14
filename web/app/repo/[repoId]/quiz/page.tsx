"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { QuizQuestion, QuizOption } from "@/lib/types";

// Imported at module level — resolved at build time
import notesQuiz    from "@/lib/data/notes-app/quiz.json";
import notesMeta    from "@/lib/data/notes-app/meta.json";
import weatherlyQuiz  from "@/lib/data/weatherly/quiz.json";
import weatherlyMeta  from "@/lib/data/weatherly/meta.json";
import gradewiseQuiz  from "@/lib/data/gradewise/quiz.json";
import gradewiseMeta  from "@/lib/data/gradewise/meta.json";
import mdliteQuiz  from "@/lib/data/mdlite/quiz.json";
import mdliteMeta  from "@/lib/data/mdlite/meta.json";

const REPO_DATA: Record<string, { quiz: typeof notesQuiz; meta: typeof notesMeta }> = {
  "notes-app": { quiz: notesQuiz,    meta: notesMeta },
  "weatherly":  { quiz: weatherlyQuiz as unknown as typeof notesQuiz, meta: weatherlyMeta as unknown as typeof notesMeta },
  "gradewise":  { quiz: gradewiseQuiz as unknown as typeof notesQuiz, meta: gradewiseMeta as unknown as typeof notesMeta },
  "mdlite":     { quiz: mdliteQuiz as unknown as typeof notesQuiz, meta: mdliteMeta as unknown as typeof notesMeta },
};

const DOMAIN_LABELS: Record<string, string> = {
  repo_health: "Repo health",
  repo_reading: "Repo reading",
  contributing: "Contributing",
  issue_judgment: "Issue judgment",
  git_workflow: "Git workflow",
  reproduction: "Reproduction",
  review: "Review",
};

type AnswerState = {
  // selected option id(s)
  selected: string[];
  // whether user has submitted this question
  submitted: boolean;
};

export default function QuizPage() {
  const params = useParams();
  const repoId = params.repoId as string;

  const repo = REPO_DATA[repoId] ?? REPO_DATA["notes-app"];
  const questions = repo.quiz as QuizQuestion[];
  const meta = repo.meta;

  // One AnswerState per question index
  const [answers, setAnswers] = useState<AnswerState[]>(
    questions.map(() => ({ selected: [], submitted: false }))
  );
  const [currentQ, setCurrentQ] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showNextScreen, setShowNextScreen] = useState(false);

  const q = questions[currentQ];
  const ans = answers[currentQ];

  function toggleOption(optionId: string) {
    if (ans.submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      const cur = { ...updated[currentQ] };
      if (q.type === "single") {
        cur.selected = [optionId];
      } else {
        cur.selected = cur.selected.includes(optionId)
          ? cur.selected.filter((id) => id !== optionId)
          : [...cur.selected, optionId];
      }
      updated[currentQ] = cur;
      return updated;
    });
  }

  function submitAnswer() {
    if (ans.selected.length === 0 || ans.submitted) return;
    setAnswers((prev) => {
      const updated = [...prev];
      updated[currentQ] = { ...updated[currentQ], submitted: true };
      return updated;
    });
  }

  function goNext() {
    if (currentQ < questions.length - 1) {
      setCurrentQ((n) => n + 1);
    } else {
      setFinished(true);
    }
  }

  // ── Scoring ──────────────────────────────────────────────────────────────

  function isCorrect(q: QuizQuestion, selected: string[]): boolean {
    const correctIds = q.options.filter((o) => o.correct).map((o) => o.id as string);
    if (q.type === "single") {
      return selected.length === 1 && correctIds.includes(selected[0]);
    }
    // multi: at least one correct selected, and no wrong options selected
    const hasAtLeastOneCorrect = selected.some((id) => correctIds.includes(id));
    const hasNoWrong = selected.every((id) => correctIds.includes(id));
    return hasAtLeastOneCorrect && hasNoWrong;
  }

  const totalCorrect = questions.filter((q, i) =>
    answers[i].submitted && isCorrect(q, answers[i].selected)
  ).length;

  const total = questions.length;
  const pct = Math.round((totalCorrect / total) * 100);

  const band =
    totalCorrect >= 7
      ? { label: "Ready", color: "#3fb950", bg: "#1a3a1a", note: "You have the judgment to find and take on a real issue. Go look for one." }
      : totalCorrect >= 5
      ? { label: "Getting there", color: "#d29922", bg: "#3a2e00", note: "You have the right instincts in some areas. Review what you missed before you start." }
      : { label: "Review the tips", color: "#f85149", bg: "#3a1a1a", note: "Work through the repo again and pay close attention to the issue comments and PRs." };

  // Domain scores
  const domainScores: Record<string, { correct: number; total: number }> = {};
  questions.forEach((q, i) => {
    const d = q.domain;
    if (!domainScores[d]) domainScores[d] = { correct: 0, total: 0 };
    domainScores[d].total += 1;
    if (answers[i].submitted && isCorrect(q, answers[i].selected)) {
      domainScores[d].correct += 1;
    }
  });

  // ── "Choose another repo" screen ─────────────────────────────────────────

  if (finished && showNextScreen) {
    return (
      <div className="min-h-screen" style={{ background: "var(--background)" }}>
        <nav className="border-b px-6 py-3 flex items-center gap-4"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>Merge Path</Link>
          <span style={{ color: "var(--text-secondary)" }}>/</span>
          <Link href={`/repo/${repoId}`} className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {meta.name}
          </Link>
          <span style={{ color: "var(--text-secondary)" }}>/</span>
          <button
            onClick={() => setShowNextScreen(false)}
            className="text-sm"
            style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            Quiz
          </button>
          <span style={{ color: "var(--text-secondary)" }}>/</span>
          <span className="text-sm" style={{ color: "var(--text-primary)" }}>What's next</span>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-12 space-y-8 animate-fade-up">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold" style={{ color: "var(--text-primary)" }}>
              Choose another repo
            </h1>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              Try finding your first open-source contributing repo
            </p>
          </div>

          {/* Practice repos */}
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Practice repos on Merge Path
            </p>
            <Link
              href="/repos"
              className="rounded-md border p-4 flex items-center justify-between gap-4 transition-colors hover:border-[var(--accent)]"
              style={{ borderColor: "var(--border)", background: "var(--surface)", display: "flex" }}
            >
              <div className="space-y-0.5">
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Browse practice repos
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  Sharpen your judgment on another codebase before going real.
                </p>
              </div>
              <span className="text-sm whitespace-nowrap" style={{ color: "var(--text-secondary)" }}>Pick a repo →</span>
            </Link>
          </div>

          {/* Real open-source links */}
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--text-secondary)" }}>
              Find a real issue to contribute to
            </p>

            <a
              href="https://goodfirstissues.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border p-4 flex items-start justify-between gap-4 transition-colors"
              style={{ borderColor: "var(--border)", background: "var(--surface)", display: "flex", textDecoration: "none" }}
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  goodfirstissues.org ↗
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  Curated beginner-friendly issues from popular open-source projects.
                </p>
              </div>
            </a>

            <a
              href="https://goodfirstissue.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border p-4 flex items-start justify-between gap-4 transition-colors"
              style={{ borderColor: "var(--border)", background: "var(--surface)", display: "flex", textDecoration: "none" }}
            >
              <div className="space-y-1">
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  goodfirstissue.dev ↗
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  Filter by language and find your first contribution across thousands of repos.
                </p>
              </div>
            </a>
          </div>

          <button
            onClick={() => setShowNextScreen(false)}
            className="text-sm"
            style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            ← Back to results
          </button>
        </div>
      </div>
    );
  }

  // ── Results screen ────────────────────────────────────────────────────────

  if (finished) {
    return (
      <div className="min-h-screen" style={{ background: "var(--background)" }}>
        <nav className="border-b px-6 py-3 flex items-center gap-4"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>Merge Path</Link>
          <span style={{ color: "var(--text-secondary)" }}>/</span>
          <Link href={`/repo/${repoId}`} className="text-sm" style={{ color: "var(--text-secondary)" }}>
            {meta.name}
          </Link>
          <span style={{ color: "var(--text-secondary)" }}>/</span>
          <span className="text-sm" style={{ color: "var(--text-primary)" }}>Quiz</span>
        </nav>

        <div className="max-w-2xl mx-auto px-4 py-10 space-y-8">
          {/* Score */}
          <div className="rounded-md border p-6 text-center space-y-3 animate-scale-in"
            style={{ borderColor: "var(--border)", background: band.bg }}>
            <div className="text-5xl font-bold" style={{ color: band.color }}>
              {totalCorrect}/{total}
            </div>
            <div className="text-lg font-semibold" style={{ color: band.color }}>
              {band.label}
            </div>
            <p className="text-sm" style={{ color: "var(--text-primary)" }}>
              {band.note}
            </p>
          </div>

          {/* What's next — shown right after score */}
          <div className="space-y-3">
            {/* Try a different repo */}
            <div
              className="rounded-md border p-4 flex items-center justify-between gap-4"
              style={{ borderColor: "var(--border)", background: "var(--surface)" }}
            >
              <div className="space-y-0.5">
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  Try a different repo
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  Practice on another codebase to sharpen your judgment.
                </p>
              </div>
              <Link
                href="/repos"
                className="whitespace-nowrap text-sm px-4 py-2 rounded-md font-medium"
                style={{ background: "var(--surface)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
              >
                Pick a repo →
              </Link>
            </div>

            {/* Real issues */}
            <div
              className="rounded-md border p-4 space-y-3"
              style={{
                borderColor: totalCorrect >= 7 ? "#238636" : "var(--border)",
                background: totalCorrect >= 7 ? "#0d1f0d" : "var(--surface)",
              }}
            >
              <div className="space-y-0.5">
                <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {totalCorrect >= 7
                    ? "You're ready — go find a real issue"
                    : "When you're ready, find a real issue"}
                </p>
                <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  {totalCorrect >= 7
                    ? "Use these to find beginner-friendly open source issues across real projects."
                    : "Come back here once you've reviewed the tips and feel confident."}
                </p>
              </div>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://goodfirstissues.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-md font-medium"
                  style={{ background: "var(--accent)", color: "#fff" }}
                >
                  goodfirstissues.dev ↗
                </a>
                <a
                  href="https://goodfirstissue.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-4 py-2 rounded-md border font-medium"
                  style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--surface)" }}
                >
                  goodfirstissue.dev ↗
                </a>
              </div>
            </div>
          </div>

          {/* Domain breakdown */}
          <div className="space-y-2">
            <h2 className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
              By domain
            </h2>
            {Object.entries(domainScores).map(([domain, { correct, total }]) => (
              <div key={domain} className="flex items-center gap-3">
                <span className="text-sm w-40" style={{ color: "var(--text-secondary)" }}>
                  {DOMAIN_LABELS[domain] ?? domain}
                </span>
                <div className="flex-1 h-2 rounded-full overflow-hidden"
                  style={{ background: "var(--surface)" }}>
                  <div
                    className="h-2 rounded-full animate-progress"
                    style={{
                      width: `${(correct / total) * 100}%`,
                      background: correct === total ? "#3fb950" : correct > 0 ? "#d29922" : "#f85149",
                    }}
                  />
                </div>
                <span className="text-xs w-10 text-right" style={{ color: "var(--text-secondary)" }}>
                  {correct}/{total}
                </span>
              </div>
            ))}
          </div>

          {/* Per-question review */}
          <div className="space-y-4">
            <h2 className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
              Question review
            </h2>
            {questions.map((q, i) => {
              const correct = isCorrect(q, answers[i].selected);
              const correctOptions = q.options.filter((o) => o.correct);
              const selectedOptions = q.options.filter((o) =>
                answers[i].selected.includes(o.id)
              );
              return (
                <div key={q.id} className={`rounded-md border overflow-hidden animate-fade-up stagger-${Math.min(i + 1, 8)}`}
                  style={{ borderColor: correct ? "#238636" : "#da3633" }}>
                  <div className="px-4 py-2 flex items-center gap-2 border-b"
                    style={{
                      borderColor: correct ? "#238636" : "#da3633",
                      background: correct ? "#1a3a1a" : "#3a1a1a",
                    }}>
                    <span className="text-sm font-medium" style={{ color: correct ? "#3fb950" : "#f85149" }}>
                      {correct ? "✓" : "✗"} Q{i + 1}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
                      {DOMAIN_LABELS[q.domain] ?? q.domain}
                    </span>
                  </div>
                  <div className="px-4 py-3 space-y-2">
                    <p className="text-sm" style={{ color: "var(--text-primary)" }}>{q.question}</p>
                    {!correct && (
                      <div className="space-y-1 text-xs" style={{ color: "var(--text-secondary)" }}>
                        <p>
                          Your answer:{" "}
                          <span style={{ color: "#f85149" }}>
                            {selectedOptions.map((o) => o.text).join(", ") || "—"}
                          </span>
                        </p>
                        <p>
                          Correct:{" "}
                          <span style={{ color: "#3fb950" }}>
                            {correctOptions.map((o) => o.text).join(", ")}
                          </span>
                        </p>
                        {/* Explanation for each wrong selected option */}
                        {selectedOptions
                          .filter((o) => !o.correct)
                          .map((o) => (
                            <p key={o.id} className="pt-1" style={{ color: "var(--text-primary)" }}>
                              {o.explanation}
                            </p>
                          ))}
                        {/* Explanation for correct options that weren't selected */}
                        {correctOptions
                          .filter((o) => !answers[i].selected.includes(o.id))
                          .map((o) => (
                            <p key={o.id} className="pt-1" style={{ color: "var(--text-primary)" }}>
                              {o.explanation}
                            </p>
                          ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next button — always shown at bottom of results */}
          <div className="pt-4 border-t" style={{ borderColor: "var(--border)" }}>
            <button
              onClick={() => setShowNextScreen(true)}
              className="w-full px-4 py-3 rounded-md text-sm font-medium transition-opacity"
              style={{ background: "var(--accent)", color: "#fff", cursor: "pointer" }}
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    );
  }

  // ── Question screen ───────────────────────────────────────────────────────

  const correctIds = q.options.filter((o) => o.correct).map((o) => o.id);

  function optionState(opt: QuizOption): "default" | "correct" | "wrong" | "missed" | "selected" {
    if (!ans.submitted) {
      return ans.selected.includes(opt.id) ? "selected" : "default";
    }
    if (opt.correct && ans.selected.includes(opt.id)) return "correct";
    if (!opt.correct && ans.selected.includes(opt.id)) return "wrong";
    if (opt.correct && !ans.selected.includes(opt.id)) return "missed";
    return "default";
  }

  const stateStyles: Record<string, { border: string; bg: string; color: string }> = {
    default: { border: "var(--border)", bg: "var(--surface)", color: "var(--text-primary)" },
    selected: { border: "#58a6ff", bg: "#1f3a5f", color: "var(--text-primary)" },
    correct: { border: "#238636", bg: "#1a3a1a", color: "#3fb950" },
    wrong: { border: "#da3633", bg: "#3a1a1a", color: "#f85149" },
    missed: { border: "#238636", bg: "#1a2a1a", color: "#3fb950" },
  };

  const questionCorrect = ans.submitted && isCorrect(q, ans.selected);

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Nav */}
      <nav className="border-b px-6 py-3 flex items-center gap-4"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>Merge Path</Link>
        <span style={{ color: "var(--text-secondary)" }}>/</span>
        <Link href={`/repo/${repoId}`} className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {meta.name}
        </Link>
        <span style={{ color: "var(--text-secondary)" }}>/</span>
        <span className="text-sm" style={{ color: "var(--text-primary)" }}>Quiz</span>
      </nav>

      <div className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Progress */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs" style={{ color: "var(--text-secondary)" }}>
            <span>Question {currentQ + 1} of {total}</span>
            <span className="px-2 py-0.5 rounded-full text-xs"
              style={{ background: "var(--surface)", color: "var(--text-secondary)" }}>
              {DOMAIN_LABELS[q.domain] ?? q.domain}
            </span>
          </div>
          <div className="w-full h-1 rounded-full" style={{ background: "var(--surface)" }}>
            <div
              className="h-1 rounded-full transition-all"
              style={{ width: `${((currentQ + 1) / total) * 100}%`, background: "var(--accent)" }}
            />
          </div>
        </div>

      {/* Question — re-mounts on each question change via key, triggering the animation */}
        <div key={currentQ} className="space-y-2 animate-fade-up">
          <p className="text-base font-medium" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
            {q.question}
          </p>
          {q.type === "multi" && (
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium"
              style={{ background: "#1f3a5f", color: "#58a6ff", border: "1px solid #1f6feb" }}>
              <span>☑</span>
              <span>Multiple answers — select all that apply</span>
            </div>
          )}
        </div>

        {/* Options */}
        <div key={`opts-${currentQ}`} className="space-y-2 animate-fade-up stagger-2">
          {q.options.map((opt) => {
            const state = optionState(opt);
            const style = stateStyles[state];
            return (
              <button
                key={opt.id}
                onClick={() => toggleOption(opt.id)}
                disabled={ans.submitted}
                className="w-full text-left rounded-md border px-4 py-3 text-sm transition-colors"
                style={{
                  borderColor: style.border,
                  background: style.bg,
                  color: style.color,
                  cursor: ans.submitted ? "default" : "pointer",
                }}
              >
                <span className="mr-2 text-xs" style={{ color: "var(--text-secondary)" }}>
                  {q.type === "multi"
                    ? ans.selected.includes(opt.id) ? "☑" : "☐"
                    : ans.selected.includes(opt.id) ? "◉" : "○"}
                </span>
                {opt.text}
              </button>
            );
          })}
        </div>

        {/* Per-option explanations after submit */}
        {ans.submitted && (
          <div className="space-y-2">
            {/* Overall result */}
            <div className={`rounded-md px-4 py-3 text-sm font-medium ${questionCorrect ? "pulse-correct" : ""}`}
              style={{
                background: questionCorrect ? "#1a3a1a" : "#3a1a1a",
                border: `1px solid ${questionCorrect ? "#238636" : "#da3633"}`,
                color: questionCorrect ? "#3fb950" : "#f85149",
              }}>
              {questionCorrect ? "✓ Correct" : "✗ Not quite"}
            </div>

            {/* Show explanation for each selected option + any missed correct */}
            {q.options
              .filter(
                (o) =>
                  ans.selected.includes(o.id) ||
                  (o.correct && !ans.selected.includes(o.id))
              )
              .map((o, idx) => {
                const wasSelected = ans.selected.includes(o.id);
                const isRight = o.correct;
                const labelColor = isRight ? "#3fb950" : "#f85149";
                return (
                  <div key={o.id} className={`rounded-md border px-4 py-3 space-y-1 text-sm animate-fade-up stagger-${Math.min(idx + 1, 8)}`}
                    style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                    <p className="text-xs font-medium" style={{ color: labelColor }}>
                      {isRight ? "✓ Correct" : "✗ Wrong"}{!wasSelected ? " (you didn't pick this)" : ""}
                    </p>
                    <p style={{ color: "var(--text-primary)" }}>{o.text}</p>
                    <p style={{ color: "var(--text-secondary)" }}>{o.explanation}</p>
                  </div>
                );
              })}
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-3">
          {!ans.submitted ? (
            <button
              onClick={submitAnswer}
              disabled={ans.selected.length === 0}
              className="px-4 py-2 rounded-md text-sm font-medium transition-opacity"
              style={{
                background: "var(--accent)",
                color: "#fff",
                opacity: ans.selected.length === 0 ? 0.4 : 1,
                cursor: ans.selected.length === 0 ? "default" : "pointer",
              }}
            >
              Submit
            </button>
          ) : (
            <button
              onClick={goNext}
              className="px-4 py-2 rounded-md text-sm font-medium"
              style={{ background: "var(--accent)", color: "#fff", cursor: "pointer" }}
            >
              {currentQ < total - 1 ? "Next question →" : "See results →"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
