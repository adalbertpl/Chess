export function* product(enum1, enum2, fn) {
    for (var el1 of enum1) {
        for (var el2 of enum2) {
            yield fn(el1, el2); 
        }
    }
}