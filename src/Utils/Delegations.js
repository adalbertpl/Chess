export default class Delegations {
    static delegate(clazz, methodName, propertyName) {
        clazz.prototype[methodName] = function(...args) {
            return this[propertyName][methodName](...args);
        }
    }
}