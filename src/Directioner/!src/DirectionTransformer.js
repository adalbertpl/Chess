import Side from "../../ChessData/Side"

export default class DirectionTransformer {
    static transform(directions, pieceSide) {
        return pieceSide.getRelativeDirections(directions);
    }
}