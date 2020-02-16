import {EmptyChessboard, LetterBlock} from "../HtmlDomWrapper/HtmlDomWrapper"
import PiecesBoard from "../PiecesBoard/PiecesBoard";
import SquareParser from "../ChessData/SquareParser";
import Side from "../ChessData/Side";
import PieceType from "../ChessPieces/!data-classes/PieceType";
import Piece from "../ChessPieces/!data-classes/Piece";
import Square from "../PiecesBoard/Square";

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
    showPosition();
})

function showPosition() {
    for (var i = 0; i < 8; ++i) {
        for (var j = 0; j < 8; ++j) {
            var sPiece = window.piecesBoard.get(Square.get(i, j));
            if (sPiece != null) {
                root.innerHTML += new LetterBlock(sPiece, {
                    x: 24,
                    y: 24
                }, {
                    x: 15 + j * 30 - 12,
                    y: 8 * 30 - 15 - i * 30 - 12,
                }).asHtml();
            }
        }
    }
}

function deserializePosition(sPosition) {
    var sSquarePieces = sPosition.split(",");
    window.piecesBoard = new PiecesBoard();
    for (var sSquarePiece of sSquarePieces) {
        console.log(sSquarePiece);
        var sPiece = sSquarePiece.substring(2, 2 + 1);
        var sSquare = sSquarePiece.substring(0, 2);
        var square = SquareParser.parse(sSquare);
        //var piece = symbolToPiece(sPiece);
        window.piecesBoard.set(square, sPiece);
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