//import GameWithEngine from "./!src/GameWithEngine"
import GameApiForConsoleAdapter from "./!src/GameApiForConsoleAdapter";
import readline from "readline";
import ChessMiniApi from "./ChessMiniApi";
import ConsoleAdapter from "../CommandParser/ConsoleAdapter";

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

new ChessMiniApp().main();

