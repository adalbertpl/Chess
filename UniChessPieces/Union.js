export default class Union {
    constructor(components) {
        // e.g. Slider, Mover
        this.components = components
    }

    checkMove(from, to, piecesPosition) {
        for (var component of this.components) {
            var result = component.checkMove(from, to, piecesPosition)
            if (result == "") {
                return result
            }
        }

        return "invalid move"
    }
}