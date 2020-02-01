import Mover from "../UniChessPieces/Mover"
import Union from "../UniChessPieces/Union"
import Direction from "./!data-classes/Direction"

export default class King {
    static get() {
        return new Union([
            new Mover(null, [Direction.upLeft, Direction.upRight, Direction.downLeft, Direction.downRight]),
            new Mover(null, [Direction.up, Direction.down, Direction.left, Direction.right])
        ])
    }   
}