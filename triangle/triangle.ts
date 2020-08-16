export enum TriangleKinds {equilateral = "equilateral", isosceles = "isosceles", scalene = "scalene"};
type TriangleSides = [number, number, number];

const Equal_Side_Kinds = [TriangleKinds.scalene, TriangleKinds.isosceles, TriangleKinds.isosceles, TriangleKinds.equilateral];

export default class Triangle {

    sides: TriangleSides;

    constructor(...sides: TriangleSides) {
        // The tests expect Triangle to throw on invalid dimensions when kind() is called but
        // I can't think of any reason we'd allow for the construction of a new Triangle with
        // invalid dimensions. It seems like this would force all future methods to perform a
        // test on the sides before operation. 
        let isValid = Triangle.testTriangle(...sides);
        if (!isValid) {
            throw new Error("Invalid triangle dimensions");
        }
        this.sides = sides;
    }

    static testTriangle(...sides: TriangleSides): boolean {
        let [a, b, c] = sides;
        let hasThreeSides = sides.length === 3;
        let allSidesHaveLength = sides.every(side => side > 0);
        let hasTriangleEquality = (
            (a + b >= c) &&
            (c + a >= b) &&
            (b + c >= a) 
        )
        return hasThreeSides && allSidesHaveLength && hasTriangleEquality
    }

    kind(): string {
        let [a, b, c] = this.sides;
        let equalSides = (a === b ? 1 : 0) + (b === c ? 1 : 0) + (c === a ? 1 : 0);
        return Equal_Side_Kinds[equalSides];
    }
}