"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_hook_form_1 = require("react-hook-form");
var button_1 = require("@/components/ui/button");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var zod_1 = require("@hookform/resolvers/zod");
var user_1 = require("@/lib/validations/user");
var image_1 = require("next/image");
var AccountProfile = function (_a) {
    var user = _a.user, btnTitle = _a.btnTitle;
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(user_1.userValidation),
        defaultValues: {
            profile_photo: '',
            name: '',
            username: '',
            bio: ''
        }
    });
    var handleImage = function (e, fieldChange) {
        e.preventDefault();
    };
    function onSubmit(values) {
        console.log(values);
    }
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col justify-start gap-10" },
            React.createElement(form_1.FormField, { control: form.control, name: "profile_photo", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "flex items-center gap-4" },
                        React.createElement(form_1.FormLabel, { className: "account-form_image-label" }, field.value ? (React.createElement(image_1["default"], { src: field.value, alt: "profile_photo", width: 96, height: 96, priority: true, className: "rounded-full object-contain" })) : (React.createElement(image_1["default"], { src: "/assets/profile.svg", alt: "profile_photo", width: 24, height: 24, className: "object-contain" }))),
                        React.createElement(form_1.FormControl, { className: "flex-1 text-base-semibold text-gray-200" },
                            React.createElement(input_1.Input, { type: "file", accept: "image/*", placeholder: "Upload a photo", className: "account-form-input", onChange: function (e) { return handleImage(e, field.onChange); } })),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(button_1.Button, { type: "submit" }, "Submit"))));
};
exports["default"] = AccountProfile;
