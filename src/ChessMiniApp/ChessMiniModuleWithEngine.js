import EngineStub from "./!src/EngineStub";

export class ChessMiniModuleWithEngine extends ChessMiniModule {
    constructor() {
        super();
        this.engine = new EngineStub();
    }

    makeMove(move) {
        var result = super.makeMove(move);
        if (result == null)
            return this._doEngineOption();
        return result;
    }

    _doEngineOption() {
        var checkMove = this.checkMove.bind(this);
        var move = this.engine.findBestMove(this.gamePosition, checkMove);
        return this._makeMove(move);
    }
}