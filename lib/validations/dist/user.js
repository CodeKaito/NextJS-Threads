"use strict";
exports.__esModule = true;
exports.UserValidation = void 0;
var z = require("zod");
exports.UserValidation = z.object({
    profile_photo: z.string().url().nonempty(),
    name: z.string().min(3).max(30),
    username: z.string().min(3).max(30),
    bio: z.string().min(3).max(1000)
});
