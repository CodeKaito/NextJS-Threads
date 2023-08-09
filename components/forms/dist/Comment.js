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
var react_hook_form_1 = require("react-hook-form");
var zod_1 = require("@hookform/resolvers/zod");
var navigation_1 = require("next/navigation");
var form_1 = require("@/components/ui/form");
var button_1 = require("@/components/ui/button");
var input_1 = require("@/components/ui/input");
var thread_1 = require("@/lib/validations/thread");
var image_1 = require("next/image");
var thread_actions_1 = require("@/lib/actions/thread.actions");
var Comment = function (_a) {
    var threadId = _a.threadId, currentUserImg = _a.currentUserImg, currentUserId = _a.currentUserId;
    var router = navigation_1.useRouter();
    var pathname = navigation_1.usePathname();
    var form = react_hook_form_1.useForm({
        resolver: zod_1.zodResolver(thread_1.CommentValidation),
        defaultValues: {
            thread: ''
        }
    });
    var onSubmit = function (values) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, thread_actions_1.addCommentToThread(threadId, values.thread, JSON.parse(currentUserId), pathname)];
                case 1:
                    _a.sent();
                    form.reset();
                    return [2 /*return*/];
            }
        });
    }); };
    return (React.createElement(form_1.Form, __assign({}, form),
        React.createElement("form", { onSubmit: form.handleSubmit(onSubmit), className: "comment-form" },
            React.createElement(form_1.FormField, { control: form.control, name: "thread", render: function (_a) {
                    var field = _a.field;
                    return (React.createElement(form_1.FormItem, { className: "flex items-center gap-3 w-full" },
                        React.createElement(form_1.FormLabel, null,
                            React.createElement(image_1["default"], { src: currentUserImg, alt: "Profile Image", width: 48, height: 48, className: "rounded-full object-cover" })),
                        React.createElement(form_1.FormControl, { className: "border-none bg-transparent" },
                            React.createElement(input_1.Input, __assign({ type: "text", className: "no-focus text-light-1 outline-none", placeholder: "Write a comment.." }, field)))));
                } }),
            React.createElement(button_1.Button, { type: 'submit', className: 'comment-form_btn' }, "Reply"))));
};
exports["default"] = Comment;
