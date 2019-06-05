import Square from "../ChessData/Square"
import PiecesBoard from "../PiecesBoard/PiecesBoard"
import WhitePawn from "./WhitePawn"
import Side from "../ChessData/Side"
import Piece from "./!data-classes/Piece"

function squares(data1, data2, data3) {
    var [r1, c1] = data1
    var [r2, c2] = data2
    var [first, second, third] = [Square.get(r1, c1), Square.get(r2, c2), null]

    if (data3 != null) {
        var [r3, c3] = data3
        third = Square.get(r3, c3)
    }

    return [first, second, third]
}

function boardWith(data1, data2, data3) {
    var piecesPosition = new PiecesBoard()
    
    var [s1, p1] = data1
    piecesPosition.set(s1, p1)

    if (data2 != null) {
        var [s2, p2] = data2
        piecesPosition.set(s2, p2)
    }

    if (data3 != null) {
        var [s3, p3] = data3
        piecesPosition.set(s3, p3)
    }

    return piecesPosition
}

function checkMove(from, to, piecesPosition) {
    var result = pieceType.checkMove(from, to, piecesPosition)
    if (result == "") {
        return true;
    }

    return false
}

var pieceType = WhitePawn.get()
var movingPiece = new Piece(pieceType, Side.white)

test("pawnStart1", () => {
    var [from, to] = squares([1, 0], [2, 0])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(true)
})

test("pawnStart2", () => {
    var [from, to] = squares([1, 0], [3, 0])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(true)
})

test("pawnStart3", () => {
    var [from, to] = squares([1, 0], [4, 0])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(false)
})

test("pawn1", () => {
    var [from, to] = squares([2, 0], [3, 0])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(true)
})

test("pawn2", () => {
    var [from, to] = squares([2, 0], [4, 0])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(false)
})

// pawn horizontal
// pawn reverse

test("pawn1C", () => {
    var [from, to] = squares([2, 1], [3, 0])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(false)
})

// pawn1C2

test("pawnStart2horizontal", () => {
    var [from, to] = squares([1, 0], [1, 2])
    var piecesPosition = boardWith([from, movingPiece])

    var result = checkMove(from, to, piecesPosition)

    expect(result).toBe(false)
})