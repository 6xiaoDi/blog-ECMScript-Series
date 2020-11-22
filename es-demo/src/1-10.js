// let target = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 4,
//         f: 5,
//         g: 6
//     }
// }
// let source = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 2,
//         f: 3
//     }
// }
// Object.assign(target, source)
// console.log(target)

// 深拷贝
let a = 5
let b = a
a = 6
console.log(a, b)
// 浅拷贝
let obj1 = {
    name: 'lisi',
    age: 30
}
let obj2 = obj1
obj1.age = 18
console.log(obj1)
console.log(obj2)