"use strict";
exports.__esModule = true;
var nextjs_1 = require("@clerk/nextjs");
var themes_1 = require("@clerk/themes");
var image_1 = require("next/image");
var link_1 = require("next/link");
function Topbar() {
    return (React.createElement("nav", { className: 'topbar' },
        React.createElement(link_1["default"], { href: '/', className: 'flex items-center gap-4' },
            React.createElement(image_1["default"], { src: '/assets/logo.svg', alt: 'logo', width: 28, height: 28 }),
            React.createElement("p", { className: 'text-heading3-bold text-light-1 max-xs:hidden' }, "Threads")),
        React.createElement("div", { className: 'flex items-center gap-1' },
            React.createElement("div", { className: 'block md:hidden' },
                React.createElement(nextjs_1.SignedIn, null,
                    React.createElement(nextjs_1.SignOutButton, null,
                        React.createElement("div", { className: 'flex cursor-pointer' },
                            React.createElement(image_1["default"], { src: '/assets/logout.svg', alt: 'logout', width: 24, height: 24 }))))),
            React.createElement(nextjs_1.OrganizationSwitcher, { appearance: {
                    baseTheme: themes_1.dark,
                    elements: {
                        organizationSwitcherTrigger: "py-2 px-4"
                    }
                } }))));
}
exports["default"] = Topbar;
