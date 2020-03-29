import {ValidMoveResult, WinnerResult} from "../ChessMiniOneGame";
import {InvalidMoveMessage, ValidMoveMessage, WinnerMessage} from "./Message";
import MethodDescription from "./MethodDescription";
import ArgumentDescription from "./ArgumentDescription";
import MoveParser from "../../ChessData/MoveParser"
import ChessPositionDrawer from "./ChessPositionDrawer"
import Delegations from "../../Utils/Delegations";
import Decorators from "../../Utils/Decorators";

export default class GameApiForConsoleAdapter {
    constructor(game) {
        this.game = game;
    }

    static staticConstructor() {
        Delegations.delegate(this, "checkMove", "game");
        Delegations.delegate(this, "makeMove", "game");
        Delegations.delegate(this, "restartGame", "game");
        Delegations.delegate(this, "saveGame", "game");

        Decorators.decorate(this, "checkMove", function(method) {
            return function(moveStr) {
                try {
                    var move = MoveParser.parse(moveStr);
                } catch (e) {
                    return InvalidMoveMessage.get(e.message);
                }
        
                var result = method.call(this, move);

                if (result instanceof ValidMoveResult)
                    return ValidMoveMessage.get();
                else
                    return InvalidMoveMessage.get(result);
            }
        });

        Decorators.decorate(this, "makeMove", function(method) {
            return function(moveStr) {
                try {
                    var move = MoveParser.parse(moveStr);
                } catch (e) {
                    return InvalidMoveMessage.get(e.message);
                }

                try {
                    var result = method.call(this, move);
                } catch (e) {
                    return InvalidMoveMessage.get(e.message);
                }

                if (result instanceof WinnerResult)
                    return WinnerMessage.get(result);
                return null;
            }
        });
    }

    showPosition() {    
        var position = this.game.showPosition();
        return ChessPositionDrawer.draw(position);
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

GameApiForConsoleAdapter.staticConstructor();