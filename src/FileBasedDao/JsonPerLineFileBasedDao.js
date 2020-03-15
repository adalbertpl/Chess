import fs from "fs";

export default class JsonPerLineFileBasedDao {
    static get(filePath) {
        this.filePath = filePath;
        this.delimiterSerializer = new DelimiterSerializer("\r\n");
    }

    load(id) {
        var objects = this._loadAll();
        return objects.find(x => ByIdEqualitor.isMatchingId(x, id));
    }

    save(object) {
        ByIdEqualitor.trySetId(object);
        var objects = this._loadAll();
        objects = objects.filter(x => !ByIdEqualitor.areEqual(x, object));
        objects.push(object);
        this._saveAll(objects);
    }

    _saveAll(objects) {
        var lines = objects.map(x => JSON.stringify(x));
        var content = this.delimiterSerializer.serialize(lines);
        fs.writeFileSync(this.filePath, content);
    }

    _loadAll() {
        var content = fs.readFileSync(this.filePath);
        var lines = this.delimiterSerializer.deserialize(content);
        var objects = lines.map(x => JSON.parse(x));
        return objects;       
    }
}

class ByIdEqualitor {
    static trySetId(object) {
        if (object._id != null)
            return;
        object._id = this._uuidv4();
    }

    static areEqual(obj1, obj2) {
        return obj1._id == obj2._id;
    }

    static isMatchingId(obj, id) {
        return obj._id == id;
    }

    static _uuidv4() {
        // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}

class DelimiterSerializer {
    constructor(delimiter, delimiterEscaper) {
        this.delimiter = delimiter;
        this.delimiterEscaper = delimiterEscaper || null;
    }

    serialize(lines) {
        var dl = this.delimiter;
        if (this.delimiterEscaper != null)
            lines = lines.map(this.delimiterEscaper.escape);
        return lines.join(dl);
    }

    deserialize(input) {
        var dl = this.delimiter;
        var lines = input.split(dl);
        if (this.delimiterEscaper != null)
            lines = lines.map(this.delimiterEscaper.unescape);
        return lines;
    }
}