export default class Dictionary {
    constructor(tKey, tValue) {
        this.tKey = tKey;
        this.tValue = tValue;
        this.data = new Map();
    }

    get(key) {
        return this.data.get(key);
    }

    set(key, value) {
        this.data.set(key, value);
    }

    keys() {
        return this.data.keys();
    }
}