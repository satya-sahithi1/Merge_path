(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/repo/[repoId]/issues/[issueId]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IssuePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
// Load all repos' issues at build time so the client component can pick
// the right one at runtime from the URL params.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/issues.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/meta.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/issues.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/meta.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/issues.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/meta.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mdlite/issues.json.[json].cjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mdlite/meta.json.[json].cjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
;
;
const REPO_DATA = {
    "notes-app": {
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    "weatherly": {
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    "gradewise": {
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    },
    "mdlite": {
        issues: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$issues$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    }
};
function IssuePage() {
    _s();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const repoId = params.repoId;
    const issueId = Number(params.issueId);
    const repo = REPO_DATA[repoId];
    const issue = repo?.issues.find((i)=>i?.id === issueId);
    const meta = repo?.meta;
    if (!issue || !meta) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: {
                background: "var(--background)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--text-secondary)"
                },
                children: "Issue not found."
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
            lineNumber: 39,
            columnNumber: 7
        }, this);
    }
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
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: `/repo/${repoId}?tab=issues`,
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: meta.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-primary)"
                        },
                        children: "Issues"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2 animate-fade-down",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: [
                                    issue.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-1 rounded-full font-medium",
                                        style: {
                                            background: "#1a3a1a",
                                            color: "#3fb950"
                                        },
                                        children: "● Open"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this),
                                    issue.labels.map((label)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LabelBadge, {
                                            label: label
                                        }, label, false, {
                                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                        lineNumber: 74,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "animate-fade-up stagger-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentCard, {
                                    author: issue.opened_by,
                                    date: issue.opened_at,
                                    body: issue.body,
                                    isOP: true
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            issue.comments.map((comment, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `animate-fade-up stagger-${Math.min(i + 2, 8)}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CommentCard, {
                                        author: comment.author,
                                        date: comment.date,
                                        body: comment.body
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 15
                                    }, this)
                                }, i, false, {
                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    issue.reproduction && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-slide-right stagger-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ReproduceSection, {
                            scenario: issue.reproduction
                        }, void 0, false, {
                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(IssuePage, "+jVsTcECDRo3yq2d7EQxlN9Ixog=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = IssuePage;
// ── Comment card ───────────────────────────────────────────────────────────
function CommentCard({ author, date, body, isOP = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border overflow-hidden",
        style: {
            borderColor: "var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between px-4 py-2 border-b",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                style: {
                                    background: "#1f3a5f",
                                    color: "var(--link)"
                                },
                                children: author[0].toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: author
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 134,
                                columnNumber: 11
                            }, this),
                            isOP && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs px-1.5 py-0.5 rounded border",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--text-secondary)"
                                },
                                children: "Author"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: date
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 142,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 127,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-4 py-3 text-sm whitespace-pre-wrap",
                style: {
                    color: "var(--text-primary)",
                    lineHeight: 1.6
                },
                children: body
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 144,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 126,
        columnNumber: 5
    }, this);
}
_c1 = CommentCard;
// ── Reproduce tab ──────────────────────────────────────────────────────────
function ReproduceSection({ scenario }) {
    _s1();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("steps");
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [choice, setChoice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [revealed, setRevealed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const isLastStep = currentStep === scenario.reproductionSteps.length - 1;
    const isNoInfo = scenario.regressionTestId === null;
    function handleChoice(c) {
        setChoice(c);
        setRevealed(true);
    }
    function getCorrectAnswer() {
        if (isNoInfo) return "not_enough_info";
        if (scenario.buggyVersion === null) return "not_enough_info";
        // fixedVersion === "HEAD" means the fix is already in the current code
        if (scenario.fixedVersion === "HEAD") return "cant_reproduce";
        return "reproduced";
    }
    const correctAnswer = getCorrectAnswer();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-0 rounded-md border overflow-hidden",
        style: {
            borderColor: "var(--border)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                ].map(({ key, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                        lineNumber: 186,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, this),
            activeTab === "steps" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-4",
                children: [
                    isNoInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-4 text-sm",
                        style: {
                            background: "#2a1f00",
                            color: "#d29922"
                        },
                        children: "⚠ This issue doesn't have enough information to reproduce. There are no steps, no version, and no error message. The correct outcome here is “Not enough info”.           "
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 206,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: scenario.reproductionSteps.map((step, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm pt-0.5",
                                                style: {
                                                    color: i <= currentStep ? "var(--text-primary)" : "var(--text-secondary)"
                                                },
                                                children: step.instruction
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                                lineNumber: 225,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 215,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-md p-3 text-sm",
                                style: {
                                    background: "var(--surface)",
                                    borderLeft: "3px solid var(--border)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: "Expected: "
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 235,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-primary)"
                                        },
                                        children: scenario.expectedResult
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                        lineNumber: 236,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 234,
                                columnNumber: 15
                            }, this),
                            !revealed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: !isLastStep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                    lineNumber: 243,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm",
                                            style: {
                                                color: "var(--text-secondary)"
                                            },
                                            children: "What happened? Mark your outcome:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                            lineNumber: 251,
                                            columnNumber: 23
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2 flex-wrap",
                                            children: [
                                                "reproduced",
                                                "cant_reproduce",
                                                "not_enough_info"
                                            ].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>handleChoice(c),
                                                    className: "px-3 py-1.5 rounded text-sm border transition-colors",
                                                    style: {
                                                        borderColor: "var(--border)",
                                                        color: "var(--text-primary)",
                                                        background: "var(--surface)",
                                                        cursor: "pointer"
                                                    },
                                                    children: c === "reproduced" ? "✓ Reproduced" : c === "cant_reproduce" ? "✗ Can&apos;t reproduce" : "? Not enough info"
                                                }, c, false, {
                                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                                    lineNumber: 256,
                                                    columnNumber: 27
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                    lineNumber: 250,
                                    columnNumber: 21
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 241,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 211,
                        columnNumber: 13
                    }, this),
                    revealed && choice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-4 space-y-2",
                        style: {
                            background: choice === correctAnswer ? "#1a3a1a" : "#3a1a1a",
                            border: `1px solid ${choice === correctAnswer ? "#238636" : "#da3633"}`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                style: {
                                    color: choice === correctAnswer ? "#3fb950" : "#f85149"
                                },
                                children: choice === correctAnswer ? "✓ Correct" : "✗ Not quite"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 279,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: [
                                    correctAnswer === "reproduced" && "This bug is still present in the current code. The buggy behavior is confirmed.",
                                    correctAnswer === "cant_reproduce" && "This bug is already fixed in the current code. Check the commit history — a fix landed after this issue was opened and the issue was never closed.",
                                    correctAnswer === "not_enough_info" && "There's not enough information in this report to reproduce the bug. Ask for steps, version, and error output."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                                lineNumber: 283,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 274,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 204,
                columnNumber: 9
            }, this),
            activeTab === "buggy" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 296,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-3 text-sm font-mono",
                        style: {
                            background: "var(--surface)",
                            color: "#f85149",
                            borderLeft: "3px solid #da3633"
                        },
                        children: scenario.buggyBehavior.output
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 303,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 295,
                columnNumber: 9
            }, this),
            activeTab === "fixed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 space-y-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                        lineNumber: 313,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-3 text-sm font-mono",
                        style: {
                            background: "var(--surface)",
                            color: "#3fb950",
                            borderLeft: "3px solid #238636"
                        },
                        children: scenario.fixedBehavior.output
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                        lineNumber: 316,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                        lineNumber: 320,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
                lineNumber: 312,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 178,
        columnNumber: 5
    }, this);
}
_s1(ReproduceSection, "f0MuZ47kxUrHPlIYmUzIklBSs0A=");
_c2 = ReproduceSection;
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "text-xs px-2 py-0.5 rounded-full",
        style: style,
        children: label
    }, void 0, false, {
        fileName: "[project]/app/repo/[repoId]/issues/[issueId]/page.tsx",
        lineNumber: 339,
        columnNumber: 5
    }, this);
}
_c3 = LabelBadge;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "IssuePage");
__turbopack_context__.k.register(_c1, "CommentCard");
__turbopack_context__.k.register(_c2, "ReproduceSection");
__turbopack_context__.k.register(_c3, "LabelBadge");
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
"[project]/lib/data/mdlite/issues.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 2,
        "title": "Add support for nested lists",
        "state": "open",
        "labels": [
            "enhancement",
            "good first issue"
        ],
        "opened_by": "curious-dev",
        "opened_at": "2026-03-10",
        "assigned_to": null,
        "body": "It would be great if `render()` could handle nested lists. Right now only flat `- item` lists work. Indented items come out as paragraphs.\n\n```python\nrender('- item one\\n  - nested\\n- item two')\n# Expected: nested <ul> inside the outer <li>\n# Actual:   indented line becomes a <p>\n```\n\nWould love to see this supported.",
        "comments": [
            {
                "author": "riya-dev",
                "date": "2026-03-11",
                "body": "Good first issue — extend the list handling in the block step. Happy to review."
            },
            {
                "author": "kai-dev",
                "date": "2026-03-12",
                "body": "Agreed, this comes up a lot. Would make the library a lot more practical."
            },
            {
                "author": "weekend-hacker",
                "date": "2026-06-20",
                "body": "I started looking at this. The list parser would need a full rewrite to track indentation state properly — pausing for now, it's more involved than I expected."
            }
        ],
        "lesson": "good_first_issue_hard",
        "lesson_feedback": "The maintainer called it a good first issue, but a contributor who tried it found the list parser needs a full rewrite. The block step doesn't track indentation state at all — adding nested support isn't an extension, it's a redesign. The difficulty is invisible until you read the code.",
        "reproduction": {
            "issueId": "mdlite-2",
            "buggyVersion": null,
            "fixedVersion": null,
            "reproductionSteps": [
                {
                    "instruction": "Call render('- item one\\n  - nested\\n- item two')."
                },
                {
                    "instruction": "Observe that the indented line is treated as a <p>, not a nested <li>."
                }
            ],
            "expectedResult": "Nested list items render inside an inner <ul>.",
            "buggyBehavior": {
                "output": "Indented list item becomes a <p> tag.",
                "type": "wrong_output",
                "verifiedByTest": false
            },
            "fixedBehavior": {
                "output": "N/A — no fix exists yet.",
                "type": "success",
                "verifiedByTest": false
            },
            "regressionTestId": null
        }
    },
    {
        "id": 3,
        "title": "Double-underscore bold (__bold__) renders as plain text",
        "state": "open",
        "labels": [
            "bug"
        ],
        "opened_by": "priya-learns",
        "opened_at": "2026-04-10",
        "assigned_to": null,
        "body": "The README says both `**bold**` and `__bold__` should produce `<strong>`. But `__bold__` just passes through as plain text.\n\n```python\nrender('__bold__')\n# Returns: <p>__bold__</p>\n# Expected: <p><strong>bold</strong></p>\n```\n\n`**bold**` works fine. Only the double-underscore variant is broken.\n\n**Python:** 3.12",
        "comments": [
            {
                "author": "riya-dev",
                "date": "2026-04-10",
                "body": "Confirmed. The `__` pattern is missing from `_inline` — only `**` is handled. Thanks for the report."
            },
            {
                "author": "kai-dev",
                "date": "2026-04-11",
                "body": "Reproduced on Python 3.11 as well."
            }
        ],
        "lesson": "already_fixed_by_commit",
        "lesson_feedback": "This issue is still open in the tracker but the bug no longer exists. Check the commits tab — the fix landed on 2026-04-22. Reproducing it on HEAD would have caught this immediately: __bold__ now renders correctly.",
        "reproduction": {
            "issueId": "mdlite-3",
            "buggyVersion": "pre-2026-04-22",
            "fixedVersion": "HEAD",
            "reproductionSteps": [
                {
                    "instruction": "Open src/mdlite.py and find the _inline function."
                },
                {
                    "instruction": "Call render('__bold__')."
                },
                {
                    "instruction": "Check whether the output is <p>__bold__</p> or <p><strong>bold</strong></p>."
                }
            ],
            "expectedResult": "render('__bold__') returns \"<p><strong>bold</strong></p>\"",
            "buggyBehavior": {
                "output": "Returns \"<p>__bold__</p>\" — underscore bold not recognised.",
                "type": "wrong_output",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "Returns \"<p><strong>bold</strong></p>\" — both bold variants work.",
                "type": "success",
                "verifiedByTest": true
            },
            "regressionTestId": "mdlite/bold-underscore"
        }
    },
    {
        "id": 5,
        "title": "Raw HTML in input passes through into the output unchanged",
        "state": "open",
        "labels": [
            "bug",
            "good first issue"
        ],
        "opened_by": "sec-minded-dev",
        "opened_at": "2026-08-02",
        "assigned_to": null,
        "body": "If you pass a string containing raw HTML to `render()`, it comes out unchanged inside a `<p>` tag.\n\n```python\nrender('<script>alert(1)</script>')\n# Returns: <p><script>alert(1)</script></p>\n```\n\nAny application that injects this output into a web page will execute the script. The library should escape `<`, `>`, and `&` before rendering.\n\n**Steps to reproduce:**\n1. Call `render('<script>alert(1)</script>')`\n2. Observe the output\n\n**Expected:** `<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>`\n**Actual:** `<p><script>alert(1)</script></p>`\n\n**Python:** 3.12",
        "comments": [
            {
                "author": "riya-dev",
                "date": "2026-08-03",
                "body": "Confirmed. The fix goes in `_inline` — call `html.escape(text)` at the very top, before any of the regex patterns run. Please include a test that fails on the current code and passes after your fix."
            },
            {
                "author": "kai-dev",
                "date": "2026-08-04",
                "body": "Reproduced on Python 3.12 as well. The escape needs to happen before the regexes or the `&` in `&lt;` will get double-processed."
            }
        ],
        "lesson": "genuine_good_pick",
        "lesson_feedback": "Good pick. Clear reproduction steps, confirmed by two maintainers, fix location spelled out in the comments, no PR exists, and the scope is a single line in _inline. This is exactly the kind of issue worth starting with.",
        "reproduction": {
            "issueId": "mdlite-5",
            "buggyVersion": "HEAD",
            "fixedVersion": "fixed",
            "reproductionSteps": [
                {
                    "instruction": "Open src/mdlite.py and find the _inline function."
                },
                {
                    "instruction": "Call render('<script>alert(1)</script>')."
                },
                {
                    "instruction": "Observe the return value."
                }
            ],
            "expectedResult": "render returns \"<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>\"",
            "buggyBehavior": {
                "output": "Returns \"<p><script>alert(1)</script></p>\" — raw HTML passes through unchanged.",
                "type": "wrong_output",
                "verifiedByTest": true
            },
            "fixedBehavior": {
                "output": "Returns \"<p>&lt;script&gt;alert(1)&lt;/script&gt;</p>\" — HTML characters are safely escaped.",
                "type": "success",
                "verifiedByTest": true
            },
            "regressionTestId": "mdlite/raw-html-passthrough"
        }
    },
    {
        "id": 6,
        "title": "Links break sometimes",
        "state": "open",
        "labels": [
            "bug"
        ],
        "opened_by": "confused-first-timer",
        "opened_at": "2026-08-20",
        "assigned_to": null,
        "body": "Sometimes when I use links in my markdown the output doesn't look right. Not sure what's happening.\n\nI'm using Python 3.11.",
        "comments": [
            {
                "author": "riya-dev",
                "date": "2026-08-21",
                "body": "Hi, thanks for the report. Could you share the exact markdown string you're passing in and the output you're getting? A short code snippet like `render('[text](url)')` and what it returns would help a lot."
            },
            {
                "author": "confused-first-timer",
                "date": "2026-08-23",
                "body": "It's all in a large file, I can't really paste it all here. The output just looks wrong in some cases."
            }
        ],
        "lesson": "no_reproduction_steps",
        "lesson_feedback": "No input, no output, no specific case. The maintainer asked for a code snippet two days after the report and the response was 'it's in a large file'. You cannot reproduce this, which means you cannot fix it. The right move is to wait for a proper example — or ask for one yourself.",
        "reproduction": {
            "issueId": "mdlite-6",
            "buggyVersion": null,
            "fixedVersion": null,
            "reproductionSteps": [
                {
                    "instruction": "Read the issue body carefully."
                },
                {
                    "instruction": "Check whether a specific markdown input is provided."
                },
                {
                    "instruction": "Check whether the actual vs expected output is shown."
                }
            ],
            "expectedResult": "A reproducible code snippet showing the exact input and the wrong output.",
            "buggyBehavior": {
                "output": "Not enough information to reproduce. No input string or output provided.",
                "type": "wrong_output",
                "verifiedByTest": false
            },
            "fixedBehavior": {
                "output": "N/A — cannot investigate without a reproduction case.",
                "type": "success",
                "verifiedByTest": false
            },
            "regressionTestId": null
        }
    },
    {
        "id": 8,
        "title": "README example has a typo in the function call",
        "state": "open",
        "labels": [
            "docs"
        ],
        "opened_by": "weekend-hacker",
        "opened_at": "2026-09-05",
        "assigned_to": null,
        "body": "The usage example in README.md has a typo in the function call — it says `form` instead of `from`.\n\n```\nform src.mdlite import render\n```\n\nShould be:\n\n```\nfrom src.mdlite import render\n```\n\nSmall fix but confusing for new users.",
        "comments": [
            {
                "author": "riya-dev",
                "date": "2026-09-06",
                "body": "Good catch, typo fixes are welcome. Please use a `docs/` branch, e.g. `docs/readme-typo`."
            },
            {
                "author": "priya-learns",
                "date": "2026-09-11",
                "body": "I'll fix this."
            }
        ],
        "lesson": "claimed_active_pr",
        "lesson_feedback": "A contributor has already claimed this and opened a draft PR (#9) on 2026-09-12. Starting on this without checking first would duplicate their work. Leave a comment asking for an update, or look for another issue.",
        "reproduction": {
            "issueId": "mdlite-8",
            "buggyVersion": null,
            "fixedVersion": null,
            "reproductionSteps": [
                {
                    "instruction": "Open README.md and find the usage example."
                },
                {
                    "instruction": "Check the import line."
                }
            ],
            "expectedResult": "Import line reads: from src.mdlite import render",
            "buggyBehavior": {
                "output": "Import line reads: form src.mdlite import render — typo in README.",
                "type": "wrong_output",
                "verifiedByTest": false
            },
            "fixedBehavior": {
                "output": "Import line reads: from src.mdlite import render",
                "type": "success",
                "verifiedByTest": false
            },
            "regressionTestId": null
        }
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data/mdlite/meta.json.[json].cjs [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "id": "mdlite",
    "name": "mdlite",
    "description": "A small Python library that converts Markdown to HTML. Handles headings, paragraphs, bold, italic, inline code, links, and flat lists.",
    "language": "Python",
    "stars": 54,
    "forks": 8,
    "owner": "riya-dev",
    "health": "active",
    "last_commit_date": "2026-09-13",
    "has_readme": true,
    "has_contributing": true,
    "has_ci": true,
    "avg_pr_response_days": 2,
    "open_issues": 5,
    "open_prs": 1,
    "stale_prs": 0,
    "merged_prs_last_90_days": 2,
    "maintainer_replies_in_issues": true,
    "topics": [
        "python",
        "markdown",
        "html",
        "parser",
        "beginner-friendly"
    ],
    "verdict": "worth-contributing",
    "asOf": "2026-09-15"
};
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

//# sourceMappingURL=_0fxyymh._.js.map