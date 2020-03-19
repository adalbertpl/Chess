import fs from "fs"
import Piece from "../ChessPieces/!data-classes/Piece";
import PiecesBoard from "../PiecesBoard/PiecesBoard";
import ChessSides from "../ChessPieces/ChessSides"
import Square from "../PiecesBoard/Square";
import GamePosition from "../ChessRules/!data-classes/GamePosition";
import PieceType from "../ChessPieces/!data-classes/PieceType";
import { product } from "../Utils/Collections";

export default class StartPosition {
  static get() {
    var rawdata = fs.readFileSync('./data/chess.json');
    var chessData = JSON.parse(rawdata);

    var piecesBoard = new PiecesBoard();
    this.fillPiecesPosition(piecesBoard, chessData.startPosition);

    var gamePosition = GamePosition.get(ChessSides.White, piecesBoard);
    return gamePosition;
  }

  static fillPiecesPosition(piecesBoard, preStartPositionData) {
    startPositionData = preStartPositionData.map(x => new PiecePositionData(x))
    for (var {rows, columns, pieceType} of startPositionData) {
      for (var {row, column} of product(rows, columns)) {
        var piece = new Piece(pieceType, ChessSides.White);
        piecesBoard.set(Square.get(row, column), piece);

        piece = new Piece(pieceType, ChessSides.Black);
        piecesBoard.set(Square.get(7 - row, column), piece);
      }
    }
  }
}

class PiecePositionData {
  constructor(piecePositionData) {
    this.pieceType = _getChessPieceTypeByName(piecePositionData.type),
    this.rows = _wrapIfNotArray(piecePositionData.row),
    this.columns = _wrapIfNotArray(piecePositionData.column)
  }

  decompress() {
    return product(rows, columns, (row, column) => {row; column; pieceType})
  }
}

function _getChessPieceTypeByName(name) {
  var pieceTypes = {
    "pawn": PieceType.pawn,
    "knight": PieceType.knight,
    "bishop": PieceType.bishop,
    "rook": PieceType.rook,
    "queen": PieceType.queen,
    "king": PieceType.king
  }
}

function _wrapIfNotArray(value) {
  if (Array.isArray(value))
    return value;

  return [value];
}