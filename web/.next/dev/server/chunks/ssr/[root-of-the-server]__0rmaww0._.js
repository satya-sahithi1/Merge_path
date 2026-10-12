module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/repo/[repoId]/file/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FileViewerPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/files.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/notes-app/meta.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/files.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/weatherly/meta.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/files.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/gradewise/meta.json.[json].cjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data/mdlite/files.json.[json].cjs [app-rsc] (ecmascript)");
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
        files: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    "weatherly": {
        files: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$weatherly$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    "gradewise": {
        files: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$gradewise$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    },
    "mdlite": {
        files: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        meta: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$mdlite$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
    }
};
async function FileViewerPage({ params, searchParams }) {
    const { repoId } = await params;
    const { name } = await searchParams;
    const repo = REPO_DATA[repoId];
    const meta = repo?.meta ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    const tree = repo?.files.tree ?? __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].tree;
    function findFile(nodes, filename) {
        for (const node of nodes){
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
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            style: {
                background: "var(--background)"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: {
                    color: "var(--text-secondary)"
                },
                children: "File not found."
            }, void 0, false, {
                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                lineNumber: 50,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/repo/[repoId]/file/page.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    const lines = file.content.split("\n");
    const isPython = file.name.endsWith(".py");
    const isMarkdown = file.name.endsWith(".md");
    const isYaml = file.name.endsWith(".yml") || file.name.endsWith(".yaml");
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
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 65,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 66,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/repo/${repoId}`,
                        className: "text-sm",
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: meta.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        style: {
                            color: "var(--text-primary)"
                        },
                        children: file.name
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto px-4 py-6 space-y-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: "📄"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm font-medium",
                                        style: {
                                            color: "var(--text-primary)"
                                        },
                                        children: file.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: [
                                            lines.length,
                                            " lines"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/repo/${repoId}`,
                                className: "text-xs px-3 py-1.5 rounded border",
                                style: {
                                    borderColor: "var(--border)",
                                    color: "var(--text-secondary)"
                                },
                                children: "← Back to repo"
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-md border overflow-hidden",
                        style: {
                            borderColor: "var(--border)"
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-4 py-2 border-b flex items-center justify-between",
                                style: {
                                    borderColor: "var(--border)",
                                    background: "var(--surface)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: isPython ? "Python" : isMarkdown ? "Markdown" : isYaml ? "YAML" : "Text"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs",
                                        style: {
                                            color: "var(--text-secondary)"
                                        },
                                        children: [
                                            lines.length,
                                            " lines · ",
                                            file.content.length,
                                            " bytes"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 96,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-sm font-mono",
                                    style: {
                                        borderCollapse: "collapse"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                        children: lines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "hover:bg-white/5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-0 text-right select-none w-12",
                                                        style: {
                                                            color: "var(--text-secondary)",
                                                            borderRight: "1px solid var(--border)",
                                                            fontSize: "12px",
                                                            lineHeight: "1.6"
                                                        },
                                                        children: i + 1
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                        className: "px-4 py-0 whitespace-pre",
                                                        style: {
                                                            color: "var(--text-primary)",
                                                            lineHeight: "1.6"
                                                        },
                                                        children: line || " "
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/repo/[repoId]/file/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/repo/[repoId]/file/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/data/gradewise/files.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
"[project]/lib/data/mdlite/files.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "tree": [
        {
            "name": "README.md",
            "type": "file",
            "content": "# mdlite\n\nA small Python library that converts Markdown to HTML. Handles headings, paragraphs, bold, italic, inline code, links, and flat lists.\n\n## Requirements\n\n- Python 3.10 or higher\n- pytest (for running tests)\n\n## Installation\n\n```bash\ngit clone https://github.com/riya-dev/mdlite.git\ncd mdlite\npip install -r requirements.txt\n```\n\n## Usage\n\n```python\nform src.mdlite import render\n\nhtml = render(\"# Hello\\n\\nThis is **bold** and *italic*.\")\nprint(html)\n# <h1>Hello</h1>\n# <p>This is <strong>bold</strong> and <em>italic</em>.</p>\n```\n\n## Running tests\n\n```bash\npytest tests/\n```\n\nAll tests must pass before you open a pull request. See CONTRIBUTING.md.\n\n## Supported syntax\n\n| Syntax | Output |\n|---|---|\n| `# Heading` | `<h1>` |\n| `**bold**` or `__bold__` | `<strong>` |\n| `*italic*` | `<em>` |\n| `` `code` `` | `<code>` |\n| `[text](url)` | `<a>` |\n| `- item` | `<ul><li>` |\n\n## Contributing\n\nSee [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.\n\n## License\n\nMIT\n"
        },
        {
            "name": "CONTRIBUTING.md",
            "type": "file",
            "content": "# Contributing to mdlite\n\nThanks for your interest in contributing.\n\n## Before you start\n\nCheck the open issues. If you want to work on one, leave a comment first and wait for a reply. This avoids two people working on the same thing.\n\nIf you find a new bug, open an issue before submitting a PR.\n\n## Setup\n\n```bash\npip install -r requirements.txt\npip install black\n```\n\n## Branch naming\n\nUse `<type>/<short-desc>`, for example:\n\n- `fix/trailing-spaces`\n- `test/empty-input`\n- `docs/readme-typo`\n\n## Rules\n\n1. Every change needs a test. Bug fixes need a test that fails before and passes after.\n2. Run `black src/ tests/` before pushing. CI checks formatting.\n3. One issue per PR. Do not bundle fixes.\n4. Link the issue your PR fixes with `Fixes #<number>` in the description.\n"
        },
        {
            "name": "requirements.txt",
            "type": "file",
            "content": "pytest==8.3.3\nblack==24.8.0\n"
        },
        {
            "name": "LICENSE",
            "type": "file",
            "content": "MIT License\n\nCopyright (c) 2026 riya-dev\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n"
        },
        {
            "name": ".github",
            "type": "dir",
            "children": [
                {
                    "name": "PULL_REQUEST_TEMPLATE.md",
                    "type": "file",
                    "content": "## What does this PR do?\n\n<!-- Describe the change and why it's needed. -->\n\n## Checklist\n\n- [ ] I have read CONTRIBUTING.md\n- [ ] My branch follows the `<type>/<short-desc>` naming rule\n- [ ] I have added or updated tests\n- [ ] I ran `black src/ tests/` and CI is green\n- [ ] I linked the related issue (if any) with `Fixes #<number>`\n"
                },
                {
                    "name": "workflows",
                    "type": "dir",
                    "children": [
                        {
                            "name": "ci.yml",
                            "type": "file",
                            "content": "name: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-python@v5\n        with:\n          python-version: \"3.12\"\n      - run: pip install -r requirements.txt\n      - run: black --check src/ tests/\n      - run: pytest tests/\n"
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
                    "name": "mdlite.py",
                    "type": "file",
                    "content": "import re\n\n\ndef render(text):\n    lines = text.split(\"\\n\")\n    output = []\n    i = 0\n    while i < len(lines):\n        line = lines[i]\n\n        if line.startswith(\"# \"):\n            output.append(f\"<h1>{_inline(line[2:].rstrip())}</h1>\")\n            i += 1\n        elif line.startswith(\"## \"):\n            output.append(f\"<h2>{_inline(line[3:].rstrip())}</h2>\")\n            i += 1\n        elif line.startswith(\"### \"):\n            output.append(f\"<h3>{_inline(line[4:].rstrip())}</h3>\")\n            i += 1\n        elif line.startswith(\"- \"):\n            items = []\n            while i < len(lines) and lines[i].startswith(\"- \"):\n                items.append(f\"<li>{_inline(lines[i][2:])}</li>\")\n                i += 1\n            output.append(\"<ul>\" + \"\".join(items) + \"</ul>\")\n        elif line.strip() == \"\":\n            i += 1\n        else:\n            output.append(f\"<p>{_inline(line)}</p>\")\n            i += 1\n\n    return \"\\n\".join(output)\n\n\ndef _inline(text):\n    text = re.sub(r\"\\*\\*(.+?)\\*\\*\", r\"<strong>\\1</strong>\", text)\n    text = re.sub(r\"__(.+?)__\", r\"<strong>\\1</strong>\", text)\n    text = re.sub(r\"\\*(.+?)\\*\", r\"<em>\\1</em>\", text)\n    text = re.sub(r\"`(.+?)`\", r\"<code>\\1</code>\", text)\n    text = re.sub(r\"\\[(.+?)\\]\\((.+?)\\)\", r'<a href=\"\\2\">\\1</a>', text)\n    return text\n"
                }
            ]
        },
        {
            "name": "tests",
            "type": "dir",
            "children": [
                {
                    "name": "test_mdlite.py",
                    "type": "file",
                    "content": "\"\"\"Tests for mdlite — HEAD version.\"\"\"\n\nimport sys\nimport os\n\nsys.path.insert(0, os.path.join(os.path.dirname(__file__), \"..\"))\n\nfrom src.mdlite import render\n\n\ndef test_h1_heading():\n    assert render(\"# Hello\") == \"<h1>Hello</h1>\"\n\n\ndef test_h2_heading():\n    assert render(\"## Sub\") == \"<h2>Sub</h2>\"\n\n\ndef test_paragraph():\n    assert render(\"plain text\") == \"<p>plain text</p>\"\n\n\ndef test_bold_asterisk():\n    assert render(\"**bold**\") == \"<p><strong>bold</strong></p>\"\n\n\ndef test_bold_underscore():\n    assert render(\"__bold__\") == \"<p><strong>bold</strong></p>\"\n\n\ndef test_emphasis():\n    assert render(\"*em*\") == \"<p><em>em</em></p>\"\n\n\ndef test_inline_code():\n    assert render(\"`code`\") == \"<p><code>code</code></p>\"\n\n\ndef test_link():\n    assert render(\"[click](http://example.com)\") == '<p><a href=\"http://example.com\">click</a></p>'\n\n\ndef test_flat_list():\n    md = \"- one\\n- two\\n- three\"\n    assert render(md) == \"<ul><li>one</li><li>two</li><li>three</li></ul>\"\n\n\ndef test_empty_input():\n    assert render(\"\") == \"\"\n\n\ndef test_blank_lines_ignored():\n    assert render(\"# Title\\n\\nparagraph\") == \"<h1>Title</h1>\\n<p>paragraph</p>\"\n\n\ndef test_heading_trailing_space():\n    assert render(\"# Hello   \") == \"<h1>Hello</h1>\"\n\n\ndef test_heading_inline_bold():\n    assert render(\"# **bold** title\") == \"<h1><strong>bold</strong> title</h1>\"\n"
                }
            ]
        }
    ]
};
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
"[project]/lib/data/notes-app/files.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"tree\":[{\"name\":\"README.md\",\"type\":\"file\",\"content\":\"# notes-app\\n\\nA minimal command-line notes manager written in Python. Supports creating, listing, searching, and deleting notes. Intended as a small learning project.\\n\\n## Requirements\\n\\n- Python 3.10 or higher\\n- pytest (for running tests)\\n\\n## Installation\\n\\n```bash\\ngit clone https://github.com/tariq-dev/notes-app.git\\ncd notes-app\\npip install -r requirements.txt\\n```\\n\\n## Usage\\n\\n```python\\nfrom src.notes import save_note, list_notes, search_notes, delete_note\\n\\n# Save a note\\nsave_note(title=\\\"Shopping list\\\", body=\\\"milk, eggs, bread\\\")\\n\\n# List all notes\\nnotes = list_notes()\\nprint(notes)\\n\\n# Search by title\\nresults = search_notes(\\\"shopping\\\")\\nprint(results)\\n\\n# Delete a note by ID\\ndelete_note(1)\\n```\\n\\n## Running tests\\n\\n```bash\\npytest tests/\\n```\\n\\nAll tests should pass before you open a pull request.\\n\\n## Project structure\\n\\n```\\nnotes-app/\\n├── src/\\n│   └── notes.py        # core notes logic\\n├── tests/\\n│   └── test_notes.py   # regression tests\\n├── requirements.txt\\n├── README.md\\n└── CONTRIBUTING.md\\n```\\n\\n## Contributing\\n\\nSee [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request.\\n\\n## License\\n\\nMIT\\n\"},{\"name\":\"CONTRIBUTING.md\",\"type\":\"file\",\"content\":\"# Contributing to notes-app\\n\\nThanks for your interest in contributing. This is a small project — contributions are welcome, but please read this first.\\n\\n## Before you start\\n\\n- Check the open issues. If you want to work on one, **leave a comment on the issue first** and wait for a response. This avoids two people working on the same thing.\\n- If you find a new bug, open an issue before submitting a PR. Describe the bug, steps to reproduce, and the Python version you're using.\\n- One issue per PR. Don't bundle multiple fixes into one pull request.\\n\\n## Setup\\n\\n```bash\\ngit clone https://github.com/tariq-dev/notes-app.git\\ncd notes-app\\npython3 -m venv .venv\\nsource .venv/bin/activate\\npip install -r requirements.txt\\n```\\n\\n## Running tests\\n\\n```bash\\npytest tests/\\n```\\n\\nAll tests must pass before you open a PR. If you're fixing a bug, add a test that fails on the buggy code and passes after your fix.\\n\\n## Branch naming\\n\\nUse this format:\\n\\n```\\nfix/issue-<number>-short-description\\nfeat/short-description\\ndocs/short-description\\n```\\n\\nExamples:\\n- `fix/issue-12-empty-title-validation`\\n- `docs/update-readme-usage`\\n\\n## Opening a pull request\\n\\n- Link the issue your PR fixes using `Fixes #<issue-number>` in the PR description.\\n- Keep the PR small. A focused change is easier to review and faster to merge.\\n- Describe what you changed and why — not just what files you touched.\\n- Don't ping the maintainer repeatedly. Reviews happen within a week or so.\\n\\n## Code style\\n\\n- Follow the existing style in `notes.py` — no external formatters required.\\n- Add docstrings to any new functions.\\n- Keep functions small and focused.\\n\\n## What counts as a contribution\\n\\n- Bug fixes with tests\\n- Documentation improvements\\n- Clearer error messages\\n\\n**What we won't merge:**\\n- Whitespace-only changes\\n- Reformatting without functional changes\\n- AI-generated code that the contributor hasn't read, tested, or understood\\n\"},{\"name\":\"requirements.txt\",\"type\":\"file\",\"content\":\"pytest==8.3.3\\n\"},{\"name\":\"src\",\"type\":\"dir\",\"children\":[{\"name\":\"notes.py\",\"type\":\"file\",\"content\":\"# notes.py — v1.0.0\\n# A simple in-memory notes manager.\\n# Supports creating, listing, searching, and deleting notes.\\n\\n_notes = {}\\n_next_id = 1\\n\\n\\ndef save_note(title, body=\\\"\\\"):\\n    \\\"\\\"\\\"Save a new note with a title and optional body.\\n\\n    Returns a dict with 'status' and 'id' on success,\\n    or 'error' on failure.\\n    \\\"\\\"\\\"\\n    global _next_id\\n\\n    # BUG 1: No check for empty title after stripping whitespace.\\n    # If title is \\\"\\\" or \\\"   \\\", clean_title will be \\\"\\\" and the note\\n    # is saved with a blank title. No error is raised.\\n    clean_title = title.strip()\\n\\n    note = {\\n        \\\"id\\\": _next_id,\\n        \\\"title\\\": clean_title,\\n        \\\"body\\\": body,\\n    }\\n    _notes[_next_id] = note\\n    _next_id += 1\\n    return {\\\"status\\\": \\\"saved\\\", \\\"id\\\": note[\\\"id\\\"]}\\n\\n\\ndef delete_note(note_id):\\n    \\\"\\\"\\\"Delete a note by its integer ID.\\n\\n    Returns a dict with 'status' on success,\\n    or raises KeyError if the ID does not exist.\\n    \\\"\\\"\\\"\\n    # BUG 2: No check whether note_id exists before deleting.\\n    # If the caller passes an ID that was already deleted or never existed,\\n    # this raises an unhandled KeyError instead of returning a clean error.\\n    del _notes[note_id]\\n    return {\\\"status\\\": \\\"deleted\\\"}\\n\\n\\ndef search_notes(query):\\n    \\\"\\\"\\\"Search notes by title.\\n\\n    Returns a list of notes whose title contains the query string.\\n    \\\"\\\"\\\"\\n    results = []\\n    for note in _notes.values():\\n        # BUG 3: Case-sensitive comparison.\\n        # search_notes(\\\"shopping\\\") will not find a note titled \\\"Shopping List\\\".\\n        # Fix is to compare both strings lowercased.\\n        if query in note[\\\"title\\\"]:\\n            results.append(note)\\n    return results\\n\\n\\ndef list_notes():\\n    \\\"\\\"\\\"Return all saved notes as a list.\\\"\\\"\\\"\\n    # BUG 4: Returns a direct reference to the internal dict's values view\\n    # converted to a list — but each note dict inside is still the live object.\\n    # A caller who does list_notes()[0][\\\"title\\\"] = \\\"hacked\\\" will silently\\n    # corrupt the internal store.\\n    return list(_notes.values())\\n\\n\\ndef get_note(note_id):\\n    \\\"\\\"\\\"Return a single note by ID, or None if it does not exist.\\\"\\\"\\\"\\n    return _notes.get(note_id)\\n\\n\\ndef clear_all():\\n    \\\"\\\"\\\"Remove all notes. Used in tests to reset state between runs.\\\"\\\"\\\"\\n    global _next_id\\n    _notes.clear()\\n    _next_id = 1\\n\"},{\"name\":\"notes_fixed.py\",\"type\":\"file\",\"content\":\"# notes_fixed.py — v1.1.0\\n# A simple in-memory notes manager.\\n# Supports creating, listing, searching, and deleting notes.\\n\\n_notes = {}\\n_next_id = 1\\n\\n\\ndef save_note(title, body=\\\"\\\"):\\n    \\\"\\\"\\\"Save a new note with a title and optional body.\\n\\n    Returns a dict with 'status' and 'id' on success,\\n    or 'error' on failure.\\n    \\\"\\\"\\\"\\n    global _next_id\\n\\n    clean_title = title.strip()\\n\\n    # FIX 1: Check for empty title after stripping whitespace.\\n    # Returns a clean error dict instead of saving a blank note.\\n    if not clean_title:\\n        return {\\\"error\\\": \\\"Title cannot be empty.\\\"}\\n\\n    note = {\\n        \\\"id\\\": _next_id,\\n        \\\"title\\\": clean_title,\\n        \\\"body\\\": body,\\n    }\\n    _notes[_next_id] = note\\n    _next_id += 1\\n    return {\\\"status\\\": \\\"saved\\\", \\\"id\\\": note[\\\"id\\\"]}\\n\\n\\ndef delete_note(note_id):\\n    \\\"\\\"\\\"Delete a note by its integer ID.\\n\\n    Returns a dict with 'status' on success,\\n    or 'error' if the ID does not exist.\\n    \\\"\\\"\\\"\\n    # FIX 2: Check if the note exists before deleting.\\n    # Returns a clean error dict instead of raising KeyError.\\n    if note_id not in _notes:\\n        return {\\\"error\\\": f\\\"Note with id {note_id} does not exist.\\\"}\\n    del _notes[note_id]\\n    return {\\\"status\\\": \\\"deleted\\\"}\\n\\n\\ndef search_notes(query):\\n    \\\"\\\"\\\"Search notes by title (case-insensitive).\\n\\n    Returns a list of notes whose title contains the query string.\\n    \\\"\\\"\\\"\\n    results = []\\n    # FIX 3: Lowercase both the query and the title before comparing.\\n    # search_notes(\\\"shopping\\\") now correctly finds \\\"Shopping List\\\".\\n    for note in _notes.values():\\n        if query.lower() in note[\\\"title\\\"].lower():\\n            results.append(note)\\n    return results\\n\\n\\ndef list_notes():\\n    \\\"\\\"\\\"Return all saved notes as a list of copies.\\\"\\\"\\\"\\n    # FIX 4: Return shallow copies of each note dict so callers\\n    # cannot silently mutate the internal store.\\n    return [dict(note) for note in _notes.values()]\\n\\n\\ndef get_note(note_id):\\n    \\\"\\\"\\\"Return a single note by ID, or None if it does not exist.\\\"\\\"\\\"\\n    return _notes.get(note_id)\\n\\n\\ndef clear_all():\\n    \\\"\\\"\\\"Remove all notes. Used in tests to reset state between runs.\\\"\\\"\\\"\\n    global _next_id\\n    _notes.clear()\\n    _next_id = 1\\n\"}]},{\"name\":\"tests\",\"type\":\"dir\",\"children\":[{\"name\":\"test_notes.py\",\"type\":\"file\",\"content\":\"\\\"\\\"\\\"\\nRegression tests for notes-app.\\n\\nEach test class covers one bug. Within each class:\\n- test_buggy_*  shows the wrong behavior in v1.0.0\\n- test_fixed_*  shows the correct behavior in v1.1.0\\n\\nThese tests are the source of truth for the scenario JSON.\\nIf they pass, verifiedByTest can be set to true in issues.json.\\n\\\"\\\"\\\"\\n\\nimport sys\\nimport os\\n\\n# Make sure both src modules are importable\\nsys.path.insert(0, os.path.join(os.path.dirname(__file__), \\\"..\\\"))\\n\\nimport pytest\\nfrom src.notes import (\\n    save_note, delete_note, search_notes, list_notes, clear_all\\n)\\nfrom src.notes_fixed import (\\n    save_note as save_note_fixed,\\n    delete_note as delete_note_fixed,\\n    search_notes as search_notes_fixed,\\n    list_notes as list_notes_fixed,\\n    clear_all as clear_all_fixed,\\n)\\n\\n\\n# ---------------------------------------------------------------------------\\n# Reset state before every test so tests don't bleed into each other\\n# ---------------------------------------------------------------------------\\n\\n@pytest.fixture(autouse=True)\\ndef reset_state():\\n    clear_all()\\n    clear_all_fixed()\\n    yield\\n    clear_all()\\n    clear_all_fixed()\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 1 — Empty title is saved silently (no validation)\\n# Lesson: genuine_good_pick  |  regressionTestId: notes-app/empty-title-crash\\n# ---------------------------------------------------------------------------\\n\\nclass TestEmptyTitle:\\n\\n    def test_buggy_empty_title_saves_silently(self):\\n        \\\"\\\"\\\"v1.0.0: saving with an empty title succeeds — wrong behavior.\\\"\\\"\\\"\\n        result = save_note(title=\\\"\\\", body=\\\"some content\\\")\\n        # Bug: no error returned, note is saved with blank title\\n        assert result.get(\\\"status\\\") == \\\"saved\\\"\\n        assert result.get(\\\"error\\\") is None\\n\\n    def test_buggy_whitespace_only_title_saves_silently(self):\\n        \\\"\\\"\\\"v1.0.0: whitespace-only title also saves silently.\\\"\\\"\\\"\\n        result = save_note(title=\\\"   \\\", body=\\\"some content\\\")\\n        assert result.get(\\\"status\\\") == \\\"saved\\\"\\n\\n    def test_fixed_empty_title_returns_error(self):\\n        \\\"\\\"\\\"v1.1.0: empty title returns a validation error.\\\"\\\"\\\"\\n        result = save_note_fixed(title=\\\"\\\", body=\\\"some content\\\")\\n        assert result.get(\\\"error\\\") == \\\"Title cannot be empty.\\\"\\n        assert result.get(\\\"status\\\") is None\\n\\n    def test_fixed_whitespace_only_title_returns_error(self):\\n        \\\"\\\"\\\"v1.1.0: whitespace-only title also returns a validation error.\\\"\\\"\\\"\\n        result = save_note_fixed(title=\\\"   \\\", body=\\\"some content\\\")\\n        assert result.get(\\\"error\\\") == \\\"Title cannot be empty.\\\"\\n\\n    def test_fixed_valid_title_saves_successfully(self):\\n        \\\"\\\"\\\"v1.1.0: a valid title saves correctly.\\\"\\\"\\\"\\n        result = save_note_fixed(title=\\\"Shopping list\\\", body=\\\"milk, eggs\\\")\\n        assert result.get(\\\"status\\\") == \\\"saved\\\"\\n        assert \\\"id\\\" in result\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 2 — Delete crashes with KeyError on invalid ID\\n# Lesson: claimed_never_started  |  regressionTestId: notes-app/delete-keyerror\\n# ---------------------------------------------------------------------------\\n\\nclass TestDeleteInvalidId:\\n\\n    def test_buggy_delete_nonexistent_raises_keyerror(self):\\n        \\\"\\\"\\\"v1.0.0: deleting a non-existent ID raises KeyError.\\\"\\\"\\\"\\n        with pytest.raises(KeyError):\\n            delete_note(999)\\n\\n    def test_buggy_delete_already_deleted_raises_keyerror(self):\\n        \\\"\\\"\\\"v1.0.0: deleting an already-deleted note raises KeyError.\\\"\\\"\\\"\\n        save_note(title=\\\"Temp note\\\")\\n        delete_note(1)\\n        with pytest.raises(KeyError):\\n            delete_note(1)  # second delete crashes\\n\\n    def test_fixed_delete_nonexistent_returns_error(self):\\n        \\\"\\\"\\\"v1.1.0: deleting a non-existent ID returns a clean error dict.\\\"\\\"\\\"\\n        result = delete_note_fixed(999)\\n        assert result.get(\\\"error\\\") == \\\"Note with id 999 does not exist.\\\"\\n\\n    def test_fixed_delete_valid_id_succeeds(self):\\n        \\\"\\\"\\\"v1.1.0: deleting a valid ID works correctly.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"Temp note\\\")\\n        result = delete_note_fixed(1)\\n        assert result.get(\\\"status\\\") == \\\"deleted\\\"\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 3 — Search is case-sensitive\\n# Lesson: good_first_issue_hard  |  regressionTestId: notes-app/search-case-sensitive\\n# ---------------------------------------------------------------------------\\n\\nclass TestCaseSensitiveSearch:\\n\\n    def test_buggy_search_misses_different_case(self):\\n        \\\"\\\"\\\"v1.0.0: searching 'shopping' does not find 'Shopping List'.\\\"\\\"\\\"\\n        save_note(title=\\\"Shopping List\\\", body=\\\"milk, eggs\\\")\\n        results = search_notes(\\\"shopping\\\")\\n        # Bug: returns empty list because comparison is case-sensitive\\n        assert results == []\\n\\n    def test_buggy_search_only_finds_exact_case(self):\\n        \\\"\\\"\\\"v1.0.0: only exact case match works.\\\"\\\"\\\"\\n        save_note(title=\\\"Shopping List\\\", body=\\\"milk, eggs\\\")\\n        results = search_notes(\\\"Shopping\\\")\\n        assert len(results) == 1\\n\\n    def test_fixed_search_is_case_insensitive(self):\\n        \\\"\\\"\\\"v1.1.0: searching 'shopping' correctly finds 'Shopping List'.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"Shopping List\\\", body=\\\"milk, eggs\\\")\\n        results = search_notes_fixed(\\\"shopping\\\")\\n        assert len(results) == 1\\n        assert results[0][\\\"title\\\"] == \\\"Shopping List\\\"\\n\\n    def test_fixed_search_uppercase_query(self):\\n        \\\"\\\"\\\"v1.1.0: uppercase query also finds lowercase titles.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"meeting notes\\\", body=\\\"discussed roadmap\\\")\\n        results = search_notes_fixed(\\\"MEETING\\\")\\n        assert len(results) == 1\\n\\n\\n# ---------------------------------------------------------------------------\\n# Bug 4 — list_notes returns mutable internal state\\n# Lesson: no_reproduction_steps  |  regressionTestId: notes-app/mutable-list\\n# ---------------------------------------------------------------------------\\n\\nclass TestMutableListReturn:\\n\\n    def test_buggy_caller_can_corrupt_internal_state(self):\\n        \\\"\\\"\\\"v1.0.0: mutating a note from list_notes corrupts the store.\\\"\\\"\\\"\\n        save_note(title=\\\"Original title\\\", body=\\\"body\\\")\\n        notes = list_notes()\\n        # Mutate the returned object\\n        notes[0][\\\"title\\\"] = \\\"Corrupted\\\"\\n        # The internal store is now corrupted\\n        from src.notes import get_note\\n        stored = get_note(1)\\n        assert stored[\\\"title\\\"] == \\\"Corrupted\\\"  # bug: internal state changed\\n\\n    def test_fixed_caller_cannot_corrupt_internal_state(self):\\n        \\\"\\\"\\\"v1.1.0: mutating a note from list_notes does not affect the store.\\\"\\\"\\\"\\n        save_note_fixed(title=\\\"Original title\\\", body=\\\"body\\\")\\n        notes = list_notes_fixed()\\n        notes[0][\\\"title\\\"] = \\\"Attempted corruption\\\"\\n        from src.notes_fixed import get_note as get_note_fixed\\n        stored = get_note_fixed(1)\\n        assert stored[\\\"title\\\"] == \\\"Original title\\\"  # fix: internal state safe\\n\"}]}]}");
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
"[project]/lib/data/weatherly/files.json.[json].cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0rmaww0._.js.map