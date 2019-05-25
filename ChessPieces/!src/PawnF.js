import Union from "../UniChessPieces/Union"
import Direction from "./!data-classes/Direction"
import Slider from "../UniChessPieces/Slider"
import Mover from "../UniChessPieces/Mover"
import StartLimiter from "../UniChessPieces/StartLimiter"

export default class PawnF {
    static getStartRank(side) {
        if (side == Side.white) {
            return 1
        } else {
            return 6
        }
    }
    
    static get(side) {
        var startRank = this.getStartRank(side)

        return new Union([
            new StartLimiter(
                new Slider(
                    false, 
                    2, 
                    [Direction.up]), 
                    (from) => from.row == startRank),
            new Mover(
                true, 
                [Direction.upLeft, Direction.upRight]),
            new Mover(
                false, 
                [Direction.up])
        ])
    }
}