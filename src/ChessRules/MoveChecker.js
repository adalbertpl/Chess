import BoardLimits from "./!src/BoardLimits"

export default class MoveChecker {
    static checkMove(state, move) {
        var from = move.from
        var to = move.to
        var piecesPosition = state.piecesPosition 

        BoardLimits.validate(from)
        BoardLimits.validate(to)

        var piece = piecesPosition.get(from)
        if (piece == null) {
            throw new Error("empty square")
        }

        if (piece.side != state.currentSide) {
            throw new Error("bad side")
        }

        var pieceType = piece.pieceType
        var msg = pieceType.checkMove(from, to, piecesPosition)
        if (msg != "") {
            throw new Error(msg)
        }
    }
}