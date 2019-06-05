import Directioner from "Directioner/Directioner"

export default class Slider {
    constructor(canCapture, stepLimit, directions) {
        var captureConf = canCapture == true ? null : false

        this.directioner = new Directioner(captureConf, stepLimit, directions)
    }

    checkMove(from, to, piecesPosition) {
        return this.directioner.checkMove(from, to, piecesPosition)
    }
}