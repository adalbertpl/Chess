export default class Delegations {
    static delegate(clazz, methodName, propertyName) {
        clazz.prototype[methodName] = function(...args) {
            return this[propertyName][methodName](...args);
        }
    }

    static delegateAll(clazz, methodNames, propertyName) {
        for (var methodName of methodNames) {
            this.delegate(clazz, methodName, propertyName);
        }
    }
}