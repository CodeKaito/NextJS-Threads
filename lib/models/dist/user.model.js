"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1["default"].Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    image: String,
    bio: String,
    threads: [
        {
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: 'Thread'
        }
    ],
    onboarded: { type: Boolean,
        "default": false
    },
    communities: [
        {
            type: mongoose_1["default"].Schema.Types.ObjectId,
            ref: 'Community'
        },
    ]
});
var User = mongoose_1["default"].models.User || mongoose_1["default"].model('User', userSchema);
exports["default"] = User;
