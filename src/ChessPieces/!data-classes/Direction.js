import Vector from "../../AmUtils/Vector"

export default class Direction {
    static staticConstructor() {
        this.up = Vector.get([1, 0])
        this.down = Vector.get([-1, 0])

        this.right = Vector.get([0, 1])
        this.left = Vector.get([0, -1])

        this.upLeft = this.up.clone().add(this.left)
        this.upRight = this.up.clone().add(this.right)
        this.downLeft = this.down.clone().add(this.left)
        this.downRight = this.down.clone().add(this.right)
    }
}

Direction.staticConstructor()