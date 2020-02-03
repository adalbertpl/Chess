import Range from "AmUtils/Range"
import PieceType from "../../ChessPieces/!data-classes/PieceType"
import Side from "../../ChessData/Side"
import Square from "../../PiecesBoard/Square"

export default class ChessPositionDrawer {
    static draw(piecesPosition) {
        var result = ""
        for (var i of Range.get(0, 8)) {
            for (var col of Range.get(0, 8)) {
                var row = 7 - i

                var piece = piecesPosition.get(Square.get(row, col))
                if (piece == null) {
                    result += "."
                    
                } else {
                    var pieceSymbol = PieceSymbol.get(piece)
                    result += pieceSymbol

                }
            }
            result += "\n"
        }

        return result
    }
}

class PieceSymbol {
    static _getPieceTypeSymbol(pieceType) {
        if (pieceType == PieceType.whitePawn) return "p"
        if (pieceType == PieceType.blackPawn) return "p"
        if (pieceType == PieceType.rook) return "r"
        if (pieceType == PieceType.knight) return "n"
        if (pieceType == PieceType.bishop) return "b"
        if (pieceType == PieceType.queen) return "q"
        if (pieceType == PieceType.king) return "k"
        throw new Error("Programming error: No such option")
    }

    static get(piece) {
        var symbol = this._getPieceTypeSymbol(piece.pieceType)

        if (piece.side == Side.white) {
            return symbol.toUpperCase()
        } else {
            return symbol
        }
    }
}