"use strict";
// Resource: https://docs.uploadthing.com/nextjs/appdir#create-a-nextjs-api-route-using-the-filerouter
// Copy paste (be careful with imports)
var _a;
exports.__esModule = true;
exports.POST = exports.GET = void 0;
var next_1 = require("uploadthing/next");
var core_1 = require("./core");
// Export routes for Next App Router
exports.GET = (_a = next_1.createNextRouteHandler({
    router: core_1.ourFileRouter
}), _a.GET), exports.POST = _a.POST;
