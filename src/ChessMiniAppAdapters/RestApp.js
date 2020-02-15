import express from "express"
import ChessMiniAppApi from "../ChessMiniApp/ChessMiniAppApi";

var app = express();
app.use(express.json({
    strict: false
}));
var chessMiniApp = new ChessMiniAppApi();

app.post("/makeMove", (req, res) => {
    
    var msg = chessMiniApp.makeMove(req.body);
    res.json(msg);
});
app.get("/showPosition", (req, res) => {
    var msg = chessMiniApp.showPosition();
    res.json(msg);
});
app.listen(3000, () => {
    console.log("ChessMiniApp rest adapter is working");
});
