(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/mission/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MissionPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/progress.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/loader.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MissionContent() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [repoId, setRepoId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPO_IDS"][0]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "MissionContent.useEffect": ()=>{
            const param = searchParams.get("repo");
            const valid = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPO_IDS"].includes(param ?? "");
            const resolved = valid ? param : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$loader$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REPO_IDS"][0];
            setRepoId(resolved);
            localStorage.setItem("merge-path-step", "mission");
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRepoStep"])(resolved, "mission");
        }
    }["MissionContent.useEffect"], [
        searchParams
    ]);
    function handleStart() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setRepoStep"])(repoId, "exploring");
        router.push(`/repo/${repoId}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex flex-col",
        style: {
            background: "var(--background)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b px-6 py-3 flex items-center justify-between",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "Merge Path"
                    }, void 0, false, {
                        fileName: "[project]/app/mission/page.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/repos",
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "← All repos"
                    }, void 0, false, {
                        fileName: "[project]/app/mission/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/mission/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 flex items-center justify-center px-4 py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border p-8 space-y-6",
                            style: {
                                borderColor: "var(--border)",
                                background: "var(--surface)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs font-semibold uppercase tracking-widest",
                                            style: {
                                                color: "var(--text-secondary)"
                                            },
                                            children: "Your mission"
                                        }, void 0, false, {
                                            fileName: "[project]/app/mission/page.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs px-2 py-0.5 rounded-full",
                                            style: {
                                                background: "#1f3a5f",
                                                color: "var(--link)",
                                                border: "1px solid #388bfd"
                                            },
                                            children: repoId
                                        }, void 0, false, {
                                            fileName: "[project]/app/mission/page.tsx",
                                            lineNumber: 45,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/mission/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base",
                                    style: {
                                        color: "var(--text-primary)",
                                        lineHeight: "1.8"
                                    },
                                    children: "You've just found this repo. Find one issue you could realistically take on. One you could start on without asking for clarification first."
                                }, void 0, false, {
                                    fileName: "[project]/app/mission/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    style: {
                                        color: "var(--text-secondary)"
                                    },
                                    children: "You have about 3 minutes. There's no hard lock — the point is to go in with a goal, not to click around without direction."
                                }, void 0, false, {
                                    fileName: "[project]/app/mission/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                                    style: {
                                        borderColor: "var(--border)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/mission/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-end",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: handleStart,
                                        className: "px-6 py-2.5 rounded-md text-sm font-medium",
                                        style: {
                                            background: "var(--accent)",
                                            color: "#fff",
                                            cursor: "pointer",
                                            border: "none"
                                        },
                                        children: "Start exploring →"
                                    }, void 0, false, {
                                        fileName: "[project]/app/mission/page.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/mission/page.tsx",
                                    lineNumber: 63,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/mission/page.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: [
                                "Changed your mind?",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/repos",
                                    style: {
                                        color: "var(--link)"
                                    },
                                    children: "Pick a different repo"
                                }, void 0, false, {
                                    fileName: "[project]/app/mission/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/mission/page.tsx",
                            lineNumber: 72,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/mission/page.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/mission/page.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/mission/page.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(MissionContent, "5LK2yL+b1PBtOxrdMTnDP3VS+yY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = MissionContent;
function MissionPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MissionContent, {}, void 0, false, {
            fileName: "[project]/app/mission/page.tsx",
            lineNumber: 85,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/mission/page.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c1 = MissionPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "MissionContent");
__turbopack_context__.k.register(_c1, "MissionPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/gradewise/commits.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "hash": "a1f3c2",
        "author": "amaan-dev",
        "date": "2026-09-12",
        "message": "refactor: simplify grade lookup in calculator"
    },
    {
        "hash": "b8e041",
        "author": "amaan-dev",
        "date": "2026-08-14",
        "message": "Merge pull request #8 from preethi-codes/fix/reject-nonpositive-credits"
    },
    {
        "hash": "c3d927",
        "author": "preethi-codes",
        "date": "2026-08-14",
        "message": "test: add test for non-positive credit rejection"
    },
    {
        "hash": "d5b614",
        "author": "preethi-codes",
        "date": "2026-08-10",
        "message": "fix: reject non-positive credits in semester_gpa"
    },
    {
        "hash": "e2a780",
        "author": "amaan-dev",
        "date": "2026-07-16",
        "message": "Merge pull request #7 from meera-writes-code/docs/readme-example"
    },
    {
        "hash": "f9c053",
        "author": "meera-writes-code",
        "date": "2026-07-14",
        "message": "docs: fix cgpa example in README"
    },
    {
        "hash": "07b319",
        "author": "amaan-dev",
        "date": "2026-06-02",
        "message": "Merge pull request #5 from dev-rohan/fix/issue-3-add-aplus-bplus"
    },
    {
        "hash": "18d46e",
        "author": "dev-rohan",
        "date": "2026-05-30",
        "message": "fix: add A+ and B+ to GRADE_POINTS"
    },
    {
        "hash": "29a5f1",
        "author": "amaan-dev",
        "date": "2026-04-15",
        "message": "feat: add cgpa function"
    },
    {
        "hash": "3bc82d",
        "author": "amaan-dev",
        "date": "2026-04-01",
        "message": "init: add GRADE_POINTS and semester_gpa"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/gradewise/files.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "tree": [
        {
            "name": "README.md",
            "type": "file",
            "content": "# gradewise\n\nA CGPA and semester GPA calculator for the 10-point grading scale.\n\n## Requirements\n\n- Python 3.10 or higher\n- pytest (for running tests)\n\n## Installation\n\n```bash\ngit clone https://github.com/amaan-dev/gradewise.git\ncd gradewise\npip install -r requirements.txt\n```\n\n## Usage\n\n```python\nfrom src.grades import GRADE_POINTS\nfrom src.calculator import semester_gpa, cgpa\n\n# Grades: O=10, A+=9, A=8, B+=7, B=6, C=5, F=0\n\n# Semester GPA — list of (grade, credits) tuples\ngpa = semester_gpa([(\"O\", 4), (\"A+\", 3), (\"B\", 3)])\nprint(gpa)  # 8.6\n\n# CGPA — list of semesters\nresult = cgpa([\n    [(\"O\", 4), (\"A\", 3)],\n    [(\"A+\", 3), (\"B+\", 4)],\n])\nprint(result)\n```\n\n## Running tests\n\n```bash\npytest tests/\n```\n\nAll tests must pass before you open a pull request.\n\n## Project structure\n\n```\ngradewise/\n├── src/\n│   ├── grades.py       # grade-point mapping\n│   └── calculator.py   # semester_gpa and cgpa\n├── tests/\n│   └── test_gradewise.py\n├── requirements.txt\n├── README.md\n└── CONTRIBUTING.md\n```\n\n## Contributing\n\nSee [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.\n\n## License\n\nMIT\n"
        },
        {
            "name": "CONTRIBUTING.md",
            "type": "file",
            "content": "# Contributing to gradewise\n\nThanks for your interest. This is a small learning project — contributions are very welcome.\n\n## Before you start\n\n- Check the open issues. If you want to work on one, **leave a comment first** and wait for a response. This avoids duplicating effort.\n- If you find a new bug, open an issue before submitting a PR.\n- One issue per PR.\n\n## Setup\n\n```bash\ngit clone https://github.com/amaan-dev/gradewise.git\ncd gradewise\npip install -r requirements.txt\n```\n\n## Running tests\n\n```bash\npytest tests/\n```\n\nAll tests must pass. If you're fixing a bug, add a test that fails on the original code and passes after your fix.\n\n## Branch naming\n\n```\nfix/issue-<number>-short-description\nfeat/short-description\ndocs/short-description\n```\n\n## Opening a pull request\n\n- Use `Fixes #<issue-number>` in the description.\n- Keep it small and focused.\n- Respond to review feedback — we try to reply within 1–2 days.\n"
        },
        {
            "name": "requirements.txt",
            "type": "file",
            "content": "pytest==8.3.3\n"
        },
        {
            "name": ".github",
            "type": "dir",
            "children": [
                {
                    "name": "workflows",
                    "type": "dir",
                    "children": [
                        {
                            "name": "ci.yml",
                            "type": "file",
                            "content": "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n      - run: pip install -r requirements.txt\n      - run: pytest tests/\n"
                        }
                    ]
                }
            ]
        },
        {
            "name": "src",
            "type": "dir",
            "children": [
                {
                    "name": "grades.py",
                    "type": "file",
                    "content": "GRADE_POINTS = {\n    \"O\": 10,\n    \"A+\": 9,\n    \"A\": 8,\n    \"B+\": 7,\n    \"B\": 6,\n    \"C\": 5,\n    \"F\": 0,\n}\n"
                },
                {
                    "name": "calculator.py",
                    "type": "file",
                    "content": "from src.grades import GRADE_POINTS\n\n\ndef semester_gpa(courses):\n    total_points = 0\n    total_credits = 0\n    for grade, credits in courses:\n        if credits <= 0:\n            raise ValueError(f\"Credits must be positive, got {credits}\")\n        total_points += GRADE_POINTS[grade] * credits\n        total_credits += credits\n    return round(total_points / total_credits, 2)\n\n\ndef cgpa(semesters):\n    gpas = [semester_gpa(sem) for sem in semesters]\n    return round(sum(gpas) / len(gpas), 2)\n"
                }
            ]
        },
        {
            "name": "tests",
            "type": "dir",
            "children": [
                {
                    "name": "test_gradewise.py",
                    "type": "file",
                    "content": "\"\"\"Tests for gradewise — HEAD version.\"\"\"\n\nimport sys\nimport os\n\nsys.path.insert(0, os.path.join(os.path.dirname(__file__), \"..\"))\n\nimport pytest\nfrom src.grades import GRADE_POINTS\nfrom src.calculator import semester_gpa, cgpa\n\n\ndef test_grade_points_contains_expected_grades():\n    assert GRADE_POINTS[\"O\"] == 10\n    assert GRADE_POINTS[\"A+\"] == 9\n    assert GRADE_POINTS[\"A\"] == 8\n    assert GRADE_POINTS[\"B+\"] == 7\n    assert GRADE_POINTS[\"B\"] == 6\n    assert GRADE_POINTS[\"C\"] == 5\n    assert GRADE_POINTS[\"F\"] == 0\n\n\ndef test_semester_gpa_single_course():\n    result = semester_gpa([(\"A\", 4)])\n    assert result == 8.0\n\n\ndef test_semester_gpa_multiple_courses():\n    result = semester_gpa([(\"O\", 4), (\"B\", 3)])\n    expected = round((10 * 4 + 6 * 3) / 7, 2)\n    assert result == expected\n\n\ndef test_semester_gpa_rejects_zero_credits():\n    with pytest.raises(ValueError):\n        semester_gpa([(\"A\", 0)])\n\n\ndef test_semester_gpa_rejects_negative_credits():\n    with pytest.raises(ValueError):\n        semester_gpa([(\"A\", -1)])\n\n\ndef test_cgpa_two_equal_semesters():\n    sem1 = [(\"A\", 4), (\"B\", 3)]\n    sem2 = [(\"A\", 4), (\"B\", 3)]\n    g1 = semester_gpa(sem1)\n    g2 = semester_gpa(sem2)\n    result = cgpa([sem1, sem2])\n    assert result == round((g1 + g2) / 2, 2)\n\n\ndef test_semester_gpa_all_grades():\n    for grade in GRADE_POINTS:\n        result = semester_gpa([(grade, 3)])\n        assert result == float(GRADE_POINTS[grade])\n"
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/gradewise/issues.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 2,
        "title": "Support 4.0 GPA scale",
        "kind": "feature",
        "state": "open",
        "labels": [
            "good first issue"
        ],
        "opened_by": "curious-dev",
        "opened_at": "2026-04-02",
        "assigned_to": null,
        "body": "It would be nice to support the 4.0 scale used by many international universities. The conversion table is out there so it should be easy to add a mode flag.\n\nWould be happy to contribute if this is welcome!",
        "comments": [
            {
                "author": "amaan-dev",
                "date": "2026-04-02",
                "body": "Good idea. Should be easy enough — just a second GRADE_POINTS dict and a `scale` parameter. Feel free to pick it up."
            },
            {
                "author": "random-dev-42",
                "date": "2026-04-20",
                "body": "Which 4.0 mapping are you thinking? There are at least three different ones — the standard US one, the WES conversion, and the one my university uses. They're not the same."
            },
            {
                "author": "infra-nerd-9",
                "date": "2026-08-30",
                "body": "+1, would use this."
            }
        ],
        "lesson": "good_first_issue_hard",
        "lesson_feedback": "The maintainer called it easy, but the comments reveal the real problem: there is no single 4.0 scale. Without a decision on which mapping to use, you can't write the code. Starting here means you'd spend most of your time waiting for a design decision that hasn't been made.",
        "reproduction": null
    },
    {
        "id": 3,
        "title": "KeyError when using grade 'A+'",
        "kind": "bug",
        "state": "open",
        "correctOutcome": "cant_reproduce",
        "labels": [
            "bug"
        ],
        "opened_by": "preethi-codes",
        "opened_at": "2026-05-04",
        "assigned_to": null,
        "body": "Calling `semester_gpa([('A+', 3)])` raises a KeyError.\n\n```\nKeyError: 'A+'\n```\n\nLooked at GRADE_POINTS and A+ is just not there.\n\n**Steps to reproduce:**\n1. Import `semester_gpa` from `src/calculator.py`\n2. Call `semester_gpa([('A+', 3)])`\n3. Observe: KeyError: 'A+'\n\n**Python:** 3.12",
        "comments": [
            {
                "author": "meera-writes-code",
                "date": "2026-05-06",
                "body": "Reproduced. B+ has the same issue. Seems like only A, B, C, O, F are in the dict."
            },
            {
                "author": "dev-rohan",
                "date": "2026-05-18",
                "body": "Same here. Going to put in a fix."
            }
        ],
        "lesson": "already_fixed_by_pr",
        "lesson_feedback": "This issue is still open, but if you run the code today it works fine. PR #5 added 'A+' and 'B+' to GRADE_POINTS back in June — it just wasn't linked to this issue so the tracker was never updated. Always reproduce before you start: one line in the shell would have told you the bug is gone.",
        "reproduction": {
            "issueId": "gradewise-3",
            "buggyVersion": "pre-PR#5",
            "fixedVersion": "post-PR#5",
            "reproductionSteps": [
                {
                    "instruction": "Open src/calculator.py and look at the GRADE_POINTS import."
                },
                {
                    "instruction": "Call semester_gpa([('A+', 3)])"
                },
                {
                    "instruction": "Observe the result."
                }
            ],
            "expectedResult": "semester_gpa returns 9.0",
            "buggyBehavior": {
                "output": "KeyError: 'A+' — 'A+' was missing from GRADE_POINTS before PR #5.",
                "type": "crash",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "9.0 — 'A+' is now in GRADE_POINTS (added by PR #5).",
                "type": "success",
                "verifiedByTest": true
            },
            "regressionTestId": "gradewise/keyerror-grade"
        }
    },
    {
        "id": 6,
        "title": "cgpa() ignores credit weights — gives wrong result",
        "kind": "bug",
        "state": "open",
        "correctOutcome": "reproduced",
        "labels": [
            "bug"
        ],
        "opened_by": "infra-nerd-9",
        "opened_at": "2026-06-10",
        "assigned_to": "lena-open-source",
        "body": "The `cgpa()` function just averages the semester GPAs without weighting by credits. Example:\n\n- Semester 1: one 2-credit 'O' course → GPA 10.0\n- Semester 2: one 6-credit 'B' course → GPA 6.0\n\nCurrent output: 8.0. Expected: 7.0 (because sem 2 has 3x the credits).\n\n**Steps to reproduce:**\n1. Run `cgpa([[('O', 2)], [('B', 6)]])`\n2. Compare: got 8.0, expected 7.0\n\n**Python:** 3.12",
        "comments": [
            {
                "author": "amaan-dev",
                "date": "2026-06-11",
                "body": "Confirmed. The current implementation treats every semester equally regardless of credit load. It should weight each semester's contribution by its total credits."
            },
            {
                "author": "lena-open-source",
                "date": "2026-09-05",
                "body": "I'd like to fix this. Is it okay if I take it?"
            },
            {
                "author": "amaan-dev",
                "date": "2026-09-07",
                "body": "Assigned to you, go ahead. Please add a test with the exact example from the issue."
            }
        ],
        "lesson": "claimed_never_started",
        "lesson_feedback": "The maintainer confirmed the bug and it's real. But read the last two comments: someone was assigned to this three weeks ago and hasn't opened a PR yet. Before you start, leave a comment asking if they're still on it — otherwise you might duplicate their work.",
        "reproduction": {
            "issueId": "gradewise-6",
            "buggyVersion": "HEAD",
            "fixedVersion": "fixed",
            "reproductionSteps": [
                {
                    "instruction": "Open src/calculator.py and find the cgpa function."
                },
                {
                    "instruction": "Run cgpa([[('O', 2)], [('B', 6)]])"
                },
                {
                    "instruction": "Compare the output to the expected value."
                }
            ],
            "expectedResult": "cgpa returns 7.0 — weighted by credits: (2×10 + 6×6) / (2+6) = 7.0",
            "buggyBehavior": {
                "output": "8.0 — cgpa averages semester GPAs without weighting: (10.0 + 6.0) / 2 = 8.0",
                "type": "wrong_output",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "7.0 — credit-weighted average: (20 + 36) / 8 = 7.0",
                "type": "success",
                "verifiedByTest": true
            },
            "regressionTestId": "gradewise/cgpa-ignores-credits"
        }
    },
    {
        "id": 9,
        "title": "CGPA looks wrong sometimes",
        "kind": "bug",
        "state": "open",
        "correctOutcome": "not_enough_info",
        "labels": [
            "bug"
        ],
        "opened_by": "frustrated-user-77",
        "opened_at": "2026-08-28",
        "assigned_to": null,
        "body": "I've been using this for a while and sometimes my CGPA comes out different from what my college portal shows. Not sure what's going on, maybe a bug?",
        "comments": [
            {
                "author": "amaan-dev",
                "date": "2026-08-29",
                "body": "Hi, thanks for the report. Could you share the exact input you're passing — the grade and credit values for each semester? Also which Python version are you on? Hard to investigate without a reproducible case."
            }
        ],
        "lesson": "no_reproduction_steps",
        "lesson_feedback": "No inputs, no expected vs actual values, no Python version. The maintainer asked for more information and there's been no follow-up. You can't fix what you can't reproduce. Ask for the missing details — don't guess.",
        "reproduction": null
    },
    {
        "id": 10,
        "title": "semester_gpa([]) raises ZeroDivisionError instead of returning 0.0",
        "kind": "bug",
        "state": "open",
        "correctOutcome": "reproduced",
        "labels": [
            "bug",
            "good first issue"
        ],
        "opened_by": "dev-rohan",
        "opened_at": "2026-09-01",
        "assigned_to": null,
        "body": "Calling `semester_gpa([])` with an empty list raises a ZeroDivisionError instead of returning 0.0.\n\n```\nZeroDivisionError: division by zero\n```\n\nAn empty semester makes sense if a student took a leave — it should just return 0.0.\n\n**Steps to reproduce:**\n1. Import `semester_gpa` from `src/calculator.py`\n2. Call `semester_gpa([])`\n3. Observe: ZeroDivisionError\n\n**Python:** 3.12",
        "comments": [
            {
                "author": "amaan-dev",
                "date": "2026-09-02",
                "body": "Confirmed. An empty semester should return 0.0 — add `if not courses: return 0.0` at the top of the function. PRs welcome, please include a test that calls `semester_gpa([])` and checks the return value."
            }
        ],
        "lesson": "genuine_good_pick",
        "lesson_feedback": "Good pick. Clear steps, reproduces immediately, maintainer confirmed the fix and the expected behaviour. One guard at the top of the function. Nobody has claimed it. This is exactly the kind of issue to start with.",
        "reproduction": {
            "issueId": "gradewise-10",
            "buggyVersion": "HEAD",
            "fixedVersion": "fixed",
            "reproductionSteps": [
                {
                    "instruction": "Open src/calculator.py and find semester_gpa."
                },
                {
                    "instruction": "Call semester_gpa([])"
                },
                {
                    "instruction": "Observe the exception."
                }
            ],
            "expectedResult": "semester_gpa([]) returns 0.0",
            "buggyBehavior": {
                "output": "ZeroDivisionError: division by zero — total_credits is 0 when the list is empty.",
                "type": "crash",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "0.0 — early return when courses list is empty.",
                "type": "success",
                "verifiedByTest": true
            },
            "regressionTestId": "gradewise/empty-semester-crash"
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "id": "gradewise",
    "name": "gradewise",
    "description": "a CGPA and semester calculator",
    "language": "Python",
    "stars": 42,
    "forks": 7,
    "owner": "amaan-dev",
    "health": "active",
    "last_commit_date": "2026-09-12",
    "has_readme": true,
    "has_contributing": true,
    "has_ci": true,
    "avg_pr_response_days": 2,
    "open_issues": 5,
    "open_prs": 0,
    "stale_prs": 0,
    "merged_prs_last_90_days": 2,
    "maintainer_replies_in_issues": true,
    "topics": [
        "python",
        "cgpa",
        "grades",
        "beginner-friendly"
    ],
    "asOf": "2026-09-15",
    "verdict": "worth-contributing"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/gradewise/prs.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 5,
        "title": "fix: add A+ and B+ to GRADE_POINTS",
        "state": "merged",
        "author": "dev-rohan",
        "opened_at": "2026-05-30",
        "merged_at": "2026-06-02",
        "linked_issue": 3,
        "branch": "fix/issue-3-add-aplus-bplus",
        "description": "Fixes #3.\n\n'A+' and 'B+' were missing from GRADE_POINTS so any course with those grades raised a KeyError.\n\n**Changes:**\n- `src/grades.py`: added A+ (9) and B+ (7) to GRADE_POINTS\n\n**Testing:**\n- Confirmed `semester_gpa([('A+', 3)])` and `semester_gpa([('B+', 3)])` both return correctly\n- All existing tests pass",
        "diff_summary": "src/grades.py: added \"A+\": 9 and \"B+\": 7 entries to GRADE_POINTS",
        "review_comments": [
            {
                "author": "amaan-dev",
                "date": "2026-06-01",
                "body": "Values look right. Merging. Thanks!"
            }
        ],
        "lesson": "good_newcomer_pr",
        "lesson_note": "Small scope, correct fix, no back-and-forth needed. The one miss: not using 'Fixes #3' in the description meant issue #3 stayed open after merge. Always link the issue."
    },
    {
        "id": 7,
        "title": "docs: fix cgpa example in README",
        "state": "merged",
        "author": "meera-writes-code",
        "opened_at": "2026-07-14",
        "merged_at": "2026-07-16",
        "linked_issue": null,
        "branch": "docs/readme-example",
        "description": "The cgpa example in the README was using the wrong expected output. Updated it to match what the function actually returns.",
        "diff_summary": "README.md: corrected expected cgpa value in usage example",
        "review_comments": [
            {
                "author": "amaan-dev",
                "date": "2026-07-15",
                "body": "Good catch, thanks. Merging."
            }
        ],
        "lesson": null,
        "lesson_note": "Quick, clean docs fix. Merged in two days."
    },
    {
        "id": 8,
        "title": "fix: reject non-positive credits in semester_gpa",
        "state": "merged",
        "author": "preethi-codes",
        "opened_at": "2026-08-10",
        "merged_at": "2026-08-14",
        "linked_issue": null,
        "branch": "fix/reject-nonpositive-credits",
        "description": "semester_gpa was silently accepting credits <= 0, which would produce a nonsense GPA or a division by zero.\n\nAdded a ValueError for any course with credits <= 0.\n\n**Changes:**\n- `src/calculator.py`: added guard for credits <= 0 in the loop\n\n**Testing:**\n- Added tests for credits=0 and credits=-1",
        "diff_summary": "src/calculator.py: added `if credits <= 0: raise ValueError(...)` inside the course loop",
        "review_comments": [
            {
                "author": "amaan-dev",
                "date": "2026-08-11",
                "body": "Thanks! The guard is correct. Can you add a test that explicitly checks a ValueError is raised? The tests you have check the happy path but not the error case.",
                "resolved": true
            },
            {
                "author": "preethi-codes",
                "date": "2026-08-11",
                "body": "Done — added `test_semester_gpa_rejects_zero_credits` and `test_semester_gpa_rejects_negative_credits`. Anything else?"
            },
            {
                "author": "amaan-dev",
                "date": "2026-08-14",
                "body": "Perfect. Merging. Good work responding quickly to the review."
            }
        ],
        "lesson": "polite_review_response",
        "lesson_note": "The maintainer asked for tests on the error path specifically. The contributor added them the same day without pushback. That's what makes a PR easy to merge."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/gradewise/quiz.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 1,
        "domain": "repo_health",
        "question": "Which two signals best suggest a PR here would actually get reviewed?",
        "type": "multi",
        "options": [
            {
                "id": "a",
                "text": "The repo has plenty of stars.",
                "correct": false,
                "explanation": "Stars show popularity, not review speed. A repo can have thousands of stars and an inactive maintainer."
            },
            {
                "id": "b",
                "text": "PRs get merged within days.",
                "correct": true,
                "explanation": "PR #5 merged in 3 days, #7 in 2, #8 in 4. That pattern tells you the maintainer is actively reviewing."
            },
            {
                "id": "c",
                "text": "The README is short.",
                "correct": false,
                "explanation": "README length says nothing about how quickly PRs get reviewed."
            },
            {
                "id": "d",
                "text": "Issues get replies within a day or two.",
                "correct": true,
                "explanation": "The maintainer replied to issue #6 the next day and to #9 the day after it was opened. That response time carries over to PRs."
            },
            {
                "id": "e",
                "text": "A LICENSE file exists.",
                "correct": false,
                "explanation": "A license sets reuse rights, not response times."
            }
        ]
    },
    {
        "id": 2,
        "domain": "repo_health",
        "question": "What do the review comments on this repo's merged PRs suggest your PR should include?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "A screenshot of the output.",
                "correct": false,
                "explanation": "This is a calculation library — there's nothing visual to screenshot."
            },
            {
                "id": "b",
                "text": "A changelog entry.",
                "correct": false,
                "explanation": "There's no changelog file in the repo."
            },
            {
                "id": "c",
                "text": "Tests covering your change.",
                "correct": true,
                "explanation": "The maintainer asked for tests in PR #8 before merging. That's the clearest signal of what they expect."
            },
            {
                "id": "d",
                "text": "A link to an issue in the PR title.",
                "correct": false,
                "explanation": "PR #5 fixed issue #3 and was merged without ever mentioning the issue number in the title. The maintainer didn't flag it."
            }
        ]
    },
    {
        "id": 3,
        "domain": "issue_judgment",
        "question": "Which issue would you take?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "#2 — Support 4.0 GPA scale.",
                "correct": false,
                "explanation": "Labelled easy, but the thread lists three different 4.0 mappings and nobody has chosen one. You can't write the code until that decision is made."
            },
            {
                "id": "b",
                "text": "#3 — KeyError when using grade 'A+'.",
                "correct": false,
                "explanation": "This was fixed by PR #5 in June. The issue tracker was never updated because the PR didn't link it. Try the code before you start."
            },
            {
                "id": "c",
                "text": "#6 — cgpa() ignores credit weights.",
                "correct": false,
                "explanation": "The bug is confirmed and real, but it was assigned to another contributor on 2026-09-07. Check before stepping in."
            },
            {
                "id": "d",
                "text": "#9 — CGPA looks wrong sometimes.",
                "correct": false,
                "explanation": "No inputs, no expected vs actual values. The maintainer asked for more details and got no follow-up. You can't reproduce it."
            },
            {
                "id": "e",
                "text": "#10 — semester_gpa([]) raises ZeroDivisionError.",
                "correct": true,
                "explanation": "Confirmed by the maintainer, the fix is spelled out in the thread, unclaimed, and a test is explicitly requested. Everything you need is there."
            }
        ]
    },
    {
        "id": 4,
        "domain": "issue_judgment",
        "question": "How much weight should the 'good first issue' label carry when you choose?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "A lot — maintainers only add it to genuinely easy issues.",
                "correct": false,
                "explanation": "Labels reflect someone's opinion at the time they were added. Issue #2 has that label and hides an unresolved design question."
            },
            {
                "id": "b",
                "text": "Some — use it as a first filter, but read the thread to confirm.",
                "correct": true,
                "explanation": "The label is a useful starting point, not a guarantee. The thread is where you find out if the label still holds."
            },
            {
                "id": "c",
                "text": "None — labels are only guesses.",
                "correct": false,
                "explanation": "Labels are still a useful first filter. Ignoring them entirely slows you down."
            },
            {
                "id": "d",
                "text": "Only if the issue also has the bug label.",
                "correct": false,
                "explanation": "The bug label says what kind of issue it is. It says nothing about how hard it is to fix."
            }
        ]
    },
    {
        "id": 5,
        "domain": "issue_judgment",
        "question": "Issue #9 says the CGPA \"sometimes\" differs from the college portal. What do you need before you could even try to reproduce it?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "The reporter's operating system.",
                "correct": false,
                "explanation": "This is plain Python arithmetic. The OS rarely affects the result."
            },
            {
                "id": "b",
                "text": "Which college they attend.",
                "correct": false,
                "explanation": "Knowing the college might help you guess the grading scale, but you still can't run anything without the actual inputs."
            },
            {
                "id": "c",
                "text": "A screenshot of the portal page.",
                "correct": false,
                "explanation": "That shows the number they expected, not what inputs produced the wrong one."
            },
            {
                "id": "d",
                "text": "The exact grades and credits they entered.",
                "correct": true,
                "explanation": "Without the inputs you can't call the function, and without calling the function you can't compare outputs. That's the minimum needed — and it might also reveal whether this is just the weighting bug from #6."
            }
        ]
    },
    {
        "id": 6,
        "domain": "issue_judgment",
        "question": "You follow an old bug report's steps on the current code and nothing goes wrong. What do you do?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Mark \"Can't reproduce\", then look for a related fix in the PR history.",
                "correct": true,
                "explanation": "That's the right call. Issue #3 was confirmed in May on the old code, then fixed by PR #5 on June 2. Running the steps today gives you 9.0 with no error."
            },
            {
                "id": "b",
                "text": "Mark \"Reproduced\" — others confirmed it earlier.",
                "correct": false,
                "explanation": "Those confirmations described the code at the time. You need to reproduce it on the current code."
            },
            {
                "id": "c",
                "text": "Reinstall everything, assuming your setup is broken.",
                "correct": false,
                "explanation": "The steps were clear and ran without error. Your setup is probably fine — the bug is gone."
            },
            {
                "id": "d",
                "text": "Mark \"Not enough info\" — the report is too old to trust.",
                "correct": false,
                "explanation": "An old report can still have complete steps. Age doesn't make it incomplete."
            }
        ]
    },
    {
        "id": 7,
        "domain": "contributing",
        "question": "Issue #6 was assigned to another contributor a week ago and has no PR yet. You'd still like to work on it. What's the best move?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Start now and open your PR first.",
                "correct": false,
                "explanation": "That duplicates someone else's work and creates an awkward situation for the maintainer."
            },
            {
                "id": "b",
                "text": "Ask the maintainer to reassign it to you.",
                "correct": false,
                "explanation": "The maintainer assigned it on purpose. A week is too soon to ask for it back."
            },
            {
                "id": "c",
                "text": "Leave it to them and choose another issue.",
                "correct": true,
                "explanation": "A week is not long enough to assume someone has dropped it. Issue #10 is unclaimed and confirmed — start there."
            },
            {
                "id": "d",
                "text": "Comment asking if they've given up.",
                "correct": false,
                "explanation": "That reads as impatient after just one week. If the assignee had been silent for months, a polite check-in would be reasonable."
            }
        ]
    },
    {
        "id": 8,
        "domain": "review",
        "question": "The maintainer asks you to make an empty semester return 0.0, but you think raising an error is cleaner. What do you do?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Push your version and explain it's cleaner.",
                "correct": false,
                "explanation": "That ignores a direct request from the person who owns the project."
            },
            {
                "id": "b",
                "text": "Close the PR and open another with your version.",
                "correct": false,
                "explanation": "That throws away the review thread and starts the cycle over."
            },
            {
                "id": "c",
                "text": "Keep arguing in the thread until they agree.",
                "correct": false,
                "explanation": "Repeated arguments cost goodwill and delay the merge. Make your case once."
            },
            {
                "id": "d",
                "text": "Share your reasoning once, then follow their call.",
                "correct": true,
                "explanation": "The maintainer owns the project's behaviour contract. They've already said what they want in the issue thread. You can note your view — once — but the decision is theirs."
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/notes-app/commits.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "hash": "f3a1c9",
        "author": "tariq-dev",
        "date": "2026-09-18",
        "message": "refactor: clean up note storage internals"
    },
    {
        "hash": "e9d32b",
        "author": "tariq-dev",
        "date": "2026-09-14",
        "message": "Merge pull request #41 from dev-rohan/fix/issue-12-empty-title-validation"
    },
    {
        "hash": "b4f812",
        "author": "dev-rohan",
        "date": "2026-09-12",
        "message": "fix: move empty check after strip and add period to error message"
    },
    {
        "hash": "a7c305",
        "author": "dev-rohan",
        "date": "2026-09-10",
        "message": "fix: validate title is not empty before saving note"
    },
    {
        "hash": "dc219f",
        "author": "tariq-dev",
        "date": "2026-09-08",
        "message": "docs: update README with usage examples"
    },
    {
        "hash": "cc1048",
        "author": "tariq-dev",
        "date": "2026-08-22",
        "message": "chore: add requirements.txt"
    },
    {
        "hash": "9be47a",
        "author": "tariq-dev",
        "date": "2026-08-05",
        "message": "Merge pull request #38 from lena-open-source/fix/issue-15-case-insensitive-search"
    },
    {
        "hash": "87da61",
        "author": "lena-open-source",
        "date": "2026-08-04",
        "message": "test: add uppercase query case for search test"
    },
    {
        "hash": "74fc2e",
        "author": "lena-open-source",
        "date": "2026-08-02",
        "message": "fix: make search_notes case-insensitive"
    },
    {
        "hash": "61ba30",
        "author": "tariq-dev",
        "date": "2026-07-28",
        "message": "feat: add get_note function to retrieve single note by id"
    },
    {
        "hash": "55ef1d",
        "author": "tariq-dev",
        "date": "2026-07-15",
        "message": "feat: add clear_all helper for test resets"
    },
    {
        "hash": "3d9c84",
        "author": "tariq-dev",
        "date": "2026-07-10",
        "message": "fix: notes id counter now starts at 1 not 0"
    },
    {
        "hash": "2af019",
        "author": "tariq-dev",
        "date": "2026-06-30",
        "message": "feat: add search_notes function"
    },
    {
        "hash": "1bc774",
        "author": "tariq-dev",
        "date": "2026-06-22",
        "message": "feat: add delete_note and list_notes"
    },
    {
        "hash": "0d4e58",
        "author": "tariq-dev",
        "date": "2026-06-18",
        "message": "init: add save_note with basic in-memory store"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/notes-app/files.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"tree\":[{\"name\":\"README.md\",\"type\":\"file\",\"content\":\"# notes-app\\n\\nA minimal command-line notes manager written in Python. Supports creating, listing, searching, and deleting notes. Intended as a small learning project.\\n\\n## Requirements\\n\\n- Python 3.10 or higher\\n- pytest (for running tests)\\n\\n## Installation\\n\\n```bash\\ngit clone https://github.com/tariq-dev/notes-app.git\\ncd notes-app\\npip install -r requirements.txt\\n```\\n\\n## Usage\\n\\n```python\\nfrom src.notes import save_note, list_notes, search_notes, delete_note\\n\\n# Save a note\\nsave_note(title=\\\"Shopping list\\\", body=\\\"milk, eggs, bread\\\")\\n\\n# List all notes\\nnotes = list_notes()\\nprint(notes)\\n\\n# Search by title\\nresults = search_notes(\\\"shopping\\\")\\nprint(results)\\n\\n# Delete a note by ID\\ndelete_note(1)\\n```\\n\\n## Running tests\\n\\n```bash\\npytest tests/\\n```\\n\\nAll tests should pass before you open a pull request.\\n\\n## Project structure\\n\\n```\\nnotes-app/\\n├── src/\\n│   └── notes.py        # core notes logic\\n├── tests/\\n│   └── test_notes.py   # regression tests\\n├── requirements.txt\\n├── README.md\\n└── CONTRIBUTING.md\\n```\\n\\n## Contributing\\n\\nSee [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.\\n\\n## License\\n\\nMIT\\n\"},{\"name\":\"CONTRIBUTING.md\",\"type\":\"file\",\"content\":\"# Contributing to notes-app\\n\\nThanks for your interest in contributing. This is a small project — contributions are welcome, but please read this first.\\n\\n## Before you start\\n\\n- Check the open issues. If you want to work on one, **leave a comment on the issue first** and wait for a response. This avoids two people working on the same thing.\\n- If you find a new bug, open an issue before submitting a PR. Describe the bug, steps to reproduce, and the Python version you're using.\\n- One issue per PR. Don't bundle multiple fixes into one pull request.\\n\\n## Setup\\n\\n```bash\\ngit clone https://github.com/tariq-dev/notes-app.git\\ncd notes-app\\npython3 -m venv .venv\\nsource .venv/bin/activate\\npip install -r requirements.txt\\n```\\n\\n## Running tests\\n\\n```bash\\npytest tests/\\n```\\n\\nAll tests must pass before you open a PR. If you're fixing a bug, add a test that fails on the buggy code and passes after your fix.\\n\\n## Branch naming\\n\\nUse this format:\\n\\n```\\nfix/issue-<number>-short-description\\nfeat/short-description\\ndocs/short-description\\n```\\n\\nExamples:\\n- `fix/issue-12-empty-title-validation`\\n- `docs/update-readme-usage`\\n\\n## Opening a pull request\\n\\n- Link the issue your PR fixes using `Fixes #<issue-number>` in the PR description.\\n- Keep the PR small. A focused change is easier to review and faster to merge.\\n- Describe what you changed and why — not just what files you touched.\\n- Don't ping the maintainer repeatedly. Reviews happen within a week or so.\\n\\n## Code style\\n\\n- Follow the existing style in `notes.py` — no external formatters required.\\n- Add docstrings to any new functions.\\n- Keep functions small and focused.\\n\\n## What counts as a contribution\\n\\n- Bug fixes with tests\\n- Documentation improvements\\n- Clearer error messages\\n\\n**What we won't merge:**\\n- Whitespace-only changes\\n- Reformatting without functional changes\\n- AI-generated code that the contributor hasn't read, tested, or understood\\n\"},{\"name\":\"requirements.txt\",\"type\":\"file\",\"content\":\"pytest==8.3.3\\n\"},{\"name\":\"src\",\"type\":\"dir\",\"children\":[{\"name\":\"notes.py\",\"type\":\"file\",\"content\":\"# notes.py — v1.0.0\\n# A simple in-memory notes manager.\\n# Supports creating, listing, searching, and deleting notes.\\n\\n_notes = {}\\n_next_id = 1\\n\\n\\ndef save_note(title, body=\\\"\\\"):\\n    \\\"\\\"\\\"Save a new note with a title and optional body.\\n\\n    Returns a dict with 'status' and 'id' on success,\\n    or 'error' on failure.\\n    \\\"\\\"\\\"\\n    global _next_id\\n\\n    # BUG 1: No check for empty title after stripping whitespace.\\n    # If title is \\\"\\\" or \\\"   \\\", clean_title will be \\\"\\\" and the note\\n    # is saved with a blank title. No error is raised.\\n    clean_title = title.strip()\\n\\n    note = {\\n        \\\"id\\\": _next_id,\\n        \\\"title\\\": clean_title,\\n        \\\"body\\\": body,\\n    }\\n    _notes[_next_id] = note\\n    _next_id += 1\\n    return {\\\"status\\\": \\\"saved\\\", \\\"id\\\": note[\\\"id\\\"]}\\n\\n\\ndef delete_note(note_id):\\n    \\\"\\\"\\\"Delete a note by its integer ID.\\n\\n    Returns a dict with 'status' on success,\\n    or raises KeyError if the ID does not exist.\\n    \\\"\\\"\\\"\\n    # BUG 2: No check whether note_id exists before deleting.\\n    # If the caller passes an ID that was already deleted or never existed,\\n    # this raises an unhandled KeyError instead of returning a clean error.\\n    del _notes[note_id]\\n    return {\\\"status\\\": \\\"deleted\\\"}\\n\\n\\ndef search_notes(query):\\n    \\\"\\\"\\\"Search notes by title.\\n\\n    Returns a list of notes whose title contains the query string.\\n    \\\"\\\"\\\"\\n    results = []\\n    for note in _notes.values():\\n        # BUG 3: Case-sensitive comparison.\\n        # search_notes(\\\"shopping\\\") will not find a note titled \\\"Shopping List\\\".\\n        # Fix is to compare both strings lowercased.\\n        if query in note[\\\"title\\\"]:\\n            results.append(note)\\n    return results\\n\\n\\ndef list_notes():\\n    \\\"\\\"\\\"Return all saved notes as a list.\\\"\\\"\\\"\\n    # BUG 4: Returns a direct reference to the internal dict's values view\\n    # converted to a list — but each note dict inside is still the live object.\\n    # A caller who does list_notes()[0][\\\"title\\\"] = \\\"hacked\\\" will silently\\n    # corrupt the internal store.\\n    return list(_notes.values())\\n\\n\\ndef get_note(note_id):\\n    \\\"\\\"\\\"Return a single note by ID, or None if it does not exist.\\\"\\\"\\\"\\n    return _notes.get(note_id)\\n\\n\\ndef clear_all():\\n    \\\"\\\"\\\"Remove all notes. Used in tests to reset state between runs.\\\"\\\"\\\"\\n    global _next_id\\n    _notes.clear()\\n    _next_id = 1\\n\"},{\"name\":\"notes_fixed.py\",\"type\":\"file\",\"content\":\"# notes_fixed.py — v1.1.0\\n# A simple in-memory notes manager.\\n# Supports creating, listing, searching, and deleting notes.\\n\\n_notes = {}\\n_next_id = 1\\n\\n\\ndef save_note(title, body=\\\"\\\"):\\n    \\\"\\\"\\\"Save a new note with a title and optional body.\\n\\n    Returns a dict with 'status' and 'id' on success,\\n    or 'error' on failure.\\n    \\\"\\\"\\\"\\n    global _next_id\\n\\n    clean_title = title.strip()\\n\\n    # FIX 1: Check for empty title after stripping whitespace.\\n    # Returns a clean error dict instead of saving a blank note.\\n    if not clean_title:\\n        return {\\\"error\\\": \\\"Title cannot be empty.\\\"}\\n\\n    note = {\\n        \\\"id\\\": _next_id,\\n        \\\"title\\\": clean_title,\\n        \\\"body\\\": body,\\n    }\\n    _notes[_next_id] = note\\n    _next_id += 1\\n    return {\\\"status\\\": \\\"saved\\\", \\\"id\\\": note[\\\"id\\\"]}\\n\\n\\ndef delete_note(note_id):\\n    \\\"\\\"\\\"Delete a note by its integer ID.\\n\\n    Returns a dict with 'status' on success,\\n    or 'error' if the ID does not exist.\\n    \\\"\\\"\\\"\\n    # FIX 2: Check if the note exists before deleting.\\n    # Returns a clean error dict instead of raising KeyError.\\n    if note_id not in _notes:\\n        return {\\\"error\\\": f\\\"Note with id {note_id} does not exist.\\\"}\\n    del _notes[note_id]\\n    return {\\\"status\\\": \\\"deleted\\\"}\\n\\n\\ndef search_notes(query):\\n    \\\"\\\"\\\"Search notes by title (case-insensitive).\\n\\n    Returns a list of notes whose title contains the query string.\\n    \\\"\\\"\\\"\\n    results = []\\n    # FIX 3: Lowercase both the query and the title before comparing.\\n    # search_notes(\\\"shopping\\\") now correctly finds \\\"Shopping List\\\".\\n    for note in _notes.values():\\n        if query.lower() in note[\\\"title\\\"].lower():\\n            results.append(note)\\n    return results\\n\\n\\ndef list_notes():\\n    \\\"\\\"\\\"Return all saved notes as a list of copies.\\\"\\\"\\\"\\n    # FIX 4: Return shallow copies of each note dict so callers\\n    # cannot silently mutate the internal store.\\n    return [dict(note) for note in _notes.values()]\\n\\n\\ndef get_note(note_id):\\n    \\\"\\\"\\\"Return a single note by ID, or None if it does not exist.\\\"\\\"\\\"\\n    return _notes.get(note_id)\\n\\n\\ndef clear_all():\\n    \\\"\\\"\\\"Remove all notes. Used in tests to reset state between runs.\\\"\\\"\\\"\\n    global _next_id\\n    _notes.clear()\\n    _next_id = 1\\n\"}]},{\"name\":\"tests\",\"type\":\"dir\",\"children\":[{\"name\":\"test_notes.py\",\"type\":\"file\",\"content\":\"\\\"\\\"\\\"\\nRegression tests for notes-app.\\n\\nEach test class covers one bug. Within each class:\\n- test_buggy_*  shows the wrong behavior in v1.0.0\\n- test_fixed_*  shows the correct behavior in v1.1.0\\n\\nThese tests are the source of truth for the scenario JSON.\\nIf they pass, verifiedByTest can be set to true in issues.json.\\n\\\"\\\"\\\"\\n\\nimport sys\\nimport os\\n\\n# Make sure both src modules are importable\\nsys.path.insert(0, os.path.join(os.path.dirname(__file__), \\\"..\\\"))\\n\\nimport pytest\\nfrom src.notes import (\\n    save_note, delete_note, search_notes, list_notes, clear_all\\n)\\nfrom src.notes_fixed import (\\n    save_note as save_note_fixed,\\n    delete_note as delete_note_fixed,\\n    search_notes as search_notes_fixed,\\n    list_notes as list_notes_fixed,\\n    clear_all as clear_all_fixed,\\n)\\n\\n\\n# ---------------------------------------------------------------------------\\n# Reset state before every test so tests don't bleed into each other\\n# ---------------------------------------------------------------------------\\n\\n@pytest.fixture(autouse=True)\\ndef reset_state():\\n    clear_all()\\n    clear_all_fixed()\\n    yield\\n    clear_all()\\n    clear_all_fixed()\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 1 — Empty title is saved silently (no validation)\\n# Lesson: genuine_good_pick  |  regressionTestId: notes-app/empty-title-crash\\n# ---------------------------------------------------------------------------\\n\\nclass TestEmptyTitle:\\n\\n    def test_buggy_empty_title_saves_silently(self):\\n        \\\"\\\"\\\"v1.0.0: saving with an empty title succeeds — wrong behavior.\\\"\\\"\\\"\\n        result = save_note(title=\\\"\\\", body=\\\"some content\\\")\\n        # Bug: no error returned, note is saved with blank title\\n        assert result.get(\\\"status\\\") == \\\"saved\\\"\\n        assert result.get(\\\"error\\\") is None\\n\\n    def test_buggy_whitespace_only_title_saves_silently(self):\\n        \\\"\\\"\\\"v1.0.0: whitespace-only title also saves silently.\\\"\\\"\\\"\\n        result = save_note(title=\\\"   \\\", body=\\\"some content\\\")\\n        assert result.get(\\\"status\\\") == \\\"saved\\\"\\n\\n    def test_fixed_empty_title_returns_error(self):\\n        \\\"\\\"\\\"v1.1.0: empty title returns a validation error.\\\"\\\"\\\"\\n        result = save_note_fixed(title=\\\"\\\", body=\\\"some content\\\")\\n        assert result.get(\\\"error\\\") == \\\"Title cannot be empty.\\\"\\n        assert result.get(\\\"status\\\") is None\\n\\n    def test_fixed_whitespace_only_title_returns_error(self):\\n        \\\"\\\"\\\"v1.1.0: whitespace-only title also returns a validation error.\\\"\\\"\\\"\\n        result = save_note_fixed(title=\\\"   \\\", body=\\\"some content\\\")\\n        assert result.get(\\\"error\\\") == \\\"Title cannot be empty.\\\"\\n\\n    def test_fixed_valid_title_saves_successfully(self):\\n        \\\"\\\"\\\"v1.1.0: a valid title saves correctly.\\\"\\\"\\\"\\n        result = save_note_fixed(title=\\\"Shopping list\\\", body=\\\"milk, eggs\\\")\\n        assert result.get(\\\"status\\\") == \\\"saved\\\"\\n        assert \\\"id\\\" in result\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 2 — Delete crashes with KeyError on invalid ID\\n# Lesson: claimed_never_started  |  regressionTestId: notes-app/delete-keyerror\\n# ---------------------------------------------------------------------------\\n\\nclass TestDeleteInvalidId:\\n\\n    def test_buggy_delete_nonexistent_raises_keyerror(self):\\n        \\\"\\\"\\\"v1.0.0: deleting a non-existent ID raises KeyError.\\\"\\\"\\\"\\n        with pytest.raises(KeyError):\\n            delete_note(999)\\n\\n    def test_buggy_delete_already_deleted_raises_keyerror(self):\\n        \\\"\\\"\\\"v1.0.0: deleting an already-deleted note raises KeyError.\\\"\\\"\\\"\\n        save_note(title=\\\"Temp note\\\")\\n        delete_note(1)\\n        with pytest.raises(KeyError):\\n            delete_note(1)  # second delete crashes\\n\\n    def test_fixed_delete_nonexistent_returns_error(self):\\n        \\\"\\\"\\\"v1.1.0: deleting a non-existent ID returns a clean error dict.\\\"\\\"\\\"\\n        result = delete_note_fixed(999)\\n        assert result.get(\\\"error\\\") == \\\"Note with id 999 does not exist.\\\"\\n\\n    def test_fixed_delete_valid_id_succeeds(self):\\n        \\\"\\\"\\\"v1.1.0: deleting a valid ID works correctly.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"Temp note\\\")\\n        result = delete_note_fixed(1)\\n        assert result.get(\\\"status\\\") == \\\"deleted\\\"\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 3 — Search is case-sensitive\\n# Lesson: good_first_issue_hard  |  regressionTestId: notes-app/search-case-sensitive\\n# ---------------------------------------------------------------------------\\n\\nclass TestCaseSensitiveSearch:\\n\\n    def test_buggy_search_misses_different_case(self):\\n        \\\"\\\"\\\"v1.0.0: searching 'shopping' does not find 'Shopping List'.\\\"\\\"\\\"\\n        save_note(title=\\\"Shopping List\\\", body=\\\"milk, eggs\\\")\\n        results = search_notes(\\\"shopping\\\")\\n        # Bug: returns empty list because comparison is case-sensitive\\n        assert results == []\\n\\n    def test_buggy_search_only_finds_exact_case(self):\\n        \\\"\\\"\\\"v1.0.0: only exact case match works.\\\"\\\"\\\"\\n        save_note(title=\\\"Shopping List\\\", body=\\\"milk, eggs\\\")\\n        results = search_notes(\\\"Shopping\\\")\\n        assert len(results) == 1\\n\\n    def test_fixed_search_is_case_insensitive(self):\\n        \\\"\\\"\\\"v1.1.0: searching 'shopping' correctly finds 'Shopping List'.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"Shopping List\\\", body=\\\"milk, eggs\\\")\\n        results = search_notes_fixed(\\\"shopping\\\")\\n        assert len(results) == 1\\n        assert results[0][\\\"title\\\"] == \\\"Shopping List\\\"\\n\\n    def test_fixed_search_uppercase_query(self):\\n        \\\"\\\"\\\"v1.1.0: uppercase query also finds lowercase titles.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"meeting notes\\\", body=\\\"discussed roadmap\\\")\\n        results = search_notes_fixed(\\\"MEETING\\\")\\n        assert len(results) == 1\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 4 — list_notes returns mutable internal state\\n# Lesson: no_reproduction_steps  |  regressionTestId: notes-app/mutable-list\\n# ---------------------------------------------------------------------------\\n\\nclass TestMutableListReturn:\\n\\n    def test_buggy_caller_can_corrupt_internal_state(self):\\n        \\\"\\\"\\\"v1.0.0: mutating a note from list_notes corrupts the store.\\\"\\\"\\\"\\n        save_note(title=\\\"Original title\\\", body=\\\"body\\\")\\n        notes = list_notes()\\n        # Mutate the returned object\\n        notes[0][\\\"title\\\"] = \\\"Corrupted\\\"\\n        # The internal store is now corrupted\\n        from src.notes import get_note\\n        stored = get_note(1)\\n        assert stored[\\\"title\\\"] == \\\"Corrupted\\\"  # bug: internal state changed\\n\\n    def test_fixed_caller_cannot_corrupt_internal_state(self):\\n        \\\"\\\"\\\"v1.1.0: mutating a note from list_notes does not affect the store.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"Original title\\\", body=\\\"body\\\")\\n        notes = list_notes_fixed()\\n        notes[0][\\\"title\\\"] = \\\"Attempted corruption\\\"\\n        from src.notes_fixed import get_note as get_note_fixed\\n        stored = get_note_fixed(1)\\n        assert stored[\\\"title\\\"] == \\\"Original title\\\"  # fix: internal state safe\\n\"}]}]}");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/notes-app/issues.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":12,\"title\":\"Saving a note with an empty title silently creates a broken note\",\"state\":\"open\",\"labels\":[\"bug\",\"good first issue\"],\"opened_by\":\"preethi-codes\",\"opened_at\":\"2026-08-14\",\"assigned_to\":null,\"body\":\"Hi, I found a bug when saving notes.\\n\\nIf you call `save_note(title='', body='some text')`, it returns `{\\\"status\\\": \\\"saved\\\"}` with no error. The note gets saved with a blank title, which breaks the UI when you try to list notes later.\\n\\nI expected it to return a validation error like `{\\\"error\\\": \\\"Title cannot be empty.\\\"}` instead.\\n\\n**Steps to reproduce:**\\n1. Call `save_note(title='', body='some content')`\\n2. Call `list_notes()`\\n3. You'll see a note with an empty title in the list\\n\\n**Expected:** Validation error returned\\n**Actual:** Note saved with blank title, no error\\n\\n**Version:** 1.0.0\\n**Python:** 3.12\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-08-14\",\"body\":\"Good catch. The `save_note` function is missing input validation entirely. Small fix — just needs a check after `strip()`. Should be straightforward for a first contribution.\"},{\"author\":\"random-dev-42\",\"date\":\"2026-08-15\",\"body\":\"Same issue here. Also happens with whitespace-only titles like `'   '`.\"},{\"author\":\"preethi-codes\",\"date\":\"2026-08-15\",\"body\":\"Yes, whitespace-only is the same bug — `strip()` returns `''` and it still saves.\"}],\"lesson\":\"genuine_good_pick\",\"lesson_feedback\":\"Good pick. Clear steps, reproducible, small scope — one check after strip(). The maintainer confirmed it's a good first contribution and no one has claimed it yet.\",\"reproduction\":{\"issueId\":\"notes-app-12\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Open notes.py and find the save_note function.\"},{\"instruction\":\"Call save_note with an empty title: save_note(title='', body='hello')\"},{\"instruction\":\"Check the return value.\"},{\"instruction\":\"Call list_notes() and inspect the saved notes.\"}],\"expectedResult\":\"save_note returns {\\\"error\\\": \\\"Title cannot be empty.\\\"}\",\"buggyBehavior\":{\"output\":\"Returns {\\\"status\\\": \\\"saved\\\", \\\"id\\\": 1} — note saved with blank title, no error.\",\"type\":\"silent_failure\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Returns {\\\"error\\\": \\\"Title cannot be empty.\\\"} — note is not saved.\",\"type\":\"validation_error\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/empty-title-crash\"}},{\"id\":7,\"title\":\"KeyError crash when deleting a note that doesn't exist\",\"state\":\"open\",\"labels\":[\"bug\",\"good first issue\"],\"opened_by\":\"dev-rohan\",\"opened_at\":\"2026-07-02\",\"assigned_to\":null,\"body\":\"When I try to delete a note ID that doesn't exist (or was already deleted), the app throws a `KeyError` instead of returning a proper error message.\\n\\n```\\nKeyError: 99\\n```\\n\\nThis crashes the whole program if you're not catching exceptions. Expected it to return something like `{\\\"error\\\": \\\"Note not found.\\\"}` instead.\\n\\n**Steps to reproduce:**\\n1. Call `delete_note(99)` when no note with id 99 exists\\n2. Observe: unhandled KeyError\\n\\n**Version:** 1.0.0\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-07-03\",\"body\":\"Confirmed. The function uses `del _notes[note_id]` directly without checking first. Thanks for the report.\"},{\"author\":\"anon-contributor\",\"date\":\"2026-07-10\",\"body\":\"I'll take this one!\"},{\"author\":\"tariq-dev\",\"date\":\"2026-07-11\",\"body\":\"Sounds good @anon-contributor, go ahead.\"},{\"author\":\"some-lurker\",\"date\":\"2026-07-18\",\"body\":\"any update on this? still broken for me\"}],\"lesson\":\"claimed_never_started\",\"lesson_feedback\":\"Someone claimed this 4 months ago and the maintainer assigned it to them. No PR was ever opened. Before you start, leave a comment asking if it's still being worked on — otherwise you might duplicate effort or step on someone's toes.\",\"reproduction\":{\"issueId\":\"notes-app-7\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Open notes.py and find the delete_note function.\"},{\"instruction\":\"Call delete_note(999) without creating any note with that ID first.\"},{\"instruction\":\"Observe the exception raised.\"}],\"expectedResult\":\"delete_note returns {\\\"error\\\": \\\"Note with id 999 does not exist.\\\"}\",\"buggyBehavior\":{\"output\":\"Raises KeyError: 999 — unhandled exception, crashes the program.\",\"type\":\"crash\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Returns {\\\"error\\\": \\\"Note with id 999 does not exist.\\\"} — clean error, no crash.\",\"type\":\"validation_error\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/delete-keyerror\"}},{\"id\":15,\"title\":\"search_notes does not find notes when query case doesn't match\",\"state\":\"open\",\"labels\":[\"bug\"],\"opened_by\":\"meera-writes-code\",\"opened_at\":\"2026-07-20\",\"assigned_to\":null,\"body\":\"If I save a note titled 'Shopping List' and then search for 'shopping', I get an empty result. The search only works if the query matches the exact capitalisation of the title.\\n\\n```python\\nsave_note(title='Shopping List')\\nresults = search_notes('shopping')  # returns []\\nresults = search_notes('Shopping')  # returns the note\\n```\\n\\nExpected search to be case-insensitive.\\n\\n**Version:** 1.0.0\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-07-21\",\"body\":\"Classic one. The fix is `.lower()` on both sides of the comparison.\"},{\"author\":\"meera-writes-code\",\"date\":\"2026-07-21\",\"body\":\"Yes, I figured it was something like that. Happy to submit a fix if no one else is on it.\"},{\"author\":\"tariq-dev\",\"date\":\"2026-07-22\",\"body\":\"Someone's already working on it in a branch. Will update when merged.\"}],\"lesson\":\"already_fixed_by_pr\",\"lesson_feedback\":\"This issue is still marked open, but PR #38 merged last month and fixed exactly this bug. If you check the closed PRs, you'll see the fix is already in the codebase. Reproducing before you start would have caught this — the bug no longer exists in the current code.\",\"reproduction\":{\"issueId\":\"notes-app-15\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Open notes.py and find the search_notes function.\"},{\"instruction\":\"Save a note: save_note(title='Shopping List')\"},{\"instruction\":\"Search with lowercase: search_notes('shopping')\"},{\"instruction\":\"Check the result.\"}],\"expectedResult\":\"search_notes('shopping') returns the note titled 'Shopping List'\",\"buggyBehavior\":{\"output\":\"Returns [] — case-sensitive match fails, note not found.\",\"type\":\"wrong_output\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Returns [{\\\"id\\\": 1, \\\"title\\\": \\\"Shopping List\\\", ...}] — case-insensitive match works.\",\"type\":\"success\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/search-case-sensitive\"}},{\"id\":19,\"title\":\"list_notes returns live objects — mutations affect the internal store\",\"state\":\"open\",\"labels\":[\"bug\",\"good first issue\"],\"opened_by\":\"infra-nerd-9\",\"opened_at\":\"2026-08-28\",\"assigned_to\":null,\"body\":\"Found a subtle bug. `list_notes()` returns the actual internal note dicts, not copies. So if you do this:\\n\\n```python\\nnotes = list_notes()\\nnotes[0]['title'] = 'overwritten'\\n```\\n\\n...the internal store is now corrupted. The note with id 1 permanently has the wrong title.\\n\\nThis is a encapsulation issue. The function should return copies of the notes, not references to the internal objects.\\n\\nI know it's labeled good first issue but this touches how the storage layer works. You need to understand the difference between shallow and deep copies in Python before fixing it, and consider whether a shallow copy is sufficient here or whether a deep copy is needed.\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-08-29\",\"body\":\"Good report. The body field is just a string so a shallow copy via `dict(note)` is enough for now. If we add nested objects later we'd need `copy.deepcopy`. Worth noting that in the PR.\"},{\"author\":\"curious-dev\",\"date\":\"2026-09-01\",\"body\":\"What's the difference between shallow and deep copy here?\"},{\"author\":\"infra-nerd-9\",\"date\":\"2026-09-01\",\"body\":\"Shallow copy creates a new dict but keeps references to the same nested objects. Deep copy recursively copies everything. For now title and body are strings (immutable), so shallow is fine.\"},{\"author\":\"tariq-dev\",\"date\":\"2026-09-02\",\"body\":\"Correct. Whoever picks this up — please add a test that confirms mutating the returned list doesn't affect the stored note.\"}],\"lesson\":\"good_first_issue_hard\",\"lesson_feedback\":\"Labeled good first issue, but the maintainer's own comments explain this needs understanding of shallow vs deep copy and the storage layer's design. The fix is technically one line, but you shouldn't write it without understanding why. If you're not sure about copy semantics in Python yet, this isn't the right starting point.\",\"reproduction\":{\"issueId\":\"notes-app-19\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Save a note: save_note(title='Original title')\"},{\"instruction\":\"Call list_notes() and store the result.\"},{\"instruction\":\"Mutate the first note: notes[0]['title'] = 'Corrupted'\"},{\"instruction\":\"Call list_notes() again and check the title.\"}],\"expectedResult\":\"The second list_notes() call still returns 'Original title'\",\"buggyBehavior\":{\"output\":\"Second list_notes() returns 'Corrupted' — internal state was silently modified.\",\"type\":\"silent_failure\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Second list_notes() still returns 'Original title' — internal state is protected.\",\"type\":\"success\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/mutable-list\"}},{\"id\":23,\"title\":\"Notes disappear sometimes when I add a lot of them\",\"state\":\"open\",\"labels\":[\"bug\"],\"opened_by\":\"frustrated-user-77\",\"opened_at\":\"2026-09-05\",\"assigned_to\":null,\"body\":\"Hey, I've been using this for a bit and sometimes notes just disappear. I'll add like 10 notes and then when I list them some are missing. Not sure what's happening.\\n\\nCan someone help?\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-09-06\",\"body\":\"Hi, thanks for the report. Could you share the exact steps to reproduce this? Specifically: which version are you on, how are you calling save_note, and what does list_notes return when this happens? Logs or a code snippet would help.\"},{\"author\":\"frustrated-user-77\",\"date\":\"2026-09-06\",\"body\":\"I'll try to reproduce it again and send more info.\"}],\"lesson\":\"no_reproduction_steps\",\"lesson_feedback\":\"No steps to reproduce, no version, no code snippet or logs. The maintainer already asked for more info and the reporter hasn't followed up. You can't fix what you can't reproduce. The right move here is to ask for the missing info, not to start guessing at a fix.\",\"reproduction\":{\"issueId\":\"notes-app-23\",\"buggyVersion\":null,\"fixedVersion\":null,\"reproductionSteps\":[{\"instruction\":\"Read the issue body carefully.\"},{\"instruction\":\"Check if there are steps to reproduce.\"},{\"instruction\":\"Check if a version is mentioned.\"},{\"instruction\":\"Check if there's a code snippet or error log.\"}],\"expectedResult\":\"A reproducible bug report with steps, version, and actual vs expected output.\",\"buggyBehavior\":{\"output\":\"Not enough information to reproduce. No steps, no version, no error message provided.\",\"type\":\"wrong_output\",\"verifiedByTest\":false},\"fixedBehavior\":{\"output\":\"N/A — issue cannot be investigated without more information from the reporter.\",\"type\":\"success\",\"verifiedByTest\":false},\"regressionTestId\":null}}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "id": "notes-app",
    "name": "notes-app",
    "description": "A minimal command-line notes manager written in Python.",
    "language": "Python",
    "stars": 87,
    "forks": 12,
    "owner": "tariq-dev",
    "health": "active",
    "last_commit_date": "2026-09-18",
    "has_readme": true,
    "has_contributing": true,
    "has_ci": true,
    "avg_pr_response_days": 3,
    "open_issues": 5,
    "open_prs": 1,
    "stale_prs": 1,
    "merged_prs_last_90_days": 2,
    "maintainer_replies_in_issues": true,
    "topics": [
        "python",
        "cli",
        "notes",
        "beginner-friendly"
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/notes-app/prs.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 38,
        "title": "fix: make search_notes case-insensitive",
        "state": "merged",
        "author": "lena-open-source",
        "opened_at": "2026-08-02",
        "merged_at": "2026-08-05",
        "linked_issue": 15,
        "branch": "fix/issue-15-case-insensitive-search",
        "description": "Fixes #15.\n\nThe `search_notes` function was doing a case-sensitive substring match, so searching for `'shopping'` wouldn't find a note titled `'Shopping List'`.\n\nFix: lowercase both the query and the note title before comparing.\n\n**Changes:**\n- `src/notes.py`: one line changed in `search_notes`\n\n**Testing:**\n- Added `test_search_case_insensitive` in `tests/test_notes.py`\n- All existing tests still pass",
        "diff_summary": "src/notes.py: changed `if query in note['title']` to `if query.lower() in note['title'].lower()`",
        "review_comments": [
            {
                "author": "tariq-dev",
                "date": "2026-08-03",
                "body": "Thanks for picking this up! The fix looks correct. One small thing — can you also add a test where the *title* is lowercase and the query is uppercase, to cover both directions?",
                "resolved": true
            },
            {
                "author": "lena-open-source",
                "date": "2026-08-04",
                "body": "Good point, added that test in the latest commit. Let me know if there's anything else."
            },
            {
                "author": "tariq-dev",
                "date": "2026-08-05",
                "body": "Looks great. Merging. Thanks for the clean PR!"
            }
        ],
        "lesson": "good_newcomer_pr",
        "lesson_note": "This is what a good first PR looks like. Small scope (one line changed), linked to the issue, clear description of what changed and why, tests added, and the author responded to review feedback without getting defensive."
    },
    {
        "id": 41,
        "title": "fix: validate title is not empty before saving note",
        "state": "merged",
        "author": "dev-rohan",
        "opened_at": "2026-09-10",
        "merged_at": "2026-09-14",
        "linked_issue": 12,
        "branch": "fix/issue-12-empty-title-validation",
        "description": "Fixes #12.\n\nAdded a check in `save_note` — after stripping whitespace, if the title is empty, return `{\"error\": \"Title cannot be empty.\"}` instead of saving.\n\n**Changes:**\n- `src/notes.py`: 2 lines added to `save_note`\n\n**Testing:**\n- Added tests for empty string, whitespace-only string, and a valid title\n- All existing tests pass\n\nLet me know if the error message wording should be different.",
        "diff_summary": "src/notes.py: added `if not clean_title: return {\"error\": \"Title cannot be empty.\"}` after the strip() call",
        "review_comments": [
            {
                "author": "tariq-dev",
                "date": "2026-09-11",
                "body": "Thanks for this! Two things:\n1. Can you move the empty check to right after the `strip()` call rather than at the top of the function? It reads more naturally that way.\n2. The error message is fine, but let's keep it consistent with the rest of the codebase — use a period at the end.",
                "resolved": true
            },
            {
                "author": "dev-rohan",
                "date": "2026-09-12",
                "body": "Makes sense on both points — moved the check and added the period. Updated in the latest commit. Thanks for the review."
            },
            {
                "author": "tariq-dev",
                "date": "2026-09-13",
                "body": "Perfect. This is exactly right. Merging."
            }
        ],
        "lesson": "polite_review_response",
        "lesson_note": "The maintainer requested changes — not to be difficult, but to keep the code consistent. The contributor didn't argue or re-open the issue. They made the changes, said why they agreed, and thanked the reviewer. That's how review is supposed to go. A change request is not a rejection."
    },
    {
        "id": 29,
        "title": "fix: handle KeyError in delete_note",
        "state": "open",
        "author": "anon-contributor",
        "opened_at": "2026-07-22",
        "merged_at": null,
        "linked_issue": 7,
        "branch": "fix/delete-keyerror",
        "description": "Attempting to fix #7. Added a try/except around the delete call.\n\nNot sure if this is the right approach — open to feedback.",
        "diff_summary": "src/notes.py: wrapped `del _notes[note_id]` in try/except KeyError",
        "review_comments": [
            {
                "author": "tariq-dev",
                "date": "2026-07-23",
                "body": "Thanks for trying this. The try/except approach works but I'd prefer an explicit `if note_id not in _notes` check — it's clearer about what we're guarding against. Can you update?\n\nAlso please add tests for this case."
            }
        ],
        "lesson": null,
        "lesson_note": "This PR is stale — opened months ago, maintainer left review feedback, author never came back. Issue #7 is still open as a result."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":1,\"domain\":\"repo_health\",\"question\":\"Which two signals from this repo tell you most about whether your PR would get a response?\",\"type\":\"multi\",\"options\":[{\"id\":\"a\",\"text\":\"Star count (87 stars)\",\"correct\":false,\"explanation\":\"Stars show how many people found the repo interesting, not whether the maintainer is still reviewing PRs. A repo can have thousands of stars and be completely inactive.\"},{\"id\":\"b\",\"text\":\"Date of the most recent merged PR\",\"correct\":true,\"explanation\":\"The most recent merged PR was from September 2026. That tells you the maintainer is still actively reviewing and merging, which is the actual signal you need.\"},{\"id\":\"c\",\"text\":\"How quickly the maintainer replied in issue threads\",\"correct\":true,\"explanation\":\"The maintainer replied on every open issue within 1-2 days. That is the clearest evidence you would get a response on a PR too.\"},{\"id\":\"d\",\"text\":\"Number of forks (12)\",\"correct\":false,\"explanation\":\"Forks tell you how many people copied the repo, often for practice, not active development. They say nothing about whether the original maintainer is responsive.\"},{\"id\":\"e\",\"text\":\"How detailed the README is\",\"correct\":false,\"explanation\":\"A detailed README means the author cared about documentation at some point. It does not tell you whether the repo is still maintained or whether PRs get reviewed.\"}]},{\"id\":2,\"domain\":\"contributing\",\"question\":\"Your plan for issue #7: branch named my-fix, no new tests, PR title 'fixed delete bug'. Which parts conflict with this repo's CONTRIBUTING.md?\",\"type\":\"multi\",\"options\":[{\"id\":\"a\",\"text\":\"Branch name my-fix\",\"correct\":true,\"explanation\":\"CONTRIBUTING.md specifies the format fix/issue-<number>-short-description. A branch named my-fix does not follow this convention and makes it harder for the maintainer to track what the branch is for.\"},{\"id\":\"b\",\"text\":\"No new tests added\",\"correct\":true,\"explanation\":\"CONTRIBUTING.md explicitly says: if you are fixing a bug, add a test that fails on the buggy code and passes after your fix. Submitting without a test is likely to get a review comment asking you to add one.\"},{\"id\":\"c\",\"text\":\"PR title 'fixed delete bug'\",\"correct\":false,\"explanation\":\"CONTRIBUTING.md does not prescribe a specific PR title format for this repo. The title could be clearer, but it does not technically conflict with the written rules.\"},{\"id\":\"d\",\"text\":\"Fixing a bug without opening an issue first\",\"correct\":false,\"explanation\":\"Issue #7 already exists and is open. You do not need to open a new one. CONTRIBUTING.md says to open an issue before a PR only when you find a new bug.\"}]},{\"id\":3,\"domain\":\"issue_judgment\",\"question\":\"Issue #7 has a comment from anon-contributor saying they will take it, posted 4 months ago. No PR was ever merged. What do you do?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Start working on it immediately. They have had enough time.\",\"correct\":false,\"explanation\":\"They may have started and hit a blocker, or be close to finishing. Starting without checking means you might both open PRs for the same thing, which wastes both your time and the maintainer's time.\"},{\"id\":\"b\",\"text\":\"Leave a comment asking if it is still being worked on, then wait for a reply.\",\"correct\":true,\"explanation\":\"A polite check-in costs one comment and prevents duplicate work. The maintainer can also weigh in. If there is no reply in a week or two, it is reasonable to proceed.\"},{\"id\":\"c\",\"text\":\"Skip it. It is assigned to someone.\",\"correct\":false,\"explanation\":\"It is not formally assigned. Someone just said they would take it and never followed through. Skipping it entirely means you might miss a valid issue just because of an old comment.\"},{\"id\":\"d\",\"text\":\"Open a PR immediately. If yours gets merged first, that is fair.\",\"correct\":false,\"explanation\":\"Racing on PRs creates unnecessary conflict and extra work for the maintainer who now has to close a duplicate. It is also poor etiquette in most communities.\"}]},{\"id\":4,\"domain\":\"issue_judgment\",\"question\":\"Issue #15 (case-insensitive search) is open and labeled bug. You are about to start on it. What should you check first?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Whether the issue has a lot of comments.\",\"correct\":false,\"explanation\":\"Comment count shows engagement, not whether the bug is still present. Issue #15 has comments, but that does not tell you whether it was already fixed.\"},{\"id\":\"b\",\"text\":\"Whether the label says good first issue.\",\"correct\":false,\"explanation\":\"Labels are set by maintainers and are not always kept up to date when issues get resolved. A label is a starting point, not a guarantee the issue is still open or relevant.\"},{\"id\":\"c\",\"text\":\"Whether any merged PR already fixed it.\",\"correct\":true,\"explanation\":\"PR #38, merged in August 2026, fixed exactly this bug. The issue is still marked open, but the fix is already in the codebase. Checking closed PRs before you start would have caught this.\"},{\"id\":\"d\",\"text\":\"Whether the fix would be small enough.\",\"correct\":false,\"explanation\":\"Scope matters when choosing an issue, but not before you have checked whether the issue even needs fixing anymore. Scope comes after you have confirmed the bug is still present.\"}]},{\"id\":5,\"domain\":\"issue_judgment\",\"question\":\"Which issue is the best first pick?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"#12 — Saving a note with an empty title silently creates a broken note\",\"correct\":true,\"explanation\":\"Clear reproduction steps, maintainer confirmed it is a good first contribution, no one has claimed it, and the fix is small and self-contained. This is what a good first pick looks like.\"},{\"id\":\"b\",\"text\":\"#15 — search_notes does not find notes when query case does not match\",\"correct\":false,\"explanation\":\"PR #38 merged in August 2026 and fixed this bug. The issue is still open but the code is already corrected. Starting here means doing work that is already done.\"},{\"id\":\"c\",\"text\":\"#19 — list_notes returns live objects, mutations affect the internal store\",\"correct\":false,\"explanation\":\"The maintainer's own comment explains this requires understanding shallow vs deep copy semantics and the storage layer design. The label says good first issue but the issue body itself warns you off if you are not familiar with copy semantics.\"},{\"id\":\"d\",\"text\":\"#23 — Notes disappear sometimes when I add a lot of them\",\"correct\":false,\"explanation\":\"There are no reproduction steps, no version, and no error message. The maintainer already asked for more info and the reporter has not followed up. You cannot fix what you cannot reproduce.\"}]},{\"id\":6,\"domain\":\"issue_judgment\",\"question\":\"Issue #23 says notes disappear sometimes when adding a lot of them, and nothing else. Which comment is most useful?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Same issue here, I see it too.\",\"correct\":false,\"explanation\":\"This tells the maintainer the bug affects more than one person, but gives them nothing to work with. It adds noise without moving the issue forward.\"},{\"id\":\"b\",\"text\":\"This report is too vague to be useful.\",\"correct\":false,\"explanation\":\"Accurate, but unhelpful. Telling someone their report is bad without explaining what is missing does not help them fix it, and it is likely to discourage them from reporting again.\"},{\"id\":\"c\",\"text\":\"Could you share your Python version, the exact steps you followed, and what you expected versus what actually happened?\",\"correct\":true,\"explanation\":\"This tells the reporter exactly what is missing and why it matters. Version, steps, and expected vs actual output are the minimum needed to reproduce any bug. Specific questions get specific answers.\"},{\"id\":\"d\",\"text\":\"I will try to reproduce this and let you know.\",\"correct\":false,\"explanation\":\"You cannot reproduce it from what has been shared. There are no steps. Promising to try without asking for the missing info just delays the issue without resolving the information gap.\"}]},{\"id\":7,\"domain\":\"git_workflow\",\"question\":\"Your fork's main branch is 14 commits behind the original repo. What do you do before branching to fix issue #12?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Branch from your fork's main as it is.\",\"correct\":false,\"explanation\":\"You would be working off stale code. If the area you are changing has been updated in those 14 commits, you will either have conflicts when you open the PR or silently undo work that was already done.\"},{\"id\":\"b\",\"text\":\"Sync your fork with the original repo, then branch from the updated main.\",\"correct\":true,\"explanation\":\"Syncing first means your branch starts from the latest code. Fewer merge conflicts, no risk of reverting recent changes, and a cleaner diff when the maintainer reviews.\"},{\"id\":\"c\",\"text\":\"Make the changes directly on your fork's main.\",\"correct\":false,\"explanation\":\"Working on main directly makes it hard to keep your fork in sync with the original and breaks the standard fork-and-branch workflow. It also makes it harder to work on multiple issues separately.\"},{\"id\":\"d\",\"text\":\"Delete your fork and fork again from the original.\",\"correct\":false,\"explanation\":\"This works but it is unnecessarily disruptive. Git gives you git fetch upstream and git merge upstream/main to sync without starting over.\"}]},{\"id\":8,\"domain\":\"review\",\"question\":\"You open a PR for issue #12. The maintainer replies: thanks, can you move the empty check to after the strip() call, and add a period to the error message? What do you do?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Open a new PR with the changes.\",\"correct\":false,\"explanation\":\"A new PR loses the review history and context. Push the changes to the same branch. The existing PR updates automatically. Opening a second PR is confusing and creates cleanup work for the maintainer.\"},{\"id\":\"b\",\"text\":\"Reply explaining why your original approach is correct.\",\"correct\":false,\"explanation\":\"The maintainer is not asking for a debate. They are giving you specific, low-stakes feedback to keep the codebase consistent. Pushing back on minor style points in a first PR is a poor use of everyone's time.\"},{\"id\":\"c\",\"text\":\"Make the two changes, push to the same branch, and reply once it is done.\",\"correct\":true,\"explanation\":\"This is exactly what happened in PR #41. The contributor made the requested changes, explained what they updated, and thanked the reviewer. The PR was merged the next day.\"},{\"id\":\"d\",\"text\":\"Close the PR. The feedback means it has been rejected.\",\"correct\":false,\"explanation\":\"A review with requested changes is the opposite of a rejection. The maintainer engaged, read your code, and told you how to get it merged. Closing it means the work never lands.\"}]}]");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/weatherly/commits.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "hash": "a3f91c",
        "author": "kiran-weather-dev",
        "date": "2025-06-12",
        "message": "refactor: extract format_output into its own function"
    },
    {
        "hash": "b7e204",
        "author": "kiran-weather-dev",
        "date": "2025-06-08",
        "message": "feat: add humidity to output"
    },
    {
        "hash": "c1d83a",
        "author": "kiran-weather-dev",
        "date": "2025-06-01",
        "message": "chore: update requirements.txt"
    },
    {
        "hash": "d09f55",
        "author": "kiran-weather-dev",
        "date": "2025-05-22",
        "message": "feat: add get_weather entry point function"
    },
    {
        "hash": "e4b612",
        "author": "kiran-weather-dev",
        "date": "2025-05-10",
        "message": "Merge pull request #11 from kiran-weather-dev/format-temps"
    },
    {
        "hash": "f2a038",
        "author": "kiran-weather-dev",
        "date": "2025-05-08",
        "message": "feat: add degree symbol to temperature output"
    },
    {
        "hash": "07c94d",
        "author": "kiran-weather-dev",
        "date": "2025-05-01",
        "message": "feat: add cli.py entry point"
    },
    {
        "hash": "18e761",
        "author": "kiran-weather-dev",
        "date": "2025-04-20",
        "message": "feat: parse humidity from API response"
    },
    {
        "hash": "29b340",
        "author": "kiran-weather-dev",
        "date": "2025-04-10",
        "message": "feat: parse weather description from response"
    },
    {
        "hash": "3ad527",
        "author": "kiran-weather-dev",
        "date": "2025-03-01",
        "message": "init: parse temperature from API response"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/weatherly/files.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "tree": [
        {
            "name": "README.md",
            "type": "file",
            "content": "# weatherly\n\nA small Python module and CLI for parsing and displaying weather data from an API response.\n\n## Requirements\n\n- Python 3.10 or higher\n- pytest (for running tests)\n\n## Installation\n\n```bash\ngit clone https://github.com/kiran-weather-dev/weatherly.git\ncd weatherly\npip install -r requirements.txt\n```\n\n## Usage\n\n```python\nfrom src.weather import parse_weather, format_output\n\n# Simulated API response\ndata = {\n    \"main\": {\"temp\": 28.4, \"humidity\": 72},\n    \"weather\": [{\"description\": \"partly cloudy\"}]\n}\n\nparsed = parse_weather(data)\nprint(format_output(parsed))\n# Temp: 28.4°C | Humidity: 72% | Partly cloudy\n```\n\n## CLI\n\n```bash\npython src/cli.py London\n```\n\n## Running tests\n\n```bash\npytest tests/\n```\n\n## License\n\nSee [LICENSE](LICENSE).\n"
        },
        {
            "name": "requirements.txt",
            "type": "file",
            "content": "pytest==8.3.3\n"
        },
        {
            "name": "src",
            "type": "dir",
            "children": [
                {
                    "name": "cli.py",
                    "type": "file",
                    "content": "# cli.py — command-line entry point for weatherly\n# Usage: python cli.py <city>\n# In production this calls a weather API. Here it runs against a simulated response.\n\nimport sys\nfrom src.weather import get_weather\n\n# Simulated response — replace with a real requests.get() call in production\nDEMO_RESPONSE = {\n    \"main\": {\"temp\": 22.5, \"humidity\": 60},\n    \"weather\": [{\"description\": \"clear sky\"}],\n}\n\ndef main():\n    if len(sys.argv) < 2:\n        print(\"Usage: python cli.py <city>\")\n        sys.exit(1)\n    city = sys.argv[1]\n    print(f\"Weather for {city}:\")\n    print(get_weather(DEMO_RESPONSE))\n\nif __name__ == \"__main__\":\n    main()\n"
                },
                {
                    "name": "weather.py",
                    "type": "file",
                    "content": "# weather.py — v1.0.0\n# Parses and displays weather data from an API response dict.\n\ndef parse_weather(data: dict) -> dict:\n    \"\"\"Parse weather data from an API response dict.\n\n    Returns a dict with temp, humidity, and description.\n    \"\"\"\n    temp = data[\"main\"][\"temp\"]\n    humidity = data[\"main\"][\"humidity\"]\n    description = data[\"weather\"][0][\"description\"]\n    return {\"temp\": temp, \"humidity\": humidity, \"description\": description}\n\n\ndef format_output(parsed: dict) -> str:\n    \"\"\"Format parsed weather data as a human-readable string.\"\"\"\n    return (\n        f\"Temp: {parsed['temp']}°C | \"\n        f\"Humidity: {parsed['humidity']}% | \"\n        f\"{parsed['description'].capitalize()}\"\n    )\n\n\ndef get_weather(data: dict) -> str:\n    \"\"\"Takes a raw API response dict, returns a formatted weather string.\"\"\"\n    parsed = parse_weather(data)\n    return format_output(parsed)\n"
                }
            ]
        },
        {
            "name": "tests",
            "type": "dir",
            "children": [
                {
                    "name": "test_weather.py",
                    "type": "file",
                    "content": "\"\"\"Tests for weatherly — HEAD version (v1.0.0).\"\"\"\n\nimport sys\nimport os\n\nsys.path.insert(0, os.path.join(os.path.dirname(__file__), \"..\"))\n\nimport pytest\nfrom src.weather import parse_weather, format_output, get_weather\n\nVALID_RESPONSE = {\n    \"main\": {\"temp\": 22.5, \"humidity\": 60},\n    \"weather\": [{\"description\": \"clear sky\"}],\n}\n\n\ndef test_parse_weather_returns_expected_fields():\n    result = parse_weather(VALID_RESPONSE)\n    assert result[\"temp\"] == 22.5\n    assert result[\"humidity\"] == 60\n    assert result[\"description\"] == \"clear sky\"\n\n\ndef test_format_output_contains_temp():\n    result = format_output({\"temp\": 22.5, \"humidity\": 60, \"description\": \"clear sky\"})\n    assert \"22.5\" in result\n\n\ndef test_format_output_capitalises_description():\n    result = format_output({\"temp\": 10.0, \"humidity\": 50, \"description\": \"light rain\"})\n    assert \"Light rain\" in result\n\n\ndef test_get_weather_returns_string():\n    result = get_weather(VALID_RESPONSE)\n    assert isinstance(result, str)\n    assert \"22.5\" in result\n"
                }
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/weatherly/issues.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 2,
        "title": "KeyError when looking up a city that can't be found",
        "kind": "bug",
        "state": "open",
        "labels": [
            "bug"
        ],
        "opened_by": "preethi-codes",
        "opened_at": "2025-04-22",
        "assigned_to": null,
        "body": "If you pass a city name that the API doesn't recognise, the whole program crashes with a KeyError instead of showing an error message.\n\n```\nKeyError: 'main'\n```\n\nI mistyped the city name and got this instead of a helpful message.\n\n**Steps to reproduce:**\n1. Call `parse_weather` with a response that has no `main` key (e.g. a 404 response from the API)\n2. Observe: unhandled KeyError, program exits\n\n**Expected:** A clean error message like \"City not found.\"\n**Actual:** Unhandled KeyError\n\n**Version:** 1.0.0\n**Python:** 3.12",
        "comments": [
            {
                "author": "meera-writes-code",
                "date": "2025-04-24",
                "body": "Reproduced this too. Happens with any city name that returns a non-200 response."
            }
        ],
        "lesson": "fix_pending_unmerged",
        "lesson_feedback": "This bug is real and reproducible. But before you start: check the open PRs. Someone has already submitted a fix. It hasn't been merged — not because it's wrong, but because the maintainer hasn't responded to anything in over a year.",
        "reproduction": {
            "issueId": "weatherly-2",
            "buggyVersion": "1.0.0",
            "fixedVersion": "1.1.0",
            "reproductionSteps": [
                {
                    "instruction": "Open weather.py and find the parse_weather function."
                },
                {
                    "instruction": "Call parse_weather({'cod': '404', 'message': 'city not found'})"
                },
                {
                    "instruction": "Observe what happens."
                }
            ],
            "expectedResult": "parse_weather returns an error dict instead of crashing.",
            "buggyBehavior": {
                "output": "Traceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\n  File \"src/weather.py\", line 9, in parse_weather\n    temp = data[\"main\"][\"temp\"]\nKeyError: 'main'",
                "type": "crash",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "{'error': 'Unexpected API response: missing weather data.'}",
                "type": "validation_error",
                "verifiedByTest": true
            },
            "regressionTestId": "weatherly/missing-main-key"
        }
    },
    {
        "id": 5,
        "title": "Add option to display temperature in Fahrenheit",
        "kind": "feature",
        "state": "open",
        "labels": [
            "good first issue"
        ],
        "opened_by": "kiran-weather-dev",
        "opened_at": "2025-05-03",
        "assigned_to": null,
        "body": "It would be useful to support a `--unit` flag so users can choose Celsius or Fahrenheit. The conversion is straightforward: `F = C * 9/5 + 32`.\n\nThis would be a good first contribution if anyone wants to pick it up.",
        "comments": [
            {
                "author": "curious-dev",
                "date": "2026-05-04",
                "body": "Is anyone working on this? I'd be interested in picking it up."
            }
        ],
        "lesson": "good_first_issue_hard",
        "lesson_feedback": "The change itself is small, but consider the context before starting. Check the last commit date, the open PRs, and whether the maintainer has replied to anything recently.",
        "reproduction": null
    },
    {
        "id": 7,
        "title": "IndexError when API returns empty weather list",
        "kind": "bug",
        "state": "open",
        "labels": [
            "bug"
        ],
        "opened_by": "infra-nerd-9",
        "opened_at": "2025-05-05",
        "assigned_to": null,
        "body": "Another crash in `parse_weather`. If the API returns a response where the `weather` array is empty, line `data['weather'][0]` raises an IndexError.\n\n```\nIndexError: list index out of range\n```\n\n**Steps to reproduce:**\n1. Call `parse_weather` with `{'main': {'temp': 18.0, 'humidity': 55}, 'weather': []}`\n2. Observe: IndexError\n\n**Expected:** A clean error message.\n**Actual:** Unhandled IndexError\n\n**Version:** 1.0.0\n**Python:** 3.12",
        "comments": [
            {
                "author": "anon-contributor",
                "date": "2025-11-20",
                "body": "I'll take this one."
            },
            {
                "author": "random-dev-42",
                "date": "2026-01-15",
                "body": "Any progress on this? Still hitting the crash."
            }
        ],
        "lesson": "claimed_never_started",
        "lesson_feedback": "Someone claimed this over 10 months ago. No PR was ever opened. Before you start, leave a comment asking if they're still working on it — and also check the overall repo health before investing time here.",
        "reproduction": {
            "issueId": "weatherly-7",
            "buggyVersion": "1.0.0",
            "fixedVersion": "1.1.0",
            "reproductionSteps": [
                {
                    "instruction": "Open weather.py and find the parse_weather function."
                },
                {
                    "instruction": "Call parse_weather({'main': {'temp': 18.0, 'humidity': 55}, 'weather': []})"
                },
                {
                    "instruction": "Observe what happens."
                }
            ],
            "expectedResult": "parse_weather returns an error dict instead of crashing.",
            "buggyBehavior": {
                "output": "Traceback (most recent call last):\n  File \"<stdin>\", line 1, in <module>\n  File \"src/weather.py\", line 11, in parse_weather\n    description = data[\"weather\"][0][\"description\"]\nIndexError: list index out of range",
                "type": "crash",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "{'error': 'Unexpected API response: weather list is empty.'}",
                "type": "validation_error",
                "verifiedByTest": true
            },
            "regressionTestId": "weatherly/empty-weather-list"
        }
    },
    {
        "id": 20,
        "title": "API key invalid?",
        "kind": "question",
        "state": "open",
        "labels": [],
        "opened_by": "frustrated-user-77",
        "opened_at": "2026-02-28",
        "assigned_to": null,
        "body": "Getting an error about invalid API key. Not sure what's happening. Can someone help?",
        "comments": [],
        "lesson": "no_reproduction_steps",
        "lesson_feedback": "No steps, no error message, no Python version, no indication of where they got their API key. There is not enough information here to help. The right move is to ask for the missing details — but also check whether the maintainer is likely to respond at all.",
        "reproduction": null
    },
    {
        "id": 22,
        "title": "Is this project still maintained?",
        "kind": "question",
        "state": "open",
        "labels": [],
        "opened_by": "random-dev-42",
        "opened_at": "2026-07-20",
        "assigned_to": null,
        "body": "The last commit was over a year ago and open PRs are going unanswered. Is anyone still maintaining this? I'd like to contribute but I'm not sure it's worth the effort if nothing gets reviewed.",
        "comments": [
            {
                "author": "anon-contributor",
                "date": "2026-07-22",
                "body": "I opened a PR 7 months ago and never heard back. I think it's safe to say it's abandoned."
            },
            {
                "author": "meera-writes-code",
                "date": "2026-08-01",
                "body": "Same experience here. Moving on to other projects."
            }
        ],
        "lesson": "health_signal",
        "lesson_feedback": "This is the clearest signal in the repo. Last commit 13+ months ago. Four open PRs, all unanswered. No maintainer reply anywhere. This is what an abandoned repo looks like. The right call is to walk away.",
        "reproduction": null
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "id": "weatherly",
    "name": "weatherly",
    "description": "A small Python module and CLI for parsing and displaying weather API responses.",
    "language": "Python",
    "stars": 203,
    "forks": 31,
    "owner": "kiran-weather-dev",
    "last_commit_date": "2025-06-12",
    "has_readme": true,
    "has_contributing": false,
    "has_ci": false,
    "avg_pr_response_days": null,
    "open_issues": 5,
    "open_prs": 4,
    "stale_prs": 4,
    "merged_prs_last_90_days": 0,
    "maintainer_replies_in_issues": false,
    "topics": [
        "python",
        "cli",
        "weather"
    ],
    "asOf": "2026-09-15",
    "verdict": "leave"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/weatherly/prs.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 11,
        "title": "feat: format temperature output",
        "state": "merged",
        "author": "kiran-weather-dev",
        "opened_at": "2025-05-07",
        "merged_at": "2025-05-10",
        "linked_issue": null,
        "branch": "format-temps",
        "description": "Added degree symbol and consistent decimal formatting to temperature output.",
        "diff_summary": "src/weather.py: updated format_output to use f-string with °C suffix",
        "review_comments": [],
        "lesson": null,
        "lesson_note": "The last merged PR. Everything after this has gone unanswered."
    },
    {
        "id": 13,
        "title": "docs: fix typo in README usage example",
        "state": "open",
        "author": "meera-writes-code",
        "opened_at": "2025-07-02",
        "merged_at": null,
        "linked_issue": null,
        "branch": "docs/readme-typo",
        "description": "Fixed a typo in the README usage example — `get_weather` was spelled `get_weater`.",
        "diff_summary": "README.md: one typo fixed",
        "review_comments": [],
        "lesson": null,
        "lesson_note": "Docs fix opened 14 months ago. No response from maintainer."
    },
    {
        "id": 14,
        "title": "feat: add wind speed to output",
        "state": "open",
        "author": "curious-dev",
        "opened_at": "2025-08-11",
        "merged_at": null,
        "linked_issue": null,
        "branch": "feat/wind-speed-display",
        "description": "Added wind speed from `data['wind']['speed']` to the formatted output string.",
        "diff_summary": "src/weather.py: added wind speed field to format_output",
        "review_comments": [],
        "lesson": null,
        "lesson_note": "Open 13 months. No response."
    },
    {
        "id": 16,
        "title": "fix: handle empty API response gracefully",
        "state": "open",
        "author": "lena-open-source",
        "opened_at": "2025-10-18",
        "merged_at": null,
        "linked_issue": null,
        "branch": "fix/empty-api-response",
        "description": "Added a check for empty response before parsing. Prevents a crash when the API returns nothing.",
        "diff_summary": "src/weather.py: added `if not data: return {'error': 'Empty response'}`",
        "review_comments": [
            {
                "author": "kiran-weather-dev",
                "date": "2025-10-18",
                "body": "Thanks for the PR. Can you also add a test for this case?",
                "resolved": false
            },
            {
                "author": "lena-open-source",
                "date": "2025-10-18",
                "body": "Sure, added a test in the latest commit."
            }
        ],
        "lesson": null,
        "lesson_note": "The maintainer asked for a change on the day it was opened. The contributor responded the same day. The maintainer never replied again — 11 months of silence."
    },
    {
        "id": 19,
        "title": "fix: handle missing 'main' key in API response",
        "state": "open",
        "author": "dev-rohan",
        "opened_at": "2025-12-10",
        "merged_at": null,
        "linked_issue": 2,
        "branch": "fix/issue-2-missing-main-key",
        "description": "Fixes #2.\n\nAdded a check for the 'main' key before accessing it. Returns a clean error dict instead of raising KeyError.\n\nTested with a 404-style response and a valid response.",
        "diff_summary": "src/weather.py: added guard before data['main'] access",
        "review_comments": [],
        "lesson": "good_newcomer_pr",
        "lesson_note": "Correct fix, well-scoped, linked to the issue, includes description of what was tested. The maintainer never responded. It has been open 9 months."
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/weatherly/quiz.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 1,
        "domain": "repo_health",
        "question": "A friend asks whether they should contribute to weatherly. What do you tell them?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Yes, the open PRs show people are engaged here.",
                "correct": false,
                "explanation": "The contributors are engaged, but the maintainer isn't. Open PRs only mean people tried — they say nothing about whether anyone is reviewing."
            },
            {
                "id": "b",
                "text": "No, nobody seems to be reviewing PRs here.",
                "correct": true,
                "explanation": "The most recent merged PR is over a year old, four PRs are sitting open with no response, and the maintainer hasn't replied anywhere in almost a year. That's the clearest signal you can get."
            },
            {
                "id": "c",
                "text": "Not sure — wait and see if #22 gets answered.",
                "correct": false,
                "explanation": "Issue #22 has been open for weeks with no reply. The silence is already your answer."
            },
            {
                "id": "d",
                "text": "Yes, #5 is labelled good first issue.",
                "correct": false,
                "explanation": "Labels are set by maintainers and can be years old. This one was set about 16 months ago when the project was still active."
            }
        ]
    },
    {
        "id": 2,
        "domain": "repo_health",
        "question": "Which two signals are the strongest evidence that nobody will review your PR? (Select two)",
        "type": "multi",
        "options": [
            {
                "id": "a",
                "text": "There is no CONTRIBUTING.md.",
                "correct": false,
                "explanation": "Many small, healthy repos have no CONTRIBUTING.md. Absence of it alone doesn't signal abandonment."
            },
            {
                "id": "b",
                "text": "The most recent merged PR is over a year old.",
                "correct": true,
                "explanation": "If nothing has been merged in over a year, there is no evidence the maintainer is still reviewing anything."
            },
            {
                "id": "c",
                "text": "There are open PRs.",
                "correct": false,
                "explanation": "Busy, healthy repos have plenty of open PRs. Open PRs alone mean nothing — you need to look at whether they get responses."
            },
            {
                "id": "d",
                "text": "The maintainer's last reply anywhere is almost a year old.",
                "correct": true,
                "explanation": "If the maintainer hasn't replied to any issue or PR in almost a year, there is no reason to expect they will reply to yours."
            },
            {
                "id": "e",
                "text": "#5 has a good first issue label.",
                "correct": false,
                "explanation": "A label says nothing about whether anyone is reviewing. Labels are set once and rarely updated."
            }
        ]
    },
    {
        "id": 3,
        "domain": "issue_judgment",
        "question": "You've decided to contribute to weatherly. Which issue would you take?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "#2 — Crash when the city isn't found.",
                "correct": false,
                "explanation": "This is a real, reproducible bug. But check the open PRs first — a fix has been sitting in PR #19 for 9 months with no response from the maintainer."
            },
            {
                "id": "b",
                "text": "#5 — Add Fahrenheit option.",
                "correct": false,
                "explanation": "The label is about 16 months old and nobody is reviewing PRs. The change being small doesn't help if there's nobody to merge it."
            },
            {
                "id": "c",
                "text": "#7 — IndexError when the weather list is empty.",
                "correct": false,
                "explanation": "A real bug, but someone claimed it in November and opened no PR since. Always ask before starting on a claimed issue."
            },
            {
                "id": "d",
                "text": "#20 — API key invalid?",
                "correct": false,
                "explanation": "No steps, no version, no traceback. There is not enough information to reproduce this, let alone fix it."
            },
            {
                "id": "e",
                "text": "None of these — I'd look for a different repo.",
                "correct": true,
                "explanation": "Every issue here has a problem: the repo is abandoned, fixes go unmerged, issues are claimed without follow-up, or reports lack enough information. The right call is to walk away."
            }
        ]
    },
    {
        "id": 4,
        "domain": "issue_judgment",
        "question": "You've reproduced issue #2 and want to fix it. What do you check first?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Whether a fix already exists somewhere in the repo.",
                "correct": true,
                "explanation": "PR #19 has had a correct fix sitting open for 9 months. Writing the same fix again would duplicate work that is already being ignored."
            },
            {
                "id": "b",
                "text": "Whether your Python version matches the maintainer's.",
                "correct": false,
                "explanation": "Python version matters for compatibility, but it has no bearing on whether a fix already exists."
            },
            {
                "id": "c",
                "text": "Whether the original reporter has contributed elsewhere.",
                "correct": false,
                "explanation": "The reporter's contribution history is irrelevant to whether you should open a duplicate fix."
            },
            {
                "id": "d",
                "text": "How many reactions the issue has.",
                "correct": false,
                "explanation": "Reaction counts tell you how many people want a fix, not whether one already exists or whether anyone will review yours."
            }
        ]
    },
    {
        "id": 5,
        "domain": "issue_judgment",
        "question": "Issue #5 is labelled good first issue and the change is small. What is the real problem with taking it?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Small changes need a test first.",
                "correct": false,
                "explanation": "Tests are good practice, but they aren't the reason this issue is a bad pick."
            },
            {
                "id": "b",
                "text": "Fahrenheit conversion is too hard for beginners.",
                "correct": false,
                "explanation": "The conversion itself is straightforward. Difficulty isn't the issue here."
            },
            {
                "id": "c",
                "text": "Nobody is around to review it.",
                "correct": true,
                "explanation": "The maintainer wrote this label about 16 months ago when the project was active. A good first issue label only helps if someone is there to review the PR. There isn't."
            },
            {
                "id": "d",
                "text": "The label only applies to documentation issues.",
                "correct": false,
                "explanation": "Good first issue applies to any kind of contribution. The label itself isn't the problem."
            }
        ]
    },
    {
        "id": 6,
        "domain": "repo_health",
        "question": "Issue #2 says parse_weather crashes when the city isn't found. You call it with a normal weather response and it works fine. What do you do next?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Mark it \"Can't reproduce\" — it works on my machine.",
                "correct": false,
                "explanation": "You didn't use the input described in the report. A normal response isn't the failing case."
            },
            {
                "id": "b",
                "text": "Re-run it with the not-found response the report describes.",
                "correct": true,
                "explanation": "\"Can't reproduce\" only counts after you follow the reporter's exact steps. The crash happens with a not-found response, not a valid one."
            },
            {
                "id": "c",
                "text": "Mark it \"Reproduced\" — the report is detailed enough to trust.",
                "correct": false,
                "explanation": "Trusting the report without running the steps isn't reproducing. You need to confirm it yourself."
            },
            {
                "id": "d",
                "text": "Comment \"works for me\" and move on.",
                "correct": false,
                "explanation": "You tested the wrong input. This comment would be wrong and unhelpful."
            }
        ]
    },
    {
        "id": 7,
        "domain": "contributing",
        "question": "You've decided weatherly isn't worth your time. What's the best next move?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "Open a PR anyway to show interest.",
                "correct": false,
                "explanation": "A PR on an abandoned repo wastes your time and adds noise. It won't get reviewed."
            },
            {
                "id": "b",
                "text": "Comment on #22 and wait for an answer.",
                "correct": false,
                "explanation": "Issue #22 has already been open for weeks with no reply. Waiting costs you weeks more on a project that's shown no signs of life."
            },
            {
                "id": "c",
                "text": "Fork it and maintain it yourself.",
                "correct": false,
                "explanation": "Maintaining a fork is a months-long commitment. It's a valid path eventually, but not a first-contribution move."
            },
            {
                "id": "d",
                "text": "Apply the same checks to a different project.",
                "correct": true,
                "explanation": "Moving on isn't failing — it's the skill this repo is here to teach. You just saved yourself weeks of work on a dead end."
            }
        ]
    },
    {
        "id": 8,
        "domain": "review",
        "question": "Look at PR #16. Who is the conversation waiting on?",
        "type": "single",
        "options": [
            {
                "id": "a",
                "text": "The maintainer.",
                "correct": true,
                "explanation": "The maintainer asked for a test. The author added it the same day and said so. Everything the author was asked to do is done — the ball is entirely in the maintainer's court."
            },
            {
                "id": "b",
                "text": "The author, who still has changes to make.",
                "correct": false,
                "explanation": "The author replied the same day the changes were requested and confirmed the test was added. There is nothing left for them to do."
            },
            {
                "id": "c",
                "text": "A second reviewer.",
                "correct": false,
                "explanation": "There is no mention of a second reviewer being required. The thread only involves the maintainer and the author."
            },
            {
                "id": "d",
                "text": "Nobody — it's approved and ready to merge.",
                "correct": false,
                "explanation": "The maintainer never replied after the author added the test. It has not been approved."
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/loader.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REPO_IDS",
    ()=>REPO_IDS,
    "findFile",
    ()=>findFile,
    "getCommits",
    ()=>getCommits,
    "getFileTree",
    ()=>getFileTree,
    "getIssue",
    ()=>getIssue,
    "getIssues",
    ()=>getIssues,
    "getMeta",
    ()=>getMeta,
    "getPR",
    ()=>getPR,
    "getPRs",
    ()=>getPRs,
    "getQuiz",
    ()=>getQuiz
]);
// In v1, repos are bundled as static JSON. This loader is the single
// point of access — pages never import JSON directly.
function loadJson(repoId, file) {
    // Next.js resolves require() at build time for JSON in the project tree
    return __turbopack_context__.f({
        "./data//gradewise/commits.json": {
            id: ()=>"[project]/lib/data/gradewise/commits.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/commits.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//gradewise/files.json": {
            id: ()=>"[project]/lib/data/gradewise/files.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/files.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//gradewise/issues.json": {
            id: ()=>"[project]/lib/data/gradewise/issues.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/issues.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//gradewise/meta.json": {
            id: ()=>"[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//gradewise/prs.json": {
            id: ()=>"[project]/lib/data/gradewise/prs.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/prs.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//gradewise/quiz.json": {
            id: ()=>"[project]/lib/data/gradewise/quiz.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/quiz.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//notes-app/commits.json": {
            id: ()=>"[project]/lib/data/notes-app/commits.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/commits.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//notes-app/files.json": {
            id: ()=>"[project]/lib/data/notes-app/files.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/files.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//notes-app/issues.json": {
            id: ()=>"[project]/lib/data/notes-app/issues.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/issues.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//notes-app/meta.json": {
            id: ()=>"[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//notes-app/prs.json": {
            id: ()=>"[project]/lib/data/notes-app/prs.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/prs.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//notes-app/quiz.json": {
            id: ()=>"[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//weatherly/commits.json": {
            id: ()=>"[project]/lib/data/weatherly/commits.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/commits.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//weatherly/files.json": {
            id: ()=>"[project]/lib/data/weatherly/files.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/files.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//weatherly/issues.json": {
            id: ()=>"[project]/lib/data/weatherly/issues.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/issues.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//weatherly/meta.json": {
            id: ()=>"[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//weatherly/prs.json": {
            id: ()=>"[project]/lib/data/weatherly/prs.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/prs.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data//weatherly/quiz.json": {
            id: ()=>"[project]/lib/data/weatherly/quiz.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/quiz.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/gradewise/commits.json": {
            id: ()=>"[project]/lib/data/gradewise/commits.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/commits.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/gradewise/files.json": {
            id: ()=>"[project]/lib/data/gradewise/files.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/files.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/gradewise/issues.json": {
            id: ()=>"[project]/lib/data/gradewise/issues.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/issues.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/gradewise/meta.json": {
            id: ()=>"[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/gradewise/prs.json": {
            id: ()=>"[project]/lib/data/gradewise/prs.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/prs.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/gradewise/quiz.json": {
            id: ()=>"[project]/lib/data/gradewise/quiz.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/gradewise/quiz.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/notes-app/commits.json": {
            id: ()=>"[project]/lib/data/notes-app/commits.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/commits.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/notes-app/files.json": {
            id: ()=>"[project]/lib/data/notes-app/files.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/files.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/notes-app/issues.json": {
            id: ()=>"[project]/lib/data/notes-app/issues.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/issues.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/notes-app/meta.json": {
            id: ()=>"[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/notes-app/prs.json": {
            id: ()=>"[project]/lib/data/notes-app/prs.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/prs.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/notes-app/quiz.json": {
            id: ()=>"[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/weatherly/commits.json": {
            id: ()=>"[project]/lib/data/weatherly/commits.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/commits.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/weatherly/files.json": {
            id: ()=>"[project]/lib/data/weatherly/files.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/files.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/weatherly/issues.json": {
            id: ()=>"[project]/lib/data/weatherly/issues.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/issues.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/weatherly/meta.json": {
            id: ()=>"[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/weatherly/prs.json": {
            id: ()=>"[project]/lib/data/weatherly/prs.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/prs.json.[json].cjs [app-client] (ecmascript)")
        },
        "./data/weatherly/quiz.json": {
            id: ()=>"[project]/lib/data/weatherly/quiz.json.[json].cjs [app-client] (ecmascript)",
            module: ()=>__turbopack_context__.r("[project]/lib/data/weatherly/quiz.json.[json].cjs [app-client] (ecmascript)")
        }
    })(`./data/${repoId}/${file}.json`);
}
function getMeta(repoId) {
    return loadJson(repoId, "meta");
}
function getIssues(repoId) {
    return loadJson(repoId, "issues");
}
function getIssue(repoId, issueId) {
    return getIssues(repoId).find((i)=>i.id === issueId);
}
function getPRs(repoId) {
    return loadJson(repoId, "prs");
}
function getPR(repoId, prId) {
    return getPRs(repoId).find((p)=>p.id === prId);
}
function getCommits(repoId) {
    return loadJson(repoId, "commits");
}
function getFileTree(repoId) {
    return loadJson(repoId, "files");
}
function findFile(repoId, filename) {
    const tree = getFileTree(repoId);
    function search(nodes) {
        for (const node of nodes){
            if (node.type === "file" && node.name === filename) {
                return {
                    name: node.name,
                    content: node.content
                };
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
function getQuiz(repoId) {
    return loadJson(repoId, "quiz");
}
const REPO_IDS = [
    "notes-app",
    "weatherly",
    "gradewise"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/progress.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// progress.ts — per-repo progress tracker
//
// Completed repo records persist in localStorage so the grid
// survives tab close. In-flight quiz state lives in sessionStorage
// and clears on refresh — as requested.
__turbopack_context__.s([
    "allComplete",
    ()=>allComplete,
    "anyComplete",
    ()=>anyComplete,
    "clearAllProgress",
    ()=>clearAllProgress,
    "clearSession",
    ()=>clearSession,
    "completeRepo",
    ()=>completeRepo,
    "getAllProgress",
    ()=>getAllProgress,
    "getRepoProgress",
    ()=>getRepoProgress,
    "getSession",
    ()=>getSession,
    "saveSession",
    ()=>saveSession,
    "setRepoStep",
    ()=>setRepoStep,
    "startSession",
    ()=>startSession
]);
const PROGRESS_KEY = "merge-path-progress";
const sessionKey = (repoId)=>`merge-path-session-${repoId}`;
function canUse(store) {
    try {
        return typeof (store === "local" ? localStorage : sessionStorage) !== "undefined";
    } catch  {
        return false;
    }
}
function readProgress() {
    if (!canUse("local")) return {};
    try {
        const raw = localStorage.getItem(PROGRESS_KEY);
        if (!raw) return {};
        const parsed = JSON.parse(raw);
        return typeof parsed === "object" && parsed !== null ? parsed : {};
    } catch  {
        return {};
    }
}
function writeProgress(data) {
    if (!canUse("local")) return;
    try {
        localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    } catch  {}
}
function getRepoProgress(repoId) {
    return readProgress()[repoId] ?? {
        status: "not_started"
    };
}
function getAllProgress() {
    return readProgress();
}
function setRepoStep(repoId, step) {
    const all = readProgress();
    all[repoId] = {
        ...all[repoId],
        status: "in_progress",
        step
    };
    writeProgress(all);
}
function completeRepo(repoId, result) {
    const all = readProgress();
    all[repoId] = {
        status: "complete",
        ...result,
        completedAt: new Date().toISOString()
    };
    writeProgress(all);
    clearSession(repoId);
}
function allComplete(repoIds) {
    const all = readProgress();
    return repoIds.every((id)=>all[id]?.status === "complete");
}
function anyComplete(repoIds) {
    const all = readProgress();
    return repoIds.some((id)=>all[id]?.status === "complete");
}
function clearAllProgress(repoIds) {
    if (!canUse("local")) return;
    try {
        localStorage.removeItem(PROGRESS_KEY);
    } catch  {}
    repoIds.forEach(clearSession);
}
function getSession(repoId) {
    if (!canUse("session")) return null;
    try {
        const raw = sessionStorage.getItem(sessionKey(repoId));
        return raw ? JSON.parse(raw) : null;
    } catch  {
        return null;
    }
}
function saveSession(session) {
    if (!canUse("session")) return;
    try {
        sessionStorage.setItem(sessionKey(session.repoId), JSON.stringify(session));
    } catch  {}
}
function clearSession(repoId) {
    if (!canUse("session")) return;
    try {
        sessionStorage.removeItem(sessionKey(repoId));
    } catch  {}
}
function startSession(repoId) {
    const session = {
        repoId,
        correct: 0,
        wrong: 0,
        answers: {}
    };
    saveSession(session);
    return session;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_08hgm52._.js.map