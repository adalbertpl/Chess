export default class Move {
    constructor(f, t) {
        this.from = f
        this.to = t
    }

    static get(f, t) {
        return new Move(f, t)
    }
}