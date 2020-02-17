export default class ChessSides {
    static staticConstructor() {
        ChessSides.White = new ChessSide("white");
        ChessSides.Black = new ChessSide("black");
    }
}

class ChessSide {
    constructor(color) {
        this.color = color;
        this.name = color;
    }

    getRelativeDirections(directions) {
        if (this.color == "black")
            return directions.map(d => d.clone().setX(-d.x));
        else
            return directions;
    }
}

ChessSide.staticConstructor();