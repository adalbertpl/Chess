export default class CastleMoveChecker {
    constructor(wing) {
        this.wing = wing;
    }

    static checkMove(gamePosition, move) {
        this._checkIfRookIsOnStartPlace();
        this._checkIfEmptySquaresBetween();
    }

    static _checkMove(gamePosition, moveSide, castleFlank) {
        var piecesPosition = gamePosition.piecesPosition

        var kingSquare = this._getKingStartSquare(moveSide)
        var leftRookSquare = this._getRookStartSquare(moveSide, castleFlank)
        
        var rook = piecesPosition.get(leftRookSquare)
        if (rook == null
            || rook.pieceType != PieceType.rook) {
                throw new Error("there is no rook on checked start square")
            }

        for (var square in SquareLine.get(leftRookSquare, kingSquare, SquareLineType.open)) {
            if (piecesPosition.get(square) != null) {
                throw new Error("between squares are not empty")
            }
        }
    }

    static _getKingStartSquare(side) {
        if (side == Side.white) {
            return Square.get("e1")
        } else {
            return Square.get("e8")
        }
    }

    static _getRookStartSquare(side, flank) {
        if (flank == Flank.queenFlank) {
            return this._getLeftRookStartSquare(side)
        } else {
            return this._getRightRookStartSquare(side)
        }
    }

    static _getLeftRookStartSquare(side) {
        if (side == Side.white) {
            return Square.get("a1")
        } else {
            return Square.get("a8")
        }
    }

    static _getRightRookStartSquare(side) {
        if (side == Side.white) {
            return Square.get("h1")
        } else {
            return Square.get("h8")
        }
    }
}