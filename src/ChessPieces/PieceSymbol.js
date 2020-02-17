import PieceType from "./!data-classes/PieceType"
import ChessSides from "./ChessSides"

export default class PieceSymbol {
    static staticConstructor() {
        this.PieceTypeBySymbol = {
            "p": PieceType.pawn,
            "n": PieceType.knight,
            "b": PieceType.bishop,
            "r": PieceType.rook,
            "q": PieceType.queen,
            "k": PieceType.king
        };
        this.SymbolByPieceType = DictionaryHelper.revertAsMap(this.PieceTypeBySymbol);
    }

    static _getPieceTypeSymbol(pieceType) {
        return PieceSymbol.SymbolByPieceType.get(pieceType);
    }

    static getPieceTypeBySymbol(name) {
        var sPieceType = name.toLowerCase();
        return PieceSymbol.PieceTypeBySymbol[sPieceType];
    }

    static getSideBySymbol(name) {
        var sPieceType = name.toLowerCase();
        var side = (name == sPieceType) ? ChessSides.Black : ChessSides.White;
        return side;
    }

    static get(piece) {
        var symbol = this._getPieceTypeSymbol(piece.pieceType)

        if (piece.side == ChessSides.White) {
            return symbol.toUpperCase()
        } else {
            return symbol
        }
    }
}

class DictionaryHelper {
    static revertAsMap(dict) {
        var result = new Map();
        for (var key of Object.keys(dict)) {
            console.log(key + " " + dict[key]);
            result.set(dict[key], key);
        }
        return result;
    }
}

PieceSymbol.staticConstructor();