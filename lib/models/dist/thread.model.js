"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var threadSchema = new mongoose_1["default"].Schema({
    text: { type: String, required: true },
    author: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    community: {
        type: mongoose_1["default"].Schema.Types.ObjectId,
        ref: 'Community',
        required: true
    },
    createdAt: {
        type: Date,
        "default": Date.now,
        required: true
    },
    parentId: {
        type: String
    },
    children: [{
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ]
});
var Thread = mongoose_1["default"].models.Thread || mongoose_1["default"].model("Thread", threadSchema);
exports["default"] = Thread;
