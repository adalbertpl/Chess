import PawnF from "./!src/PawnF"
import Side from "../ChessData/Side"

export default class WhitePawn {

    static get() {
        return PawnF.get(Side.white)
    }
}