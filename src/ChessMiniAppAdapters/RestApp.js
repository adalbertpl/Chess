import express from "express"
import ChessMiniAppApi from "../ChessMiniApp/ChessMiniAppApi";
import cors from "cors";

var app = express();
app.use(cors());
app.use(express.json({
    strict: false
}));
var chessMiniApp = new ChessMiniAppApi();

app.post("/makeMove", (req, res) => {
    console.log("restapp body: " + JSON.stringify(req.body));
    var msg = chessMiniApp.makeMove(req.body.move);
    res.json(msg);
});
app.get("/showPosition", (req, res) => {
    var msg = chessMiniApp.showPosition();
    res.json(msg);
});
app.listen(3000, () => {
    console.log("ChessMiniApp rest adapter is working");
});
