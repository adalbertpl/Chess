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

var clickedPiece;

root.onclick = function() {
    var x = event.clientX;
    var y = event.clientY;
    x = Math.floor(x / 30);
    y = Math.floor(y / 30);
    var square1 = SquareParser.parse("e2");
    var square2 = Square.get(y, x);
    console.log("" + x + " " + y);
    var move = serializeSquare(square1) + "-" + serializeSquare(square2);
    console.log(move);
    fetch("http://localhost:3000/makeMove", {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({
            move: move
        })
    }).then((response) => response.json())
    .then((data) => {
        console.log("response2: " + data);
        a();
    });
}



function a() {
    fetch("http://localhost:3000/showPosition")
    .then((response) => response.json())
    .then((data) => {
        root.innerHTML += data;
        deserializePosition(data);
        showPosition();
    })
}

a();

function serializeSquare(square) {
    return String.fromCharCode(97 + square.column) + (square.row + 1);
}

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

    var letterElements = document.getElementsByClassName("letter-block");
    for (var letterElement of letterElements) {
        letterElement.onclick = function(e) {
            onclick(letterElement);
        };
    }
}

function onclick(letterElement) {
    clickedPiece = letterElement
    console.log("aa1");
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