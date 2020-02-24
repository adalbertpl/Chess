export default class PositionSerializer {
    static serialize(piecesPosition) {
        var result = "";
        for (var i = 0; i < 8; i++) {
            for (var j = 0; j < 8; j++) {
                var square = Square.get(i, j);
                var optionalPiece = piecesPosition.get(Square.get(i, j));
                if (optionalPiece != null) {
                    result += this.serializeSquare(square) + this.serializePiece(optionalPiece) + ",";
                }
            }
        }
        return result;
    }

    static serializeSquare(square) {
        return String.fromCharCode(97 + square.column) + (square.row + 1);
    }

    static serializePiece(piece) {
        return PieceSymbol.get(piece);
    }
}