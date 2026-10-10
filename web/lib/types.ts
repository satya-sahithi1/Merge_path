// Shared types for the practice repo data model

export type RepoHealth = "active" | "slow" | "abandoned";

export type RepoMeta = {
  id: string;
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  owner: string;
  health: RepoHealth;
  last_commit_date: string;
  has_readme: boolean;
  has_contributing: boolean;
  has_ci: boolean;
  avg_pr_response_days: number;
  open_issues: number;
  open_prs: number;
  stale_prs: number;
  merged_prs_last_90_days: number;
  maintainer_replies_in_issues: boolean;
  topics: string[];
};

export type IssueComment = {
  author: string;
  date: string;
  body: string;
};

export type ReproductionStep = {
  instruction: string;
  hint?: string;
};

export type BehaviorResult = {
  output: string;
  type: "crash" | "wrong_output" | "silent_failure" | "success" | "validation_error";
  verifiedByTest: boolean;
};

export type ReproductionScenario = {
  issueId: string;
  buggyVersion: string | null;
  fixedVersion: string | null;
  reproductionSteps: ReproductionStep[];
  expectedResult: string;
  buggyBehavior: BehaviorResult;
  fixedBehavior: BehaviorResult;
  regressionTestId: string | null;
};

export type LessonTag =
  | "genuine_good_pick"
  | "claimed_never_started"
  | "already_fixed_by_pr"
  | "good_first_issue_hard"
  | "no_reproduction_steps"
  | "good_newcomer_pr"
  | "polite_review_response";

export type Issue = {
  id: number;
  title: string;
  state: "open" | "closed";
  labels: string[];
  opened_by: string;
  opened_at: string;
  assigned_to: string | null;
  body: string;
  comments: IssueComment[];
  lesson: LessonTag;
  lesson_feedback: string;
  reproduction: ReproductionScenario;
};

export type ReviewComment = {
  author: string;
  date: string;
  body: string;
  resolved?: boolean;
};

export type PR = {
  id: number;
  title: string;
  state: "open" | "merged" | "closed";
  author: string;
  opened_at: string;
  merged_at: string | null;
  linked_issue: number | null;
  branch: string;
  description: string;
  diff_summary: string;
  review_comments: ReviewComment[];
  lesson: LessonTag | null;
  lesson_note: string;
};

export type Commit = {
  hash: string;
  author: string;
  date: string;
  message: string;
};

export type FileNode =
  | { name: string; type: "file"; content: string }
  | { name: string; type: "dir"; children: FileNode[] };

export type FileTree = {
  tree: FileNode[];
};
