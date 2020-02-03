export default class Square {

    constructor(r, c) {
        this.row = r
        this.column = c
    }

    static get(r, c) {
        return new Square(r, c)
    }

    key() {
        return "[" + this.row + " " + this.column + "]"
    }

    prim() {
        return [this.row, this.column]
    }
}