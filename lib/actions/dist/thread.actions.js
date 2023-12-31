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
exports.addCommentToThread = exports.fetchThreadbyId = exports.fetchPosts = exports.createThread = void 0;
var cache_1 = require("next/cache");
var thread_model_1 = require("../models/thread.model");
var user_model_1 = require("../models/user.model");
var mongoose_1 = require("../mongoose");
function createThread(_a) {
    var text = _a.text, author = _a.author, communityId = _a.communityId, path = _a.path;
    return __awaiter(this, void 0, void 0, function () {
        var createThread_1, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    mongoose_1.connectToDB();
                    return [4 /*yield*/, thread_model_1["default"].create({
                            text: text,
                            author: author,
                            community: null
                        })];
                case 1:
                    createThread_1 = _b.sent();
                    // update user model
                    return [4 /*yield*/, user_model_1["default"].findByIdAndUpdate(author, {
                            $push: { threads: createThread_1._id }
                        })];
                case 2:
                    // update user model
                    _b.sent();
                    cache_1.revalidatePath(path);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    throw new Error("Error creating thread: " + error_1.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.createThread = createThread;
;
function fetchPosts(pageNumber, pageSize) {
    if (pageNumber === void 0) { pageNumber = 1; }
    if (pageSize === void 0) { pageSize = 20; }
    return __awaiter(this, void 0, void 0, function () {
        var skipAmount, postsQuery, totalPostsCount, posts, isNext;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mongoose_1.connectToDB();
                    skipAmount = (pageNumber - 1) * pageSize;
                    postsQuery = thread_model_1["default"].find({ parentId: { $in: [null, undefined] } })
                        .sort({ createdAt: "desc" })
                        .skip(skipAmount)
                        .limit(pageSize)
                        .populate({
                        path: "author",
                        model: user_model_1["default"]
                    })
                        .populate({
                        path: "children",
                        populate: {
                            path: "author",
                            model: user_model_1["default"],
                            select: "_id name parentId image"
                        }
                    });
                    return [4 /*yield*/, thread_model_1["default"].countDocuments({
                            parentId: { $in: [null, undefined] }
                        })];
                case 1:
                    totalPostsCount = _a.sent();
                    return [4 /*yield*/, postsQuery.exec()];
                case 2:
                    posts = _a.sent();
                    isNext = totalPostsCount > skipAmount + posts.length;
                    return [2 /*return*/, { posts: posts, isNext: isNext }];
            }
        });
    });
}
exports.fetchPosts = fetchPosts;
function fetchThreadbyId(id) {
    return __awaiter(this, void 0, void 0, function () {
        var thread, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mongoose_1.connectToDB();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, thread_model_1["default"].findById(id)
                            .populate({
                            path: 'author',
                            model: user_model_1["default"],
                            select: '_id id name image'
                        })
                            .populate({
                            path: 'children',
                            populate: [
                                {
                                    path: 'author',
                                    model: user_model_1["default"],
                                    select: '_id id name parentId image'
                                },
                                {
                                    path: 'children',
                                    model: thread_model_1["default"],
                                    populate: {
                                        path: 'author',
                                        model: user_model_1["default"],
                                        select: '_id id name parentId image'
                                    }
                                }
                            ]
                        }).exec()];
                case 2:
                    thread = _a.sent();
                    return [2 /*return*/, thread];
                case 3:
                    error_2 = _a.sent();
                    throw new Error("Error fetching thread: " + error_2.message);
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.fetchThreadbyId = fetchThreadbyId;
function addCommentToThread(threadId, commentText, userId, path) {
    return __awaiter(this, void 0, void 0, function () {
        var originalThread, commentThread, savedCommentThread, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mongoose_1.connectToDB();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, thread_model_1["default"].findById(threadId)];
                case 2:
                    originalThread = _a.sent();
                    if (!originalThread) {
                        throw new Error("Thread not found");
                    }
                    commentThread = new thread_model_1["default"]({
                        text: commentText,
                        author: userId,
                        parentId: threadId
                    });
                    return [4 /*yield*/, commentThread.save()];
                case 3:
                    savedCommentThread = _a.sent();
                    originalThread.children.push(savedCommentThread._id);
                    return [4 /*yield*/, originalThread.save()];
                case 4:
                    _a.sent();
                    cache_1.revalidatePath(path);
                    return [3 /*break*/, 6];
                case 5:
                    error_3 = _a.sent();
                    throw new Error("Error adding comment to thread: " + error_3.message);
                case 6: return [2 /*return*/];
            }
        });
    });
}
exports.addCommentToThread = addCommentToThread;
