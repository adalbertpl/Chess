import StartPosition from "../ChessRules/StartPosition"
import MoveParser from "../ChessData/MoveParser"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import ValidMoveMessage from "./Messages/ValidMoveMessage"
import InvalidMoveMessage from "./Messages/InvalidMoveMessage"
import WinnerMessage from "./Messages/WinnerMessage"
import ChessPositionDrawer from "./!src/ChessPositionDrawer"
import MethodDescription from "./!src/MethodDescription";
import ArgumentDescription from "./!src/ArgumentDescription";
import PieceSymbol from "../ChessPieces/PieceSymbol";
import Square from "../PiecesBoard/Square";

export default class ChessMiniAppApi {
    constructor() {
        this.gamePosition = StartPosition.get()
    }

    showPosition() {
        return this.serializePosition();
    }

    serializePosition() {
        var result = "";
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var square = Square.get(i, j);
                var optionalPiece = this.gamePosition.piecesPosition.get(Square.get(i, j));
                if (optionalPiece != null) {
                    result += this.serializeSquare(square) + this.serializePiece(optionalPiece) + ",";
                }
            }
        }
        return result;
    }

    serializeSquare(square) {
        return String.fromCharCode(97 + square.column) + (square.row + 1);
    }

    serializePiece(piece) {
        return PieceSymbol.get(piece);
    }

    checkMove(moveStr) {
        try {
            var move = MoveParser.parse(moveStr)
            MoveChecker.checkMove(this.gamePosition, move)
            return ValidMoveMessage.get()

        } catch (e) {
            return InvalidMoveMessage.get(e.message)
        }
    }

    makeMove(moveStr) {
        try {
            var move = MoveParser.parse(moveStr)
            MoveChecker.checkMove(this.gamePosition, move)

            var winner = MoveMaker.makeMove(this.gamePosition, move)
            if (winner != null) {
                return WinnerMessage.get(winner) // rl.write("mate, " + winner + " have won")
            }

            return null

        } catch (e) {
            return InvalidMoveMessage.get(e.message)
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