import Link from "next/link";

// Load all repos' PRs at build time so the server component can pick
// the right one at runtime from the URL params.
import notesPRs   from "@/lib/data/notes-app/prs.json";
import notesMeta  from "@/lib/data/notes-app/meta.json";
import weatherlyPRs  from "@/lib/data/weatherly/prs.json";
import weatherlyMeta from "@/lib/data/weatherly/meta.json";
import gradewisePRs  from "@/lib/data/gradewise/prs.json";
import gradewiseMeta from "@/lib/data/gradewise/meta.json";
import mdlitePRs  from "@/lib/data/mdlite/prs.json";
import mdliteMeta from "@/lib/data/mdlite/meta.json";

const REPO_DATA: Record<string, { prs: typeof notesPRs; meta: typeof notesMeta }> = {
  "notes-app": { prs: notesPRs,      meta: notesMeta },
  "weatherly":  { prs: weatherlyPRs as unknown as typeof notesPRs,  meta: weatherlyMeta as unknown as typeof notesMeta },
  "gradewise":  { prs: gradewisePRs as unknown as typeof notesPRs,  meta: gradewiseMeta as unknown as typeof notesMeta },
  "mdlite":     { prs: mdlitePRs as unknown as typeof notesPRs,  meta: mdliteMeta as unknown as typeof notesMeta },
};

export default async function PRPage({
  params,
}: {
  params: Promise<{ repoId: string; prId: string }>;
}) {
  const { repoId, prId } = await params;

  const repo = REPO_DATA[repoId];
  const prs  = repo?.prs ?? [];
  const pr   = prs.find((p) => p.id === Number(prId));
  const meta = repo?.meta ?? notesMeta;

  if (!pr) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <p style={{ color: "var(--text-secondary)" }}>PR not found.</p>
      </div>
    );
  }

  const stateColor = pr.state === "merged" ? "#a371f7" : pr.state === "open" ? "#3fb950" : "#f85149";
  const stateBg    = pr.state === "merged" ? "#2d1e4f" : pr.state === "open" ? "#1a3a1a" : "#3a1a1a";

  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Nav */}
      <nav className="border-b px-6 py-3 flex items-center gap-4"
        style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
        <Link href="/" className="text-sm" style={{ color: "var(--text-secondary)" }}>Merge Path</Link>
        <span style={{ color: "var(--text-secondary)" }}>/</span>
        <Link href={`/repo/${repoId}?tab=prs`} className="text-sm" style={{ color: "var(--text-secondary)" }}>
          {meta.name}
        </Link>
        <span style={{ color: "var(--text-secondary)" }}>/</span>
        <span className="text-sm" style={{ color: "var(--text-primary)" }}>Pull Requests</span>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* PR title + status */}
        <div className="space-y-2">
          <h1 className="text-xl font-semibold" style={{ color: "var(--text-primary)" }}>
            {pr.title}
            <span className="text-lg font-normal ml-2" style={{ color: "var(--text-secondary)" }}>#{pr.id}</span>
          </h1>
          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-xs px-2 py-1 rounded-full font-medium capitalize"
              style={{ background: stateBg, color: stateColor }}>
              {pr.state === "merged" ? "⬟ Merged" : pr.state === "open" ? "● Open" : "✗ Closed"}
            </span>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {pr.state === "merged"
                ? `Merged ${pr.merged_at} by ${pr.author}`
                : `Opened ${pr.opened_at} by ${pr.author}`}
            </span>
            {pr.linked_issue && (
              <Link href={`/repo/${repoId}/issues/${pr.linked_issue}`}
                className="text-xs px-2 py-0.5 rounded"
                style={{ background: "var(--surface)", color: "var(--link)" }}>
                Fixes #{pr.linked_issue}
              </Link>
            )}
          </div>
          <div className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Branch: <code className="px-1.5 py-0.5 rounded" style={{ background: "var(--surface)" }}>{pr.branch}</code>
          </div>
        </div>

        {/* PR description */}
        <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="flex items-center justify-between px-4 py-2 border-b"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                style={{ background: "#1f3a5f", color: "var(--link)" }}>
                {pr.author[0].toUpperCase()}
              </div>
              <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{pr.author}</span>
              <span className="text-xs px-1.5 py-0.5 rounded border"
                style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
                Author
              </span>
            </div>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{pr.opened_at}</span>
          </div>
          <div className="px-4 py-3 text-sm whitespace-pre-wrap" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
            {pr.description}
          </div>
        </div>

        {/* Diff summary */}
        <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="px-4 py-2 border-b text-xs"
            style={{ borderColor: "var(--border)", background: "var(--surface)", color: "var(--text-secondary)" }}>
            Changes
          </div>
          <div className="px-4 py-3 text-sm font-mono"
            style={{ background: "#0d1f0d", color: "#3fb950", borderLeft: "3px solid #238636" }}>
            + {pr.diff_summary}
          </div>
        </div>

        {/* Review comments */}
        {pr.review_comments.length > 0 && (
          <div className="space-y-4">
            <h2 className="text-sm font-medium" style={{ color: "var(--text-secondary)" }}>
              Review conversation
            </h2>
            {pr.review_comments.map((comment, i) => (
              <div key={i} className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
                <div className="flex items-center justify-between px-4 py-2 border-b"
                  style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{ background: "#2d1e4f", color: "#a371f7" }}>
                      {comment.author[0].toUpperCase()}
                    </div>
                    <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{comment.author}</span>
                    {"resolved" in comment && comment.resolved && (
                      <span className="text-xs px-1.5 py-0.5 rounded"
                        style={{ background: "#1a3a1a", color: "#3fb950" }}>
                        resolved
                      </span>
                    )}
                  </div>
                  <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{comment.date}</span>
                </div>
                <div className="px-4 py-3 text-sm whitespace-pre-wrap" style={{ color: "var(--text-primary)", lineHeight: 1.6 }}>
                  {comment.body}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Lesson note */}
        {pr.lesson_note && (
          <div className="rounded-md p-4 text-sm space-y-1"
            style={{ background: "#1f2d1f", border: "1px solid #238636" }}>
            <p className="text-xs font-medium" style={{ color: "#3fb950" }}>💡 What this shows</p>
            <p style={{ color: "var(--text-primary)" }}>{pr.lesson_note}</p>
          </div>
        )}
      </div>
    </div>
  );
}
