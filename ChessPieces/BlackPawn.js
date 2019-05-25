import PawnF from "./!src/PawnF"

export default class BlackPawn {

    static get() {
        return PawnF.get(Side.black)
    }
}