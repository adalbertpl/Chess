import {EmptyChessboard} from "../HtmlDomWrapper/HtmlDomWrapper"
import PiecesBoard from "../PiecesBoard/PiecesBoard";
import SquareParser from "../ChessData/SquareParser";
import Side from "../ChessData/Side";
import PieceType from "../ChessPieces/!data-classes/PieceType";
import Piece from "../ChessPieces/!data-classes/Piece";

var root = window.document.getElementById("chessboard");



root.innerHTML = new EmptyChessboard({
    x: 8,
    y: 8
}).asHtml();

fetch("http://localhost:3000/showPosition")
.then((response) => response.json())
.then((data) => {
    root.innerHTML += data;
    deserializePosition(data);
})

function deserializePosition(sPosition) {
    var sSquarePieces = sPosition.split(",");
    window.piecesBoard = new PiecesBoard();
    for (var sSquarePiece of sSquarePieces) {
        console.log(sSquarePiece);
        var sPiece = sSquarePiece.substring(2, 2 + 1);
        var sSquare = sSquarePiece.substring(0, 2);
        var square = SquareParser.parse(sSquare);
        var piece = symbolToPiece(sPiece);
        window.piecesBoard.set(square, piece);
    }
}

function symbolToPiece(sPiece) {
    var sPieceType = sPiece.toLowerCase();
    console.log(sPieceType);
    var side = (sPiece == sPieceType) ? Side.black : Side.white;
    var pieceType = _getChessPieceTypeBySymbolStr(sPieceType);
    return new Piece(pieceType, side);
}

function _getChessPieceTypeBySymbolStr(name) {
    var pieceTypes = {
      "p": PieceType.pawn,
      "n": PieceType.knight,
      "b": PieceType.bishop,
      "r": PieceType.rook,
      "q": PieceType.queen,
      "k": PieceType.king
    }

    return pieceTypes[name];
  }