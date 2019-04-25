import Vector from "AmUtils/Vector"
import DirectionFinder from "./!src/DirectionFinder"
import CaptureChecker from "./!src/CaptureChecker"
import DirectionTransformer from "./!src/DirectionTransformer"
import IntermediatePieceFinder from "./!src/IntermediatePieceFinder"

export default class Directioner {
    constructor(captureConf, stepLimit, directions) {
        this.captureConf = captureConf
        this.stepLimit = stepLimit
        this.directions = directions
    }

    checkMove(sFrom, sTo, piecesPosition) {
        var from = Vector.get(sFrom.prim())
        var vec = Vector.get(sTo.prim())
        var pieceSide = piecesPosition.get(sFrom).side

        vec.subtract(from)

        var directions = DirectionTransformer.transform(this.directions, pieceSide)

        var data = {}
        var direction = DirectionFinder.find(directions, vec, data)
        if (direction == null) {
            return "cannot move onto this square"
        }

        var mlt = data.mlt
        if (mlt > this.stepLimit) {
            return "cannot move so far"
        }

        var piece = IntermediatePieceFinder.find(from, direction, mlt, piecesPosition)
        if (piece != null) {
            return "cannot jump"
        }

        var endPiece = piecesPosition.get(sTo)
        var msg = CaptureChecker.check(this.captureConf, endPiece, pieceSide)
        if (msg != "") {
            return msg
        }

        return ""
    }    
}


