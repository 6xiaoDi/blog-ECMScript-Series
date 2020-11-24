const str = 'aaa_aa_a'
const reg1 = /a+/g // 每次匹配剩余的
const reg2 = /a+/y // 剩余的第一个开始匹配

console.log(reg1.exec(str)) // aaa
console.log(reg2.exec(str)) // aaa

console.log(reg1.exec(str)) // aa
// _aa_a开始匹配
console.log(reg2.exec(str)) // null

console.log(reg1.exec(str)) // a
// _aa_a找不到开头匹配a，则再从开头开始找了
console.log(reg2.exec(str)) // aaa
