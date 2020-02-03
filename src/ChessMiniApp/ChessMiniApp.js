import ChessMiniAppApi from "./ChessMiniAppApi"
import CommandParser from "./!src/CommandParser"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class ChessMiniApp {
  main() {
    var app = new ChessMiniAppApi()
    var cmdParser = new CommandParser(app, ChessMiniAppApi.getDescription());
    
    rl.on('line', (inputStr) => {
      var msg = cmdParser.parse(inputStr);

      if (msg != "")
          console.log(msg);
    })
  }
}

new ChessMiniApp().main()