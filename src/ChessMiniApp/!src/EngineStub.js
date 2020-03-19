import {InvalidMoveResult} from "../ChessMiniModule";
import Square from "../ChessData/Square";
import Range from "AmUtils/Range";
import Move from "../ChessData/Move";
import {product} from "../../Utils/Collections";

export default class EngineStub {
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

