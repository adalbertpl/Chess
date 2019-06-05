export default class MoveChecker {

    static checkMove(gamePosition, move) {
        var moveType = this.getMoveType(move)
        if (moveType == MoveType.classic) {
            ClassicMoveChecker.check(gamePosition, move)
        } else {
            CastleMoveChecker.check(gamePosition, move)
        }
    }
}