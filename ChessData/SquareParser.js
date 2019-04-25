import Square from "./Square"

export default class SquareParser {
    static parse(str) {
        var column = this._columnLetterToNumber(str.charAt(0))
        var row = this._rowDisplayNumberToNumber(str.charAt(1))
        return Square.get(row, column)
    }

    static _rowDisplayNumberToNumber(displayNumber) {
        var number = displayNumber.charCodeAt(0) - 49//AsciiCodes.one
        if (number < 0 || number >= 8) {
            throw new Error("Bad row")
        }
        return number
    }

    static _columnLetterToNumber(letter) {
        var number = letter.charCodeAt(0) - 97//AsciiCodes.smallA
        if (number < 0 || number >= 8) {
            throw new Error("Bad column")
        }
        return number
    }
}