import ChessMiniAppApi from "./ChessMiniAppApi"
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

class ChessMiniApp {
  main() {
    var app = new ChessMiniAppApi()
    
    rl.on('line', (inputStr) => {
      var msg = ""
      var input = inputStr.split(" ")

      if (input[0] == "makeMove") {
        msg = app.makeMove(input[1])

      } else if (input[0] == "checkMove") {
        msg = app.checkMove(input[1])
      
      } else if (input[0] == "showPosition") {
        msg = app.showPosition()
      
      } else {
        msg = "invalid command"
      }

      if (msg != "") {
          console.log(msg);
      }
    })
  }
}

new ChessMiniApp().main()