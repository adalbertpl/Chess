import {EmptyChessboard, LetterBlock} from "../HtmlDomWrapper/HtmlDomWrapper"
import PiecesBoard from "../PiecesBoard/PiecesBoard";
import SquareParser from "../ChessData/SquareParser";
import ChessSides from "../ChessPieces/ChessSides";
import PieceType from "../ChessPieces/!data-classes/PieceType";
import Piece from "../ChessPieces/!data-classes/Piece";
import Square from "../PiecesBoard/Square";
import Move from "../ChessData/Move";
import Regions from "../Utils/Regions";
import HandlerAdapter from "../HtmlDomWrapper/HandlerAdapter";
import RestClientApi from "../ChessMiniAppAdapters/RestClientApi";

var root = window.document.getElementById("chessboard");

class EmptyChessboardViewData {
    constructor(root, squareSize) {
        this.root = root;
        this.squareSize = squareSize;
    }

    addHandler() {
        HandlerAdapter.addOnClickHandler(this.root, handleOnClick);
    }

    createView() {
        this.root.innerHTML = new EmptyChessboard({
            x: 8,
            y: 8
        }, this.squareSize).asHtml();
    }
}

var chessboardData = new EmptyChessboardViewData(root, 30);
chessboardData.addHandler();
chessboardData.createView();

var square1;

function handleOnClick(point) {
    var regions = new Regions(chessboardData.squareSize);
    regions.createHandlerAdapter(handleOnClickOnRegion)(point);
}

function handleOnClickOnRegion(r) {
    var clickedSquare = Square.get(7 - r.y, r.x);
    if (isOccupied(clickedSquare)) {
        square1 = clickedSquare;
        return;
    }

    makeMove(square1, clickedSquare);
}

function isOccupied(square) {
    return window.piecesBoard.get(square) != null;
}

function makeMove(square1, square2) {
    RestClientApi.makeMove(square1, square2)
    .then((data) => {
        console.log("response2: " + data);
        reloadPosition();
    });
}


function reloadPosition() {
    RestClientApi.getPosition()
    .then((data) => {
        removeLetters();
        deserializePosition(data);
        showPosition();
    })
}

function removeLetters() {
    for (var node of Array.from(root.getElementsByClassName("letter-block"))) {
        root.removeChild(node);
    }
}

reloadPosition();

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
        var sPiece = sSquarePiece.substring(2, 2 + 1);
        var sSquare = sSquarePiece.substring(0, 2);
        var square = SquareParser.parse(sSquare);
        window.piecesBoard.set(square, sPiece);
    }
}

