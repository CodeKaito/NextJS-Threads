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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var image_1 = require("next/image");
var react_hook_form_1 = require("react-hook-form");
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var zod_1 = require("@hookform/resolvers/zod");
var form_1 = require("@/components/ui/form");
var input_1 = require("@/components/ui/input");
var button_1 = require("@/components/ui/button");
var textarea_1 = require("@/components/ui/textarea");
var uploadthing_1 = require("@/lib/uploadthing");
var utils_1 = require("@/lib/utils");
var user_1 = require("@/lib/validations/user");
var user_actions_1 = require("@/lib/actions/user.actions");
var AccountProfile = function (_a) {
    var user = _a.user, btnTitle = _a.btnTitle;
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var startUpload = uploadthing_1.useUploadThing("media").startUpload;
    var _b = react_1.useState([]), files = _b[0], setFiles = _b[1];
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(user_1.UserValidation),
        defaultValues: {
            profile_photo: (user === null || user === void 0 ? void 0 : user.image) ? user.image : "",
            name: (user === null || user === void 0 ? void 0 : user.name) ? user.name : "",
            username: (user === null || user === void 0 ? void 0 : user.username) ? user.username : "",
            bio: (user === null || user === void 0 ? void 0 : user.bio) ? user.bio : ""
        }
    });
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        var blob, hasImageChanged, imgRes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    blob = values.profile_photo;
                    hasImageChanged = utils_1.isBase64Image(blob);
                    if (!hasImageChanged) return [3 /*break*/, 2];
                    return [4 /*yield*/, startUpload(files)];
                case 1:
                    imgRes = _a.sent();
                    if (imgRes && imgRes[0].fileUrl) {
                        values.profile_photo = imgRes[0].fileUrl;
                    }
                    _a.label = 2;
                case 2: return [4 /*yield*/, user_actions_1.updateUser({
                        name: values.name,
                        path: pathname,
                        username: values.username,
                        userId: user.id,
                        bio: values.bio,
                        image: values.profile_photo
                    })];
                case 3:
                    _a.sent();
                    if (pathname === "/profile/edit") {
                        router.back();
                    }
                    else {
                        router.push("/");
                    }
                    return [2 /*return*/];
            }
        });
    }); };
    var handleImage = function (e, fieldChange) {
        e.preventDefault();
        var fileReader = new FileReader();
        if (e.target.files && e.target.files.length > 0) {
            var file = e.target.files[0];
            setFiles(Array.from(e.target.files));
            if (!file.type.includes("image"))
                return;
            fileReader.onload = function (event) { return __awaiter(void 0, void 0, void 0, function () {
                var imageDataUrl;
                var _a, _b;
                return __generator(this, function (_c) {
                    imageDataUrl = ((_b = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.toString()) || "";
                    fieldChange(imageDataUrl);
                    return [2 /*return*/];
                });
            }); };
            fileReader.readAsDataURL(file);
        }
    };
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "flex flex-col justify-start gap-10" },
            React.createElement(form_1.FormField, { control: form.control, name: "profile_photo", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "flex items-center gap-4" },
                        React.createElement(form_1.FormLabel, { className: "account-form_image-label" }, field.value ? (React.createElement(image_1["default"], { src: field.value, alt: "profile_photo", width: 96, height: 96, priority: true, className: "rounded-full object-contain" })) : (React.createElement(image_1["default"], { src: "/assets/profile.svg", alt: "profile_photo", width: 24, height: 24, className: "object-contain" }))),
                        React.createElement(form_1.FormControl, { className: "flex-1 text-base-semibold text-gray-200" },
                            React.createElement(input_1.Input, { type: "file", accept: "image/*", placeholder: "Upload a photo", className: "account-form_input", onChange: function (e) { return handleImage(e, field.onChange); } })),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(form_1.FormField, { control: form.control, name: "name", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "flex flex-col gap-3 w-full" },
                        React.createElement(form_1.FormLabel, { className: "text-base-semibold text-light-2" }, "Name"),
                        React.createElement(form_1.FormControl, null,
                            React.createElement(input_1.Input, __assign({ type: "text", className: "account-form_input no-focus" }, field, { placeholder: "Insert your name" }))),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(form_1.FormField, { control: form.control, name: "username", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "flex flex-col gap-3 w-full" },
                        React.createElement(form_1.FormLabel, { className: "text-base-semibold text-light-2" }, "Username"),
                        React.createElement(form_1.FormControl, null,
                            React.createElement(input_1.Input, __assign({ type: "text", className: "account-form_input no-focus" }, field, { placeholder: "Insert your username" }))),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(form_1.FormField, { control: form.control, name: "bio", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "flex flex-col gap-3 w-full" },
                        React.createElement(form_1.FormLabel, { className: "text-base-semibold text-light-2" }, "Bio"),
                        React.createElement(form_1.FormControl, null,
                            React.createElement(textarea_1.Textarea, __assign({ rows: 10, className: "account-form_input no-focus" }, field, { placeholder: "Write something about yourself" }))),
                        React.createElement(form_1.FormMessage, null)));
                } }),
            React.createElement(button_1.Button, { className: "bg-primary-500", type: "submit" }, "Submit"))));
};
exports["default"] = AccountProfile;
