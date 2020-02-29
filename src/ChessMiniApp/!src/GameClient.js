import {InvalidMoveResult} from "../ChessMiniModule";

// Restricted client-wrapper to the game
class GameClient {
    constructor(side, wrapped) {
        this.side = side;
        this.wrapped = wrapped;
    }

    showPosition() {
        return this.wrapped.showPosition();
    }

    checkMove(move) {
        try {
            this._checkSideOnMove();

        } catch (e){
            return new InvalidMoveResult(e);
        }           
        return this.wrapped.checkMove(move);
    }

    makeMove(move) {
        this._checkSideOnMove();

        return this.wrapped.makeMove(move);
    }

    _checkSideOnMove() {
        if (this.wrapped.getSideOnMove() != this.side)
            throw "Your opponent is on move";

        return null;
    }
}