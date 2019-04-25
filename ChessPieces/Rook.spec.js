import Square from "../PiecesBoard/!data-classes/Square"
import PiecesBoard from "../PiecesBoard/PiecesBoard"
import Rook from "./Rook"
import Side from "./!data-classes/Side"
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

var pieceType = Rook.get()
var movingPiece = new Piece(pieceType, Side.white)

test("rookR1", () => {
    var [from, to] = squares([4, 4], [5, 4])
    var piecesPosition = boardWith([from, movingPiece])

    var result = pieceType.checkMove(from, to, piecesPosition)

    expect(result).toBe(true)
})

test("rookR2", () => {
    var [from, to] = squares([4, 4], [6, 4])
    var piecesPosition = boardWith([from, movingPiece])

    var result = pieceType.checkMove(from, to, piecesPosition)

    expect(result).toBe(true)
})

test("rookD1", () => {
    var [from, to] = squares([4, 4], [5, 5])
    var piecesPosition = boardWith([from, movingPiece])

    var result = pieceType.checkMove(from, to, piecesPosition)

    expect(result).toBe(false)
})

test("rookC1", () => {
    var [from, to] = squares([4, 4], [5, 4])
    var piecesPosition = boardWith([from, movingPiece])

    var result = pieceType.checkMove(from, to, piecesPosition)

    expect(result).toBe(true)
})