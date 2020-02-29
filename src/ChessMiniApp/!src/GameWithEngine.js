import GameObserverDecorator from "./GameObserverDecorator";
import GameClient from "./GameClient";
import {ChessMiniModule} from "../ChessMiniModule";
import ChessSides from "../../ChessPieces/ChessSides";

export default class GameWithEngine {
    static bootstrap() {
        console.log("bootstrapping");
        var game = new ChessMiniModule();
        game = new GameObserverDecorator(game);


        var blackGameApi = new GameClient(ChessSides.Black, game);
        var whiteGameApi = new GameClient(ChessSides.White, game);
        var engine = {
            findBestMove: function() {
                return null;
            }
        }; //new Engine();
        ISimpleEngine.is(engine);
    
        var handleEvent = () => {
            console.log("handling event");
            var position = blackGameApi.showPosition();
            var move = engine.findBestMove(position);
            blackGameApi.makeMove(move);
        };
    
        var observer = () => handleEvent();
        game.setObserver(observer);

        var gameClient = whiteGameApi;
        return gameClient;
    }
}

class ISimpleEngine {
    static is(object) {
        if (object.findBestMove == null)
            throw new Error("Wrong type");
    }
}