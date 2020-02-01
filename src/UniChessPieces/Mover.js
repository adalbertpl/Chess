import Directioner from "Directioner/Directioner"

export default class Mover {
    constructor(captureConf, directions) {
        this.directioner = new Directioner(captureConf, 1, directions)
    }

    checkMove(from, to, piecePositions) {
        return this.directioner.checkMove(from, to, piecePositions)
    }
}