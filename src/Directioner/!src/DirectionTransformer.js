import ChessSides from "../../ChessPieces/ChessSides";

export default class DirectionTransformer {
    static transform(directions, pieceSide) {
        return pieceSide.getRelativeDirections(directions);
    }
}