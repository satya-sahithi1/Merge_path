(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/repo/[repoId]/quiz/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
// Imported at module level — resolved at build time
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/quiz.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/quiz.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const REPO_DATA = {
    "notes-app": {
        quiz: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    "weatherly": {
        quiz: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    "gradewise": {
        quiz: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
};
const DOMAIN_LABELS = {
    repo_health: "Repo health",
    contributing: "CONTRIBUTING.md",
    issue_judgment: "Issue judgment",
    git_workflow: "Git workflow",
    review: "Review"
};
function QuizPage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const repoId = params.repoId;
    const repo = REPO_DATA[repoId] ?? REPO_DATA["notes-app"];
    const questions = repo.quiz;
    const meta = repo.meta;
    // One AnswerState per question index
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(questions.map({
        "QuizPage.useState": ()=>({
                selected: [],
                submitted: false
            })
    }["QuizPage.useState"]));
    const [currentQ, setCurrentQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const q = questions[currentQ];
    const ans = answers[currentQ];
    function toggleOption(optionId) {
        if (ans.submitted) return;
        setAnswers((prev)=>{
            const updated = [
                ...prev
            ];
            const cur = {
                ...updated[currentQ]
            };
            if (q.type === "single") {
                cur.selected = [
                    optionId
                ];
            } else {
                cur.selected = cur.selected.includes(optionId) ? cur.selected.filter((id)=>id !== optionId) : [
                    ...cur.selected,
                    optionId
                ];
            }
            updated[currentQ] = cur;
            return updated;
        });
    }
    function submitAnswer() {
        if (ans.selected.length === 0 || ans.submitted) return;
        setAnswers((prev)=>{
            const updated = [
                ...prev
            ];
            updated[currentQ] = {
                ...updated[currentQ],
                submitted: true
            };
            return updated;
        });
    }
    function goNext() {
        if (currentQ < questions.length - 1) {
            setCurrentQ((n)=>n + 1);
        } else {
            setFinished(true);
        }
    }
    // ── Scoring ──────────────────────────────────────────────────────────────
    function isCorrect(q, selected) {
        const correctIds = q.options.filter((o)=>o.correct).map((o)=>o.id);
        if (q.type === "single") {
            return selected.length === 1 && correctIds.includes(selected[0]);
        }
        // multi: at least one correct selected, and no wrong options selected
        const hasAtLeastOneCorrect = selected.some((id)=>correctIds.includes(id));
        const hasNoWrong = selected.every((id)=>correctIds.includes(id));
        return hasAtLeastOneCorrect && hasNoWrong;
    }
    const totalCorrect = questions.filter((q, i)=>answers[i].submitted && isCorrect(q, answers[i].selected)).length;
    const total = questions.length;
    const pct = Math.round(totalCorrect / total * 100);
    const band = totalCorrect >= 7 ? {
        label: "Ready",
        color: "#3fb950",
        bg: "#1a3a1a",
        note: "You have the judgment to find and take on a real issue. Go look for one."
    } : totalCorrect >= 5 ? {
        label: "Getting there",
        color: "#d29922",
        bg: "#3a2e00",
        note: "You have the right instincts in some areas. Review what you missed before you start."
    } : {
        label: "Review the tips",
        color: "#f85149",
        bg: "#3a1a1a",
        note: "Work through the repo again and pay close attention to the issue comments and PRs."
    };
    // Domain scores
    const domainScores = {};
    questions.forEach((q, i)=>{
        const d = q.domain;
        if (!domainScores[d]) domainScores[d] = {
            correct: 0,
            total: 0
        };
        domainScores[d].total += 1;
        if (answers[i].submitted && isCorrect(q, answers[i].selected)) {
            domainScores[d].correct += 1;
        }
    });
    // ── Results screen ────────────────────────────────────────────────────────
    if (finished) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            style: {
                background: "var(--background)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "border-b px-6 py-3 flex items-center gap-4",
                    style: {
                        borderColor: "var(--border)",
                        background: "var(--surface)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "Merge Path"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/repo/${repoId}`,
                            className: "text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: meta.name
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 139,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            style: {
                                color: "var(--text-primary)"
                            },
                            children: "Quiz"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 140,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-10 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border p-6 text-center space-y-3",
                            style: {
                                borderColor: "var(--border)",
                                background: band.bg
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-5xl font-bold",
                                    style: {
                                        color: band.color
                                    },
                                    children: [
                                        totalCorrect,
                                        "/",
                                        total
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-semibold",
                                    style: {
                                        color: band.color
                                    },
                                    children: band.label
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 150,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    style: {
                                        color: "var(--text-primary)"
                                    },
                                    children: band.note
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 153,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "var(--text-secondary)"
                                    },
                                    children: "By domain"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this),
                                Object.entries(domainScores).map(([domain, { correct, total }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm w-40",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: DOMAIN_LABELS[domain] ?? domain
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 165,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-2 rounded-full overflow-hidden",
                                                style: {
                                                    background: "var(--surface)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full",
                                                    style: {
                                                        width: `${correct / total * 100}%`,
                                                        background: correct === total ? "#3fb950" : correct > 0 ? "#d29922" : "#f85149"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                    lineNumber: 170,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs w-10 text-right",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: [
                                                    correct,
                                                    "/",
                                                    total
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, domain, true, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 164,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 159,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "var(--text-secondary)"
                                    },
                                    children: "Question review"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 187,
                                    columnNumber: 13
                                }, this),
                                questions.map((q, i)=>{
                                    const correct = isCorrect(q, answers[i].selected);
                                    const correctOptions = q.options.filter((o)=>o.correct);
                                    const selectedOptions = q.options.filter((o)=>answers[i].selected.includes(o.id));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-md border overflow-hidden",
                                        style: {
                                            borderColor: correct ? "#238636" : "#da3633"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 flex items-center gap-2 border-b",
                                                style: {
                                                    borderColor: correct ? "#238636" : "#da3633",
                                                    background: correct ? "#1a3a1a" : "#3a1a1a"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm font-medium",
                                                        style: {
                                                            color: correct ? "#3fb950" : "#f85149"
                                                        },
                                                        children: [
                                                            correct ? "✓" : "✗",
                                                            " Q",
                                                            i + 1
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 204,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: "var(--text-secondary)"
                                                        },
                                                        children: DOMAIN_LABELS[q.domain] ?? q.domain
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 207,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: "var(--text-primary)"
                                                        },
                                                        children: q.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 212,
                                                        columnNumber: 21
                                                    }, this),
                                                    !correct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 text-xs",
                                                        style: {
                                                            color: "var(--text-secondary)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Your answer:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#f85149"
                                                                        },
                                                                        children: selectedOptions.map((o)=>o.text).join(", ") || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                lineNumber: 215,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Correct:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#3fb950"
                                                                        },
                                                                        children: correctOptions.map((o)=>o.text).join(", ")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                        lineNumber: 223,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                lineNumber: 221,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedOptions.filter((o)=>!o.correct).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pt-1",
                                                                    style: {
                                                                        color: "var(--text-primary)"
                                                                    },
                                                                    children: o.explanation
                                                                }, o.id, false, {
                                                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                    lineNumber: 231,
                                                                    columnNumber: 29
                                                                }, this)),
                                                            correctOptions.filter((o)=>!answers[i].selected.includes(o.id)).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pt-1",
                                                                    style: {
                                                                        color: "var(--text-primary)"
                                                                    },
                                                                    children: o.explanation
                                                                }, o.id, false, {
                                                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                    lineNumber: 239,
                                                                    columnNumber: 29
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 214,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, q.id, true, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 186,
                            columnNumber: 11
                        }, this),
                        totalCorrect >= 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border p-4 space-y-3",
                            style: {
                                borderColor: "var(--border)",
                                background: "var(--surface)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "var(--text-primary)"
                                    },
                                    children: "Ready to find a real issue?"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 255,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://goodfirstissues.dev",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm px-4 py-2 rounded-md",
                                            style: {
                                                background: "var(--accent)",
                                                color: "#fff"
                                            },
                                            children: "goodfirstissues.dev ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 259,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://goodfirstissue.dev",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            className: "text-sm px-4 py-2 rounded-md border",
                                            style: {
                                                borderColor: "var(--border)",
                                                color: "var(--text-primary)"
                                            },
                                            children: "goodfirstissue.dev ↗"
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 258,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 253,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/repo/${repoId}`,
                            className: "inline-block text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "← Back to repo"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 273,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
            lineNumber: 131,
            columnNumber: 7
        }, this);
    }
    // ── Question screen ───────────────────────────────────────────────────────
    const correctIds = q.options.filter((o)=>o.correct).map((o)=>o.id);
    function optionState(opt) {
        if (!ans.submitted) {
            return ans.selected.includes(opt.id) ? "selected" : "default";
        }
        if (opt.correct && ans.selected.includes(opt.id)) return "correct";
        if (!opt.correct && ans.selected.includes(opt.id)) return "wrong";
        if (opt.correct && !ans.selected.includes(opt.id)) return "missed";
        return "default";
    }
    const stateStyles = {
        default: {
            border: "var(--border)",
            bg: "var(--surface)",
            color: "var(--text-primary)"
        },
        selected: {
            border: "#58a6ff",
            bg: "#1f3a5f",
            color: "var(--text-primary)"
        },
        correct: {
            border: "#238636",
            bg: "#1a3a1a",
            color: "#3fb950"
        },
        wrong: {
            border: "#da3633",
            bg: "#3a1a1a",
            color: "#f85149"
        },
        missed: {
            border: "#238636",
            bg: "#1a2a1a",
            color: "#3fb950"
        }
    };
    const questionCorrect = ans.submitted && isCorrect(q, ans.selected);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "var(--background)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b px-6 py-3 flex items-center gap-4",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "Merge Path"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 313,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/repo/${repoId}`,
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: meta.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 314,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-primary)"
                        },
                        children: "Quiz"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 318,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto px-4 py-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs",
                                style: {
                                    color: "var(--text-secondary)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Question ",
                                            currentQ + 1,
                                            " of ",
                                            total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 325,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full text-xs",
                                        style: {
                                            background: "var(--surface)",
                                            color: "var(--text-secondary)"
                                        },
                                        children: DOMAIN_LABELS[q.domain] ?? q.domain
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 326,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-1 rounded-full",
                                style: {
                                    background: "var(--surface)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 rounded-full transition-all",
                                    style: {
                                        width: `${(currentQ + 1) / total * 100}%`,
                                        background: "var(--accent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 331,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 323,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-medium",
                                style: {
                                    color: "var(--text-primary)",
                                    lineHeight: 1.6
                                },
                                children: q.question
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 341,
                                columnNumber: 11
                            }, this),
                            q.type === "multi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium",
                                style: {
                                    background: "#1f3a5f",
                                    color: "#58a6ff",
                                    border: "1px solid #1f6feb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "☑"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Multiple answers — select all that apply"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 345,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 340,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: q.options.map((opt)=>{
                            const state = optionState(opt);
                            const style = stateStyles[state];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleOption(opt.id),
                                disabled: ans.submitted,
                                className: "w-full text-left rounded-md border px-4 py-3 text-sm transition-colors",
                                style: {
                                    borderColor: style.border,
                                    background: style.bg,
                                    color: style.color,
                                    cursor: ans.submitted ? "default" : "pointer"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: q.type === "multi" ? ans.selected.includes(opt.id) ? "☑" : "☐" : ans.selected.includes(opt.id) ? "◉" : "○"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 371,
                                        columnNumber: 17
                                    }, this),
                                    opt.text
                                ]
                            }, opt.id, true, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 359,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 354,
                        columnNumber: 9
                    }, this),
                    ans.submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md px-4 py-3 text-sm font-medium",
                                style: {
                                    background: questionCorrect ? "#1a3a1a" : "#3a1a1a",
                                    border: `1px solid ${questionCorrect ? "#238636" : "#da3633"}`,
                                    color: questionCorrect ? "#3fb950" : "#f85149"
                                },
                                children: questionCorrect ? "✓ Correct" : "✗ Not quite"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 386,
                                columnNumber: 13
                            }, this),
                            q.options.filter((o)=>ans.selected.includes(o.id) || o.correct && !ans.selected.includes(o.id)).map((o)=>{
                                const wasSelected = ans.selected.includes(o.id);
                                const isRight = o.correct;
                                const labelColor = isRight ? "#3fb950" : "#f85149";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border px-4 py-3 space-y-1 text-sm",
                                    style: {
                                        borderColor: "var(--border)",
                                        background: "var(--surface)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-medium",
                                            style: {
                                                color: labelColor
                                            },
                                            children: [
                                                isRight ? "✓ Correct" : "✗ Wrong",
                                                !wasSelected ? " (you didn't pick this)" : ""
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 409,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "var(--text-primary)"
                                            },
                                            children: o.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 412,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "var(--text-secondary)"
                                            },
                                            children: o.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 413,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, o.id, true, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 407,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 384,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: !ans.submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: submitAnswer,
                            disabled: ans.selected.length === 0,
                            className: "px-4 py-2 rounded-md text-sm font-medium transition-opacity",
                            style: {
                                background: "var(--accent)",
                                color: "#fff",
                                opacity: ans.selected.length === 0 ? 0.4 : 1,
                                cursor: ans.selected.length === 0 ? "default" : "pointer"
                            },
                            children: "Submit"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: goNext,
                            className: "px-4 py-2 rounded-md text-sm font-medium",
                            style: {
                                background: "var(--accent)",
                                color: "#fff",
                                cursor: "pointer"
                            },
                            children: currentQ < total - 1 ? "Next question →" : "See results →"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 421,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                lineNumber: 321,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
        lineNumber: 308,
        columnNumber: 5
    }, this);
}
_s(QuizPage, "0cIuCtCwXdiTOFiakSCkfTkicCw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = QuizPage;
var _c;
__turbopack_context__.k.register(_c, "QuizPage");
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
"[project]/lib/data/notes-app/quiz.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":1,\"domain\":\"repo_health\",\"question\":\"Which two signals from this repo tell you most about whether your PR would get a response?\",\"type\":\"multi\",\"options\":[{\"id\":\"a\",\"text\":\"Star count (87 stars)\",\"correct\":false,\"explanation\":\"Stars show how many people found the repo interesting, not whether the maintainer is still reviewing PRs. A repo can have thousands of stars and be completely inactive.\"},{\"id\":\"b\",\"text\":\"Date of the most recent merged PR\",\"correct\":true,\"explanation\":\"The most recent merged PR was from September 2026. That tells you the maintainer is still actively reviewing and merging, which is the actual signal you need.\"},{\"id\":\"c\",\"text\":\"How quickly the maintainer replied in issue threads\",\"correct\":true,\"explanation\":\"The maintainer replied on every open issue within 1-2 days. That is the clearest evidence you would get a response on a PR too.\"},{\"id\":\"d\",\"text\":\"Number of forks (12)\",\"correct\":false,\"explanation\":\"Forks tell you how many people copied the repo, often for practice, not active development. They say nothing about whether the original maintainer is responsive.\"},{\"id\":\"e\",\"text\":\"How detailed the README is\",\"correct\":false,\"explanation\":\"A detailed README means the author cared about documentation at some point. It does not tell you whether the repo is still maintained or whether PRs get reviewed.\"}]},{\"id\":2,\"domain\":\"contributing\",\"question\":\"Your plan for issue #7: branch named my-fix, no new tests, PR title 'fixed delete bug'. Which parts conflict with this repo's CONTRIBUTING.md?\",\"type\":\"multi\",\"options\":[{\"id\":\"a\",\"text\":\"Branch name my-fix\",\"correct\":true,\"explanation\":\"CONTRIBUTING.md specifies the format fix/issue-<number>-short-description. A branch named my-fix does not follow this convention and makes it harder for the maintainer to track what the branch is for.\"},{\"id\":\"b\",\"text\":\"No new tests added\",\"correct\":true,\"explanation\":\"CONTRIBUTING.md explicitly says: if you are fixing a bug, add a test that fails on the buggy code and passes after your fix. Submitting without a test is likely to get a review comment asking you to add one.\"},{\"id\":\"c\",\"text\":\"PR title 'fixed delete bug'\",\"correct\":false,\"explanation\":\"CONTRIBUTING.md does not prescribe a specific PR title format for this repo. The title could be clearer, but it does not technically conflict with the written rules.\"},{\"id\":\"d\",\"text\":\"Fixing a bug without opening an issue first\",\"correct\":false,\"explanation\":\"Issue #7 already exists and is open. You do not need to open a new one. CONTRIBUTING.md says to open an issue before a PR only when you find a new bug.\"}]},{\"id\":3,\"domain\":\"issue_judgment\",\"question\":\"Issue #7 has a comment from anon-contributor saying they will take it, posted 4 months ago. No PR was ever merged. What do you do?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Start working on it immediately. They have had enough time.\",\"correct\":false,\"explanation\":\"They may have started and hit a blocker, or be close to finishing. Starting without checking means you might both open PRs for the same thing, which wastes both your time and the maintainer's time.\"},{\"id\":\"b\",\"text\":\"Leave a comment asking if it is still being worked on, then wait for a reply.\",\"correct\":true,\"explanation\":\"A polite check-in costs one comment and prevents duplicate work. The maintainer can also weigh in. If there is no reply in a week or two, it is reasonable to proceed.\"},{\"id\":\"c\",\"text\":\"Skip it. It is assigned to someone.\",\"correct\":false,\"explanation\":\"It is not formally assigned. Someone just said they would take it and never followed through. Skipping it entirely means you might miss a valid issue just because of an old comment.\"},{\"id\":\"d\",\"text\":\"Open a PR immediately. If yours gets merged first, that is fair.\",\"correct\":false,\"explanation\":\"Racing on PRs creates unnecessary conflict and extra work for the maintainer who now has to close a duplicate. It is also poor etiquette in most communities.\"}]},{\"id\":4,\"domain\":\"issue_judgment\",\"question\":\"Issue #15 (case-insensitive search) is open and labeled bug. You are about to start on it. What should you check first?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Whether the issue has a lot of comments.\",\"correct\":false,\"explanation\":\"Comment count shows engagement, not whether the bug is still present. Issue #15 has comments, but that does not tell you whether it was already fixed.\"},{\"id\":\"b\",\"text\":\"Whether the label says good first issue.\",\"correct\":false,\"explanation\":\"Labels are set by maintainers and are not always kept up to date when issues get resolved. A label is a starting point, not a guarantee the issue is still open or relevant.\"},{\"id\":\"c\",\"text\":\"Whether any merged PR already fixed it.\",\"correct\":true,\"explanation\":\"PR #38, merged in August 2026, fixed exactly this bug. The issue is still marked open, but the fix is already in the codebase. Checking closed PRs before you start would have caught this.\"},{\"id\":\"d\",\"text\":\"Whether the fix would be small enough.\",\"correct\":false,\"explanation\":\"Scope matters when choosing an issue, but not before you have checked whether the issue even needs fixing anymore. Scope comes after you have confirmed the bug is still present.\"}]},{\"id\":5,\"domain\":\"issue_judgment\",\"question\":\"Which issue is the best first pick?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"#12 — Saving a note with an empty title silently creates a broken note\",\"correct\":true,\"explanation\":\"Clear reproduction steps, maintainer confirmed it is a good first contribution, no one has claimed it, and the fix is small and self-contained. This is what a good first pick looks like.\"},{\"id\":\"b\",\"text\":\"#15 — search_notes does not find notes when query case does not match\",\"correct\":false,\"explanation\":\"PR #38 merged in August 2026 and fixed this bug. The issue is still open but the code is already corrected. Starting here means doing work that is already done.\"},{\"id\":\"c\",\"text\":\"#19 — list_notes returns live objects, mutations affect the internal store\",\"correct\":false,\"explanation\":\"The maintainer's own comment explains this requires understanding shallow vs deep copy semantics and the storage layer design. The label says good first issue but the issue body itself warns you off if you are not familiar with copy semantics.\"},{\"id\":\"d\",\"text\":\"#23 — Notes disappear sometimes when I add a lot of them\",\"correct\":false,\"explanation\":\"There are no reproduction steps, no version, and no error message. The maintainer already asked for more info and the reporter has not followed up. You cannot fix what you cannot reproduce.\"}]},{\"id\":6,\"domain\":\"issue_judgment\",\"question\":\"Issue #23 says notes disappear sometimes when adding a lot of them, and nothing else. Which comment is most useful?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Same issue here, I see it too.\",\"correct\":false,\"explanation\":\"This tells the maintainer the bug affects more than one person, but gives them nothing to work with. It adds noise without moving the issue forward.\"},{\"id\":\"b\",\"text\":\"This report is too vague to be useful.\",\"correct\":false,\"explanation\":\"Accurate, but unhelpful. Telling someone their report is bad without explaining what is missing does not help them fix it, and it is likely to discourage them from reporting again.\"},{\"id\":\"c\",\"text\":\"Could you share your Python version, the exact steps you followed, and what you expected versus what actually happened?\",\"correct\":true,\"explanation\":\"This tells the reporter exactly what is missing and why it matters. Version, steps, and expected vs actual output are the minimum needed to reproduce any bug. Specific questions get specific answers.\"},{\"id\":\"d\",\"text\":\"I will try to reproduce this and let you know.\",\"correct\":false,\"explanation\":\"You cannot reproduce it from what has been shared. There are no steps. Promising to try without asking for the missing info just delays the issue without resolving the information gap.\"}]},{\"id\":7,\"domain\":\"git_workflow\",\"question\":\"Your fork's main branch is 14 commits behind the original repo. What do you do before branching to fix issue #12?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Branch from your fork's main as it is.\",\"correct\":false,\"explanation\":\"You would be working off stale code. If the area you are changing has been updated in those 14 commits, you will either have conflicts when you open the PR or silently undo work that was already done.\"},{\"id\":\"b\",\"text\":\"Sync your fork with the original repo, then branch from the updated main.\",\"correct\":true,\"explanation\":\"Syncing first means your branch starts from the latest code. Fewer merge conflicts, no risk of reverting recent changes, and a cleaner diff when the maintainer reviews.\"},{\"id\":\"c\",\"text\":\"Make the changes directly on your fork's main.\",\"correct\":false,\"explanation\":\"Working on main directly makes it hard to keep your fork in sync with the original and breaks the standard fork-and-branch workflow. It also makes it harder to work on multiple issues separately.\"},{\"id\":\"d\",\"text\":\"Delete your fork and fork again from the original.\",\"correct\":false,\"explanation\":\"This works but it is unnecessarily disruptive. Git gives you git fetch upstream and git merge upstream/main to sync without starting over.\"}]},{\"id\":8,\"domain\":\"review\",\"question\":\"You open a PR for issue #12. The maintainer replies: thanks, can you move the empty check to after the strip() call, and add a period to the error message? What do you do?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Open a new PR with the changes.\",\"correct\":false,\"explanation\":\"A new PR loses the review history and context. Push the changes to the same branch. The existing PR updates automatically. Opening a second PR is confusing and creates cleanup work for the maintainer.\"},{\"id\":\"b\",\"text\":\"Reply explaining why your original approach is correct.\",\"correct\":false,\"explanation\":\"The maintainer is not asking for a debate. They are giving you specific, low-stakes feedback to keep the codebase consistent. Pushing back on minor style points in a first PR is a poor use of everyone's time.\"},{\"id\":\"c\",\"text\":\"Make the two changes, push to the same branch, and reply once it is done.\",\"correct\":true,\"explanation\":\"This is exactly what happened in PR #41. The contributor made the requested changes, explained what they updated, and thanked the reviewer. The PR was merged the next day.\"},{\"id\":\"d\",\"text\":\"Close the PR. The feedback means it has been rejected.\",\"correct\":false,\"explanation\":\"A review with requested changes is the opposite of a rejection. The maintainer engaged, read your code, and told you how to get it merged. Closing it means the work never lands.\"}]}]");
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
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _types = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache/types.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent = 'none') {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes, prefetchIntent);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const prefetchIntent = prefetchProp === false ? 'none' : prefetchProp === true ? 'full' : 'auto';
    const fetchStrategy = prefetchIntent !== 'none' ? getFetchStrategyFromPrefetchIntent(prefetchIntent) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true,
            transitionTypes: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto"`',
                        actual: valType
                    });
                }
            } else if (key === 'transitionTypes') {
                if (props[key] != null && !Array.isArray(props[key])) {
                    throw createPropError({
                        key,
                        expected: '`string[]`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                const _ = key;
            }
        });
    }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time truthy", 1) {
        const { warnOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
        if (props.locale) {
            warnOnce('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof resolvedHref === 'string') {
                href = resolvedHref;
            } else if (typeof resolvedHref === 'object' && typeof resolvedHref.pathname === 'string') {
                href = resolvedHref.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error(`Dynamic href \`${href}\` found in <Link> while using the \`/app\` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href`), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn(`"onClick" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link`);
            }
            if (onMouseEnterProp) {
                console.warn(`"onMouseEnter" was passed to <Link> with \`href\` of \`${formattedHref}\` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link`);
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error(`No children were passed to <Link> with \`href\` of \`${formattedHref}\` but one child is required https://nextjs.org/docs/messages/link-no-children`), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error(`Multiple children were passed to <Link> with \`href\` of \`${formattedHref}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if (children?.type === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Capture the Owner Stack during render so dev-only warnings emitted later
    // at navigation time can be associated with the JSX that created
    // this <Link>.
    const ownerStack = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus, ownerStack);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus,
        ownerStack
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error(`Component rendered inside next/link has to pass click event to "onClick" prop.`), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes, prefetchIntent);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            const { errorOnce } = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
            errorOnce('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchIntent(prefetchIntent) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchIntent === 'auto' ? _types.FetchStrategy.PPR : _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
                }
            });
        }
    }
    return formatUrl(url);
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>{
    // Fast path: an absolute URL must start with a letter (the scheme).
    // Check for a-z and A-Z without the cost of the regex.
    const c = url.charCodeAt(0);
    const isLetter = c >= 65 /* A */  && c <= 90 || c >= 97 /* a */  && c <= 122;
    /* z */ if (!isLetter) {
        return false;
    }
    return ABSOLUTE_URL_REGEX.test(url);
};
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (App.prototype?.getInitialProps) {
            const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E1035",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`);
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_1rimwzr._.js.map