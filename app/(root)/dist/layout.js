"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var react_1 = require("react");
var google_1 = require("next/font/google");
var nextjs_1 = require("@clerk/nextjs");
require("../globals.css");
var Topbar_1 = require("@/components/shared/Topbar");
var LeftSidebar_1 = require("@/components/shared/LeftSidebar");
var RightSidebar_1 = require("@/components/shared/RightSidebar");
var Bottombar_1 = require("@/components/shared/Bottombar");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Threads",
    description: "A Next.js 13 Meta Threads Application"
};
function RootLayout(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(nextjs_1.ClerkProvider, { appearance: {} },
        react_1["default"].createElement("html", { lang: 'en' },
            react_1["default"].createElement("body", { className: inter.className },
                react_1["default"].createElement(Topbar_1["default"], null),
                react_1["default"].createElement("main", { className: "flex flex-row" },
                    react_1["default"].createElement(LeftSidebar_1["default"], null),
                    react_1["default"].createElement("section", { className: "main-container" },
                        react_1["default"].createElement("div", { className: "w-full max-w-4xl" }, children)),
                    react_1["default"].createElement(RightSidebar_1["default"], null)),
                react_1["default"].createElement(Bottombar_1["default"], null)))));
}
exports["default"] = RootLayout;
