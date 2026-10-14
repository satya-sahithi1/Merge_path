"use client";

import { useState } from "react";
import Link from "next/link";
import {
  PROpenIcon,
  PRMergedIcon,
  PRClosedIcon,
  CommentIcon,
  PersonIcon,
  TagIcon,
} from "@/app/components/GithubIcons";

type PR = {
  id: number;
  title: string;
  state: string;
  author: string;
  opened_at: string;
  merged_at?: string | null;
  linked_issue?: number | null;
  review_comments: { author: string; date: string; body: string }[];
};

export default function PRListClient({
  prs,
  repoId,
}: {
  prs: PR[];
  repoId: string;
}) {
  const [tab, setTab] = useState<"open" | "closed" | "merged">("open");
  const [author, setAuthor] = useState("all");

  const allAuthors = Array.from(new Set(prs.map((p) => p.author))).sort();

  const filtered = prs.filter((p) => {
    if (p.state !== tab) return false;
    if (author !== "all" && p.author !== author) return false;
    return true;
  });

  const openCount = prs.filter((p) => p.state === "open").length;
  const closedCount = prs.filter((p) => p.state === "closed").length;
  const mergedCount = prs.filter((p) => p.state === "merged").length;

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
        {/* Tabs */}
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
              borderBottom:
                tab === "open"
                  ? "2px solid var(--text-primary)"
                  : "2px solid transparent",
            }}
          >
            <PROpenIcon size={14} style={{ color: "#3fb950" }} />
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
              borderBottom:
                tab === "closed"
                  ? "2px solid var(--text-primary)"
                  : "2px solid transparent",
            }}
          >
            <PRClosedIcon size={14} style={{ color: "#f85149" }} />
            {closedCount} Closed
          </button>
          <button
            onClick={() => setTab("merged")}
            className="flex items-center gap-1.5 text-sm"
            style={{
              color: tab === "merged" ? "var(--text-primary)" : "var(--text-secondary)",
              background: "none",
              border: "none",
              cursor: "pointer",
              paddingBottom: "2px",
              borderBottom:
                tab === "merged"
                  ? "2px solid var(--text-primary)"
                  : "2px solid transparent",
            }}
          >
            <PRMergedIcon size={14} style={{ color: "#a371f7" }} />
            {mergedCount} Merged
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

        {/* Label filter placeholder (PRs don't have labels in the data, but keeping UI consistent) */}
        <div className="flex items-center gap-1.5">
          <TagIcon size={13} style={{ color: "var(--text-secondary)" }} />
          <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Label
          </span>
        </div>
      </div>

      {/* PR rows */}
      {filtered.length === 0 ? (
        <div
          className="px-4 py-8 text-sm text-center"
          style={{ color: "var(--text-secondary)" }}
        >
          No {tab} pull requests match your filters.
        </div>
      ) : (
        <div>
          {filtered.map((pr, i) => (
            <div
              key={pr.id}
              className="flex items-start gap-3 px-4 py-3 border-b"
              style={{
                borderColor:
                  i === filtered.length - 1 ? "transparent" : "var(--border)",
              }}
            >
              {/* Status icon */}
              {pr.state === "merged" ? (
                <PRMergedIcon
                  size={16}
                  style={{ color: "#a371f7", marginTop: 2, flexShrink: 0 }}
                />
              ) : pr.state === "open" ? (
                <PROpenIcon
                  size={16}
                  style={{ color: "#3fb950", marginTop: 2, flexShrink: 0 }}
                />
              ) : (
                <PRClosedIcon
                  size={16}
                  style={{ color: "#f85149", marginTop: 2, flexShrink: 0 }}
                />
              )}

              {/* Main content */}
              <div className="flex-1 space-y-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <Link
                    href={`/repo/${repoId}/prs/${pr.id}`}
                    className="text-sm font-medium hover:underline"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {pr.title}
                  </Link>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full capitalize"
                    style={{
                      background:
                        pr.state === "merged"
                          ? "#2d1e4f"
                          : pr.state === "open"
                          ? "#1a3a1a"
                          : "#3a1a1a",
                      color:
                        pr.state === "merged"
                          ? "#a371f7"
                          : pr.state === "open"
                          ? "#3fb950"
                          : "#f85149",
                    }}
                  >
                    {pr.state}
                  </span>
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  #{pr.id}{" "}
                  {pr.state === "merged"
                    ? `merged ${pr.merged_at}`
                    : `opened ${pr.opened_at}`}{" "}
                  by {pr.author}
                  {pr.linked_issue && ` · fixes #${pr.linked_issue}`}
                </div>
              </div>

              {/* Comment count — links to PR detail page (review_comments are shown there) */}
              {pr.review_comments.length > 0 && (
                <Link
                  href={`/repo/${repoId}/prs/${pr.id}`}
                  className="flex items-center gap-1 text-xs hover:underline flex-shrink-0"
                  style={{ color: "var(--text-secondary)" }}
                  title={`${pr.review_comments.length} comment${
                    pr.review_comments.length !== 1 ? "s" : ""
                  }`}
                >
                  <CommentIcon size={14} />
                  {pr.review_comments.length}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
