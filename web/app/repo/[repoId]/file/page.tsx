import Link from "next/link";
import notesFiles from "@/lib/data/notes-app/files.json";
import notesMeta from "@/lib/data/notes-app/meta.json";
import type { FileNode } from "@/lib/types";

export default async function FileViewerPage({
  params,
  searchParams,
}: {
  params: Promise<{ repoId: string }>;
  searchParams: Promise<{ name?: string }>;
}) {
  const { repoId } = await params;
  const { name } = await searchParams;
  const meta = notesMeta;

  const tree = notesFiles.tree as FileNode[];

  function findFile(nodes: FileNode[], filename: string): { name: string; content: string } | undefined {
    for (const node of nodes) {
      if (node.type === "file" && node.name === filename) return node;
      if (node.type === "dir") {
        const found = findFile(node.children, filename);
        if (found) return found;
      }
    }
    return undefined;
  }

  const file = name ? findFile(tree, name) : undefined;

  if (!name || !file) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--background)" }}>
        <p style={{ color: "var(--text-secondary)" }}>File not found.</p>
      </div>
    );
  }

  const lines = file.content.split("\n");
  const isPython = file.name.endsWith(".py");
  const isMarkdown = file.name.endsWith(".md");

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
        <span className="text-sm" style={{ color: "var(--text-primary)" }}>{file.name}</span>
      </nav>

      <div className="max-w-5xl mx-auto px-4 py-6 space-y-4">
        {/* File header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span style={{ color: "var(--text-secondary)" }}>📄</span>
            <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{file.name}</span>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>{lines.length} lines</span>
          </div>
          <Link href={`/repo/${repoId}`}
            className="text-xs px-3 py-1.5 rounded border"
            style={{ borderColor: "var(--border)", color: "var(--text-secondary)" }}>
            ← Back to repo
          </Link>
        </div>

        {/* File content */}
        <div className="rounded-md border overflow-hidden" style={{ borderColor: "var(--border)" }}>
          <div className="px-4 py-2 border-b flex items-center justify-between"
            style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {isPython ? "Python" : isMarkdown ? "Markdown" : "Text"}
            </span>
            <span className="text-xs" style={{ color: "var(--text-secondary)" }}>
              {lines.length} lines · {file.content.length} bytes
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono" style={{ borderCollapse: "collapse" }}>
              <tbody>
                {lines.map((line, i) => (
                  <tr key={i} className="hover:bg-white/5">
                    <td
                      className="px-4 py-0 text-right select-none w-12"
                      style={{ color: "var(--text-secondary)", borderRight: "1px solid var(--border)", fontSize: "12px", lineHeight: "1.6" }}>
                      {i + 1}
                    </td>
                    <td className="px-4 py-0 whitespace-pre"
                      style={{ color: "var(--text-primary)", lineHeight: "1.6" }}>
                      {line || " "}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
