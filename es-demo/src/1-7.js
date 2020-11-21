// 扩展运算符
// function foo(a, b, c) {
//     console.log(a, b, c)
// }
// let arr = [1, 2, 3]
// foo(...arr)
// console.log(...arr)

// let arr1 = [1, 2, 3]
// let arr2 = [4, 5, 6]
// Array.prototype.push.apply(arr1, arr2)
// console.log(arr1)
// arr1.push(...arr2)
// console.log(arr1)

let str = 'asdbbc'
var arr = [...str]
console.log(arr)