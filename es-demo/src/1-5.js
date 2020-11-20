// DOM
// let divs = document.getElementsByTagName('div')
// console.log(divs) // HTMLCollection
//
// let divs2 = document.getElementsByClassName('xx')
// console.log(divs2) // HTMLCollection

let divs3 = document.querySelectorAll('.xx')
console.log(divs3 instanceof Array) // NodeList
// divs3.push(123)

// slice
let arr = Array.prototype.slice.call(divs3)
console.log(arr)
arr.push(123)
console.log(arr)