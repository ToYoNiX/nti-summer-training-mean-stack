import Point from "./point";

export default class Point2d implements Point {
    points = [0, 0];
    constructor(x: number, y: number) {
        this.points[0] = x;
        this.points[1] = y;
    }

    distance(): number {
        return Math.sqrt(this.points[0] ** 2 + this.points[1] ** 2);
    }
}