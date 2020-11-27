// function makeIterator(arr) {
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
// let it = makeIterator(['a', 'b', 'c'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let courses = {
    allCourse: {
        frontend: ['ES', '小程序', 'Vue', 'React'],
        backend: ['Java', 'Python', 'SpringBoot'],
        webapp: ['Android', 'IOS']
    }
}

// for(let c of courses){
//     console.log(c)
// }

let arr = ['a', 'b', 'c']
console.log(arr)
let it = arr[Symbol.iterator]()
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())
