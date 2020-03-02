import StartPosition from "../ChessRules/StartPosition"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import Square from "../ChessData/Square";
import Range from "AmUtils/Range";
import Move from "../ChessData/Move";

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
            for (var endSquare of product(Array.from(Range.get(0, 8)), Array.from(Range.get(0, 8)), (x, y) => new Square(x, y))) {
                var move = Move.get(startSquare, endSquare);
                var result = checkMove(move);
                if (result instanceof InvalidMoveResult)
                    continue;

                console.log("found move: " + move);
                return move;
            }
        }
        throw new Error("Cannot find move");
    }
}

function* getMyPieceSquares(side, piecesPosition) {
    for (var square of product(Array.from(Range.get(0, 8)), Array.from(Range.get(0, 8)), (x, y) => new Square(x, y))) {
        var piece = piecesPosition.get(square);
        if (piece != null && piece.side == side) {
            yield square;
        }
    }
}

function* product(enum1, enum2, fn) {
    for (var el1 of enum1) {
        for (var el2 of enum2) {
            yield fn(el1, el2); 
        }
    }
}