import Union from "../UniChessPieces/Union"
import Direction from "./!data-classes/Direction"
import Slider from "../UniChessPieces/Slider"
import Mover from "../UniChessPieces/Mover"
import StartLimiter from "../UniChessPieces/StartLimiter"
import ChessSides from "./ChessSides"

export default class Pawn {  
    static get() {
        return new Union([
            new StartLimiter(
                new Slider(
                    false, 
                    2, 
                    [Direction.up]), 
                    (from, side) => from.row == this._getStartRank(side)),
            new Mover(
                true, 
                [Direction.upLeft, Direction.upRight]),
            new Mover(
                false, 
                [Direction.up])
        ])
    }

    static _getStartRank(side) {
        if (side == ChessSides.White) {
            return 1;
        } else {
            return 6;
        }
    }
}