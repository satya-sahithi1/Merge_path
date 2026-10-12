import Link from "next/link";
import { getMeta, getIssues, getPRs, getCommits, getFileTree } from "@/lib/loader";
import type { FileNode } from "@/lib/types";
import { AnimatedSection, AnimatedList, AnimatedItem } from "./AnimatedSection";

export default async function RepoPage({
  params,
  searchParams,
}: {
  params: Promise<{ repoId: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { repoId } = await params;
  const { tab = "files" } = await searchParams;

  const meta = getMeta(repoId);
  const issues = getIssues(repoId);
  const prs = getPRs(repoId);
  const commits = getCommits(repoId);
  const fileTree = getFileTree(repoId);

  const openIssues = issues.filter((i) => i.state === "open");
  const openPRs = prs.filter((p) => p.state === "open");

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Top nav */}
      <nav className="border-b px-6 py-3 flex items-center gap-4"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>
          ← Merge Path
        </Link>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {/* Repo header */}
        <AnimatedSection delay={0}>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span style={{ color: "var(--text-secondary)" }} className="text-sm">
                {meta.owner}
              </span>
              <span style={{ color: "var(--text-secondary)" }}>/</span>
              <span className="text-lg font-semibold" style={{ color: "var(--link)" }}>
                {meta.name}
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full border"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                Public
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {meta.description}
            </p>
            <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
              <span>⭐ {meta.stars}</span>
              <span>🍴 {meta.forks}</span>
              <span>🌐 {meta.language}</span>
              {meta.topics.map((t) => (
                <span key={t} className="px-2 py-0.5 rounded-full"
                  style={{ background: "#1f3a5f", color: "var(--link)" }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Health badge */}
        <AnimatedSection delay={0.06}>
          <div className="flex items-center gap-2 text-xs">
            <span style={{ color: "var(--text-secondary)" }}>Repo health:</span>
            <span className="px-2 py-0.5 rounded-full font-medium"
              style={{
                background: meta.health === "active" ? "#1a3a1a" : meta.health === "slow" ? "#3a2e00" : "#3a1a1a",
                color: meta.health === "active" ? "#3fb950" : meta.health === "slow" ? "#d29922" : "#f85149",
              }}>
              {meta.health}
            </span>
            <span style={{ color: "var(--text-secondary)" }}>
              Last commit: {meta.last_commit_date}
            </span>
            {meta.has_contributing && (
              <span style={{ color: "#3fb950" }}>✓ CONTRIBUTING.md</span>
            )}
            {meta.has_ci && (
              <span style={{ color: "#3fb950" }}>✓ CI</span>
            )}
          </div>
        </AnimatedSection>

        {/* Tabs */}
        <AnimatedSection delay={0.1}>
          <div className="flex gap-0 border-b" style={{ borderColor: "var(--border)" }}>
            {[
              { key: "files", label: "Files" },
              { key: "issues", label: `Issues ${openIssues.length}` },
              { key: "prs", label: `Pull Requests ${openPRs.length}` },
              { key: "commits", label: "Commits" },
            ].map(({ key, label }) => (
              <Link
                key={key}
                href={`/repo/${repoId}?tab=${key}`}
                className="px-4 py-2 text-sm border-b-2 -mb-px transition-colors"
                style={{
                  borderColor: tab === key ? "#f78166" : "transparent",
                  color: tab === key ? "var(--text-primary)" : "var(--text-secondary)",
                }}
              >
                {label}
              </Link>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab content — each tab fades in on navigation */}
        {tab === "files" && (
          <AnimatedSection delay={0.05} className="tab-fade">
            <FileTreeView nodes={fileTree.tree} repoId={repoId} />
          </AnimatedSection>
        )}
        {tab === "issues" && (
          <AnimatedSection delay={0.05} className="tab-fade">
            <IssueListView issues={issues} repoId={repoId} />
          </AnimatedSection>
        )}
        {tab === "prs" && (
          <AnimatedSection delay={0.05} className="tab-fade">
            <PRListView prs={prs} repoId={repoId} />
          </AnimatedSection>
        )}
        {tab === "commits" && (
          <AnimatedSection delay={0.05} className="tab-fade">
            <CommitsView commits={commits} />
          </AnimatedSection>
        )}

        {/* Take quiz CTA */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-md border p-4 flex items-center justify-between gap-4"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="space-y-0.5">
              <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                Done exploring?
              </p>
              <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
                Test whether you read the right signals — issues, PRs, and repo health.
              </p>
            </div>
            <Link
              href={`/repo/${repoId}/quiz`}
              className="whitespace-nowrap px-4 py-2 rounded-md text-sm font-medium"
              style={{ background: "var(--accent)", color: "#fff" }}
            >
              Take the quiz →
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}

// ── File tree ──────────────────────────────────────────────────────────────

function FileTreeView({ nodes, repoId }: { nodes: FileNode[]; repoId: string }) {
  return (
    <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <div className="px-4 py-2 text-xs border-b"
        style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-secondary)" }}>
        main
      </div>
      <AnimatedList>
        {nodes.map((node) => (
          <FileNodeRow key={node.name} node={node} repoId={repoId} depth={0} />
        ))}
      </AnimatedList>
    </div>
  );
}

function FileNodeRow({ node, repoId, depth }: { node: FileNode; repoId: string; depth: number }) {
  const indent = depth * 16;
  if (node.type === "dir") {
    return (
      <>
        <AnimatedItem>
          <div className="flex items-center gap-2 px-4 py-1.5 border-b text-sm"
            style={{ borderColor: "var(--border)", paddingLeft: `${16 + indent}px`, color: "var(--text-primary)" }}>
            <span style={{ color: "#d29922" }}>📁</span>
            <span>{node.name}</span>
          </div>
        </AnimatedItem>
        {node.children.map((child) => (
          <FileNodeRow key={child.name} node={child} repoId={repoId} depth={depth + 1} />
        ))}
      </>
    );
  }
  return (
    <AnimatedItem>
      <Link
        href={`/repo/${repoId}/file?name=${encodeURIComponent(node.name)}`}
        className="flex items-center gap-2 px-4 py-1.5 border-b text-sm hover:underline block"
        style={{ borderColor: "var(--border)", paddingLeft: `${16 + indent}px`, color: "var(--link)" }}
      >
        <span>📄</span>
        <span>{node.name}</span>
      </Link>
    </AnimatedItem>
  );
}

// ── Issue list ─────────────────────────────────────────────────────────────

function IssueListView({ issues, repoId }: { issues: ReturnType<typeof getIssues>; repoId: string }) {
  return (
    <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <AnimatedList>
        {issues.map((issue, i) => (
          <AnimatedItem key={issue.id}>
            <Link
              href={`/repo/${repoId}/issues/${issue.id}`}
              className="flex items-start gap-3 px-4 py-3 border-b row-hover block"
              style={{ borderColor: i === issues.length - 1 ? "transparent" : "var(--border)" }}
            >
              <span style={{ color: "#3fb950", marginTop: 2 }}>●</span>
              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                    {issue.title}
                  </span>
                  {issue.labels.map((label) => (
                    <LabelBadge key={label} label={label} />
                  ))}
                </div>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  #{issue.id} opened {issue.opened_at} by {issue.opened_by}
                  {issue.comments.length > 0 && ` · ${issue.comments.length} comments`}
                </div>
              </div>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedList>
    </div>
  );
}

// ── PR list ────────────────────────────────────────────────────────────────

function PRListView({ prs, repoId }: { prs: ReturnType<typeof getPRs>; repoId: string }) {
  return (
    <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <AnimatedList>
        {prs.map((pr, i) => (
          <AnimatedItem key={pr.id}>
            <Link
              href={`/repo/${repoId}/prs/${pr.id}`}
              className="flex items-start gap-3 px-4 py-3 border-b row-hover block"
              style={{ borderColor: i === prs.length - 1 ? "transparent" : "var(--border)" }}
            >
              <span style={{ color: pr.state === "merged" ? "#a371f7" : pr.state === "open" ? "#3fb950" : "#f85149", marginTop: 2 }}>
                {pr.state === "merged" ? "⬟" : "●"}
              </span>
              <div className="flex-1 space-y-1">
                <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>
                  {pr.title}
                </span>
                <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
                  #{pr.id} {pr.state === "merged" ? `merged ${pr.merged_at}` : `opened ${pr.opened_at}`} by {pr.author}
                  {pr.linked_issue && ` · fixes #${pr.linked_issue}`}
                </div>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full capitalize"
                style={{
                  background: pr.state === "merged" ? "#2d1e4f" : pr.state === "open" ? "#1a3a1a" : "#3a1a1a",
                  color: pr.state === "merged" ? "#a371f7" : pr.state === "open" ? "#3fb950" : "#f85149",
                }}>
                {pr.state}
              </span>
            </Link>
          </AnimatedItem>
        ))}
      </AnimatedList>
    </div>
  );
}

// ── Commits ────────────────────────────────────────────────────────────────

function CommitsView({ commits }: { commits: ReturnType<typeof getCommits> }) {
  return (
    <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
      <AnimatedList>
        {commits.map((commit, i) => (
          <AnimatedItem key={commit.hash}>
            <div
              className="flex items-center justify-between px-4 py-3 border-b text-sm"
              style={{ borderColor: i === commits.length - 1 ? "transparent" : "var(--border)" }}
            >
              <div className="flex items-center gap-3">
                <span style={{ color: "var(--text-secondary)" }}>◎</span>
                <span style={{ color: "var(--text-primary)" }}>{commit.message}</span>
              </div>
              <div className="flex items-center gap-4 text-xs" style={{ color: "var(--text-secondary)" }}>
                <span>{commit.author}</span>
                <span>{commit.date}</span>
                <code className="px-1.5 py-0.5 rounded text-xs"
                  style={{ background: "var(--surface)", color: "var(--link)" }}>
                  {commit.hash}
                </code>
              </div>
            </div>
          </AnimatedItem>
        ))}
      </AnimatedList>
    </div>
  );
}

// ── Shared ─────────────────────────────────────────────────────────────────

function LabelBadge({ label }: { label: string }) {
  const colors: Record<string, { bg: string; color: string }> = {
    "bug": { bg: "#3a1a1a", color: "#f85149" },
    "good first issue": { bg: "#1f3a5f", color: "#58a6ff" },
  };
  const style = colors[label] ?? { bg: "#2a2a2a", color: "var(--text-secondary)" };
  return (
    <span className="text-xs px-2 py-0.5 rounded-full" style={style}>
      {label}
    </span>
  );
}
