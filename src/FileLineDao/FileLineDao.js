export default class TextFileLineDao {
    static get() {
        
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

    deserialize(input, output) {
        var dl = this.delimiter;
        var lines = input.split(dl);
        if (this.delimiterEscaper != null)
            lines = lines.map(this.delimiterEscaper.unescape);
        return lines;
    }
}