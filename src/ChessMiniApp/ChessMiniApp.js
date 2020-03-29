//import GameWithEngine from "./!src/GameWithEngine"
import CommandParser from "../CommandParser/CommandParser"
import GameApiForConsoleAdapter from "./!src/GameApiForConsoleAdapter";
import readline from "readline"
import ChessMiniApi from "./ChessMiniApi";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class ChessMiniApp {
  main() {
    var apiForConsole = new GameApiForConsoleAdapter(new ChessMiniApi());
    var consoleAdapter = new ConsoleAdapter(apiForConsole);
    consoleAdapter.attachToStream(rl);
  }
}

class ConsoleAdapter {
  constructor(apiForConsole) {
    this.apiForConsole = apiForConsole;
    this.cmdParser = new CommandParser(apiForConsole, apiForConsole.constructor.getDescription());
  }

  attachToStream(rl) {
    var cmdParser = this.cmdParser;
    rl.on('line', (inputStr) => {
      var msg = cmdParser.parse(inputStr);

      if (msg != "")
          console.log(msg);
    });
  }
}

new ChessMiniApp().main();

