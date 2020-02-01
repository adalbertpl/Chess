import Move from "./Move"
import SquareParser from "./SquareParser"

export default class MoveParser {
    static parse(str) {
        if (str.length != 5) {
            throw new Error("Bad length")
        }

        if (str.charAt(2) != "-") {
            throw new Error("Bad format")
        } 

        var start = SquareParser.parse(str)
        var end = SquareParser.parse(str.substring(3, 5))

        var move = Move.get(start, end)
        return move
    }
}