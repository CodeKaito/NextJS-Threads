"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var link_1 = require("next/link");
var ThreadCard = function (_a) {
    var id = _a.id, currentUserId = _a.currentUserId, parentId = _a.parentId, content = _a.content, author = _a.author, community = _a.community, createdAt = _a.createdAt, comments = _a.comments, isComment = _a.isComment;
    return (React.createElement("article", { className: "flex w-full flex-col rounded-xl bg-dark-2 p-7" },
        React.createElement("div", { className: "flex items-start justify-between" },
            React.createElement("div", { className: "flex w-full flex-1 flex-row gap-4" },
                React.createElement("div", { className: "flex flex-col items-center" },
                    React.createElement(link_1["default"], { href: "/profile/" + author.id, className: "relative h-11 w-11" },
                        React.createElement(image_1["default"], { src: author.image, alt: "Profile Image", fill: true, className: "cursor-pointer rounded-full" })),
                    React.createElement("div", { className: "thread-card_bar" })),
                React.createElement("div", { className: "flex w-full flex-col" },
                    React.createElement(link_1["default"], { href: "/profile/" + author.id, className: "w-fit" },
                        React.createElement("h4", { className: "cursor-pointer text-base-semibold text-light-1" }, author.name)),
                    React.createElement("p", { className: "mt-2 text-small-regular text-light-2" }, content),
                    React.createElement("div", { className: "mt-5 flex flex-col gap-3" },
                        React.createElement("div", { className: "flex gap-3.5" },
                            React.createElement(image_1["default"], { src: "/assets/heart-gray.svg", alt: "heart", width: 24, height: 24, className: "cursor-pointer object-contain" }),
                            React.createElement(link_1["default"], { href: "/thread/" + id },
                                React.createElement(image_1["default"], { src: "/assets/reply.svg", alt: "reply", width: 24, height: 24, className: "cursor-pointer object-contain" })),
                            React.createElement(image_1["default"], { src: "/assets/repost.svg", alt: "repost", width: 24, height: 24, className: "cursor-pointer object-contain" }),
                            React.createElement(image_1["default"], { src: "/assets/share.svg", alt: "share", width: 24, height: 24, className: "cursor-pointer object-contain" })),
                        isComment && comments.length > 0 && (React.createElement(link_1["default"], { href: "/thread/" + id },
                            React.createElement("p", { className: "mt-1 text-subtle-medium text-gray-1" },
                                comments.length,
                                " replies")))))))));
};
exports["default"] = ThreadCard;
