// const arr = ['es6', 'es7', 'es8', 'es9']
// arr[Symbol.iterator] = function () {
//     let nextIndex = 0
//     return {
//         next() {
//             return nextIndex < arr.length ? {
//                 value: arr[nextIndex++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }
// for (let item of arr) {
//     console.log(item)
// }

function getPromise(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(time)
        }, time)
    })
}
const arr = [getPromise(1000), getPromise(2000), getPromise(3000)]

async function test() {
    for (let item of arr) {
        console.log(item)
    }
}
test()