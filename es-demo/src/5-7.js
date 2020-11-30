// Symbol
const s = Symbol('ABCDEF')
console.log(s)
console.log(s.description) // es10新增只读属性

s.description = 'es'
console.log(s)

const s2 = Symbol()
console.log(s2.description) // undefined