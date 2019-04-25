This is ChessMiniApp Repository

To build application, use build.ps1 script.
To run unit tests, use jest.
To run built app go into ..\bin\ChessMiniApp and use this command:
> node .\ChessMiniApp.js
Before building application or running tests you need to install these packages
on parent(..) folder:

{
    "dependencies": {
        "babel-core": "^6.26.3",
        "babel-jest": "^20.0.3",
        "babel-loader": "^7.1.5",
        "babel-plugin-transform-runtime": "^6.23.0",
        "babel-preset-es2015": "^6.24.1",
        "babel-runtime": "^6.26.0",
        "webpack": "^3.12.0"
    }
}