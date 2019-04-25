import Union from "../UniChessPieces/Union"
import Direction from "./!data-classes/Direction"
import Mover from "../UniChessPieces/Mover"

export default class Bishop {
    static get() {
        return new Union([
            new Mover(null, [
                Direction.upLeft.clone().add(Direction.up), 
                Direction.upLeft.clone().add(Direction.left), 
                Direction.upRight.clone().add(Direction.up), 
                Direction.upRight.clone().add(Direction.right),
                Direction.downLeft.clone().add(Direction.left),
                Direction.downLeft.clone().add(Direction.down),
                Direction.downRight.clone().add(Direction.right),
                Direction.downRight.clone().add(Direction.down)])
        ])
    }   
}