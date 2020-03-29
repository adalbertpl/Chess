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
        Delegations.delegateAll(this, 
            ["getSideOnMove", "checkMove", "makeMove", "showPosition"], 
            "game");
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