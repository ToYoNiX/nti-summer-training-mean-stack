"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Point3d = /** @class */ (function () {
    function Point3d(x, y, z) {
        this.points = [0, 0, 0];
        this.points[0] = x;
        this.points[1] = y;
        this.points[2] = z;
    }
    Point3d.prototype.distance = function () {
        return Math.sqrt(Math.pow(this.points[0], 2) + Math.pow(this.points[1], 2) + Math.pow(this.points[2], 2));
    };
    return Point3d;
}());
exports.default = Point3d;
