(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Side =
/*#__PURE__*/
function () {
  function Side() {
    _classCallCheck(this, Side);
  }

  _createClass(Side, [{
    key: "other",
    value: function other() {
      if (this == Side.white) {
        return Side.black;
      } else {
        return Side.white;
      }
    }
  }], [{
    key: "staticConstructor",
    value: function staticConstructor() {
      Side.white = Symbol();
      Side.black = Symbol();
    }
  }]);

  return Side;
}();

exports["default"] = Side;
Side.staticConstructor();
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _SquareParser = _interopRequireDefault(require("./SquareParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square =
/*#__PURE__*/
function () {
  function Square(r, c) {
    _classCallCheck(this, Square);

    this.row = r;
    this.column = c;
  }

  _createClass(Square, [{
    key: "key",
    value: function key() {
      return "[" + this.row + " " + this.column + "]";
    }
  }, {
    key: "prim",
    value: function prim() {
      return [this.row, this.column];
    }
  }], [{
    key: "get",
    value: function get(rowOrSquareString, column) {
      if (typeof rowOrSquareString === 'string') {
        var squareString = rowOrSquareString;
        return _SquareParser["default"].parse(squareString);
      }

      var row = rowOrSquareString;
      return new Square(row, column);
    }
  }]);

  return Square;
}();

exports["default"] = Square;
},{"./SquareParser":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Square = _interopRequireDefault(require("./Square"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SquareParser =
/*#__PURE__*/
function () {
  function SquareParser() {
    _classCallCheck(this, SquareParser);
  }

  _createClass(SquareParser, null, [{
    key: "parse",
    value: function parse(str) {
      var column = this._columnLetterToNumber(str.charAt(0));

      var row = this._rowDisplayNumberToNumber(str.charAt(1));

      return _Square["default"].get(row, column);
    }
  }, {
    key: "_rowDisplayNumberToNumber",
    value: function _rowDisplayNumberToNumber(displayNumber) {
      var number = displayNumber.charCodeAt(0) - 49; //AsciiCodes.one

      if (number < 0 || number >= 8) {
        throw new Error("Bad row");
      }

      return number;
    }
  }, {
    key: "_columnLetterToNumber",
    value: function _columnLetterToNumber(letter) {
      var number = letter.charCodeAt(0) - 97; //AsciiCodes.smallA

      if (number < 0 || number >= 8) {
        throw new Error("Bad column");
      }

      return number;
    }
  }]);

  return SquareParser;
}();

exports["default"] = SquareParser;
},{"./Square":2}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Vector = _interopRequireDefault(require("AmUtils/Vector"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Direction =
/*#__PURE__*/
function () {
  function Direction() {
    _classCallCheck(this, Direction);
  }

  _createClass(Direction, null, [{
    key: "staticConstructor",
    value: function staticConstructor() {
      this.up = _Vector["default"].get([1, 0]);
      this.down = _Vector["default"].get([-1, 0]);
      this.right = _Vector["default"].get([0, 1]);
      this.left = _Vector["default"].get([0, -1]);
      this.upLeft = this.up.clone().add(this.left);
      this.upRight = this.up.clone().add(this.right);
      this.downLeft = this.down.clone().add(this.left);
      this.downRight = this.down.clone().add(this.right);
    }
  }]);

  return Direction;
}();

exports["default"] = Direction;
Direction.staticConstructor();
},{"AmUtils/Vector":30}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Piece = function Piece(pieceType, side) {
  _classCallCheck(this, Piece);

  this.pieceType = pieceType;
  this.side = side;
};

exports["default"] = Piece;
},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Pawn = _interopRequireDefault(require("../Pawn"));

var _Rook = _interopRequireDefault(require("../Rook"));

var _Knight = _interopRequireDefault(require("../Knight"));

var _Bishop = _interopRequireDefault(require("../Bishop"));

var _Queen = _interopRequireDefault(require("../Queen"));

var _King = _interopRequireDefault(require("../King"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PieceType =
/*#__PURE__*/
function () {
  function PieceType() {
    _classCallCheck(this, PieceType);
  }

  _createClass(PieceType, null, [{
    key: "staticConstructor",
    value: function staticConstructor() {
      this.pawn = PieceType.validate(_Pawn["default"].get());
      this.rook = PieceType.validate(_Rook["default"].get());
      this.knight = PieceType.validate(_Knight["default"].get());
      this.bishop = PieceType.validate(_Bishop["default"].get());
      this.queen = PieceType.validate(_Queen["default"].get());
      this.king = PieceType.validate(_King["default"].get());
    }
  }, {
    key: "validate",
    value: function validate(obj) {
      if (typeof obj.checkMove !== 'function') {
        throw new Error("invalid type");
      }

      return obj;
    }
  }]);

  return PieceType;
}();

exports["default"] = PieceType;
PieceType.staticConstructor();
},{"../Bishop":7,"../King":8,"../Knight":9,"../Pawn":10,"../Queen":11,"../Rook":12}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Slider = _interopRequireDefault(require("../UniChessPieces/Slider"));

var _Direction = _interopRequireDefault(require("./!data-classes/Direction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Bishop =
/*#__PURE__*/
function () {
  function Bishop() {
    _classCallCheck(this, Bishop);
  }

  _createClass(Bishop, null, [{
    key: "get",
    value: function get() {
      return new _Slider["default"](true, 8, [_Direction["default"].upLeft, _Direction["default"].upRight, _Direction["default"].downLeft, _Direction["default"].downRight]);
    }
  }]);

  return Bishop;
}();

exports["default"] = Bishop;
},{"../UniChessPieces/Slider":23,"./!data-classes/Direction":4}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Mover = _interopRequireDefault(require("../UniChessPieces/Mover"));

var _Union = _interopRequireDefault(require("../UniChessPieces/Union"));

var _Direction = _interopRequireDefault(require("./!data-classes/Direction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var King =
/*#__PURE__*/
function () {
  function King() {
    _classCallCheck(this, King);
  }

  _createClass(King, null, [{
    key: "get",
    value: function get() {
      return new _Union["default"]([new _Mover["default"](null, [_Direction["default"].upLeft, _Direction["default"].upRight, _Direction["default"].downLeft, _Direction["default"].downRight]), new _Mover["default"](null, [_Direction["default"].up, _Direction["default"].down, _Direction["default"].left, _Direction["default"].right])]);
    }
  }]);

  return King;
}();

exports["default"] = King;
},{"../UniChessPieces/Mover":22,"../UniChessPieces/Union":25,"./!data-classes/Direction":4}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Union = _interopRequireDefault(require("../UniChessPieces/Union"));

var _Direction = _interopRequireDefault(require("./!data-classes/Direction"));

var _Mover = _interopRequireDefault(require("../UniChessPieces/Mover"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Knight =
/*#__PURE__*/
function () {
  function Knight() {
    _classCallCheck(this, Knight);
  }

  _createClass(Knight, null, [{
    key: "get",
    value: function get() {
      return new _Union["default"]([new _Mover["default"](null, [_Direction["default"].upLeft.clone().add(_Direction["default"].up), _Direction["default"].upLeft.clone().add(_Direction["default"].left), _Direction["default"].upRight.clone().add(_Direction["default"].up), _Direction["default"].upRight.clone().add(_Direction["default"].right), _Direction["default"].downLeft.clone().add(_Direction["default"].left), _Direction["default"].downLeft.clone().add(_Direction["default"].down), _Direction["default"].downRight.clone().add(_Direction["default"].right), _Direction["default"].downRight.clone().add(_Direction["default"].down)])]);
    }
  }]);

  return Knight;
}();

exports["default"] = Knight;
},{"../UniChessPieces/Mover":22,"../UniChessPieces/Union":25,"./!data-classes/Direction":4}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Union = _interopRequireDefault(require("../UniChessPieces/Union"));

var _Direction = _interopRequireDefault(require("./!data-classes/Direction"));

var _Slider = _interopRequireDefault(require("../UniChessPieces/Slider"));

var _Mover = _interopRequireDefault(require("../UniChessPieces/Mover"));

var _StartLimiter = _interopRequireDefault(require("../UniChessPieces/StartLimiter"));

var _Side = _interopRequireDefault(require("../ChessData/Side"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pawn =
/*#__PURE__*/
function () {
  function Pawn() {
    _classCallCheck(this, Pawn);
  }

  _createClass(Pawn, null, [{
    key: "get",
    value: function get() {
      var _this = this;

      return new _Union["default"]([new _StartLimiter["default"](new _Slider["default"](false, 2, [_Direction["default"].up]), function (from, side) {
        return from.row == _this._getStartRank(side);
      }), new _Mover["default"](true, [_Direction["default"].upLeft, _Direction["default"].upRight]), new _Mover["default"](false, [_Direction["default"].up])]);
    }
  }, {
    key: "_getStartRank",
    value: function _getStartRank(side) {
      if (side == _Side["default"].white) {
        return 1;
      } else {
        return 6;
      }
    }
  }]);

  return Pawn;
}();

exports["default"] = Pawn;
},{"../ChessData/Side":1,"../UniChessPieces/Mover":22,"../UniChessPieces/Slider":23,"../UniChessPieces/StartLimiter":24,"../UniChessPieces/Union":25,"./!data-classes/Direction":4}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Slider = _interopRequireDefault(require("../UniChessPieces/Slider"));

var _Union = _interopRequireDefault(require("../UniChessPieces/Union"));

var _Direction = _interopRequireDefault(require("./!data-classes/Direction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queen =
/*#__PURE__*/
function () {
  function Queen() {
    _classCallCheck(this, Queen);
  }

  _createClass(Queen, null, [{
    key: "get",
    value: function get() {
      return new _Union["default"]([new _Slider["default"](true, 8, [_Direction["default"].upLeft, _Direction["default"].upRight, _Direction["default"].downLeft, _Direction["default"].downRight]), new _Slider["default"](true, 8, [_Direction["default"].up, _Direction["default"].down, _Direction["default"].left, _Direction["default"].right])]);
    }
  }]);

  return Queen;
}();

exports["default"] = Queen;
},{"../UniChessPieces/Slider":23,"../UniChessPieces/Union":25,"./!data-classes/Direction":4}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Slider = _interopRequireDefault(require("../UniChessPieces/Slider"));

var _Union = _interopRequireDefault(require("../UniChessPieces/Union"));

var _Direction = _interopRequireDefault(require("./!data-classes/Direction"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Rook =
/*#__PURE__*/
function () {
  function Rook() {
    _classCallCheck(this, Rook);
  }

  _createClass(Rook, null, [{
    key: "get",
    value: function get() {
      return new _Slider["default"](true, 8, [_Direction["default"].up, _Direction["default"].down, _Direction["default"].left, _Direction["default"].right]);
    }
  }]);

  return Rook;
}();

exports["default"] = Rook;
},{"../UniChessPieces/Slider":23,"../UniChessPieces/Union":25,"./!data-classes/Direction":4}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var CaptureChecker =
/*#__PURE__*/
function () {
  function CaptureChecker() {
    _classCallCheck(this, CaptureChecker);
  }

  _createClass(CaptureChecker, null, [{
    key: "check",
    value: function check(captureConf, endPiece, pieceSide) {
      if (captureConf == null) {
        if (endPiece != null && endPiece.side == pieceSide) {
          return "cannot capture own piece";
        }

        return "";
      }

      if (captureConf == false) {
        if (endPiece != null) {
          return "cannot capture";
        }

        return "";
      }

      if (captureConf == true) {
        if (endPiece == null) {
          return "no piece to capture";
        }

        if (endPiece.side == pieceSide) {
          return "cannot capture own piece";
        }
      }

      return "programming error: all values checked";
    }
  }]);

  return CaptureChecker;
}();

exports["default"] = CaptureChecker;
},{}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DirectionChecker =
/*#__PURE__*/
function () {
  function DirectionChecker(plusCondition) {
    _classCallCheck(this, DirectionChecker);

    this.plusCondition = plusCondition;
  }

  _createClass(DirectionChecker, [{
    key: "check",
    value: function check(vec, direction, data) {
      var plusCondition = this.plusCondition;
      var divided = vec.clone().divideEl(direction);
      data.mlt = this._getNumberIgnNan(divided);

      if (data.mlt == null) {
        return false;
      }

      if (plusCondition && !plusCondition(data.mlt)) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "_getNumberIgnNan",
    value: function _getNumberIgnNan(divided) {
      if (Number.isFinite(divided.x) && Number.isNaN(divided.y)) {
        return divided.x;
      } else if (Number.isFinite(divided.x) && divided.x == divided.y) {
        return divided.x;
      } else if (Number.isNaN(divided.x) && Number.isFinite(divided.y)) {
        return divided.y;
      }

      return null;
    }
  }]);

  return DirectionChecker;
}();

exports["default"] = DirectionChecker;
},{}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _DirectionChecker = _interopRequireDefault(require("./DirectionChecker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DirectionFinder =
/*#__PURE__*/
function () {
  function DirectionFinder() {
    _classCallCheck(this, DirectionFinder);
  }

  _createClass(DirectionFinder, null, [{
    key: "find",
    value: function find(directions, vec, data) {
      var checker = new _DirectionChecker["default"](function (mlt) {
        return Number.isInteger(mlt) && mlt > 0;
      });
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = directions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var direction = _step.value;
          var _data = {};
          var result = checker.check(vec, direction, _data);

          if (result == true) {
            data.mlt = _data.mlt;
            return direction;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return null;
    }
  }]);

  return DirectionFinder;
}();

exports["default"] = DirectionFinder;
},{"./DirectionChecker":14}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Side = _interopRequireDefault(require("../../ChessData/Side"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DirectionTransformer =
/*#__PURE__*/
function () {
  function DirectionTransformer() {
    _classCallCheck(this, DirectionTransformer);
  }

  _createClass(DirectionTransformer, null, [{
    key: "transform",
    value: function transform(directions, pieceSide) {
      if (pieceSide == _Side["default"].black) {
        return directions.map(function (d) {
          return d.clone().setX(-d.x);
        });
      } else {
        return directions;
      }
    }
  }]);

  return DirectionTransformer;
}();

exports["default"] = DirectionTransformer;
},{"../../ChessData/Side":1}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Square = _interopRequireDefault(require("../../PiecesBoard/Square"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var IntermediatePieceFinder =
/*#__PURE__*/
function () {
  function IntermediatePieceFinder() {
    _classCallCheck(this, IntermediatePieceFinder);
  }

  _createClass(IntermediatePieceFinder, null, [{
    key: "find",
    value: function find(from, direction, mlt, piecesPosition) {
      var step = 1;
      var current = from.clone().add(direction);

      while (step != mlt) {
        var x = current.x,
            y = current.y;

        var square = _Square["default"].get(x, y);

        var piece = piecesPosition.get(square);

        if (piece != null) {
          return piece;
        }

        current.add(direction);
        step++;
      }

      return null;
    }
  }]);

  return IntermediatePieceFinder;
}();

exports["default"] = IntermediatePieceFinder;
},{"../../PiecesBoard/Square":21}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Vector = _interopRequireDefault(require("AmUtils/Vector"));

var _DirectionFinder = _interopRequireDefault(require("./!src/DirectionFinder"));

var _CaptureChecker = _interopRequireDefault(require("./!src/CaptureChecker"));

var _DirectionTransformer = _interopRequireDefault(require("./!src/DirectionTransformer"));

var _IntermediatePieceFinder = _interopRequireDefault(require("./!src/IntermediatePieceFinder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Directioner =
/*#__PURE__*/
function () {
  function Directioner(captureConf, stepLimit, directions) {
    _classCallCheck(this, Directioner);

    this.captureConf = captureConf;
    this.stepLimit = stepLimit;
    this.directions = directions;
  }

  _createClass(Directioner, [{
    key: "checkMove",
    value: function checkMove(sFrom, sTo, piecesPosition) {
      var from = _Vector["default"].get(sFrom.prim());

      var vec = _Vector["default"].get(sTo.prim());

      var pieceSide = piecesPosition.get(sFrom).side;
      vec.subtract(from);

      var directions = _DirectionTransformer["default"].transform(this.directions, pieceSide);

      var data = {};

      var direction = _DirectionFinder["default"].find(directions, vec, data);

      if (direction == null) {
        return "cannot move onto this square";
      }

      var mlt = data.mlt;

      if (mlt > this.stepLimit) {
        return "cannot move so far";
      }

      var piece = _IntermediatePieceFinder["default"].find(from, direction, mlt, piecesPosition);

      if (piece != null) {
        return "cannot jump";
      }

      var endPiece = piecesPosition.get(sTo);

      var msg = _CaptureChecker["default"].check(this.captureConf, endPiece, pieceSide);

      if (msg != "") {
        return msg;
      }

      return "";
    }
  }]);

  return Directioner;
}();

exports["default"] = Directioner;
},{"./!src/CaptureChecker":13,"./!src/DirectionFinder":15,"./!src/DirectionTransformer":16,"./!src/IntermediatePieceFinder":17,"AmUtils/Vector":30}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LetterBlock = exports.ListAsHtmlTransformer = exports.HorizontalLine = exports.EmptyChessboard = exports.VerticalLine = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var VerticalLine =
/*#__PURE__*/
function () {
  function VerticalLine(height, position) {
    _classCallCheck(this, VerticalLine);

    this.height = height;
    this.position = position;
  }

  _createClass(VerticalLine, [{
    key: "asHtml",
    value: function asHtml() {
      return new HtmlDomElement("div", {
        style: new StyleAttribute({
          width: "1px",
          height: "" + this.height + "px",
          position: "absolute",
          left: "" + this.position.x + "px",
          top: "" + this.position.y + "px",
          "background-color": "rgb(0, 0, 0)"
        })
      }, "").asHtml();
    }
  }]);

  return VerticalLine;
}();

exports.VerticalLine = VerticalLine;

var EmptyChessboard =
/*#__PURE__*/
function () {
  function EmptyChessboard(size) {
    _classCallCheck(this, EmptyChessboard);

    this.size = size;
  }

  _createClass(EmptyChessboard, [{
    key: "asHtml",
    value: function asHtml() {
      var list = [];

      for (var i = 0; i < this.size.x; i++) {
        list.push(new VerticalLine((this.size.y - 1) * 30, {
          x: 15 + 30 * i,
          y: 15
        }));
      }

      for (var i = 0; i < this.size.y; i++) {
        list.push(new HorizontalLine((this.size.x - 1) * 30, {
          x: 15,
          y: 15 + 30 * i
        }));
      }

      return ListAsHtmlTransformer.asHtml(list);
    }
  }]);

  return EmptyChessboard;
}();

exports.EmptyChessboard = EmptyChessboard;

var HorizontalLine =
/*#__PURE__*/
function () {
  function HorizontalLine(width, position) {
    _classCallCheck(this, HorizontalLine);

    this.width = width;
    this.position = position;
  }

  _createClass(HorizontalLine, [{
    key: "asHtml",
    value: function asHtml() {
      return new HtmlDomElement("div", {
        style: new StyleAttribute({
          height: "1px",
          width: "" + this.width + "px",
          position: "absolute",
          left: "" + this.position.x + "px",
          top: "" + this.position.y + "px",
          "background-color": "rgb(0, 0, 0)"
        })
      }, "").asHtml();
    }
  }]);

  return HorizontalLine;
}();

exports.HorizontalLine = HorizontalLine;

var ListAsHtmlTransformer =
/*#__PURE__*/
function () {
  function ListAsHtmlTransformer() {
    _classCallCheck(this, ListAsHtmlTransformer);
  }

  _createClass(ListAsHtmlTransformer, null, [{
    key: "asHtml",
    value: function asHtml(list) {
      var result = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var htmlTransformable = _step.value;
          result += htmlTransformable.asHtml();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }]);

  return ListAsHtmlTransformer;
}();

exports.ListAsHtmlTransformer = ListAsHtmlTransformer;

var LetterBlock =
/*#__PURE__*/
function () {
  function LetterBlock(letter, size, position) {
    _classCallCheck(this, LetterBlock);

    this.letter = letter;
    this.size = size;
    this.position = position;
  }

  _createClass(LetterBlock, [{
    key: "asHtml",
    value: function asHtml() {
      return new HtmlDomElement("div", {
        width: "" + this.width + "px",
        height: "" + this.height + "px",
        left: "" + this.position.x + "px",
        top: "" + this.position.y + "px"
      }, this.letter).asHtml();
    }
  }]);

  return LetterBlock;
}();

exports.LetterBlock = LetterBlock;

var StyleAttribute =
/*#__PURE__*/
function () {
  function StyleAttribute(cssDeclarations) {
    _classCallCheck(this, StyleAttribute);

    this.cssDeclarations = cssDeclarations;
  }

  _createClass(StyleAttribute, [{
    key: "valueAsHtml",
    value: function valueAsHtml() {
      var result = "";

      for (var _i = 0, _Object$keys = Object.keys(this.cssDeclarations); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        result += key + ": " + this.cssDeclarations[key] + "; ";
      }

      return result;
    }
  }]);

  return StyleAttribute;
}();

var HtmlDomElement =
/*#__PURE__*/
function () {
  function HtmlDomElement(name, attributes, content) {
    _classCallCheck(this, HtmlDomElement);

    this.name = name;
    this.content = content;
    this.attributes = attributes;
  }

  _createClass(HtmlDomElement, [{
    key: "asHtml",
    value: function asHtml() {
      var result = "<" + this.name;

      for (var _i2 = 0, _Object$keys2 = Object.keys(this.attributes); _i2 < _Object$keys2.length; _i2++) {
        var key = _Object$keys2[_i2];
        var value = this.attributes[key];

        if (key == "style") {
          value = value.valueAsHtml();
        }

        result += " " + key + "='" + value + "'";
      }

      result += ">";
      result += this.content;
      result += "</" + this.name + ">";
      return result;
    }
  }]);

  return HtmlDomElement;
}();
},{}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PiecesBoard =
/*#__PURE__*/
function () {
  function PiecesBoard() {
    _classCallCheck(this, PiecesBoard);

    this.data = new Map();
  }

  _createClass(PiecesBoard, [{
    key: "get",
    value: function get(square) {
      var key = square.key();
      return this.data.get(key);
    }
  }, {
    key: "set",
    value: function set(square, piece) {
      var key = square.key();
      this.data.set(key, piece);
    }
  }, {
    key: "movePiece",
    value: function movePiece(from, to) {
      var piece = this.get(from);
      this.set(to, piece);
      this.set(from, null);
    }
  }]);

  return PiecesBoard;
}();

exports["default"] = PiecesBoard;
},{}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Square =
/*#__PURE__*/
function () {
  function Square(r, c) {
    _classCallCheck(this, Square);

    this.row = r;
    this.column = c;
  }

  _createClass(Square, [{
    key: "key",
    value: function key() {
      return "[" + this.row + " " + this.column + "]";
    }
  }, {
    key: "prim",
    value: function prim() {
      return [this.row, this.column];
    }
  }], [{
    key: "get",
    value: function get(r, c) {
      return new Square(r, c);
    }
  }]);

  return Square;
}();

exports["default"] = Square;
},{}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Directioner = _interopRequireDefault(require("../Directioner/Directioner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Mover =
/*#__PURE__*/
function () {
  function Mover(captureConf, directions) {
    _classCallCheck(this, Mover);

    this.directioner = new _Directioner["default"](captureConf, 1, directions);
  }

  _createClass(Mover, [{
    key: "checkMove",
    value: function checkMove(from, to, piecePositions) {
      return this.directioner.checkMove(from, to, piecePositions);
    }
  }]);

  return Mover;
}();

exports["default"] = Mover;
},{"../Directioner/Directioner":18}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Directioner = _interopRequireDefault(require("../Directioner/Directioner"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Slider =
/*#__PURE__*/
function () {
  function Slider(canCapture, stepLimit, directions) {
    _classCallCheck(this, Slider);

    var captureConf = canCapture == true ? null : false;
    this.directioner = new _Directioner["default"](captureConf, stepLimit, directions);
  }

  _createClass(Slider, [{
    key: "checkMove",
    value: function checkMove(from, to, piecesPosition) {
      return this.directioner.checkMove(from, to, piecesPosition);
    }
  }]);

  return Slider;
}();

exports["default"] = Slider;
},{"../Directioner/Directioner":18}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StartLimiter =
/*#__PURE__*/
function () {
  function StartLimiter(pieceTypeChecker, startCondition) {
    _classCallCheck(this, StartLimiter);

    this.pieceTypeChecker = pieceTypeChecker;
    this.startCondition = startCondition;
  }

  _createClass(StartLimiter, [{
    key: "checkMove",
    value: function checkMove(from, to, piecesPosition) {
      var piece = piecesPosition.get(from);
      var result = this.startCondition(from, piece.side);

      if (!result) {
        return "bad start square";
      }

      return this.pieceTypeChecker.checkMove(from, to, piecesPosition);
    }
  }]);

  return StartLimiter;
}();

exports["default"] = StartLimiter;
},{}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Union =
/*#__PURE__*/
function () {
  function Union(components) {
    _classCallCheck(this, Union);

    // e.g. Slider, Mover
    this.components = components;
  }

  _createClass(Union, [{
    key: "checkMove",
    value: function checkMove(from, to, piecesPosition) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.components[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var component = _step.value;
          var result = component.checkMove(from, to, piecesPosition);

          if (result == "") {
            return result;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return "invalid move";
    }
  }]);

  return Union;
}();

exports["default"] = Union;
},{}],26:[function(require,module,exports){
"use strict";

var _HtmlDomWrapper = require("../HtmlDomWrapper/HtmlDomWrapper");

var _PiecesBoard = _interopRequireDefault(require("../PiecesBoard/PiecesBoard"));

var _SquareParser = _interopRequireDefault(require("../ChessData/SquareParser"));

var _Side = _interopRequireDefault(require("../ChessData/Side"));

var _PieceType = _interopRequireDefault(require("../ChessPieces/!data-classes/PieceType"));

var _Piece = _interopRequireDefault(require("../ChessPieces/!data-classes/Piece"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var root = window.document.getElementById("chessboard");
root.innerHTML = new _HtmlDomWrapper.EmptyChessboard({
  x: 8,
  y: 8
}).asHtml();
fetch("http://localhost:3000/showPosition").then(function (response) {
  return response.json();
}).then(function (data) {
  root.innerHTML += data;
  deserializePosition(data);
});

function deserializePosition(sPosition) {
  var sSquarePieces = sPosition.split(",");
  window.piecesBoard = new _PiecesBoard["default"]();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = sSquarePieces[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var sSquarePiece = _step.value;
      console.log(sSquarePiece);
      var sPiece = sSquarePiece.substring(2, 2 + 1);
      var sSquare = sSquarePiece.substring(0, 2);

      var square = _SquareParser["default"].parse(sSquare);

      var piece = symbolToPiece(sPiece);
      window.piecesBoard.set(square, piece);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function symbolToPiece(sPiece) {
  var sPieceType = sPiece.toLowerCase();
  console.log(sPieceType);
  var side = sPiece == sPieceType ? _Side["default"].black : _Side["default"].white;

  var pieceType = _getChessPieceTypeBySymbolStr(sPieceType);

  return new _Piece["default"](pieceType, side);
}

function _getChessPieceTypeBySymbolStr(name) {
  var pieceTypes = {
    "p": _PieceType["default"].pawn,
    "n": _PieceType["default"].knight,
    "b": _PieceType["default"].bishop,
    "r": _PieceType["default"].rook,
    "q": _PieceType["default"].queen,
    "k": _PieceType["default"].king
  };
  return pieceTypes[name];
}
},{"../ChessData/Side":1,"../ChessData/SquareParser":3,"../ChessPieces/!data-classes/Piece":5,"../ChessPieces/!data-classes/PieceType":6,"../HtmlDomWrapper/HtmlDomWrapper":19,"../PiecesBoard/PiecesBoard":20}],27:[function(require,module,exports){
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;
},{}],28:[function(require,module,exports){
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;
},{}],29:[function(require,module,exports){
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;
},{}],30:[function(require,module,exports){
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Vector =
/*#__PURE__*/
function () {
  function Vector(x, y) {
    (0, _classCallCheck2["default"])(this, Vector);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2["default"])(Vector, [{
    key: "add",
    value: function add(vec) {
      this.x += vec.x;
      this.y += vec.y;
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(vec) {
      this.x -= vec.x;
      this.y -= vec.y;
      return this;
    }
  }, {
    key: "setX",
    value: function setX(num) {
      this.x = num;
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "divideEl",
    value: function divideEl(vec) {
      this.x = this.x / vec.x;
      this.y = this.y / vec.y;
      return this;
    }
  }], [{
    key: "get",
    value: function get(points) {
      return new Vector(points[0], points[1]);
    }
  }]);
  return Vector;
}();

exports["default"] = Vector;
},{"@babel/runtime/helpers/classCallCheck":27,"@babel/runtime/helpers/createClass":28,"@babel/runtime/helpers/interopRequireDefault":29}]},{},[26]);
