export default class CommandParser {
    constructor(api, methodDescriptions) {
        this.api = api;
        this.methodDescriptions = methodDescriptions;
    }

    parse(cmdStr) {
        var input = cmdStr.split(" ")
        if (input[0] == "help")
            return this.printHelp();

        var methodNames = Object.keys(this.methodDescriptions);
        if (methodNames.includes(input[0])) {
            var methodName = input[0];
            return this.api[methodName](...input.slice(1));
        }

        return "invalid command";
    }

    printHelp() {
        var msg = "";
        var vm = this;
        Object.keys(this.methodDescriptions).forEach(function(methodName) {
            var methodDesc = vm.methodDescriptions[methodName];
            var res = "\t" + methodName;
            for (var argDesc of methodDesc.argumentDescriptions) {
                res += " [" + argDesc.name + ": " + argDesc.description + "]"; 
            }
            res += ": " + methodDesc.description + "\n";
            msg += res;
        });
        return msg;
    }
}