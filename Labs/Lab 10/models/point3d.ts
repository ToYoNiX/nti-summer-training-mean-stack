import Point from "./point";

export default class Point3d implements Point {
    points = [0, 0, 0];
    constructor(x: number, y: number, z: number) {
        this.points[0] = x;
        this.points[1] = y;
        this.points[2] = z;
    }

    distance(): number {
        return Math.sqrt(this.points[0] ** 2 + this.points[1] ** 2 + this.points[2] ** 2);
    }
}