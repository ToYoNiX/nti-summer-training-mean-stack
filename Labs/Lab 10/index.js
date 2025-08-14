"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Types
var s;
var n;
// Union types 
var bigN;
// Function with typed arguments and return type.
function sum(n1, n2) {
    return n1 + n2;
}
console.log(sum(1, 2));
// Enum in typescript
var Day;
(function (Day) {
    Day[Day["Sat"] = 0] = "Sat";
    Day[Day["Sun"] = 1] = "Sun";
    Day[Day["Mon"] = 2] = "Mon";
    Day[Day["Tue"] = 3] = "Tue";
    Day[Day["Wed"] = 4] = "Wed";
    Day[Day["Thu"] = 5] = "Thu";
    Day[Day["Fri"] = 6] = "Fri";
})(Day || (Day = {}));
console.log(Day.Fri);
// Generics -> Templates in Cpp
function logType(variable) {
    console.log(typeof (variable));
}
logType("str");
// Decorators -> Still studying
var point2d_1 = require("./models/point2d");
var point3d_1 = require("./models/point3d");
var p1 = new point2d_1.default(5, 5);
var p2 = new point3d_1.default(10, 10, 10);
console.log("p1 distance:", p1.distance());
console.log("p2 distance:", p2.distance());
