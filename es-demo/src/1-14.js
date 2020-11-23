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

// let s = Symbol('foo')
// console.log(s.description)

// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1.description)
// console.log(s1 === s2) // true

// function foo() {
//     return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y) // true

// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1)) // undefined

// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2)) // foo

// 班级信息
const grade = {
    张三: {address: 'xxx', tel: '111'},
    李四: {address: 'yyy', tel: '222'},
    李四: {address: 'zzz', tel: '333'},
}
console.log(grade)
