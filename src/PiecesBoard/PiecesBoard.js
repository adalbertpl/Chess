import Dictionary from "../Utils/Dictionary";
import Square from "./Square";
import Piece from "../ChessPieces/!data-classes/Piece";

export default class PiecesBoard {
    constructor(state) {
        this.state = state || new Dictionary(Square, Piece);
    }

    getState() {
        return this.state;
    }

    get(square) {
        var key = square.key();
        return this.state.get(key);
    }

    set(square, piece) {
        var key = square.key();
        this.state.set(key, piece);
    }

    movePiece(from, to) {
        var piece = this.get(from);
        this.set(to, piece);
        this.set(from, null);
    }
}

