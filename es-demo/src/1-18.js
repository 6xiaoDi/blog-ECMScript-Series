// const str = 'aaa_aa_a'
// const reg1 = /a+/g // 每次匹配剩余的
// const reg2 = /a+/y // 剩余的第一个开始匹配

// console.log(reg1.exec(str)) // aaa
// console.log(reg2.exec(str)) // aaa

// console.log(reg1.exec(str)) // aa
// _aa_a开始匹配
// console.log(reg2.exec(str)) // null

// console.log(reg1.exec(str)) // a
// _aa_a找不到开头匹配a，则再从开头开始找了
// console.log(reg2.exec(str)) // aaa

const str = '\uD842\uDFB7' // 表示一个字符
// console.log(/^\uD842/.test(str)) // es5 true
// console.log(/^\uD842/u.test(str)) // es6 false

// .除了换行符以外的任意单个字符
console.log(/^.$/.test(str)) // es5 false
console.log(/^.$/u.test(str)) // es6 true