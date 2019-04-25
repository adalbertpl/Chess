export default class DirectionChecker {
    constructor(plusCondition) {
        this.plusCondition = plusCondition
    }

    check(vec, direction, data) {
        var plusCondition = this.plusCondition

        var divided = vec.clone().divideEl(direction)        
        data.mlt = this._getNumberIgnNan(divided)
        if (data.mlt == null) {
            return false
        }

        if (plusCondition && !plusCondition(data.mlt)){
            return false
        } else {
            return true
        }
        

    }

    _getNumberIgnNan(divided) {
        if (Number.isFinite(divided.x) && Number.isNaN(divided.y)) {
            return divided.x
        }
        
        else if (Number.isFinite(divided.x) && divided.x == divided.y) {
            return divided.x
        }

        else if (Number.isNaN(divided.x) && Number.isFinite(divided.y)) {
            return divided.y
        }

        return null
    }
}