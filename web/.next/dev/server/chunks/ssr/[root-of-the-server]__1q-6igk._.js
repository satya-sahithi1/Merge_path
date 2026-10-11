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
;
;
;
;
async function FileViewerPage({ params, searchParams }) {
    const { repoId } = await params;
    const { name } = await searchParams;
    const meta = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$meta$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"];
    const tree = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2f$notes$2d$app$2f$files$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].tree;
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
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/repo/[repoId]/file/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    const lines = file.content.split("\n");
    const isPython = file.name.endsWith(".py");
    const isMarkdown = file.name.endsWith(".md");
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
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 50,
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
                        lineNumber: 51,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            color: "var(--text-secondary)"
                        },
                        children: "/"
                    }, void 0, false, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 54,
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
                        lineNumber: 55,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                lineNumber: 47,
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
                                        lineNumber: 62,
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
                                        lineNumber: 63,
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
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 61,
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
                                lineNumber: 66,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
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
                                        children: isPython ? "Python" : isMarkdown ? "Markdown" : "Text"
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 77,
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
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 75,
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
                                                        lineNumber: 89,
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
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/repo/[repoId]/file/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/repo/[repoId]/file/page.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/repo/[repoId]/file/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/repo/[repoId]/file/page.tsx [app-rsc] (ecmascript)"));
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
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1q-6igk._.js.map