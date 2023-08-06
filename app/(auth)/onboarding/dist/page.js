"use strict";
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
var AccountProfile_1 = require("@/components/forms/AccountProfile");
var nextjs_1 = require("@clerk/nextjs");
function Page() {
    return __awaiter(this, void 0, void 0, function () {
        var user, userInfo, userData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, nextjs_1.currentUser()];
                case 1:
                    user = _a.sent();
                    userInfo = {};
                    userData = {
                        id: user === null || user === void 0 ? void 0 : user.id,
                        objectid: userInfo === null || userInfo === void 0 ? void 0 : userInfo.id,
                        username: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.username) || (user === null || user === void 0 ? void 0 : user.username),
                        name: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.name) || user.firstName || "",
                        bio: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.bio) || "",
                        image: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.image) || (user === null || user === void 0 ? void 0 : user.imageUrl)
                    };
                    return [2 /*return*/, (React.createElement("main", { className: "mx-auto flex max-w-3xl flex-col justify-start px-10 py-20" },
                            React.createElement("h1", { className: "head-text" }, "OnBoarding"),
                            React.createElement("p", { className: "mt-3 text-base-regular text-light-2" }, "Complete your profile now to use Threads"),
                            React.createElement("section", { className: "mt-9 bg-dark-2 p-10" },
                                React.createElement(AccountProfile_1["default"], { user: userData, btnTitle: "Continue" }))))];
            }
        });
    });
}
exports["default"] = Page;
