function makeIterator(arr) {
    let nextIndex = 0
    return {
        next() {
            return nextIndex < arr.length ? {
                value: arr[nextIndex++],
                done: false
            } : {
                value: undefined,
                done: true
            }
        }
    }
}
let it = makeIterator(['a', 'b', 'c'])
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())