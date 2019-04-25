export default class BoardLimits {
    static validate(sq) {
        var boardRange = IntRange.get(0, 8)
        var testedNumbers = [sq.row, sq.column]

        if (! boardRange.containsAll(testedNumbers)) {
            throw Error("bad square")
        }
    }
}

class IntRange {
    constructor(from, until) {
        this.from = from
        this.until = until
    }

    static get(f, u) {
        return new IntRange(f, u)
    }

    containsAll(numbers) {
        return numbers.every((x) => 
            this.from <= x && x < this.until
        )
    }
}