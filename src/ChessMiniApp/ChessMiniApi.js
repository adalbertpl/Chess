import GamePosition from "../ChessRules/!data-classes/GamePosition";
import Delegations from "../Utils/Delegations";
import GameSaver from "./GameSaver";
import {ChessMiniOneGame} from "./ChessMiniOneGame";

export default class ChessMiniApi {
    constructor() {
        this.game = new ChessMiniOneGame();
        this.gameSaver = new GameSaver();
    }

    static staticConstructor() {
        Delegations.delegate(this, "getSideOnMove", "game");
        Delegations.delegate(this, "checkMove", "game");
        Delegations.delegate(this, "makeMove", "game");
        Delegations.delegate(this, "showPosition", "game");
    }

    restartGame() {
        this.game = new ChessMiniOneGame();
    }

    saveGame() {
        this.gameSaver.save(this.game);
    }

    loadGame(gameNumber) {
        this.game = this.gameSaver.load(gameNumber);
    }
}

ChessMiniApi.staticConstructor();