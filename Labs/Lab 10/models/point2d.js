"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        this.points = [0, 0];
        this.points[0] = x;
        this.points[1] = y;
    }
    Point2d.prototype.distance = function () {
        return Math.sqrt(Math.pow(this.points[0], 2) + Math.pow(this.points[1], 2));
    };
    return Point2d;
}());
exports.default = Point2d;
