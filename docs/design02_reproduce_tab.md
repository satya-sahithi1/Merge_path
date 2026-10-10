# UPDATED AND VERIFIED PLAN
# Reproduce Tab — Design

Supersedes the reproduce tab notes in design02.md.
Decided: 2026-10-10. Approach: Option A (build-time verification, no in-browser code execution).

---

## What this screen does

The reproduce tab lets a learner walk through a bug report step by step and observe what the buggy version does versus what the fixed version does. The goal is to teach two habits:
- Reproduce before you fix.
- Check merged PRs before assuming an issue is still open.

---

## How it works (Option A — build-time verification)

Practice repo source code lives in the repository alongside the app. Each bug scenario has a corresponding regression test. Tests run in CI when content is authored or updated. The test confirms:
- The buggy version of the code crashes or misbehaves as described.
- The fixed version behaves correctly.

The verified outcomes are written into the scenario JSON. The UI reads those outcomes and displays them. The browser never executes any code at runtime.

This keeps the stack simple (Next.js + static JSON, no runtime sandbox) while keeping the content honest. If a test fails in CI, the scenario cannot ship until the code and the scenario description are consistent.

Option B (running code in the browser via sandboxed JS or Pyodide for Python) is a possible later enhancement, not a v1 requirement.

---

## ReproductionScenario type

```typescript
type ReproductionStep = {
  instruction: string;
  hint?: string; // optional: shown if user seems stuck, add in later versions
};

type ReproductionScenario = {
  issueId: string;
  buggyVersion: string;         // e.g. "1.0.0"
  fixedVersion: string;         // e.g. "1.1.0"
  reproductionSteps: ReproductionStep[];
  expectedResult: string;       // what should have happened
  buggyBehavior: {
    output: string;             // e.g. "Uncaught TypeError: title is undefined"
    type: "crash" | "wrong_output" | "silent_failure";
    verifiedByTest: boolean;    // must be true before scenario ships
  };
  fixedBehavior: {
    output: string;             // e.g. "Validation error: Title cannot be empty"
    type: "success" | "validation_error";
    verifiedByTest: boolean;
  };
  regressionTestId: string;     // maps to a test file in /tests
};
```

---

## Three things that must hold

**1. Tests verify the behavior**
Every scenario has a regression test in `tests/scenario-consistency.test.ts`. The test imports the buggy and fixed versions of the relevant file, runs the scenario, and asserts the outcomes match what is described in the scenario JSON. CI fails if they do not match.

**2. Scenario metadata is complete and linked**
A consistency check (also run in CI) reads every `issues.json`, finds every `regressionTestId`, and asserts the corresponding test file exists. This catches drift — if someone updates a scenario but forgets to update or create the test, the build fails.

**3. UI only displays, never executes**
The reproduce panel walks through `reproductionSteps` one at a time. When the user selects "Version 1.0 (before fix)" the panel shows `buggyBehavior.output`. When they select "Version 1.1 (after fix)" it shows `fixedBehavior.output`. No code runs in the browser. The UI is a display layer over verified JSON.

---

## Learner interaction flow

1. Learner reads the issue body and reproduction steps.
2. Learner clicks through each step in the simulate panel.
3. Learner selects an outcome: **Reproduced / Can't reproduce / Not enough info**.
4. The panel reveals the correct answer and explains why.
5. Learner can toggle between v1.0 and v1.1 to see the difference.

The learner makes the call before seeing the result. The panel does not give the answer away.

---

## Example scenario (notes-app, issue #12)

```json
{
  "issueId": "notes-app-12",
  "buggyVersion": "1.0.0",
  "fixedVersion": "1.1.0",
  "reproductionSteps": [
    { "instruction": "Open the notes app." },
    { "instruction": "Create a new note." },
    { "instruction": "Leave the title field empty." },
    { "instruction": "Click Save." }
  ],
  "expectedResult": "The app displays a validation message: Title cannot be empty.",
  "buggyBehavior": {
    "output": "Uncaught TypeError: Cannot read properties of undefined (reading 'trim')",
    "type": "crash",
    "verifiedByTest": true
  },
  "fixedBehavior": {
    "output": "Validation error: Title cannot be empty.",
    "type": "validation_error",
    "verifiedByTest": true
  },
  "regressionTestId": "notes-app/empty-title-crash"
}
```

---

## File structure

```
practice-repos/
  notes-app/
    src/
      notes.ts            ← buggy version (1.0.0)
      notes.fixed.ts      ← fixed version (1.1.0)
    scenarios/
      issues.json         ← contains ReproductionScenario per issue
tests/
  scenario-consistency.test.ts   ← verifies every regressionTestId has a test
  notes-app/
    empty-title-crash.test.ts    ← the actual regression test
```

---

## What the UI does not do

- Does not run code in the browser.
- Does not show diffs or source code to the learner (that is the file explorer's job).
- Does not reveal the answer before the learner picks a reproduction outcome.
