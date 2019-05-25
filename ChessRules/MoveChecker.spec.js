import Move from "../ChessData/Move"
import MoveChecker from "./MoveChecker"
import StartPosition from "./StartPosition"
import Square from "../ChessData/Square"

test("Move should be valid", () => {
    // arrange
    var move = Move.get(Square.get("a2"), Square.get("a3"))
    var position = StartPosition.get()
    // act
    MoveChecker.checkMove(position, move)
    // assert that should not throw
})
