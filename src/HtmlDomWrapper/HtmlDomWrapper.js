

export class VerticalLine {
    constructor(height, position) {
        this.height = height;
        this.position = position
    }

    asHtml() {
        return new HtmlDomElement("div", {
            style: new StyleAttribute({
                width: "1px",
                height: "" + this.height + "px",
                position: "absolute",
                left: "" + this.position.x + "px",
                top: "" + this.position.y + "px",
                "background-color": "rgb(0, 0, 0)"
            })
        }, "").asHtml();
    }
}

export class EmptyChessboard {
    constructor(size) {
        this.size = size;
    }

    asHtml() {
        var list = [];
        for (var i = 0; i < this.size.x; i++) {
            list.push(new VerticalLine((this.size.y - 1) * 30, {
                x: 15 + 30 * i,
                y: 15
            }));
        }
        for (var i = 0; i < this.size.y; i++) {
            list.push(new HorizontalLine((this.size.x - 1) * 30, {
                x: 15,
                y: 15 + 30 * i
            }))
        }
        return ListAsHtmlTransformer.asHtml(list);
    }
}

export class HorizontalLine {
    constructor(width, position) {
        this.width = width;
        this.position = position
    }
    
    asHtml() {
        return new HtmlDomElement("div", {
            style: new StyleAttribute({
                height: "1px",
                width: "" + this.width + "px",
                position: "absolute",
                left: "" + this.position.x + "px",
                top: "" + this.position.y + "px",
                "background-color": "rgb(0, 0, 0)"
            })
        }, "").asHtml();
    }    
}

export class ListAsHtmlTransformer {
    static asHtml(list) {
        var result = "";
        for (var htmlTransformable of list) {
            result += htmlTransformable.asHtml();
        }
        return result;
    }
}

export class LetterBlock {
    constructor(letter, size, position) {
        this.letter = letter;
        this.size = size;
        this.position = position;
    }

    asHtml() {
        return new HtmlDomElement("div", {
            style: new StyleAttribute({
                width: "" + this.size.x + "px",
                height: "" + this.size.y + "px",
                position: "absolute",
                left: "" + this.position.x + "px",
                top: "" + this.position.y + "px"
            })
        }, this.letter).asHtml();
    }    
}

class StyleAttribute {
    constructor(cssDeclarations) {
        this.cssDeclarations = cssDeclarations;
    }

    valueAsHtml() {
        var result = "";
        for (var key of Object.keys(this.cssDeclarations)) {
            result += key + ": " + this.cssDeclarations[key] + "; ";
        }
        return result;
    }
}

class HtmlDomElement {
    constructor(name, attributes, content) {
        this.name = name;
        this.content = content;
        this.attributes = attributes;
    }

    asHtml() {
        var result = "<" + this.name;
        for (var key of Object.keys(this.attributes)) {
            var value = this.attributes[key];
            if (key == "style") {
                value = value.valueAsHtml();
            }

            result += " " + key + "='" + value + "'";
        }
        result += ">";
        result += this.content;
    
        result += "</" + this.name + ">";
        return result;
    }
    

}