import StartPosition from "../ChessRules/StartPosition"
import MoveChecker from "../ChessRules/MoveChecker"
import MoveMaker from "../ChessRules/MoveMaker"
import fs from "fs";
import { stringify } from "querystring";

export class ChessMiniModule {
    constructor(gameHistoryDao) {
        this.currentGame = new OneChessMiniGame();
        this.gameHistoryDao = gameHistoryDao
    }

    restartGame() {
        this.currentGame = new OneChessMiniGame();
    }

    saveGame() {
        this.gameHistoryDao.save(this.currentGame.moveHistory);
    }
}

class Dao {
    constructor(dbPath, entityName, serializer, deserializer) {
        // this.entityName = "GameHistory";
        // var dbPath = "./db";
        var fileName = `${entityName}.dat`;
        this.filePath = `${dbPath}/${fileName}`;
        this.serializer = serializer;
        this.deserializer = deserializer;
        this.collection = null;
        this.fileToCollection();
    }

    save(entity) {
        if (this.collection[entity.id] == null)
            this.collection.push(entity);

        this.collectionToFile();
    }

    collectionToFile() {
        var data = this.marshallEntityCollection();
        fs.writeFileSync(this.filePath, data);
    }

    fileToCollection() { 
        var data = fs.readFileSync(this.filePath);
        this.unmarshallEntityCollection(data);
    }

    marshallEntityCollection() {
        var data = "";
        for (var entity of this.collection) {
            var line = this.serializer(entity);
            data += line + "\n";
        }
        return data;
    }
    
    unmarshallEntityCollection(data) {
        var lines = data.split(/\r?\n/);
        this.collection = {};
        for (var line of lines) {
            line = line.replace("\\n", "\n").replace("\\\\", "\\");
            var entity = this.deserializer(line);
            // var values = this.unmarshallValues(line);
            // var entity = this.entityDescription.reconstructor(...values);
            this.collection[entity.id] = entity;
        }
    }

    // marshallValues(values) {
    //     var i = 0;
    //     var line = "";
    //     for (var value of values) {
    //         var cell = this.valueSerializer(i, value);
    //         line += cell + "\t";
    //         i++;
    //     }
    //     return line;
    // }

    // unmarshallValues(line) {
    //     var values = [];
    //     var cells = line.split("\t");
    //     var i = 0;
    //     for (var cell of cells) {
    //         var element = this.valueParser(i, cell);
    //         list.push(element);
    //         i++;
    //     }
    //     return values
    // }
}

class GameHistoryDao {
    constructor() {

        this.elementParser = (_, x) => MoveParser.parse(x);
        this.valueSerializer = (_, x) => x.toString();
        
    }
}

class OneChessMiniGame {
    constructor() {
        this.gamePosition = StartPosition.get();
        this.moveHistory = [];
    }

    showPosition() {
        return this.gamePosition.piecesPosition;
    }

    getSideOnMove() {
        return this.gamePosition.currentSide;
    }

    // throws: no client error
    checkMove(move) {
        try {
            MoveChecker.checkMove(this.gamePosition, move);
            return new ValidMoveResult();

        } catch (e) {
            return new InvalidMoveResult(e.message);
        }
    }

    // throws: on invalid move
    makeMove(move) {
        MoveChecker.checkMove(this.gamePosition, move);
        return this._makeMove(move);
    }

    _makeMove(move) {
        this.moveHistory.push(move);
        var winner = MoveMaker.makeMove(this.gamePosition, move);
        if (winner == null)
            return null;
        return new WinnerResult(winner);  
    }
}

export class ValidMoveResult {}
export class InvalidMoveResult {
    constructor(message) {
        this.message = message;
    }
}
export class WinnerResult {
    constructor(winnerSide) {
        this.winnerSide = winnerSide;
    }
}