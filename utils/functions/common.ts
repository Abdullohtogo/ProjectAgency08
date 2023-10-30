export function isEmptyObject(obj: any) {
    for (const prop in obj) {
        if (Object.hasOwn(obj, prop)) {
            return true
        }
    }
    return false
}
