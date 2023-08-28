"use server";
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
exports.getActivity = exports.fetchUsers = exports.fetchUserPosts = exports.updateUser = exports.fetchUser = void 0;
var cache_1 = require("next/cache");
var user_model_1 = require("../models/user.model");
var thread_model_1 = require("../models/thread.model");
var mongoose_1 = require("../mongoose");
function fetchUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    mongoose_1.connectToDB();
                    return [4 /*yield*/, user_model_1["default"].findOne({ id: userId })
                        //.populate({});
                    ];
                case 1: return [2 /*return*/, _a.sent()
                    //.populate({});
                ];
                case 2:
                    error_1 = _a.sent();
                    throw new Error("Failed to fetch user: " + error_1.message);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchUser = fetchUser;
function updateUser(_a) {
    var userId = _a.userId, bio = _a.bio, name = _a.name, path = _a.path, username = _a.username, image = _a.image;
    return __awaiter(this, void 0, Promise, function () {
        var error_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    mongoose_1.connectToDB();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, user_model_1["default"].findOneAndUpdate({ id: userId }, {
                            username: username.toLowerCase(),
                            name: name,
                            bio: bio,
                            image: image,
                            onboarded: true
                        }, {
                            upsert: true
                        })];
                case 2:
                    _b.sent();
                    if (path === '/profile/edit') {
                        cache_1.revalidatePath(path);
                    }
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    throw new Error("Failed to create/update user: " + error_2.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
function fetchUserPosts(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var threads, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    mongoose_1.connectToDB();
                    return [4 /*yield*/, user_model_1["default"].findOne({ id: userId })
                            .populate({
                            path: 'threads',
                            model: thread_model_1["default"],
                            populate: {
                                path: 'children',
                                model: thread_model_1["default"],
                                populate: {
                                    path: 'author',
                                    model: user_model_1["default"],
                                    select: 'name image id'
                                }
                            }
                        })];
                case 1:
                    threads = _a.sent();
                    return [2 /*return*/, threads];
                case 2:
                    error_3 = _a.sent();
                    throw new Error("Failed to fetch user posts: " + error_3.message);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.fetchUserPosts = fetchUserPosts;
function fetchUsers(_a) {
    var userId = _a.userId, _b = _a.searchString, searchString = _b === void 0 ? "" : _b, _c = _a.pageNumber, pageNumber = _c === void 0 ? 1 : _c, _d = _a.pageSize, pageSize = _d === void 0 ? 20 : _d, _e = _a.sortBy, sortBy = _e === void 0 ? "desc" : _e;
    return __awaiter(this, void 0, void 0, function () {
        var skipAmount, regex, query, sortOptions, usersQuery, totalUsersCount, users, isNext, error_4;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    _f.trys.push([0, 3, , 4]);
                    mongoose_1.connectToDB();
                    skipAmount = (pageNumber - 1) * pageSize;
                    regex = new RegExp(searchString, "i");
                    query = {
                        id: { $ne: userId }
                    };
                    if (searchString.trim() !== '') {
                        query.$or = [
                            { username: { $regex: regex } },
                            { name: { $regex: regex } }
                        ];
                    }
                    sortOptions = { createdAt: sortBy };
                    usersQuery = user_model_1["default"].findOne(query)
                        .sort(sortOptions)
                        .skip(skipAmount)
                        .limit(pageSize);
                    return [4 /*yield*/, user_model_1["default"].countDocuments(query)];
                case 1:
                    totalUsersCount = _f.sent();
                    return [4 /*yield*/, usersQuery.exec()];
                case 2:
                    users = _f.sent();
                    isNext = totalUsersCount > skipAmount + users.length;
                    return [2 /*return*/, { users: users, isNext: isNext }];
                case 3:
                    error_4 = _f.sent();
                    throw new Error("Failed to fetch users: " + error_4.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.fetchUsers = fetchUsers;
function getActivity(userId) {
    return __awaiter(this, void 0, void 0, function () {
        var userThreads, childThreadIds, replies, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    mongoose_1.connectToDB();
                    return [4 /*yield*/, thread_model_1["default"].find({ author: userId })];
                case 1:
                    userThreads = _a.sent();
                    childThreadIds = userThreads.reduce(function (acc, userThread) {
                        return acc.concat(userThread.children);
                    }, []);
                    return [4 /*yield*/, thread_model_1["default"].find({
                            _id: { $in: childThreadIds },
                            author: { $ne: userId }
                        }).populate({
                            path: "author",
                            model: user_model_1["default"],
                            select: "name image _id"
                        })];
                case 2:
                    replies = _a.sent();
                    return [2 /*return*/, replies];
                case 3:
                    error_5 = _a.sent();
                    throw new Error("Failed to fetch activity: " + error_5.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.getActivity = getActivity;
