// 十进制 -> 二进制
// const a = 5 // 101
// console.log(a.toString(2))

// 二进制 -> 十进制
// const b = 101
// console.log(parseInt(5.5)) // 转换为整数
// console.log(parseInt(b, 2)) // 还有第二个参数，代表转为几进制

// ES6 0B二进制  0O八进制
// const a = 0B0101
// console.log(a)

// const b = 0O777
// console.log(b)

// console.log(Number.isFinite(5)) // true
// console.log(Number.isFinite(0.5)) // true
// console.log(Number.isFinite(Infinity)) // false
// console.log(Number.isFinite('abc')) // false
// console.log(Number.isFinite(true)) // false

// NaN:not a number
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(15)) // false