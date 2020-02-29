import {ValidMoveResult, WinnerResult} from "../ChessMiniModule";
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
        var move = MoveParser.parse(moveStr);
        var result = this.game.checkMove(move);
        if (result instanceof ValidMoveResult)
            return ValidMoveMessage.get();
        else
            return InvalidMoveMessage.get(result);
    }

    makeMove(moveStr) {
        var move = MoveParser.parse(moveStr);
        try {
            var result = this.game.makeMove(move);
            if (result instanceof WinnerResult)
                return WinnerMessage.get(result);
            return null;
        } catch (e) {
            return InvalidMoveMessage.get(e.message);
        }
    }

    static getDescription() {
        return {
            "checkMove": new MethodDescription("check if move is correct", [
                new ArgumentDescription("move", "e.g. a2-a4")
            ]),
            "makeMove": new MethodDescription("make move (with checking)", [
                new ArgumentDescription("move", "e.g. a2-a4")
            ]),
            "showPosition": new MethodDescription("show currect position as ascii art", [])
        };
    }
}