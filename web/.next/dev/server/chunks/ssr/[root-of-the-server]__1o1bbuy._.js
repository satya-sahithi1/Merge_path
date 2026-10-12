module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/repo/[repoId]/prs/[prId]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PRPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
// Load all repos' PRs at build time so the server component can pick
// the right one at runtime from the URL params.
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/prs.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/meta.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/prs.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/meta.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/prs.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/meta.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mdlite/prs.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mdlite/meta.json.[json].cjs [app-rsc] (ecmascript)");
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
        prs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    "weatherly": {
        prs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    "gradewise": {
        prs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    "mdlite": {
        prs: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$prs$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }
};
async function PRPage({ params }) {
    const { repoId, prId } = await params;
    const repo = REPO_DATA[repoId];
    const prs = repo?.prs ?? [];
    const pr = prs.find((p)=>p.id === Number(prId));
    const meta = repo?.meta ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    if (!pr) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: {
                background: "var(--background)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--text-secondary)"
                },
                children: "PR not found."
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                lineNumber: 36,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
            lineNumber: 35,
            columnNumber: 7
        }, this);
    }
    const stateColor = pr.state === "merged" ? "#a371f7" : pr.state === "open" ? "#3fb950" : "#f85149";
    const stateBg = pr.state === "merged" ? "#2d1e4f" : pr.state === "open" ? "#1a3a1a" : "#3a1a1a";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        style: {
            background: "var(--background)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "border-b px-6 py-3 flex items-center gap-4",
                style: {
                    borderColor: "var(--border)",
                    background: "var(--surface)"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "Merge Path"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/repo/${repoId}?tab=prs`,
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: meta.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-primary)"
                        },
                        children: "Pull Requests"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-4xl mx-auto px-4 py-6 space-y-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-xl font-semibold",
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: [
                                    pr.title,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg font-normal ml-2",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: [
                                            "#",
                                            pr.id
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 63,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 flex-wrap",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs px-2 py-1 rounded-full font-medium capitalize",
                                        style: {
                                            background: stateBg,
                                            color: stateColor
                                        },
                                        children: pr.state === "merged" ? "⬟ Merged" : pr.state === "open" ? "● Open" : "✗ Closed"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 66,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: pr.state === "merged" ? `Merged ${pr.merged_at} by ${pr.author}` : `Opened ${pr.opened_at} by ${pr.author}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this),
                                    pr.linked_issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/repo/${repoId}/issues/${pr.linked_issue}`,
                                        className: "text-xs px-2 py-0.5 rounded",
                                        style: {
                                            background: "var(--surface)",
                                            color: "var(--link)"
                                        },
                                        children: [
                                            "Fixes #",
                                            pr.linked_issue
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs",
                                style: {
                                    color: "var(--text-secondary)"
                                },
                                children: [
                                    "Branch: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                        className: "px-1.5 py-0.5 rounded",
                                        style: {
                                            background: "var(--surface)"
                                        },
                                        children: pr.branch
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border overflow-hidden",
                        style: {
                            borderColor: "var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between px-4 py-2 border-b",
                                style: {
                                    borderColor: "var(--border)",
                                    background: "var(--surface)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                                style: {
                                                    background: "#1f3a5f",
                                                    color: "var(--link)"
                                                },
                                                children: pr.author[0].toUpperCase()
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-medium",
                                                style: {
                                                    color: "var(--text-primary)"
                                                },
                                                children: pr.author
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs px-1.5 py-0.5 rounded border",
                                                style: {
                                                    borderColor: "var(--border)",
                                                    color: "var(--text-secondary)"
                                                },
                                                children: "Author"
                                            }, void 0, false, {
                                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                lineNumber: 98,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 92,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: pr.opened_at
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 text-sm whitespace-pre-wrap",
                                style: {
                                    color: "var(--text-primary)",
                                    lineHeight: 1.6
                                },
                                children: pr.description
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 105,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 89,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border overflow-hidden",
                        style: {
                            borderColor: "var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 border-b text-xs",
                                style: {
                                    borderColor: "var(--border)",
                                    background: "var(--surface)",
                                    color: "var(--text-secondary)"
                                },
                                children: "Changes"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-3 text-sm font-mono",
                                style: {
                                    background: "#0d1f0d",
                                    color: "#3fb950",
                                    borderLeft: "3px solid #238636"
                                },
                                children: [
                                    "+ ",
                                    pr.diff_summary
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this),
                    pr.review_comments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-sm font-medium",
                                style: {
                                    color: "var(--text-secondary)"
                                },
                                children: "Review conversation"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this),
                            pr.review_comments.map((comment, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-md border overflow-hidden",
                                    style: {
                                        borderColor: "var(--border)"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-between px-4 py-2 border-b",
                                            style: {
                                                borderColor: "var(--border)",
                                                background: "var(--surface)"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                                                            style: {
                                                                background: "#2d1e4f",
                                                                color: "#a371f7"
                                                            },
                                                            children: comment.author[0].toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-medium",
                                                            style: {
                                                                color: "var(--text-primary)"
                                                            },
                                                            children: comment.author
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                            lineNumber: 137,
                                                            columnNumber: 21
                                                        }, this),
                                                        "resolved" in comment && comment.resolved && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs px-1.5 py-0.5 rounded",
                                                            style: {
                                                                background: "#1a3a1a",
                                                                color: "#3fb950"
                                                            },
                                                            children: "resolved"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                    lineNumber: 132,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs",
                                                    style: {
                                                        color: "var(--text-secondary)"
                                                    },
                                                    children: comment.date
                                                }, void 0, false, {
                                                    fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-4 py-3 text-sm whitespace-pre-wrap",
                                            style: {
                                                color: "var(--text-primary)",
                                                lineHeight: 1.6
                                            },
                                            children: comment.body
                                        }, void 0, false, {
                                            fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this),
                    pr.lesson_note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md p-4 text-sm space-y-1",
                        style: {
                            background: "#1f2d1f",
                            border: "1px solid #238636"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-medium",
                                style: {
                                    color: "#3fb950"
                                },
                                children: "💡 What this shows"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "var(--text-primary)"
                                },
                                children: pr.lesson_note
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                                lineNumber: 160,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/prs/[prId]/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/repo/[repoId]/prs/[prId]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/repo/[repoId]/prs/[prId]/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/data/gradewise/meta.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/lib/data/gradewise/prs.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/lib/data/mdlite/meta.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/lib/data/mdlite/prs.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = [
    {
        "id": 4,
        "title": "test: add empty-input and blank-line tests",
        "state": "merged",
        "author": "priya-learns",
        "opened_at": "2026-06-10",
        "merged_at": "2026-06-10",
        "linked_issue": null,
        "branch": "test/empty-input",
        "description": "Adds two missing tests:\n- `test_empty_input` — confirms `render('')` returns `''`\n- `test_blank_lines_ignored` — confirms blank lines between blocks don't produce output\n\nNo linked issue. I noticed these cases weren't covered while reading through the test file.\n\n**Changes:**\n- `tests/test_mdlite.py`: 2 test functions added\n\n**Testing:**\n- All existing tests still pass\n- Both new tests pass",
        "diff_summary": "tests/test_mdlite.py: added test_empty_input and test_blank_lines_ignored",
        "review_comments": [
            {
                "author": "riya-dev",
                "date": "2026-06-10",
                "body": "Nice addition — these edge cases should definitely be covered. Merging.",
                "resolved": true
            }
        ],
        "lesson": "good_newcomer_pr",
        "lesson_note": "No linked issue, no bug to fix — just a contributor who read the test file, noticed a gap, and filled it cleanly. Small scope, passes CI, maintainer merged same day. You don't need a bug report to make a useful contribution."
    },
    {
        "id": 7,
        "title": "fix: strip trailing spaces from headings",
        "state": "merged",
        "author": "dev-rohan",
        "opened_at": "2026-08-25",
        "merged_at": "2026-08-28",
        "linked_issue": null,
        "branch": "fix/trailing-spaces",
        "description": "Headings with trailing spaces produce output like `<h1>Hello   </h1>`. This strips them.\n\n**Changes:**\n- `src/mdlite.py`: `.rstrip()` added to the text slice in each heading branch\n\n**Testing:**\n- Added `test_heading_trailing_space` in `tests/test_mdlite.py`\n- All existing tests pass",
        "diff_summary": "src/mdlite.py: changed line[2:] to line[2:].rstrip() (and equivalents for h2, h3)",
        "review_comments": [
            {
                "author": "ci-bot",
                "date": "2026-08-25",
                "body": "`black --check` failed on `src/mdlite.py`. Please run `black src/ tests/` before pushing.",
                "resolved": true
            },
            {
                "author": "riya-dev",
                "date": "2026-08-26",
                "body": "The change looks correct but CI is red. Can you run `black src/ tests/` and push the result?",
                "resolved": true
            },
            {
                "author": "dev-rohan",
                "date": "2026-08-27",
                "body": "Done — pushed a formatting commit. CI is green now.",
                "resolved": true
            },
            {
                "author": "riya-dev",
                "date": "2026-08-28",
                "body": "Perfect. Clean diff, test included, CI passing. Merging — thanks!",
                "resolved": true
            }
        ],
        "lesson": "polite_review_response",
        "lesson_note": "CI failed on the first push because of formatting. The maintainer didn't reject the PR — they asked for one specific fix. The contributor ran black, pushed the result, and the PR merged cleanly. A CI failure on your first push is normal; what matters is how you respond to it."
    },
    {
        "id": 9,
        "title": "docs: fix typo in README import example",
        "state": "open",
        "author": "priya-learns",
        "opened_at": "2026-09-12",
        "merged_at": null,
        "linked_issue": 8,
        "branch": "docs/readme-typo",
        "description": "Fixes #8.\n\nThe usage example in README.md says `form src.mdlite import render` — changed to `from`.\n\n**Changes:**\n- `README.md`: one word corrected in the usage example\n\n**Draft:** still checking the rest of the README for other issues before marking ready.",
        "diff_summary": "README.md: changed 'form src.mdlite import render' to 'from src.mdlite import render'",
        "review_comments": [],
        "lesson": null,
        "lesson_note": "Draft PR opened by a contributor who claimed issue #8. Still in progress — no review yet."
    }
];
}),
"[project]/lib/data/notes-app/meta.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/lib/data/notes-app/prs.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/lib/data/weatherly/meta.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
"[project]/lib/data/weatherly/prs.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1o1bbuy._.js.map