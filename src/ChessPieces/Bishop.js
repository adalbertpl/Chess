import Slider from "../UniChessPieces/Slider"
import Direction from "./!data-classes/Direction"

export default class Bishop {
    static get() {
        return new Slider(true, 8, [Direction.upLeft, Direction.upRight, Direction.downLeft, Direction.downRight])
    }   
}