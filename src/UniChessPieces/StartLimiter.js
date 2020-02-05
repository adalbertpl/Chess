export default class StartLimiter {
    constructor(pieceTypeChecker, startCondition) {
        this.pieceTypeChecker = pieceTypeChecker
        this.startCondition = startCondition
    }

    checkMove(from, to, piecesPosition) {
        var piece = piecesPosition.get(from);
        var result = this.startCondition(from, piece.side);
        if (!result) {
            return "bad start square"
        }

        return this.pieceTypeChecker.checkMove(from, to, piecesPosition)
    }
}