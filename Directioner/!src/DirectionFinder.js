import DirectionChecker from "./DirectionChecker"

export default class DirectionFinder {
    static find(directions, vec, data) {
        var checker = new DirectionChecker((mlt) => {
            return Number.isInteger(mlt) 
            && (mlt > 0)
        })

        for (var direction of directions) {
            var _data = {}
            var result = checker.check(vec, direction, _data)
            if (result == true) {
                data.mlt = _data.mlt
                return direction
            }
        }

        return null
    }
}