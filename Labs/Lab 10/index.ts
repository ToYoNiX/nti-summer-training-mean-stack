// Types
let s: string
let n: number

// Union types 
let bigN: (string|number)

// Function with typed arguments and return type.
function sum(n1: number, n2: number): number {
    return n1 + n2
}
console.log(sum(1, 2))

// Enum in typescript
enum Day {
    Sat, // Start -> 0
    Sun,
    Mon,
    Tue,
    Wed,
    Thu,
    Fri
}
console.log(Day.Fri)

// Generics -> Templates in Cpp
function logType <T> (variable:T) {
    console.log(typeof(variable))
}
logType("str")

// Decorators -> Still studying

import Point2d from "./models/point2d";
import Point3d from "./models/point3d";

var p1 = new Point2d(5, 5)
var p2 = new Point3d(10, 10, 10)
console.log("p1 distance:", p1.distance())
console.log("p2 distance:", p2.distance())