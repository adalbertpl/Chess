import ChessSides from "../ChessPieces/ChessSides"
import PieceType from "../ChessPieces/!data-classes/PieceType"

export default class MoveMaker {
    static makeMove(gamePosition, move) {
        var from = move.from
        var to = move.to
        var piecesPosition = gamePosition.piecesPosition
        
        // winner check
        var capturedPiece = piecesPosition.get(to)
        var winner = this._isWinningMove(capturedPiece)
        
        // do move
        piecesPosition.movePiece(from, to)
        this._changeSide(gamePosition)

        return winner
    }

    static _isWinningMove(capturedPiece) {
        if (capturedPiece == null
            || (capturedPiece.pieceType != PieceType.king)) {
                return null
        }

        return capturedPiece.side.other()
    }

    static _changeSide(gamePosition) {
        if (gamePosition.currentSide == ChessSides.White) {
            gamePosition.currentSide = ChessSides.Black
        } else {
            gamePosition.currentSide = ChessSides.White
        }
    }
}