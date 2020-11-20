// DOM
// let divs = document.getElementsByTagName('div')
// console.log(divs) // HTMLCollection
//
// let divs2 = document.getElementsByClassName('xx')
// console.log(divs2) // HTMLCollection

// let divs3 = document.querySelectorAll('.xx')
// console.log(divs3 instanceof Array) // NodeList
// divs3.push(123)

// slice
// let arr = Array.prototype.slice.call(divs3)
// console.log(arr)
// arr.push(123)
// console.log(arr)

// function foo(){
//     console.log(arguments)
//     console.log(arguments instanceof Array)
// }
// foo(1, 'abc', true)

// let arrayLike = {
//     0: 'es6',
//     1: 'es7',
//     2: 'es8',
//     length: 3
// }
// let arr = Array.from(arrayLike)
// arr.push('es9')
// console.log(arr)

let arr = new Array(1, 2)
console.log(arr)