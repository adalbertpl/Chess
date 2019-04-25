import Slider from "../UniChessPieces/Slider"
import Union from "../UniChessPieces/Union"
import Direction from "./!data-classes/Direction"

export default class Bishop {
    static get() {
        return new Union([
            new Slider(true, 8, [Direction.upLeft, Direction.upRight, Direction.downLeft, Direction.downRight]),
            new Slider(true, 8, [Direction.up, Direction.down, Direction.left, Direction.right])
        ])
    }   
}