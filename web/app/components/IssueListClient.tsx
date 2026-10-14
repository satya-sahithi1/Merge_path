"use client";

import { useState } from "react";
import Link from "next/link";
import { IssueOpenIcon, IssueClosedIcon, CommentIcon, PersonIcon, TagIcon } from "@/app/components/GithubIcons";

type Issue = {
  id: number;
  title: string;
  state: string;
  labels: string[];
  opened_by: string;
  opened_at: string;
  comments: { author: string; date: string; body: string }[];
};

function LabelBadge({ label }: { label: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    bug: { bg: "#3a1a1a", color: "#f85149" },
    "good first issue": { bg: "#1f3a5f", color: "#58a6ff" },
    enhancement: { bg: "#1a2e1a", color: "#56d364" },
    documentation: { bg: "#1c2033", color: "#79c0ff" },
  };
  const s = colors[label] ?? { bg: "#2a2a2a", color: "var(--text-secondary)" };
  return (
    <span className="text-xs px-2 py-0.5 rounded-full" style={s}>
      {label}
    </span>
  );
}

export default function IssueListClient({
  issues,
  repoId,
}: {
  issues: Issue[];
  repoId: string;
}) {
  const [tab, setTab] = useState<"open" | "closed">("open");
  const [author, setAuthor] = useState("all");
  const [label, setLabel] = useState("all");

  // Derive unique author and label lists
  const allAuthors = Array.from(new Set(issues.map((i) => i.opened_by))).sort();
  const allLabels = Array.from(new Set(issues.flatMap((i) => i.labels))).sort();

  const filtered = issues.filter((i) => {
    if (i.state !== tab) return false;
    if (author !== "all" && i.opened_by !== author) return false;
    if (label !== "all" && !i.labels.includes(label)) return false;
    return true;
  });

  const openCount = issues.filter((i) => i.state === "open").length;
  const closedCount = issues.filter((i) => i.state === "closed").length;

  return (
    <div
      className="rounded-md border overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      {/* Header: tabs + filters */}
      <div
        className="flex flex-wrap items-center gap-3 px-4 py-2 border-b"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}
      >
        {/* Open / Closed tabs */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setTab("open")}
            className="flex items-center gap-1.5 text-sm font-medium"
            style={{
              color: tab === "open" ? "var(--text-primary)" : "var(--text-secondary)",
              background: "none",
              border: "none",
              cursor: "pointer",
              paddingBottom: "2px",
              borderBottom: tab === "open" ? "2px solid var(--text-primary)" : "2px solid transparent",
            }}
          >
            <IssueOpenIcon size={14} style={{ color: "#3fb950" }} />
            {openCount} Open
          </button>
          <button
            onClick={() => setTab("closed")}
            className="flex items-center gap-1.5 text-sm"
            style={{
              color: tab === "closed" ? "var(--text-primary)" : "var(--text-secondary)",
              background: "none",
              border: "none",
              cursor: "pointer",
              paddingBottom: "2px",
              borderBottom: tab === "closed" ? "2px solid var(--text-primary)" : "2px solid transparent",
            }}
          >
            <IssueClosedIcon size={14} style={{ color: "#8b949e" }} />
            {closedCount} Closed
          </button>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Author filter */}
        <div className="flex items-center gap-1.5">
          <PersonIcon size={13} style={{ color: "var(--text-secondary)" }} />
          <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="text-xs rounded px-2 py-1"
            style={{
              background: "var(--surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              cursor: "pointer",
            }}
          >
            <option value="all">Author</option>
            {allAuthors.map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>

        {/* Label filter */}
        <div className="flex items-center gap-1.5">
          <TagIcon size={13} style={{ color: "var(--text-secondary)" }} />
          <select
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            className="text-xs rounded px-2 py-1"
            style={{
              background: "var(--surface)",
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              cursor: "pointer",
            }}
          >
            <option value="all">Label</option>
            {allLabels.map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Issue rows */}
      {filtered.length === 0 ? (
        <div className="px-4 py-8 text-sm text-center" style={{ color: "var(--text-secondary)" }}>
          No {tab} issues match your filters.
        </div>
      ) : (
        <div>
          {filtered.map((issue, i) => (
            <div
              key={issue.id}
              className="flex items-start gap-3 px-4 py-3 border-b"
              style={{
                borderColor:
                  i === filtered.length - 1 ? "transparent" : "var(--border)",
              }}
            >
              {/* Status icon */}
              {issue.state === "open" ? (
                <IssueOpenIcon
                  size={16}
                  style={{ color: "#3fb950", marginTop: 2, flexShrink: 0 }}
                />
              ) : (
                <IssueClosedIcon
                  size={16}
                  style={{ color: "#8b949e", marginTop: 2, flexShrink: 0 }}
                />
              )}

              {/* Main content — clicking title goes to issue detail */}
              <div className="flex-1 space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href={`/repo/${repoId}/issues/${issue.id}`}
                    className="text-sm font-medium hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {issue.title}
                  </Link>
                  {issue.labels.map((lbl) => (
                    <LabelBadge key={lbl} label={lbl} />
                  ))}
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  #{issue.id} {issue.state === "open" ? "opened" : "closed"} {issue.opened_at} by {issue.opened_by}
                </div>
              </div>

              {/* Comment count — links to issue detail (which shows comments) */}
              {issue.comments.length > 0 && (
                <Link
                  href={`/repo/${repoId}/issues/${issue.id}`}
                  className="flex items-center gap-1 text-xs hover:underline flex-shrink-0"
                  style={{ color: "var(--text-secondary)" }}
                  title={`${issue.comments.length} comment${issue.comments.length !== 1 ? "s" : ""}`}
                >
                  <CommentIcon size={14} />
                  {issue.comments.length}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
