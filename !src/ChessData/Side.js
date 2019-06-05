export default class Side {
    static staticConstructor() {
        Side.white = Symbol()
        Side.black = Symbol()
    }

    other() {
        if (this == Side.white) {
            return Side.black
            
        } else {
            return Side.white

        }
    }
}

Side.staticConstructor()
