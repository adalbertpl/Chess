export default class Regions {
    constructor(size) {
        this.size = size;
    }

    pointToRegion(point) {
        return {
            x: Math.floor(point.x / this.size),
            y: Math.floor(point.y / this.size)
        }
    }
}