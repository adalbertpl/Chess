import PieceType from "./!data-classes/PieceType"
import Side from "../ChessData/Side"

export default class PieceSymbol {
    static _getPieceTypeSymbol(pieceType) {
        if (pieceType == PieceType.pawn) return "p"
        if (pieceType == PieceType.rook) return "r"
        if (pieceType == PieceType.knight) return "n"
        if (pieceType == PieceType.bishop) return "b"
        if (pieceType == PieceType.queen) return "q"
        if (pieceType == PieceType.king) return "k"
        throw new Error("Programming error: No such option: " + JSON.stringify(pieceType));
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