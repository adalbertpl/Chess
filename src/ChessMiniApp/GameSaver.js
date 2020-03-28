import {ChessMiniOneGame} from "./ChessMiniOneGame";

export default class GameSaver {

    constructor() {
        this.gameStates = [];
    }

    save(game) {
        var state = game.getState().asStruct();
        this.gameStates.push(state);
    }

    load(gameNo) {
        var state = this.gameStates[gameNo];
        return new ChessMiniOneGame(state)
    }
}