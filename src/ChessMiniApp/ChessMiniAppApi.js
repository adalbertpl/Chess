import StartPosition from "../ChessRules/StartPosition"
import MoveParser from "../ChessData/MoveParser"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import ValidMoveMessage from "./Messages/ValidMoveMessage"
import InvalidMoveMessage from "./Messages/InvalidMoveMessage"
import WinnerMessage from "./Messages/WinnerMessage"
import ChessPositionDrawer from "./!src/ChessPositionDrawer"

export default class ChessMiniAppApi {
    constructor() {
        this.gamePosition = StartPosition.get()
    }

    showPosition() {
        var drawnPosition = ChessPositionDrawer.draw(this.gamePosition.piecesPosition)
        return drawnPosition
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
}