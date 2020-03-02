export default class Method {
    constructor(content) {
        this.content = content;
        this.precall = [];
        this.postcall = [];
    }

    addPrecallHook(hook) {
        this.precall.push(hook);
    }

    addPostcallHook(hook) {
        this.postcall.push(hook);
    }

    call(...params) { 
        for (var hook of this.precall)
            params = hook(...params);

        var result = this.content(...params);

        for (var hook of this.postcall)
            result = hook(result);

        return result;
    }
}