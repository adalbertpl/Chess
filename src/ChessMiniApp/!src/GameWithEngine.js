import GameObserverDecorator from "./GameObserverDecorator";
import GameClient from "./GameClient";
import {ChessMiniModule} from "../ChessMiniModule";

export default class GameWithEngine {
    static bootstrap() {
        var game = new ChessMiniModule();
        game = new GameObserverDecorator(game);


        var blackGameApi = new GameClient(Side.black, game);
        var whiteGameApi = new GameClient(Side.white, game);
        var engine = null; //new Engine();
        ISimpleEngine.is(engine);
    
        handleEvent = () => {
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
        if (object.findBestMove != null)
            throw new Error("Wrong type");
    }
}