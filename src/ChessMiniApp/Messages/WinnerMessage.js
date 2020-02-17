export default class WinnerMessage {
    get(side) {
        return "mate, " + side.name + " has won"
    }
}
