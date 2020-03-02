export class InvalidMoveMessage {
    static get(msg) {
        return "invalid: " + msg
    }
}
export class WinnerMessage {
    get(side) {
        return "mate, " + side.name + " has won"
    }
}
export class ValidMoveMessage {
    static get() {
        return "valid"
    }
}

