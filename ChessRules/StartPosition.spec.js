import StartPosition from "./StartPosition"

import Square from "../PiecesBoard/!data-classes/Square"
import Piece from "../ChessPieces/!data-classes/Piece"
import PieceType from "../ChessPieces/!data-classes/PieceType"
import Side from "../ChessPieces/!data-classes/Side"

test("position should contain pawns", () => {
    // Arrange
    var position = StartPosition.get()
    // Act
    var result = position.piecesPosition.get(Square.get("a2"))
    // Assert
    expect(result).toEqual(new Piece(PieceType.pawn, Side.white))
})

test("position should contain other pieces", () => {
    // Arrange
    var position = StartPosition.get()
    // Act
    var result = position.piecesPosition.get(Square.get("a1"))
    // Assert
    expect(result).toEqual(new Piece(PieceType.rook, Side.white))
})

test("other squares should be empty", () => {
    // Arrange
    var position = StartPosition.get()
    // Act
    var result = position.piecesPosition.get(Square.get("a3"))
    // Assert
    expect(result == null).toBe(true)
})