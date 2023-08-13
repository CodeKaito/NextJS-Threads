"use client";
"use strict";
exports.__esModule = true;
var constants_1 = require("@/constants");
var nextjs_1 = require("@clerk/nextjs");
var image_1 = require("next/image");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
function LeftSidebar() {
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var userId = nextjs_1.useAuth().userId;
    return (React.createElement("section", { className: "custom-scrollbar leftsidebar" },
        React.createElement("div", { className: "flex w-full flex-1 flex-col gap-6 px-6" }, constants_1.sidebarLinks.map(function (link) {
            var isActive = (pathname.includes(link.route) && link.route.length > 1) || pathname === link.route;
            if (link.route === '/profile')
                link.route = link.route + "/" + userId;
            return (React.createElement(link_1["default"], { href: link.route, key: link.label, className: "leftsidebar_link " + (isActive && 'bg-primary-500') },
                React.createElement(image_1["default"], { src: link.imgURL, alt: link.label, width: 24, height: 24 }),
                React.createElement("p", { className: 'text-light-1 max-lg:hidden' }, link.label)));
        })),
        React.createElement("div", { className: 'mt-10 px-6' },
            React.createElement(nextjs_1.SignedIn, null,
                React.createElement(nextjs_1.SignOutButton, { signOutCallback: function () { return router.push('sign-in'); } },
                    React.createElement("div", { className: 'flex cursor-pointer gap-4 p-4' },
                        React.createElement(image_1["default"], { src: '/assets/logout.svg', alt: 'logout', width: 24, height: 24 }),
                        React.createElement("p", { className: 'text-light-2 max-lg:hidden' }, "Logout")))))));
}
exports["default"] = LeftSidebar;
