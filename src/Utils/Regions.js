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

    createHandlerAdapter(innerHandler) {
        var regions = new Regions(this.size);
        return (point) => {
            innerHandler(regions.pointToRegion(point));
        };
    }
}