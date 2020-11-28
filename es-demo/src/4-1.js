const arr = ['es6', 'es7', 'es8', 'es9']
arr[Symbol.iterator] = function () {
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
for (let item of arr) {
    console.log(item)
}