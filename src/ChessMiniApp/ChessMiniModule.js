import StartPosition from "../ChessRules/StartPosition"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import fs from "fs";
import { stringify } from "querystring";

export class ChessMiniModule {
    constructor(gameHistoryDao) {
        this.currentGame = new OneChessMiniGame();
        this.gameHistoryDao = gameHistoryDao
    }

    restartGame() {
        this.currentGame = new OneChessMiniGame();
    }

    saveGame() {
        this.gameHistoryDao.save(this.currentGame);
    }
}



class OneChessMiniGame {
    constructor() {
        this.gamePosition = StartPosition.get();
        this.moveHistory = [];
    }

    showPosition() {
        return this.gamePosition.piecesPosition;
    }

    getSideOnMove() {
        return this.gamePosition.currentSide;
    }

    getState() {
        return {
            moveHistory: this.moveHistory
        }
    }

    // throws: no client error
    checkMove(move) {
        try {
            MoveChecker.checkMove(this.gamePosition, move);
            return new ValidMoveResult();

        } catch (e) {
            return new InvalidMoveResult(e.message);
        }
    }

    // throws: on invalid move
    makeMove(move) {
        MoveChecker.checkMove(this.gamePosition, move);
        return this._makeMove(move);
    }

    _makeMove(move) {
        this.moveHistory.push(move);
        var winner = MoveMaker.makeMove(this.gamePosition, move);
        if (winner == null)
            return null;
        return new WinnerResult(winner);  
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