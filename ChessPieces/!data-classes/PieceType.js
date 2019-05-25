import WhitePawn from "../WhitePawn"
import BlackPawn from "../BlackPawn"
import Rook from "../Rook"
import Knight from "../Knight"
import Bishop from "../Bishop"
import Queen from "../Queen"
import King from "../King"

export default class PieceType {
    static staticConstructor() {
        this.whitePawn = PieceType.validate(WhitePawn.get())
        this.blackPawn = PieceType.validate(BlackPawn.get())
        this.rook = PieceType.validate(Rook.get())
        this.knight = PieceType.validate(Knight.get())
        this.bishop = PieceType.validate(Bishop.get())
        this.queen = PieceType.validate(Queen.get())
        this.king = PieceType.validate(King.get())
    }

    static validate(obj) {
        if (typeof obj.checkMove !== 'function') {
            throw new Error("invalid type")
        }

        return obj
    }
}

PieceType.staticConstructor()