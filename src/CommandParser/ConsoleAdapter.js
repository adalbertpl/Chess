import CommandParser from "./CommandParser";

export default class ConsoleAdapter {
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