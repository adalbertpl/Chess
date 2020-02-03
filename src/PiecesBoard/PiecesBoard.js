export default class PiecesBoard {
    constructor() {
        this.data = new Map();
    }

    get(square) {
        var key = square.key()
        return this.data.get(key)
    }

    set(square, piece) {
        var key = square.key()
        this.data.set(key, piece)
    }

    movePiece(from, to) {
        var piece = this.get(from)
        this.set(to, piece)
        this.set(from, null)
    }
}