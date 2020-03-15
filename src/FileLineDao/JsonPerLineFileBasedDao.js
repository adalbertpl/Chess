import fs from "fs";

export default class JsonPerLineFileBasedDao {
    static get(filePath) {
        this.filePath = filePath;
        this.delimiterSerializer = new DelimiterSerializer("\r\n");
    }

    load(id) {
        var objects = this._loadAll();
        return objects.find(x => x.id == id);
    }

    save(object) {
        var id = object.id;
        var objects = this._loadAll();
        objects = objects.filter(x => x.id == id);
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