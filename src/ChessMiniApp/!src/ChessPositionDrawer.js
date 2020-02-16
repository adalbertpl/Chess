import Range from "AmUtils/Range"
import Square from "../../PiecesBoard/Square"
import PieceSymbol from "../../ChessPieces/PieceSymbol"

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