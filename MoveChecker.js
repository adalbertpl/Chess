export default class MoveChecker {

    static checkMove(gamePosition, move) {
        this._checkSquaresAreWithinBoard(move)
        var piece = this._checkPieceIsOnStartSquare(piecesPosition, move)
        this._checkCorrectSide(gamePosition, piece)

        specializedChecker = this._getSpecializedMoveChecker(piece, move);
        if (specializedChecker == null)
            this._checkMoveByPieceType(piece.pieceType, piecesPosition, move)
        else
            specializedChecker.checkMove(gamePosition, piece, move);
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

    static _checkMoveByPieceType(pieceType, piecesPosition, move) {
        var msg = pieceType.checkMove(move.from, move.to, piecesPosition)
        if (msg != "") {
            throw new Error(msg)
        }
    }

    static _isCastleMove(move, side, data) {
        if (move.from == StartSquare.get(PieceType.king, side)) {
            if (move.to == StartSquare.get(PieceType.bishop, Wing.queen, side)) {
                data.wing = Wing.queen
                return true;
            }
            
            if (move.to == StartSquare.get(PieceType.knight, Wing.king, side)) {
                data.wing = Wing.king
                return true;
            }
        }
        return false;
    }

    static _getSpecializedMoveChecker(piece, move) {
        if (piece.pieceType == PieceType.king) {
            var data = {};
            if (this._isCastleMove(move, piece.side, data))
                return new CastleMoveChecker(data.wing);
        }
        return null;
    }
       
}