import StartPosition from "../ChessRules/StartPosition"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"

export class ChessMiniModule {
    constructor() {
        this.gamePosition = StartPosition.get();
    }

    showPosition() {
        return this.gamePosition.piecesPosition;
    }

    getSideOnMove() {
        return this.gamePosition.currentSide;
    }

    // throws: no client error
    checkMove(move) {
        try {
            //var move = MoveParser.parse(moveStr)
            MoveChecker.checkMove(this.gamePosition, move);
            return new ValidMoveResult();

        } catch (e) {
            return new InvalidMoveResult(e.message);
        }
    }

    // throws: on invalid move
    makeMove(move) {
        MoveChecker.checkMove(this.gamePosition, move);

        var winner = MoveMaker.makeMove(this.gamePosition, move);
        return Nullable.ifNotNull(winner, 
            (x) => new WinnerResult(x));
    }
}

export class ValidMoveResult {}
export class InvalidMoveResult {
    constructor(message) {
        this.message = message;
    }
}
export class WinnerResult {
    constructor(winnerSide) {
        this.winnerSide = winnerSide;
    }
}