"use strict";
exports.__esModule = true;
exports.CommentValidation = exports.ThreadValidation = void 0;
var z = require("zod");
exports.ThreadValidation = z.object({
    thread: z.string().nonempty().min(3, { message: 'Minim 3 characters required'
    }),
    accountId: z.string()
});
exports.CommentValidation = z.object({
    thread: z.string().nonempty().min(3, { message: 'Minim 3 characters required'
    })
});
