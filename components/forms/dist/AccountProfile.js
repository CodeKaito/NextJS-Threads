"use client";
"use strict";
exports.__esModule = true;
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var user_1 = require("@/lib/validations/user");
var AccountProfile = function (_a) {
    var user = _a.user, btnTitle = _a.btnTitle;
    var Form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(user_1.userValidation),
        defaultValues: {
            profile_photo: '',
            name: '',
            username: '',
            bio: ''
        }
    });
    return (React.createElement(Form, null));
};
exports["default"] = AccountProfile;
