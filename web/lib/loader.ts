import type { RepoMeta, Issue, PR, Commit, FileTree, Quiz } from "./types";

// In v1, repos are bundled as static JSON. This loader is the single
// point of access — pages never import JSON directly.

function loadJson<T>(repoId: string, file: string): T {
  // Next.js resolves require() at build time for JSON in the project tree
  return require(`./data/${repoId}/${file}.json`) as T;
}

export function getMeta(repoId: string): RepoMeta {
  return loadJson<RepoMeta>(repoId, "meta");
}

export function getIssues(repoId: string): Issue[] {
  return loadJson<Issue[]>(repoId, "issues");
}

export function getIssue(repoId: string, issueId: number): Issue | undefined {
  return getIssues(repoId).find((i) => i.id === issueId);
}

export function getPRs(repoId: string): PR[] {
  return loadJson<PR[]>(repoId, "prs");
}

export function getPR(repoId: string, prId: number): PR | undefined {
  return getPRs(repoId).find((p) => p.id === prId);
}

export function getCommits(repoId: string): Commit[] {
  return loadJson<Commit[]>(repoId, "commits");
}

export function getFileTree(repoId: string): FileTree {
  return loadJson<FileTree>(repoId, "files");
}

export function findFile(
  repoId: string,
  filename: string
): { name: string; content: string } | undefined {
  const tree = getFileTree(repoId);

  function search(nodes: FileTree["tree"]): { name: string; content: string } | undefined {
    for (const node of nodes) {
      if (node.type === "file" && node.name === filename) {
        return { name: node.name, content: node.content };
      }
      if (node.type === "dir") {
        const found = search(node.children);
        if (found) return found;
      }
    }
    return undefined;
  }

  return search(tree.tree);
}

export function getQuiz(repoId: string): Quiz {
  return loadJson<Quiz>(repoId, "quiz");
}

// All available repo IDs — add new repos here as they're written
export const REPO_IDS = ["notes-app", "weatherly", "gradewise", "mdlite"] as const;
export type RepoId = (typeof REPO_IDS)[number];
