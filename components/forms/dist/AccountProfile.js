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
    function onSubmit(values) {
        console.log(values);
    }
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "space-y-8" },
            React.createElement(form_1.FormField, { control: form.control, name: "username", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, null,
                        React.createElement(form_1.FormLabel, null, "Username"),
                        React.createElement(form_1.FormControl, null,
                            React.createElement(input_1.Input, __assign({ placeholder: "shadcn" }, field))),
                        React.createElement(form_1.FormDescription, null, "This is your public display name."),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(button_1.Button, { type: "submit" }, "Submit"))));
};
exports["default"] = AccountProfile;
