export default class Decorators {
    static decorate(clazz, methodName, decorator) {
        var proto = clazz.prototype;
        proto[methodName] = decorator(proto[methodName]);
    }
}
