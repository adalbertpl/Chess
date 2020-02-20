import Move from "../ChessData/Move";

export default class RestClientApi {
    static staticConstructor() {
        this.apiAddress = "http://localhost:3000";
    }

    static makeMove(squareFrom, squareTo) {
        var move = new Move(squareFrom, squareTo);
        var moveStr = unparseMove(move);
        return fetch(RestClientApi.apiAddress + "/makeMove", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                move: moveStr
            })
        }).then((response) => response.json());
    }

    static getPosition() {
        return fetch(RestClientApi.apiAddress + "/showPosition")
        .then((response) => response.json());
    }
}

RestClientApi.staticConstructor();

function unparseMove(move) {
    var moveStr = serializeSquare(move.from) + "-" + serializeSquare(move.to);
    return moveStr;
}

function serializeSquare(square) {
    return String.fromCharCode(97 + square.column) + (square.row + 1);
}