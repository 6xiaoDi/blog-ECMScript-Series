// let s1 = Symbol()
// let s2 = Symbol()
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2) // false

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')
// console.log(s1)
// console.log(s2)
// console.log(s1 === s2)// false

// const obj = {
//     name: 'lisi',
//     toString() {
//         return this.name
//     }
// }
// let s = Symbol(obj)
// console.log(s)

let s = Symbol()
s.name = 'abc'
console.log(s)
