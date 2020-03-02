import SquareParser from "./SquareParser"

export default class Square {

    constructor(r, c) {
        this.row = r
        this.column = c
    }

    static get(rowOrSquareString, column) {
        if (typeof rowOrSquareString === 'string') {
            var squareString = rowOrSquareString
            return SquareParser.parse(squareString)
        }

        var row = rowOrSquareString
        return new Square(row, column)
    }

    key() {
        return "[" + this.row + " " + this.column + "]"
    }

    prim() {
        return [this.row, this.column]
    }

    toString() {
        return this.key();
    }
}