import PiecesBoard from "../PiecesBoard/PiecesBoard";
import StartPosition from "../ChessRules/StartPosition"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import ChessSides from "../ChessPieces/ChessSides"

export class ChessMiniOneGame {
    constructor(staticState) {
        this.state = this._asState(staticState);        
    }

    _asState(staticState) {
        if (staticState == null)
            return new ChessMiniGameState(ChessSides.White, StartPosition.get());
        return ChessMiniGameState.fromStruct(staticState);
    }

    getState() {
        return this.state;
    }

    showPosition() {
        return this.state.piecesPosition;
    }

    getSideOnMove() {
        return this.state.currentSide;
    }

    // throws: no client error
    checkMove(move) {
        try {
            MoveChecker.checkMove(this.state, move);
            return new ValidMoveResult();

        } catch (e) {
            return new InvalidMoveResult(e.message);
        }
    }

    // throws: on invalid move
    makeMove(move) {
        console.log("OneGame - makeMove");
        MoveChecker.checkMove(this.state, move);
        return this._makeMove(move);
    }

    _makeMove(move) {
        var winner = MoveMaker.makeMove(this.state, move);
        if (winner == null)
            return null;
        return new WinnerResult(winner);  
    }
}

class ChessMiniGameState {
    constructor(currentSide, piecesPosition) {
        console.log("constructing ChessMiniGameState");
        this.currentSide = currentSide;
        this.piecesPosition = piecesPosition;
    }

    asStruct() {
        return new ChessMiniGameStateStructure(
            this.currentSide, 
            this.piecesPosition.getState().copy()
        );
    }

    static fromStruct(state) {
        return new ChessMiniGameState(
            state.currentSide,
            new PiecesBoard(state.piecesPositionData)
        );
    }
}

class ChessMiniGameStateStructure {
    constructor(currentSide, piecesPositionData) {
        this.currentSide = currentSide;
        this.piecesPositionData = piecesPositionData;
    }

    copy() {
        return new ChessMiniGameStateStructure(
            this.currentSide,
            this.piecesPositionData.copy()
        )
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