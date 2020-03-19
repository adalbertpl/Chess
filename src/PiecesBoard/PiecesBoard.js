import Dictionary from "../Utils/Dictionary";
import Square from "./Square";
import Piece from "../ChessPieces/!data-classes/Piece";

export default class PiecesBoard {
    constructor() {
        this.data = new Dictionary(Square, Piece);
    }

    get(square) {
        var key = square.key();
        return this.data.get(key);
    }

    set(square, piece) {
        var key = square.key();
        this.data.set(key, piece);
    }

    movePiece(from, to) {
        var piece = this.get(from);
        this.set(to, piece);
        this.set(from, null);
    }
}

