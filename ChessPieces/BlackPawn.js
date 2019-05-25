import PawnF from "./!src/PawnF"
import Side from "../ChessData/Side"

export default class BlackPawn {

    static get() {
        return PawnF.get(Side.black)
    }
}