//import GameWithEngine from "./!src/GameWithEngine"
import CommandParser from "../CommandParser/CommandParser"
import GameConsoleDecorator from "./!src/GameConsoleDecorator";
import readline from "readline"
import { ChessMiniModuleWithEngine } from "./ChessMiniModule";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class ChessMiniApp {
  main() {
    var app = new GameConsoleDecorator(new ChessMiniModuleWithEngine());
    var cmdParser = new CommandParser(app, GameConsoleDecorator.getDescription());
    
    rl.on('line', (inputStr) => {
      console.log("parsing command");
      var msg = cmdParser.parse(inputStr);

      if (msg != "")
          console.log(msg);
    })
  }
}

new ChessMiniApp().main()