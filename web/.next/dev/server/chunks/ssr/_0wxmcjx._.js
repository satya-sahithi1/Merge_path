module.exports = [
"[project]/app/repo/[repoId]/quiz/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuizPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// Imported at module level — resolved at build time
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/quiz.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/meta.json.[json].cjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const DOMAIN_LABELS = {
    repo_health: "Repo health",
    contributing: "CONTRIBUTING.md",
    issue_judgment: "Issue judgment",
    git_workflow: "Git workflow",
    review: "Review"
};
function QuizPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const repoId = params.repoId;
    const questions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$quiz$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    // One AnswerState per question index
    const [answers, setAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(questions.map(()=>({
            selected: [],
            submitted: false
        })));
    const [currentQ, setCurrentQ] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [finished, setFinished] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            style: {
                background: "var(--background)"
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "border-b px-6 py-3 flex items-center gap-4",
                    style: {
                        borderColor: "var(--border)",
                        background: "var(--surface)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "Merge Path"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/repo/${repoId}`,
                            className: "text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: meta.name
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "/"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm",
                            style: {
                                color: "var(--text-primary)"
                            },
                            children: "Quiz"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 129,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-2xl mx-auto px-4 py-10 space-y-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border p-6 text-center space-y-3",
                            style: {
                                borderColor: "var(--border)",
                                background: band.bg
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-lg font-semibold",
                                    style: {
                                        color: band.color
                                    },
                                    children: band.label
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 139,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    style: {
                                        color: "var(--text-primary)"
                                    },
                                    children: band.note
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "var(--text-secondary)"
                                    },
                                    children: "By domain"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                Object.entries(domainScores).map(([domain, { correct, total }])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm w-40",
                                                style: {
                                                    color: "var(--text-secondary)"
                                                },
                                                children: DOMAIN_LABELS[domain] ?? domain
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 h-2 rounded-full overflow-hidden",
                                                style: {
                                                    background: "var(--surface)"
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "h-2 rounded-full",
                                                    style: {
                                                        width: `${correct / total * 100}%`,
                                                        background: correct === total ? "#3fb950" : correct > 0 ? "#d29922" : "#f85149"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 157,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                lineNumber: 167,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, domain, true, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "var(--text-secondary)"
                                    },
                                    children: "Question review"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 176,
                                    columnNumber: 13
                                }, this),
                                questions.map((q, i)=>{
                                    const correct = isCorrect(q, answers[i].selected);
                                    const correctOptions = q.options.filter((o)=>o.correct);
                                    const selectedOptions = q.options.filter((o)=>answers[i].selected.includes(o.id));
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-md border overflow-hidden",
                                        style: {
                                            borderColor: correct ? "#238636" : "#da3633"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-2 flex items-center gap-2 border-b",
                                                style: {
                                                    borderColor: correct ? "#238636" : "#da3633",
                                                    background: correct ? "#1a3a1a" : "#3a1a1a"
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                                        lineNumber: 193,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs",
                                                        style: {
                                                            color: "var(--text-secondary)"
                                                        },
                                                        children: DOMAIN_LABELS[q.domain] ?? q.domain
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 196,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 188,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "px-4 py-3 space-y-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm",
                                                        style: {
                                                            color: "var(--text-primary)"
                                                        },
                                                        children: q.question
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 201,
                                                        columnNumber: 21
                                                    }, this),
                                                    !correct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "space-y-1 text-xs",
                                                        style: {
                                                            color: "var(--text-secondary)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Your answer:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#f85149"
                                                                        },
                                                                        children: selectedOptions.map((o)=>o.text).join(", ") || "—"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                        lineNumber: 206,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                lineNumber: 204,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                children: [
                                                                    "Correct:",
                                                                    " ",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: "#3fb950"
                                                                        },
                                                                        children: correctOptions.map((o)=>o.text).join(", ")
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 25
                                                            }, this),
                                                            selectedOptions.filter((o)=>!o.correct).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pt-1",
                                                                    style: {
                                                                        color: "var(--text-primary)"
                                                                    },
                                                                    children: o.explanation
                                                                }, o.id, false, {
                                                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                    lineNumber: 220,
                                                                    columnNumber: 29
                                                                }, this)),
                                                            correctOptions.filter((o)=>!answers[i].selected.includes(o.id)).map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "pt-1",
                                                                    style: {
                                                                        color: "var(--text-primary)"
                                                                    },
                                                                    children: o.explanation
                                                                }, o.id, false, {
                                                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                                    lineNumber: 228,
                                                                    columnNumber: 29
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                        lineNumber: 203,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, q.id, true, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 186,
                                        columnNumber: 17
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        totalCorrect >= 7 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-md border p-4 space-y-3",
                            style: {
                                borderColor: "var(--border)",
                                background: "var(--surface)"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium",
                                    style: {
                                        color: "var(--text-primary)"
                                    },
                                    children: "Ready to find a real issue?"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 244,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-3 flex-wrap",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                            lineNumber: 248,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
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
                                            lineNumber: 253,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 247,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 242,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: `/repo/${repoId}`,
                            className: "inline-block text-sm",
                            style: {
                                color: "var(--text-secondary)"
                            },
                            children: "← Back to repo"
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                            lineNumber: 262,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
            lineNumber: 120,
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "var(--background)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b px-6 py-3 flex items-center gap-4",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "Merge Path"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 302,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/repo/${repoId}`,
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: meta.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 303,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 306,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-primary)"
                        },
                        children: "Quiz"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto px-4 py-8 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between text-xs",
                                style: {
                                    color: "var(--text-secondary)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Question ",
                                            currentQ + 1,
                                            " of ",
                                            total
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 314,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-2 py-0.5 rounded-full text-xs",
                                        style: {
                                            background: "var(--surface)",
                                            color: "var(--text-secondary)"
                                        },
                                        children: DOMAIN_LABELS[q.domain] ?? q.domain
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 315,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-1 rounded-full",
                                style: {
                                    background: "var(--surface)"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "h-1 rounded-full transition-all",
                                    style: {
                                        width: `${(currentQ + 1) / total * 100}%`,
                                        background: "var(--accent)"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 312,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base font-medium",
                                style: {
                                    color: "var(--text-primary)",
                                    lineHeight: 1.6
                                },
                                children: q.question
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 330,
                                columnNumber: 11
                            }, this),
                            q.type === "multi" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium",
                                style: {
                                    background: "#1f3a5f",
                                    color: "#58a6ff",
                                    border: "1px solid #1f6feb"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "☑"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Multiple answers — select all that apply"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 334,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 329,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: q.options.map((opt)=>{
                            const state = optionState(opt);
                            const style = stateStyles[state];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mr-2 text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: q.type === "multi" ? ans.selected.includes(opt.id) ? "☑" : "☐" : ans.selected.includes(opt.id) ? "◉" : "○"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 17
                                    }, this),
                                    opt.text
                                ]
                            }, opt.id, true, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 348,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 343,
                        columnNumber: 9
                    }, this),
                    ans.submitted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md px-4 py-3 text-sm font-medium",
                                style: {
                                    background: questionCorrect ? "#1a3a1a" : "#3a1a1a",
                                    border: `1px solid ${questionCorrect ? "#238636" : "#da3633"}`,
                                    color: questionCorrect ? "#3fb950" : "#f85149"
                                },
                                children: questionCorrect ? "✓ Correct" : "✗ Not quite"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                lineNumber: 375,
                                columnNumber: 13
                            }, this),
                            q.options.filter((o)=>ans.selected.includes(o.id) || o.correct && !ans.selected.includes(o.id)).map((o)=>{
                                const wasSelected = ans.selected.includes(o.id);
                                const isRight = o.correct;
                                const labelColor = isRight ? "#3fb950" : "#f85149";
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border px-4 py-3 space-y-1 text-sm",
                                    style: {
                                        borderColor: "var(--border)",
                                        background: "var(--surface)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            lineNumber: 398,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "var(--text-primary)"
                                            },
                                            children: o.text
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 401,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: "var(--text-secondary)"
                                            },
                                            children: o.explanation
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                            lineNumber: 402,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, o.id, true, {
                                    fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                                    lineNumber: 396,
                                    columnNumber: 19
                                }, this);
                            })
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 373,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-3",
                        children: !ans.submitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 412,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            lineNumber: 426,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                        lineNumber: 410,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
                lineNumber: 310,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/quiz/page.tsx",
        lineNumber: 297,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data/notes-app/meta.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/lib/data/notes-app/quiz.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":1,\"domain\":\"repo_health\",\"question\":\"Which two signals from this repo tell you most about whether your PR would get a response?\",\"type\":\"multi\",\"options\":[{\"id\":\"a\",\"text\":\"Star count (87 stars)\",\"correct\":false,\"explanation\":\"Stars show how many people found the repo interesting, not whether the maintainer is still reviewing PRs. A repo can have thousands of stars and be completely inactive.\"},{\"id\":\"b\",\"text\":\"Date of the most recent merged PR\",\"correct\":true,\"explanation\":\"The most recent merged PR was from September 2026. That tells you the maintainer is still actively reviewing and merging, which is the actual signal you need.\"},{\"id\":\"c\",\"text\":\"How quickly the maintainer replied in issue threads\",\"correct\":true,\"explanation\":\"The maintainer replied on every open issue within 1-2 days. That is the clearest evidence you would get a response on a PR too.\"},{\"id\":\"d\",\"text\":\"Number of forks (12)\",\"correct\":false,\"explanation\":\"Forks tell you how many people copied the repo, often for practice, not active development. They say nothing about whether the original maintainer is responsive.\"},{\"id\":\"e\",\"text\":\"How detailed the README is\",\"correct\":false,\"explanation\":\"A detailed README means the author cared about documentation at some point. It does not tell you whether the repo is still maintained or whether PRs get reviewed.\"}]},{\"id\":2,\"domain\":\"contributing\",\"question\":\"Your plan for issue #7: branch named my-fix, no new tests, PR title 'fixed delete bug'. Which parts conflict with this repo's CONTRIBUTING.md?\",\"type\":\"multi\",\"options\":[{\"id\":\"a\",\"text\":\"Branch name my-fix\",\"correct\":true,\"explanation\":\"CONTRIBUTING.md specifies the format fix/issue-<number>-short-description. A branch named my-fix does not follow this convention and makes it harder for the maintainer to track what the branch is for.\"},{\"id\":\"b\",\"text\":\"No new tests added\",\"correct\":true,\"explanation\":\"CONTRIBUTING.md explicitly says: if you are fixing a bug, add a test that fails on the buggy code and passes after your fix. Submitting without a test is likely to get a review comment asking you to add one.\"},{\"id\":\"c\",\"text\":\"PR title 'fixed delete bug'\",\"correct\":false,\"explanation\":\"CONTRIBUTING.md does not prescribe a specific PR title format for this repo. The title could be clearer, but it does not technically conflict with the written rules.\"},{\"id\":\"d\",\"text\":\"Fixing a bug without opening an issue first\",\"correct\":false,\"explanation\":\"Issue #7 already exists and is open. You do not need to open a new one. CONTRIBUTING.md says to open an issue before a PR only when you find a new bug.\"}]},{\"id\":3,\"domain\":\"issue_judgment\",\"question\":\"Issue #7 has a comment from anon-contributor saying they will take it, posted 4 months ago. No PR was ever merged. What do you do?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Start working on it immediately. They have had enough time.\",\"correct\":false,\"explanation\":\"They may have started and hit a blocker, or be close to finishing. Starting without checking means you might both open PRs for the same thing, which wastes both your time and the maintainer's time.\"},{\"id\":\"b\",\"text\":\"Leave a comment asking if it is still being worked on, then wait for a reply.\",\"correct\":true,\"explanation\":\"A polite check-in costs one comment and prevents duplicate work. The maintainer can also weigh in. If there is no reply in a week or two, it is reasonable to proceed.\"},{\"id\":\"c\",\"text\":\"Skip it. It is assigned to someone.\",\"correct\":false,\"explanation\":\"It is not formally assigned. Someone just said they would take it and never followed through. Skipping it entirely means you might miss a valid issue just because of an old comment.\"},{\"id\":\"d\",\"text\":\"Open a PR immediately. If yours gets merged first, that is fair.\",\"correct\":false,\"explanation\":\"Racing on PRs creates unnecessary conflict and extra work for the maintainer who now has to close a duplicate. It is also poor etiquette in most communities.\"}]},{\"id\":4,\"domain\":\"issue_judgment\",\"question\":\"Issue #15 (case-insensitive search) is open and labeled bug. You are about to start on it. What should you check first?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Whether the issue has a lot of comments.\",\"correct\":false,\"explanation\":\"Comment count shows engagement, not whether the bug is still present. Issue #15 has comments, but that does not tell you whether it was already fixed.\"},{\"id\":\"b\",\"text\":\"Whether the label says good first issue.\",\"correct\":false,\"explanation\":\"Labels are set by maintainers and are not always kept up to date when issues get resolved. A label is a starting point, not a guarantee the issue is still open or relevant.\"},{\"id\":\"c\",\"text\":\"Whether any merged PR already fixed it.\",\"correct\":true,\"explanation\":\"PR #38, merged in August 2026, fixed exactly this bug. The issue is still marked open, but the fix is already in the codebase. Checking closed PRs before you start would have caught this.\"},{\"id\":\"d\",\"text\":\"Whether the fix would be small enough.\",\"correct\":false,\"explanation\":\"Scope matters when choosing an issue, but not before you have checked whether the issue even needs fixing anymore. Scope comes after you have confirmed the bug is still present.\"}]},{\"id\":5,\"domain\":\"issue_judgment\",\"question\":\"Which issue is the best first pick?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"#12 — Saving a note with an empty title silently creates a broken note\",\"correct\":true,\"explanation\":\"Clear reproduction steps, maintainer confirmed it is a good first contribution, no one has claimed it, and the fix is small and self-contained. This is what a good first pick looks like.\"},{\"id\":\"b\",\"text\":\"#15 — search_notes does not find notes when query case does not match\",\"correct\":false,\"explanation\":\"PR #38 merged in August 2026 and fixed this bug. The issue is still open but the code is already corrected. Starting here means doing work that is already done.\"},{\"id\":\"c\",\"text\":\"#19 — list_notes returns live objects, mutations affect the internal store\",\"correct\":false,\"explanation\":\"The maintainer's own comment explains this requires understanding shallow vs deep copy semantics and the storage layer design. The label says good first issue but the issue body itself warns you off if you are not familiar with copy semantics.\"},{\"id\":\"d\",\"text\":\"#23 — Notes disappear sometimes when I add a lot of them\",\"correct\":false,\"explanation\":\"There are no reproduction steps, no version, and no error message. The maintainer already asked for more info and the reporter has not followed up. You cannot fix what you cannot reproduce.\"}]},{\"id\":6,\"domain\":\"issue_judgment\",\"question\":\"Issue #23 says notes disappear sometimes when adding a lot of them, and nothing else. Which comment is most useful?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Same issue here, I see it too.\",\"correct\":false,\"explanation\":\"This tells the maintainer the bug affects more than one person, but gives them nothing to work with. It adds noise without moving the issue forward.\"},{\"id\":\"b\",\"text\":\"This report is too vague to be useful.\",\"correct\":false,\"explanation\":\"Accurate, but unhelpful. Telling someone their report is bad without explaining what is missing does not help them fix it, and it is likely to discourage them from reporting again.\"},{\"id\":\"c\",\"text\":\"Could you share your Python version, the exact steps you followed, and what you expected versus what actually happened?\",\"correct\":true,\"explanation\":\"This tells the reporter exactly what is missing and why it matters. Version, steps, and expected vs actual output are the minimum needed to reproduce any bug. Specific questions get specific answers.\"},{\"id\":\"d\",\"text\":\"I will try to reproduce this and let you know.\",\"correct\":false,\"explanation\":\"You cannot reproduce it from what has been shared. There are no steps. Promising to try without asking for the missing info just delays the issue without resolving the information gap.\"}]},{\"id\":7,\"domain\":\"git_workflow\",\"question\":\"Your fork's main branch is 14 commits behind the original repo. What do you do before branching to fix issue #12?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Branch from your fork's main as it is.\",\"correct\":false,\"explanation\":\"You would be working off stale code. If the area you are changing has been updated in those 14 commits, you will either have conflicts when you open the PR or silently undo work that was already done.\"},{\"id\":\"b\",\"text\":\"Sync your fork with the original repo, then branch from the updated main.\",\"correct\":true,\"explanation\":\"Syncing first means your branch starts from the latest code. Fewer merge conflicts, no risk of reverting recent changes, and a cleaner diff when the maintainer reviews.\"},{\"id\":\"c\",\"text\":\"Make the changes directly on your fork's main.\",\"correct\":false,\"explanation\":\"Working on main directly makes it hard to keep your fork in sync with the original and breaks the standard fork-and-branch workflow. It also makes it harder to work on multiple issues separately.\"},{\"id\":\"d\",\"text\":\"Delete your fork and fork again from the original.\",\"correct\":false,\"explanation\":\"This works but it is unnecessarily disruptive. Git gives you git fetch upstream and git merge upstream/main to sync without starting over.\"}]},{\"id\":8,\"domain\":\"review\",\"question\":\"You open a PR for issue #12. The maintainer replies: thanks, can you move the empty check to after the strip() call, and add a period to the error message? What do you do?\",\"type\":\"single\",\"options\":[{\"id\":\"a\",\"text\":\"Open a new PR with the changes.\",\"correct\":false,\"explanation\":\"A new PR loses the review history and context. Push the changes to the same branch. The existing PR updates automatically. Opening a second PR is confusing and creates cleanup work for the maintainer.\"},{\"id\":\"b\",\"text\":\"Reply explaining why your original approach is correct.\",\"correct\":false,\"explanation\":\"The maintainer is not asking for a debate. They are giving you specific, low-stakes feedback to keep the codebase consistent. Pushing back on minor style points in a first PR is a poor use of everyone's time.\"},{\"id\":\"c\",\"text\":\"Make the two changes, push to the same branch, and reply once it is done.\",\"correct\":true,\"explanation\":\"This is exactly what happened in PR #41. The contributor made the requested changes, explained what they updated, and thanked the reviewer. The PR was merged the next day.\"},{\"id\":\"d\",\"text\":\"Close the PR. The feedback means it has been rejected.\",\"correct\":false,\"explanation\":\"A review with requested changes is the opposite of a rejection. The maintainer engaged, read your code, and told you how to get it merged. Closing it means the work never lands.\"}]}]");
}),
];

//# sourceMappingURL=_0wxmcjx._.js.map