import fs from "fs"
import Piece from "../ChessPieces/!data-classes/Piece";
import PiecesBoard from "../PiecesBoard/PiecesBoard";
import ChessSides from "../ChessPieces/ChessSides"
import Square from "../PiecesBoard/Square";
import GamePosition from "../ChessRules/!data-classes/GamePosition";
import PieceType from "../ChessPieces/!data-classes/PieceType";

export default class StartPosition {
  static get() {
    var rawdata = fs.readFileSync('./data/chess.json');
    var chessData = JSON.parse(rawdata);

    var piecesBoard = new PiecesBoard();

    for (var startPosition of chessData.startPosition) {
      var pieceType = this._getChessPieceTypeByName(startPosition.type);
      for (var row of this._wrapIfNotArray(startPosition.row)) {
        for (var column of this._wrapIfNotArray(startPosition.column)) {
          var piece = new Piece(pieceType, ChessSides.White);
          console.log(row + " " + column);
          piecesBoard.set(Square.get(row, column), piece);

          piece = new Piece(pieceType, ChessSides.Black);
          piecesBoard.set(Square.get(7 - row, column), piece);
        }
      }
    }

    var gamePosition = GamePosition.get(ChessSides.White, piecesBoard);
    return gamePosition;
  }

  static _wrapIfNotArray(value) {
    if (Array.isArray(value))
      return value;

    return [value];
  }

  static _getChessPieceTypeByName(name) {
    var pieceTypes = {
      "pawn": PieceType.pawn,
      "knight": PieceType.knight,
      "bishop": PieceType.bishop,
      "rook": PieceType.rook,
      "queen": PieceType.queen,
      "king": PieceType.king
    }

    return pieceTypes[name];
  }
}