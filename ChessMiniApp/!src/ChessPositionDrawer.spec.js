import PieceType from "ChessPieces/!data-classes/PieceType"
import Piece from "ChessPieces/!data-classes/Piece"
import Side from "ChessData/Side"
import ChessPositionDrawer from "./ChessPositionDrawer"
import PiecesBoard from "PiecesBoard/PiecesBoard"
import Square from "ChessData/Square"

test("should work", () => {
    // Arrange
    var pos = new PiecesBoard()
    pos.set(Square.get("a8"), new Piece(PieceType.rook, Side.white))
    pos.set(Square.get("c8"), new Piece(PieceType.rook, Side.black))
    pos.set(Square.get("a7"), new Piece(PieceType.knight, Side.white))

    // Act
    var result = ChessPositionDrawer.draw(pos)
    
    // Assert
    result = result.split("\n")
    expect(result[0]).toEqual("R.r.....")
    expect(result[1]).toEqual("N.......")
})