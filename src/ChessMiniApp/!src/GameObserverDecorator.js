export default class GameObserverDecorator {
    constructor(game) {
        this.game = game;
    }

    setObserver(observer) {
        this.observer = observer;
    }

    // --- delegate to this.game ---
    showPosition() {
        return this.game.showPosition();
    }

    getSideOnMove() {
        return this.game.getSideOnMove();
    }

    checkMove(moveStr) {
        return this.game.checkMove(moveStr);
    }

    makeMove(moveStr) {
        var result = this.game.makeMove(moveStr);
        if (this.observer != null)
            this.observer();

        return result;
    }
    // --- --- ---
}