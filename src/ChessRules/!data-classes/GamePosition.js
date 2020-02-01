export default class GamePosition {
    constructor(s, p) {
        this.currentSide = s
        this.piecesPosition = p
    }

    static get(s, p) {
        return new GamePosition(s, p)
    }
}