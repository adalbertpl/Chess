import Side from "ChessData/Side"

export default class DirectionTransformer {
    static transform(directions, pieceSide) {
        if (pieceSide == Side.black) {
            return directions.map(d => d.clone().setX(-d.x))
        } else {
            return directions
        }
    }
}