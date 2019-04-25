import Square from "ChessData/Square"

export default class IntermediatePieceFinder {
    static find(from, direction, mlt, piecesPosition) {
        var step = 1
        var current = from.clone().add(direction)

        while (step != mlt) {
            var {x, y} = current
            var square = Square.get(x, y)

            var piece = piecesPosition.get(square)
            if (piece != null) {
                return piece
            }

            current.add(direction)
            step++
        }

        return null
    }
}