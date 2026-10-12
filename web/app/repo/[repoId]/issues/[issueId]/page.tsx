"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { ReproductionScenario } from "@/lib/types";

// Load all repos' issues at build time so the client component can pick
// the right one at runtime from the URL params.
import notesIssues from "@/lib/data/notes-app/issues.json";
import notesMeta   from "@/lib/data/notes-app/meta.json";
import weatherlyIssues from "@/lib/data/weatherly/issues.json";
import weatherlyMeta   from "@/lib/data/weatherly/meta.json";
import gradewiseIssues from "@/lib/data/gradewise/issues.json";
import gradewiseMeta   from "@/lib/data/gradewise/meta.json";
import mdliteIssues from "@/lib/data/mdlite/issues.json";
import mdliteMeta   from "@/lib/data/mdlite/meta.json";

type OutcomeChoice = "reproduced" | "cant_reproduce" | "not_enough_info" | null;

const REPO_DATA: Record<string, { issues: typeof notesIssues; meta: typeof notesMeta }> = {
  "notes-app": { issues: notesIssues as typeof notesIssues, meta: notesMeta },
  "weatherly":  { issues: weatherlyIssues as unknown as typeof notesIssues, meta: weatherlyMeta as unknown as typeof notesMeta },
  "gradewise":  { issues: gradewiseIssues as unknown as typeof notesIssues, meta: gradewiseMeta as unknown as typeof notesMeta },
  "mdlite":     { issues: mdliteIssues as unknown as typeof notesIssues, meta: mdliteMeta as unknown as typeof notesMeta },
};

export default function IssuePage() {
  const params = useParams();
  const repoId  = params.repoId as string;
  const issueId = Number(params.issueId);

  const repo   = REPO_DATA[repoId];
  const issue  = repo?.issues.find((i) => i?.id === issueId);
  const meta   = repo?.meta;

  if (!issue || !meta) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <p style={{ color: "var(--text-secondary)" }}>Issue not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Nav */}
      <nav className="border-b px-6 py-3 flex items-center gap-4"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>Merge Path</Link>
        <span style={{ color: "var(--text-secondary)" }}>/</span>
        <Link href={`/repo/${repoId}?tab=issues`} className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {meta.name}
        </Link>
        <span style={{ color: "var(--text-secondary)" }}>/</span>
        <span className="text-sm" style={{ color: "var(--text-primary)" }}>Issues</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Issue title */}
        <div className="space-y-2 animate-fade-down">
          <h1 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            {issue.title}
            <span className="text-lg font-normal ml-2" style={{ color: "var(--text-secondary)" }}>#{issue.id}</span>
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs px-2 py-1 rounded-full font-medium"
              style={{ background: "#1a3a1a", color: "#3fb950" }}>
              ● Open
            </span>
            {issue.labels.map((label) => (
              <LabelBadge key={label} label={label} />
            ))}
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Opened {issue.opened_at} by {issue.opened_by}
            </span>
          </div>
        </div>

        {/* Issue body + comments thread */}
        <div className="space-y-4">
          {/* OP body */}
          <div className="animate-fade-up stagger-1">
            <CommentCard
              author={issue.opened_by}
              date={issue.opened_at}
              body={issue.body}
              isOP
            />
          </div>

          {/* Comments — staggered */}
          {issue.comments.map((comment, i) => (
            <div key={i} className={`animate-fade-up stagger-${Math.min(i + 2, 8)}`}>
              <CommentCard
                author={comment.author}
                date={comment.date}
                body={comment.body}
              />
            </div>
          ))}
        </div>

        {/* Reproduce tab — only for bugs */}
        {issue.reproduction && (
          <div className="animate-slide-right stagger-4">
            <ReproduceSection scenario={issue.reproduction as ReproductionScenario} />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Comment card ───────────────────────────────────────────────────────────

function CommentCard({
  author, date, body, isOP = false,
}: {
  author: string;
  date: string;
  body: string;
  isOP?: boolean;
}) {
  return (
    <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <div className="flex items-center justify-between px-4 py-2 border-b"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "#1f3a5f", color: "var(--link)" }}>
            {author[0].toUpperCase()}
          </div>
          <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{author}</span>
          {isOP && (
            <span className="text-xs px-1.5 py-0.5 rounded border"
              style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
              Author
            </span>
          )}
        </div>
        <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{date}</span>
      </div>
      <div className="px-4 py-3 text-sm whitespace-pre-wrap" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
        {body}
      </div>
    </div>
  );
}

// ── Reproduce tab ──────────────────────────────────────────────────────────

function ReproduceSection({ scenario }: { scenario: ReproductionScenario }) {
  const [activeTab, setActiveTab] = useState<"steps" | "buggy" | "fixed">("steps");
  const [currentStep, setCurrentStep] = useState(0);
  const [choice, setChoice] = useState<OutcomeChoice>(null);
  const [revealed, setRevealed] = useState(false);

  const isLastStep = currentStep === scenario.reproductionSteps.length - 1;
  const isNoInfo = scenario.regressionTestId === null;

  function handleChoice(c: OutcomeChoice) {
    setChoice(c);
    setRevealed(true);
  }

  function getCorrectAnswer(): OutcomeChoice {
    if (isNoInfo) return "not_enough_info";
    if (scenario.buggyVersion === null) return "not_enough_info";
    // fixedVersion === "HEAD" means the fix is already in the current code
    if (scenario.fixedVersion === "HEAD") return "cant_reproduce";
    return "reproduced";
  }

  const correctAnswer = getCorrectAnswer();

  return (
    <div className="space-y-0 rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
      {/* Tab bar */}
      <div className="flex border-b" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        {[
          { key: "steps", label: "▶ Try reproducing" },
          { key: "buggy", label: `v${scenario.buggyVersion ?? "?"} (before fix)` },
          { key: "fixed", label: `v${scenario.fixedVersion ?? "?"} (after fix)` },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActiveTab(key as typeof activeTab)}
            className="px-4 py-2 text-sm border-b-2 -mb-px transition-colors"
            style={{
              borderColor: activeTab === key ? "#f78166" : "transparent",
              color: activeTab === key ? "var(--text-primary)" : "var(--text-secondary)",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Steps tab */}
      {activeTab === "steps" && (
        <div className="p-4 space-y-4">
          {isNoInfo ? (
            <div className="rounded-md p-4 text-sm" style={{ background: "#2a1f00", color: "#d29922" }}>
              ⚠ This issue doesn&apos;t have enough information to reproduce. There are no steps, no version, and no error message.
              The correct outcome here is &ldquo;Not enough info&rdquo;.
            </div>
          ) : (
            <>
              {/* Step walker */}
              <div className="space-y-2">
                {scenario.reproductionSteps.map((step, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5"
                      style={{
                        background: i < currentStep ? "#1a3a1a" : i === currentStep ? "#1f3a5f" : "var(--surface)",
                        color: i < currentStep ? "#3fb950" : i === currentStep ? "var(--link)" : "var(--text-secondary)",
                        border: "1px solid",
                        borderColor: i === currentStep ? "var(--link)" : "var(--border)",
                      }}>
                      {i < currentStep ? "✓" : i + 1}
                    </div>
                    <p className="text-sm pt-0.5"
                      style={{ color: i <= currentStep ? "var(--text-primary)" : "var(--text-secondary)" }}>
                      {step.instruction}
                    </p>
                  </div>
                ))}
              </div>

              {/* Expected result */}
              <div className="rounded-md p-3 text-sm" style={{ background: "var(--surface)", borderLeft: "3px solid var(--border)" }}>
                <span style={{ color: "var(--text-secondary)" }}>Expected: </span>
                <span style={{ color: "var(--text-primary)" }}>{scenario.expectedResult}</span>
              </div>

              {/* Step nav */}
              {!revealed && (
                <div className="flex gap-2">
                  {!isLastStep ? (
                    <button
                      onClick={() => setCurrentStep((s) => s + 1)}
                      className="px-3 py-1.5 rounded text-sm"
                      style={{ background: "#1f3a5f", color: "var(--link)", cursor: "pointer" }}>
                      Next step →
                    </button>
                  ) : (
                    <div className="space-y-3 w-full">
                      <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
                        What happened? Mark your outcome:
                      </p>
                      <div className="flex gap-2 flex-wrap">
                        {(["reproduced", "cant_reproduce", "not_enough_info"] as OutcomeChoice[]).map((c) => (
                          <button
                            key={c!}
                            onClick={() => handleChoice(c)}
                            className="px-3 py-1.5 rounded text-sm border transition-colors"
                            style={{ borderColor: "var(--border)", color: "var(--text-primary)", background: "var(--surface)", cursor: "pointer" }}>
                            {c === "reproduced" ? "✓ Reproduced" : c === "cant_reproduce" ? "✗ Can&apos;t reproduce" : "? Not enough info"}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* Feedback */}
          {revealed && choice && (
            <div className="rounded-md p-4 space-y-2"
              style={{
                background: choice === correctAnswer ? "#1a3a1a" : "#3a1a1a",
                border: `1px solid ${choice === correctAnswer ? "#238636" : "#da3633"}`,
              }}>
              <p className="text-sm font-medium"
                style={{ color: choice === correctAnswer ? "#3fb950" : "#f85149" }}>
                {choice === correctAnswer ? "✓ Correct" : "✗ Not quite"}
              </p>
              <p className="text-sm" style={{ color: "var(--text-primary)" }}>
                {correctAnswer === "reproduced" && "This bug is still present in the current code. The buggy behavior is confirmed."}
                {correctAnswer === "cant_reproduce" && "This bug is already fixed in the current code. Check the commit history — a fix landed after this issue was opened and the issue was never closed."}
                {correctAnswer === "not_enough_info" && "There's not enough information in this report to reproduce the bug. Ask for steps, version, and error output."}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Buggy version tab */}
      {activeTab === "buggy" && (
        <div className="p-4 space-y-3">
          <div className="text-xs px-2 py-1 rounded inline-block" style={{ background: "#3a1a1a", color: "#f85149" }}>
            v{scenario.buggyVersion} — before fix
          </div>
          <div className="rounded-md p-3 text-sm font-mono"
            style={{ background: "var(--surface)", color: "#f85149", borderLeft: "3px solid #da3633" }}>
            {scenario.buggyBehavior.output}
          </div>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Type: {scenario.buggyBehavior.type.replace(/_/g, " ")}
            {scenario.buggyBehavior.verifiedByTest && " · ✓ verified by regression test"}
          </p>
        </div>
      )}

      {/* Fixed version tab */}
      {activeTab === "fixed" && (
        <div className="p-4 space-y-3">
          <div className="text-xs px-2 py-1 rounded inline-block" style={{ background: "#1a3a1a", color: "#3fb950" }}>
            v{scenario.fixedVersion} — after fix
          </div>
          <div className="rounded-md p-3 text-sm font-mono"
            style={{ background: "var(--surface)", color: "#3fb950", borderLeft: "3px solid #238636" }}>
            {scenario.fixedBehavior.output}
          </div>
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Type: {scenario.fixedBehavior.type.replace(/_/g, " ")}
            {scenario.fixedBehavior.verifiedByTest && " · ✓ verified by regression test"}
          </p>
        </div>
      )}
    </div>
  );
}

// ── Label badge ────────────────────────────────────────────────────────────

function LabelBadge({ label }: { label: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    "bug":             { bg: "#3a1a1a", color: "#f85149" },
    "good first issue": { bg: "#1f3a5f", color: "#58a6ff" },
  };
  const style = colors[label] ?? { bg: "#2a2a2a", color: "var(--text-secondary)" };
  return (
    <span className="text-xs px-2 py-0.5 rounded-full" style={style}>{label}</span>
  );
}
