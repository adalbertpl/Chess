import Range from "AmUtils/Range"
import PiecesBoard from "PiecesBoard/PiecesBoard"

import Square from "ChessData/Square"
import Side from "ChessData/Side"
import PieceType from "ChessPieces/!data-classes/PieceType"
import Piece from "ChessPieces/!data-classes/Piece"

import GamePosition from "./!data-classes/GamePosition"

export default class StartPosition {
  static get() {
    var piecesBoard = new PiecesBoard()
    this._fillPiecesBoard(piecesBoard)

    var gamePosition = GamePosition.get(Side.white, piecesBoard)
    return gamePosition
  }

  static _getPiece(pieceType, side) {
    return new Piece(pieceType, side)
  }

  static _fillPiecesBoard(data) {
    var row = 1
    for (var column of Range.get(0, 8)) {
      data.set(Square.get(row, column), this._getPiece(PieceType.whitePawn, Side.white))
    }
    
    row = 0
    data.set(Square.get(row, 0), this._getPiece(PieceType.rook   , Side.white))
    data.set(Square.get(row, 1), this._getPiece(PieceType.knight , Side.white))
    data.set(Square.get(row, 2), this._getPiece(PieceType.bishop , Side.white))
    data.set(Square.get(row, 3), this._getPiece(PieceType.queen  , Side.white))
    data.set(Square.get(row, 4), this._getPiece(PieceType.king   , Side.white))
    data.set(Square.get(row, 5), this._getPiece(PieceType.bishop , Side.white))
    data.set(Square.get(row, 6), this._getPiece(PieceType.knight , Side.white))
    data.set(Square.get(row, 7), this._getPiece(PieceType.rook   , Side.white))     

    var row = 6
    for (var column of Range.get(0, 8)) {
      data.set(Square.get(row, column), this._getPiece(PieceType.blackPawn, Side.black))
    }

    row = 7
    data.set(Square.get(row, 0), this._getPiece(PieceType.rook   , Side.black))
    data.set(Square.get(row, 1), this._getPiece(PieceType.knight , Side.black))
    data.set(Square.get(row, 2), this._getPiece(PieceType.bishop , Side.black))
    data.set(Square.get(row, 3), this._getPiece(PieceType.queen  , Side.black))
    data.set(Square.get(row, 4), this._getPiece(PieceType.king   , Side.black))
    data.set(Square.get(row, 5), this._getPiece(PieceType.bishop , Side.black))
    data.set(Square.get(row, 6), this._getPiece(PieceType.knight , Side.black))
    data.set(Square.get(row, 7), this._getPiece(PieceType.rook   , Side.black))  
  }
}