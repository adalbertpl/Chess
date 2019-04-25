import WhitePawn from "../WhitePawn"
import BlackPawn from "../BlackPawn"
import Rook from "../Rook"
import Knight from "../Knight"
import Bishop from "../Bishop"
import Queen from "../Queen"
import King from "../King"

export default class PieceType {
    static staticConstructor() {
        this.whitePawn = WhitePawn.get()
        this.blackPawn = BlackPawn.get()
        this.rook = Rook.get()
        this.knight = Knight.get()
        this.bishop = Bishop.get()
        this.queen = Queen.get()
        this.king = King.get()
    }
}

PieceType.staticConstructor()