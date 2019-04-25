import Union from "../UniChessPieces/Union"
import Direction from "./!data-classes/Direction"
import Slider from "../UniChessPieces/Slider"
import Mover from "../UniChessPieces/Mover"
import StartLimiter from "../UniChessPieces/StartLimiter"

export default class BlackPawn {

    static get() {
        return new Union([
            new StartLimiter(new Slider(false, 2, [Direction.up]), (from) => from.row == 6),
            new Mover(true, [Direction.upLeft, Direction.upRight]),
            new Mover(false, [Direction.up])
        ])
    }
}