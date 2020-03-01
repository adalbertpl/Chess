import StartPosition from "../ChessRules/StartPosition"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import Square from "../PiecesBoard/Square";
import Range from "AmUtils/Range";

export class ChessMiniModule {
    constructor(engineOption) {
        this.gamePosition = StartPosition.get();
        this.engineOption = engineOption;
    }

    showPosition() {
        return this.gamePosition.piecesPosition;
    }

    getSideOnMove() {
        return this.gamePosition.currentSide;
    }

    // throws: no client error
    checkMove(move) {
        try {
            MoveChecker.checkMove(this.gamePosition, move);
            return new ValidMoveResult();

        } catch (e) {
            return new InvalidMoveResult(e.message);
        }
    }

    // throws: on invalid move
    makeMove(move) {
        MoveChecker.checkMove(this.gamePosition, move);
        console.log("After checkMove");
        return this._makeMove(move);
    }

    _makeMove(move) {
        var winner = MoveMaker.makeMove(this.gamePosition, move);
        if (winner == null)
            return null;
        return new WinnerResult(winner);  
    }
}

export class ChessMiniModuleWithEngine extends ChessMiniModule {
    constructor() {
        super();
        this.engine = new EngineStub();
    }

    makeMove(move) {
        var result = super.makeMove(move);
        console.log("After super.makeMove");
        if (result == null)
            return this._doEngineOption();
        return result;
    }

    _doEngineOption() {
        console.log("doEngineOption");
        var checkMove = this.checkMove.bind(this);
        var move = this.engine.findBestMove(this.gamePosition, checkMove);
        return this._makeMove(move);
    }
}

class Method {
    constructor(content) {
        this.content = content;
        this.precall = [];
        this.postcall = [];
    }

    addPrecallHook(hook) {
        this.precall.push(hook);
    }

    addPostcallHook(hook) {
        this.postcall.push(hook);
    }

    call(...params) { 
        for (var hook of this.precall)
            params = hook(...params);

        var result = this.content(...params);

        for (var hook of this.postcall)
            result = hook(result);

        return result;
    }
}

export class ValidMoveResult {}
export class InvalidMoveResult {
    constructor(message) {
        this.message = message;
    }
}
export class WinnerResult {
    constructor(winnerSide) {
        this.winnerSide = winnerSide;
    }
}

class Nullable {
    static ifNotNull(value, fn) {
        if (value == null)
            return null;

        return fn(value);
    }
}

class EngineStub {
    findBestMove(gamePosition, checkMove) {
        var currentSide = gamePosition.currentSide;
        for (var startSquare of getMyPieceSquares(currentSide, gamePosition.piecesPosition)) {
            console.log("b2: " + startSquare);
            for (var endSquare of product(Range.get(0, 8), Range.get(0, 8), (x, y) => new Square(x, y))) {
                try {
                    console.log("b1")
                    var move = Move.get(startSquare, endSquare);
                    checkMove(move);
                    return move;
                } catch (e) {
                    continue;
                }
            }
        }
        throw "Cannot find move";
    }
}

function* getMyPieceSquares(side, piecesPosition) {
    for (var square of product(Range.get(0, 8), Range.get(0, 8), (x, y) => new Square(x, y))) {
        var piece = piecesPosition.get(square);
        console.log("a1");
        if (piece != null && piece.side == side) {
            console.log("a2");
            yield square;
        }
    }
    console.log("a3");
}

function* product(enum1, enum2, fn) {
    for (var el1 of enum1) {
        for (var el2 of enum2) {
            console.log("c1");
            yield fn(el1, el2); 
        }
        console.log("c2");
    }
    console.log("c3");
}