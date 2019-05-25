import PawnF from "./!src/PawnF"

export default class WhitePawn {

    static get() {
        return PawnF.get(Side.white)
    }
}