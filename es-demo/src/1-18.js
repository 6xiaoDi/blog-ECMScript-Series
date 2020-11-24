const str = 'aaa_aa_a'
const reg1 = /a+/g // 每次匹配剩余的

console.log(reg1.exec(str)) // aaa
console.log(reg1.exec(str)) // aa
console.log(reg1.exec(str)) // a
