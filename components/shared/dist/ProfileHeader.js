"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var ProfileHeader = function (_a) {
    var accountId = _a.accountId, authUserId = _a.authUserId, name = _a.name, username = _a.username, imgUrl = _a.imgUrl, bio = _a.bio;
    return (React.createElement("div", { className: "flex w-full flex-col justify-start" },
        React.createElement("div", { className: "flex items-center justify-between" },
            React.createElement("div", { className: "flex items-center gap-3" },
                React.createElement("div", { className: "relative h-20 w-20 object-cover" },
                    React.createElement(image_1["default"], { src: imgUrl, alt: "Profile Image", fill: true, className: "rounded-full object-cover shadow-2xl" })),
                React.createElement("div", { className: "flex-1" },
                    React.createElement("div", { className: "text-left text-heading3-bold text-light-1" }, name)),
                React.createElement("p", { className: "text-base-medium text-gray-1" },
                    "@",
                    username))),
        React.createElement("p", { className: "mt-6 max-w-lg text-base-regular text-light-2" }),
        React.createElement("div", { className: "mt-12 h-0.5 w-full bg-dark-3" })));
};
exports["default"] = ProfileHeader;
