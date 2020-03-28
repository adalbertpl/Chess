import {ValidMoveResult, WinnerResult} from "../ChessMiniOneGame";
import {InvalidMoveMessage, ValidMoveMessage, WinnerMessage} from "./Message";
import MethodDescription from "./MethodDescription";
import ArgumentDescription from "./ArgumentDescription";
import MoveParser from "../../ChessData/MoveParser"
import ChessPositionDrawer from "./ChessPositionDrawer"

export default class GameConsoleDecorator {
    constructor(game) {
        this.game = game;
    }

    showPosition() {    
        var position = this.game.showPosition();
        return ChessPositionDrawer.draw(position);
    }

    checkMove(moveStr) {
        try {
            var move = MoveParser.parse(moveStr);
        } catch (e) {
            return InvalidMoveMessage.get(e.message);
        }

        var result = this.game.checkMove(move);
        if (result instanceof ValidMoveResult)
            return ValidMoveMessage.get();
        else
            return InvalidMoveMessage.get(result);
    }

    makeMove(moveStr) {
        try {
            var move = MoveParser.parse(moveStr);
            var result = this.game.makeMove(move);
            if (result instanceof WinnerResult)
                return WinnerMessage.get(result);
            return null;
        } catch (e) {
            return InvalidMoveMessage.get(e.message);
        }
    }

    restartGame() {
        this.game.restartGame();
    }

    saveGame() {
        this.game.saveGame();
    }

    loadGame(gameNumberStr) {
        var gameNumber = parseInt(gameNumberStr);
        this.game.loadGame(gameNumber);
    }

    static getDescription() {
        return {
            "checkMove": new MethodDescription("check if move is correct", [
                new ArgumentDescription("move", "e.g. a2-a4")
            ]),
            "makeMove": new MethodDescription("make move (with checking)", [
                new ArgumentDescription("move", "e.g. a2-a4")
            ]),
            "showPosition": new MethodDescription("show currect position as ascii art", []),
            "restartGame": new MethodDescription("start new game", []),
            "saveGame": new MethodDescription("save game", []),
            "loadGame": new MethodDescription("load game", [
                new ArgumentDescription("gameNo", "game number e.g. 2")
            ])
        };
    }
}