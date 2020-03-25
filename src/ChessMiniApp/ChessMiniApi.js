import GamePosition from "../ChessRules/!data-classes/GamePosition";

import GameSaver from "./GameSaver";
import {ChessMiniOneGame} from "./ChessMiniOneGame";

export default class ChessMiniApi {
    constructor() {
        this.game = new ChessMiniOneGame();
        this.gameSaver = new GameSaver();
    }

    showPosition() {
        return this.game.showPosition();
    }

    getSideOnMove() {
        return this.game.getSideOnMove();
    }

    checkMove(move) {
        return this.game.checkMove(move);
    }

    makeMove(move) {
        return this.game.makeMove(move);
    }

    restartGame() {
        this.game = new ChessMiniGame();
    }

    saveGame() {
        this.gameSaver.save(this.game);
    }

    loadGame(gameNumber) {
        this.game = this.gameSaver.load(gameNumber);
    }
}