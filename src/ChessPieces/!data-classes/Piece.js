import PieceSymbol from "../PieceSymbol";

export default class Piece {
    constructor(pieceType, side) {
        this.pieceType = pieceType
        this.side = side
    }

    static fromSymbol(name) {
        var side = PieceSymbol.getSideBySymbol(sPiece);
        var pieceType = PieceSymbol.getChessPieceTypeBySymbol(sPiece);
        return new Piece(pieceType, side);
    }
}