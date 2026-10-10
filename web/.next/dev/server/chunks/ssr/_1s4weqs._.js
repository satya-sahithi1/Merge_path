module.exports = [
"[project]/app/repo/[repoId]/issues/[issueId]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IssuePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
// This page is a client component so the reproduce tab can hold local state.
// Data is imported at module level — Next.js resolves this at build time.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/issues.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/meta.json.[json].cjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function IssuePage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const repoId = params.repoId;
    const issueId = Number(params.issueId);
    // Load data directly from imported JSON
    const issues = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    const issue = issues.find((i)=>i?.id === issueId);
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"];
    if (!issue) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: {
                background: "var(--background)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--text-secondary)"
                },
                children: "Issue not found."
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this);
    }
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
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: `/repo/${repoId}?tab=issues`,
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: meta.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-primary)"
                        },
                        children: "Issues"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: [
                                    issue.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-normal ml-2",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: [
                                            "#",
                                            issue.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-1 rounded-full font-medium",
                                        style: {
                                            background: "#1a3a1a",
                                            color: "#3fb950"
                                        },
                                        children: "● Open"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 56,
                                        columnNumber: 13
                                    }, this),
                                    issue.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LabelBadge, {
                                            label: label
                                        }, label, false, {
                                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: [
                                            "Opened ",
                                            issue.opened_at,
                                            " by ",
                                            issue.opened_by
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentCard, {
                                author: issue.opened_by,
                                date: issue.opened_at,
                                body: issue.body,
                                isOP: true
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 72,
                                columnNumber: 11
                            }, this),
                            issue.comments.map((comment, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentCard, {
                                    author: comment.author,
                                    date: comment.date,
                                    body: comment.body
                                }, i, false, {
                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    issue.reproduction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReproduceSection, {
                        scenario: issue.reproduction
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 92,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
// ── Comment card ───────────────────────────────────────────────────────────
function CommentCard({ author, date, body, isOP = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border overflow-hidden",
        style: {
            borderColor: "var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                style: {
                                    background: "#1f3a5f",
                                    color: "var(--link)"
                                },
                                children: author[0].toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: author
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 118,
                                columnNumber: 11
                            }, this),
                            isOP && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs px-1.5 py-0.5 rounded border",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--text-secondary)"
                                },
                                children: "Author"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 120,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: date
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 111,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-sm whitespace-pre-wrap",
                style: {
                    color: "var(--text-primary)",
                    lineHeight: 1.6
                },
                children: body
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 128,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
// ── Reproduce tab ──────────────────────────────────────────────────────────
function ReproduceSection({ scenario }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("steps");
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLastStep = currentStep === scenario.reproductionSteps.length - 1;
    const isNoInfo = scenario.regressionTestId === null;
    function handleChoice(c) {
        setChoice(c);
        setRevealed(true);
    }
    function getCorrectAnswer() {
        if (isNoInfo) return "not_enough_info";
        if (scenario.buggyVersion === null) return "not_enough_info";
        // If the current codebase is the fixed version, the bug can't be reproduced
        // Issues marked already_fixed_by_pr won't have a null fixedVersion but the
        // lesson tells us the fix is already in. We encode this via the issue lesson
        // but for the reproduce tab, we check if fixedVersion is set and buggyBehavior type.
        return "reproduced";
    }
    const correctAnswer = getCorrectAnswer();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-0 rounded-md border overflow-hidden",
        style: {
            borderColor: "var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex border-b",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    {
                        key: "steps",
                        label: "▶ Try reproducing"
                    },
                    {
                        key: "buggy",
                        label: `v${scenario.buggyVersion ?? "?"} (before fix)`
                    },
                    {
                        key: "fixed",
                        label: `v${scenario.fixedVersion ?? "?"} (after fix)`
                    }
                ].map(({ key, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveTab(key),
                        className: "px-4 py-2 text-sm border-b-2 -mb-px transition-colors",
                        style: {
                            borderColor: activeTab === key ? "#f78166" : "transparent",
                            color: activeTab === key ? "var(--text-primary)" : "var(--text-secondary)",
                            background: "transparent",
                            cursor: "pointer"
                        },
                        children: label
                    }, key, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 172,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 166,
                columnNumber: 7
            }, this),
            activeTab === "steps" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: [
                    isNoInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-4 text-sm",
                        style: {
                            background: "#2a1f00",
                            color: "#d29922"
                        },
                        children: "⚠ This issue doesn't have enough information to reproduce. There are no steps, no version, and no error message. The correct outcome here is “Not enough info”.           "
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 192,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: scenario.reproductionSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0 mt-0.5",
                                                style: {
                                                    background: i < currentStep ? "#1a3a1a" : i === currentStep ? "#1f3a5f" : "var(--surface)",
                                                    color: i < currentStep ? "#3fb950" : i === currentStep ? "var(--link)" : "var(--text-secondary)",
                                                    border: "1px solid",
                                                    borderColor: i === currentStep ? "var(--link)" : "var(--border)"
                                                },
                                                children: i < currentStep ? "✓" : i + 1
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                                lineNumber: 202,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm pt-0.5",
                                                style: {
                                                    color: i <= currentStep ? "var(--text-primary)" : "var(--text-secondary)"
                                                },
                                                children: step.instruction
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                                lineNumber: 211,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 201,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md p-3 text-sm",
                                style: {
                                    background: "var(--surface)",
                                    borderLeft: "3px solid var(--border)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: "Expected: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 221,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-primary)"
                                        },
                                        children: scenario.expectedResult
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 222,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 220,
                                columnNumber: 15
                            }, this),
                            !revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: !isLastStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setCurrentStep((s)=>s + 1),
                                    className: "px-3 py-1.5 rounded text-sm",
                                    style: {
                                        background: "#1f3a5f",
                                        color: "var(--link)",
                                        cursor: "pointer"
                                    },
                                    children: "Next step →"
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                    lineNumber: 229,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: "var(--text-secondary)"
                                            },
                                            children: "What happened? Mark your outcome:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                            lineNumber: 237,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 flex-wrap",
                                            children: [
                                                "reproduced",
                                                "cant_reproduce",
                                                "not_enough_info"
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleChoice(c),
                                                    className: "px-3 py-1.5 rounded text-sm border transition-colors",
                                                    style: {
                                                        borderColor: "var(--border)",
                                                        color: "var(--text-primary)",
                                                        background: "var(--surface)",
                                                        cursor: "pointer"
                                                    },
                                                    children: c === "reproduced" ? "✓ Reproduced" : c === "cant_reproduce" ? "✗ Can't reproduce" : "? Not enough info"
                                                }, c, false, {
                                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                                    lineNumber: 242,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                            lineNumber: 240,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                    lineNumber: 236,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 227,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, this),
                    revealed && choice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-4 space-y-2",
                        style: {
                            background: choice === correctAnswer ? "#1a3a1a" : "#3a1a1a",
                            border: `1px solid ${choice === correctAnswer ? "#238636" : "#da3633"}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                style: {
                                    color: choice === correctAnswer ? "#3fb950" : "#f85149"
                                },
                                children: choice === correctAnswer ? "✓ Correct" : "✗ Not quite"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 265,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: [
                                    correctAnswer === "reproduced" && "This bug is still present in the current code. The buggy behavior is confirmed.",
                                    correctAnswer === "cant_reproduce" && "This bug was already fixed in a merged PR. If you'd checked the closed PRs first, you'd have found it.",
                                    correctAnswer === "not_enough_info" && "There's not enough information in this report to reproduce the bug. Ask for steps, version, and error output."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 269,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 260,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 190,
                columnNumber: 9
            }, this),
            activeTab === "buggy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs px-2 py-1 rounded inline-block",
                        style: {
                            background: "#3a1a1a",
                            color: "#f85149"
                        },
                        children: [
                            "v",
                            scenario.buggyVersion,
                            " — before fix"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 282,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-3 text-sm font-mono",
                        style: {
                            background: "var(--surface)",
                            color: "#f85149",
                            borderLeft: "3px solid #da3633"
                        },
                        children: scenario.buggyBehavior.output
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 285,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: [
                            "Type: ",
                            scenario.buggyBehavior.type.replace(/_/g, " "),
                            scenario.buggyBehavior.verifiedByTest && " · ✓ verified by regression test"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 281,
                columnNumber: 9
            }, this),
            activeTab === "fixed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs px-2 py-1 rounded inline-block",
                        style: {
                            background: "#1a3a1a",
                            color: "#3fb950"
                        },
                        children: [
                            "v",
                            scenario.fixedVersion,
                            " — after fix"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-3 text-sm font-mono",
                        style: {
                            background: "var(--surface)",
                            color: "#3fb950",
                            borderLeft: "3px solid #238636"
                        },
                        children: scenario.fixedBehavior.output
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 302,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: [
                            "Type: ",
                            scenario.fixedBehavior.type.replace(/_/g, " "),
                            scenario.fixedBehavior.verifiedByTest && " · ✓ verified by regression test"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 306,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 298,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 164,
        columnNumber: 5
    }, this);
}
// ── Label badge ────────────────────────────────────────────────────────────
function LabelBadge({ label }) {
    const colors = {
        "bug": {
            bg: "#3a1a1a",
            color: "#f85149"
        },
        "good first issue": {
            bg: "#1f3a5f",
            color: "#58a6ff"
        }
    };
    const style = colors[label] ?? {
        bg: "#2a2a2a",
        color: "var(--text-secondary)"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs px-2 py-0.5 rounded-full",
        style: style,
        children: label
    }, void 0, false, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/data/notes-app/issues.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("[{\"id\":12,\"title\":\"Saving a note with an empty title silently creates a broken note\",\"state\":\"open\",\"labels\":[\"bug\",\"good first issue\"],\"opened_by\":\"preethi-codes\",\"opened_at\":\"2026-08-14\",\"assigned_to\":null,\"body\":\"Hi, I found a bug when saving notes.\\n\\nIf you call `save_note(title='', body='some text')`, it returns `{\\\"status\\\": \\\"saved\\\"}` with no error. The note gets saved with a blank title, which breaks the UI when you try to list notes later.\\n\\nI expected it to return a validation error like `{\\\"error\\\": \\\"Title cannot be empty.\\\"}` instead.\\n\\n**Steps to reproduce:**\\n1. Call `save_note(title='', body='some content')`\\n2. Call `list_notes()`\\n3. You'll see a note with an empty title in the list\\n\\n**Expected:** Validation error returned\\n**Actual:** Note saved with blank title, no error\\n\\n**Version:** 1.0.0\\n**Python:** 3.12\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-08-14\",\"body\":\"Good catch. The `save_note` function is missing input validation entirely. Small fix — just needs a check after `strip()`. Should be straightforward for a first contribution.\"},{\"author\":\"random-dev-42\",\"date\":\"2026-08-15\",\"body\":\"Same issue here. Also happens with whitespace-only titles like `'   '`.\"},{\"author\":\"preethi-codes\",\"date\":\"2026-08-15\",\"body\":\"Yes, whitespace-only is the same bug — `strip()` returns `''` and it still saves.\"}],\"lesson\":\"genuine_good_pick\",\"lesson_feedback\":\"Good pick. Clear steps, reproducible, small scope — one check after strip(). The maintainer confirmed it's a good first contribution and no one has claimed it yet.\",\"reproduction\":{\"issueId\":\"notes-app-12\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Open notes.py and find the save_note function.\"},{\"instruction\":\"Call save_note with an empty title: save_note(title='', body='hello')\"},{\"instruction\":\"Check the return value.\"},{\"instruction\":\"Call list_notes() and inspect the saved notes.\"}],\"expectedResult\":\"save_note returns {\\\"error\\\": \\\"Title cannot be empty.\\\"}\",\"buggyBehavior\":{\"output\":\"Returns {\\\"status\\\": \\\"saved\\\", \\\"id\\\": 1} — note saved with blank title, no error.\",\"type\":\"silent_failure\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Returns {\\\"error\\\": \\\"Title cannot be empty.\\\"} — note is not saved.\",\"type\":\"validation_error\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/empty-title-crash\"}},{\"id\":7,\"title\":\"KeyError crash when deleting a note that doesn't exist\",\"state\":\"open\",\"labels\":[\"bug\",\"good first issue\"],\"opened_by\":\"dev-rohan\",\"opened_at\":\"2026-07-02\",\"assigned_to\":null,\"body\":\"When I try to delete a note ID that doesn't exist (or was already deleted), the app throws a `KeyError` instead of returning a proper error message.\\n\\n```\\nKeyError: 99\\n```\\n\\nThis crashes the whole program if you're not catching exceptions. Expected it to return something like `{\\\"error\\\": \\\"Note not found.\\\"}` instead.\\n\\n**Steps to reproduce:**\\n1. Call `delete_note(99)` when no note with id 99 exists\\n2. Observe: unhandled KeyError\\n\\n**Version:** 1.0.0\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-07-03\",\"body\":\"Confirmed. The function uses `del _notes[note_id]` directly without checking first. Thanks for the report.\"},{\"author\":\"anon-contributor\",\"date\":\"2026-07-10\",\"body\":\"I'll take this one!\"},{\"author\":\"tariq-dev\",\"date\":\"2026-07-11\",\"body\":\"Sounds good @anon-contributor, go ahead.\"},{\"author\":\"some-lurker\",\"date\":\"2026-07-18\",\"body\":\"any update on this? still broken for me\"}],\"lesson\":\"claimed_never_started\",\"lesson_feedback\":\"Someone claimed this 4 months ago and the maintainer assigned it to them. No PR was ever opened. Before you start, leave a comment asking if it's still being worked on — otherwise you might duplicate effort or step on someone's toes.\",\"reproduction\":{\"issueId\":\"notes-app-7\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Open notes.py and find the delete_note function.\"},{\"instruction\":\"Call delete_note(999) without creating any note with that ID first.\"},{\"instruction\":\"Observe the exception raised.\"}],\"expectedResult\":\"delete_note returns {\\\"error\\\": \\\"Note with id 999 does not exist.\\\"}\",\"buggyBehavior\":{\"output\":\"Raises KeyError: 999 — unhandled exception, crashes the program.\",\"type\":\"crash\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Returns {\\\"error\\\": \\\"Note with id 999 does not exist.\\\"} — clean error, no crash.\",\"type\":\"validation_error\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/delete-keyerror\"}},{\"id\":15,\"title\":\"search_notes does not find notes when query case doesn't match\",\"state\":\"open\",\"labels\":[\"bug\"],\"opened_by\":\"meera-writes-code\",\"opened_at\":\"2026-07-20\",\"assigned_to\":null,\"body\":\"If I save a note titled 'Shopping List' and then search for 'shopping', I get an empty result. The search only works if the query matches the exact capitalisation of the title.\\n\\n```python\\nsave_note(title='Shopping List')\\nresults = search_notes('shopping')  # returns []\\nresults = search_notes('Shopping')  # returns the note\\n```\\n\\nExpected search to be case-insensitive.\\n\\n**Version:** 1.0.0\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-07-21\",\"body\":\"Classic one. The fix is `.lower()` on both sides of the comparison.\"},{\"author\":\"meera-writes-code\",\"date\":\"2026-07-21\",\"body\":\"Yes, I figured it was something like that. Happy to submit a fix if no one else is on it.\"},{\"author\":\"tariq-dev\",\"date\":\"2026-07-22\",\"body\":\"Someone's already working on it in a branch. Will update when merged.\"}],\"lesson\":\"already_fixed_by_pr\",\"lesson_feedback\":\"This issue is still marked open, but PR #38 merged last month and fixed exactly this bug. If you check the closed PRs, you'll see the fix is already in the codebase. Reproducing before you start would have caught this — the bug no longer exists in the current code.\",\"reproduction\":{\"issueId\":\"notes-app-15\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Open notes.py and find the search_notes function.\"},{\"instruction\":\"Save a note: save_note(title='Shopping List')\"},{\"instruction\":\"Search with lowercase: search_notes('shopping')\"},{\"instruction\":\"Check the result.\"}],\"expectedResult\":\"search_notes('shopping') returns the note titled 'Shopping List'\",\"buggyBehavior\":{\"output\":\"Returns [] — case-sensitive match fails, note not found.\",\"type\":\"wrong_output\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Returns [{\\\"id\\\": 1, \\\"title\\\": \\\"Shopping List\\\", ...}] — case-insensitive match works.\",\"type\":\"success\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/search-case-sensitive\"}},{\"id\":19,\"title\":\"list_notes returns live objects — mutations affect the internal store\",\"state\":\"open\",\"labels\":[\"bug\",\"good first issue\"],\"opened_by\":\"infra-nerd-9\",\"opened_at\":\"2026-08-28\",\"assigned_to\":null,\"body\":\"Found a subtle bug. `list_notes()` returns the actual internal note dicts, not copies. So if you do this:\\n\\n```python\\nnotes = list_notes()\\nnotes[0]['title'] = 'overwritten'\\n```\\n\\n...the internal store is now corrupted. The note with id 1 permanently has the wrong title.\\n\\nThis is a encapsulation issue. The function should return copies of the notes, not references to the internal objects.\\n\\nI know it's labeled good first issue but this touches how the storage layer works. You need to understand the difference between shallow and deep copies in Python before fixing it, and consider whether a shallow copy is sufficient here or whether a deep copy is needed.\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-08-29\",\"body\":\"Good report. The body field is just a string so a shallow copy via `dict(note)` is enough for now. If we add nested objects later we'd need `copy.deepcopy`. Worth noting that in the PR.\"},{\"author\":\"curious-dev\",\"date\":\"2026-09-01\",\"body\":\"What's the difference between shallow and deep copy here?\"},{\"author\":\"infra-nerd-9\",\"date\":\"2026-09-01\",\"body\":\"Shallow copy creates a new dict but keeps references to the same nested objects. Deep copy recursively copies everything. For now title and body are strings (immutable), so shallow is fine.\"},{\"author\":\"tariq-dev\",\"date\":\"2026-09-02\",\"body\":\"Correct. Whoever picks this up — please add a test that confirms mutating the returned list doesn't affect the stored note.\"}],\"lesson\":\"good_first_issue_hard\",\"lesson_feedback\":\"Labeled good first issue, but the maintainer's own comments explain this needs understanding of shallow vs deep copy and the storage layer's design. The fix is technically one line, but you shouldn't write it without understanding why. If you're not sure about copy semantics in Python yet, this isn't the right starting point.\",\"reproduction\":{\"issueId\":\"notes-app-19\",\"buggyVersion\":\"1.0.0\",\"fixedVersion\":\"1.1.0\",\"reproductionSteps\":[{\"instruction\":\"Save a note: save_note(title='Original title')\"},{\"instruction\":\"Call list_notes() and store the result.\"},{\"instruction\":\"Mutate the first note: notes[0]['title'] = 'Corrupted'\"},{\"instruction\":\"Call list_notes() again and check the title.\"}],\"expectedResult\":\"The second list_notes() call still returns 'Original title'\",\"buggyBehavior\":{\"output\":\"Second list_notes() returns 'Corrupted' — internal state was silently modified.\",\"type\":\"silent_failure\",\"verifiedByTest\":true},\"fixedBehavior\":{\"output\":\"Second list_notes() still returns 'Original title' — internal state is protected.\",\"type\":\"success\",\"verifiedByTest\":true},\"regressionTestId\":\"notes-app/mutable-list\"}},{\"id\":23,\"title\":\"Notes disappear sometimes when I add a lot of them\",\"state\":\"open\",\"labels\":[\"bug\"],\"opened_by\":\"frustrated-user-77\",\"opened_at\":\"2026-09-05\",\"assigned_to\":null,\"body\":\"Hey, I've been using this for a bit and sometimes notes just disappear. I'll add like 10 notes and then when I list them some are missing. Not sure what's happening.\\n\\nCan someone help?\",\"comments\":[{\"author\":\"tariq-dev\",\"date\":\"2026-09-06\",\"body\":\"Hi, thanks for the report. Could you share the exact steps to reproduce this? Specifically: which version are you on, how are you calling save_note, and what does list_notes return when this happens? Logs or a code snippet would help.\"},{\"author\":\"frustrated-user-77\",\"date\":\"2026-09-06\",\"body\":\"I'll try to reproduce it again and send more info.\"}],\"lesson\":\"no_reproduction_steps\",\"lesson_feedback\":\"No steps to reproduce, no version, no code snippet or logs. The maintainer already asked for more info and the reporter hasn't followed up. You can't fix what you can't reproduce. The right move here is to ask for the missing info, not to start guessing at a fix.\",\"reproduction\":{\"issueId\":\"notes-app-23\",\"buggyVersion\":null,\"fixedVersion\":null,\"reproductionSteps\":[{\"instruction\":\"Read the issue body carefully.\"},{\"instruction\":\"Check if there are steps to reproduce.\"},{\"instruction\":\"Check if a version is mentioned.\"},{\"instruction\":\"Check if there's a code snippet or error log.\"}],\"expectedResult\":\"A reproducible bug report with steps, version, and actual vs expected output.\",\"buggyBehavior\":{\"output\":\"Not enough information to reproduce. No steps, no version, no error message provided.\",\"type\":\"wrong_output\",\"verifiedByTest\":false},\"fixedBehavior\":{\"output\":\"N/A — issue cannot be investigated without more information from the reporter.\",\"type\":\"success\",\"verifiedByTest\":false},\"regressionTestId\":null}}]");
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
];

//# sourceMappingURL=_1s4weqs._.js.map