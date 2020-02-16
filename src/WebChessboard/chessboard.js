import {EmptyChessboard} from "../HtmlDomWrapper/HtmlDomWrapper"

var root = window.document.getElementById("chessboard");



root.innerHTML = new EmptyChessboard({
    x: 8,
    y: 8
}).asHtml();