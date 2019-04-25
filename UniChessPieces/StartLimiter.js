export default class StartLimiter {
    constructor(pieceTypeChecker, startCondition) {
        this.pieceTypeChecker = pieceTypeChecker
        this.startCondition = startCondition
    }

    checkMove(from, to, piecesPosition) {
        var result = this.startCondition(from)
        if (!result) {
            return "bad start square"
        }

        return this.pieceTypeChecker.checkMove(from, to, piecesPosition)
    }
}