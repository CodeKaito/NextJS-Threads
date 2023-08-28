"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var button_1 = require("../ui/button");
function UserCard(_a) {
    var id = _a.id, name = _a.name, username = _a.username, imgUrl = _a.imgUrl, personType = _a.personType;
    var router = navigation_1.useRouter();
    var isCommunity = personType === "Community";
    return (React.createElement("article", { className: 'user-card' },
        React.createElement("div", { className: 'user-card_avatar' },
            React.createElement("div", { className: 'relative h-12 w-12' },
                React.createElement(image_1["default"], { src: imgUrl, alt: 'user_logo', fill: true, className: 'rounded-full object-cover' })),
            React.createElement("div", { className: 'flex-1 text-ellipsis' },
                React.createElement("h4", { className: 'text-base-semibold text-light-1' }, name),
                React.createElement("p", { className: 'text-small-medium text-gray-1' },
                    "@",
                    username))),
        React.createElement(button_1.Button, { className: 'user-card_btn', onClick: function () {
                if (isCommunity) {
                    router.push("/communities/" + id);
                }
                else {
                    router.push("/profile/" + id);
                }
            } }, "View")));
}
exports["default"] = UserCard;
