import BoardLimits from "./!src/BoardLimits"

export default class ClassicMoveChecker {
    static checkMove(gamePosition, move) {
        var piecesPosition = gamePosition.piecesPosition 

        this._checkSquaresAreWithinBoard(move)
        var piece = this._checkPieceIsOnStartSquare(piecesPosition, move)
        this._checkCorrectSide(gamePosition, piece)
        this._checkPieceTypeMove(piece.pieceType, piecesPosition, move)
    }

    static _checkSquaresAreWithinBoard(move) {
        BoardLimits.validate(move.from)
        BoardLimits.validate(move.to)
    }

    static _checkPieceIsOnStartSquare(piecesPosition, move) {
        var piece = piecesPosition.get(from)
        if (piece == null) {
            throw new Error("empty square")
        }
    }

    static _checkCorrectSide(gamePosition, piece) {
        if (piece.side != gamePosition.currentSide) {
            throw new Error("bad side")
        }
    }

    static _checkPieceTypeMove(pieceType, piecesPosition, move) {
        var msg = pieceType.checkMove(move.from, move.to, piecesPosition)
        if (msg != "") {
            throw new Error(msg)
        }
    }
}