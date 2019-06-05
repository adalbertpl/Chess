import MoveParser from "./MoveParser"
import Move from "./Move"
import Square from "./Square"

function prepareMove(sr, sc, er, ec) {
    return Move.get(Square.get(sr, sc), Square.get(er, ec));
}

test("works for correct data", () => {
    var result = MoveParser.parse("a2-g8")
    expect(result).toEqual(prepareMove(1, 0, 7, 6))
})