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
// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(15)) // false

// console.log(Number.parseInt(5.5))  // 5
// console.log(Number.parseFloat(5.5))  // 5.5
// console.log(window.parseInt(5.5))  // 5
// console.log(window.parseFloat(5.5))  // 5.5

// console.log(Number.isInteger(5))    // true
// console.log(Number.isInteger(5.5)) // false

// console.log(0.1000000000000001)
// console.log(0.10000000000000001)
// console.log(0.10000000000000001 === 0.1) // true

// const max = Math.pow(2, 53) // 2的53次方
// console.log(max) // 9007199254740992
// console.log(max + 1) // 9007199254740992
// console.log(Number.MAX_SAFE_INTEGER === max - 1) // (9007199254740991) true
// console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false （超出范围，即不安全了）

// console.log(Math.trunc(5.5)) // 5
// console.log(Math.trunc(-5.5)) // -5
// console.log(Math.trunc(true)) // 1
// console.log(Math.trunc(false)) // 0
// console.log(Math.trunc(NaN)) // NaN
// console.log(Math.trunc(undefined)) // NaN
// console.log(Math.trunc()) // NaN

// console.log(Number.parseInt(5.5)) // 5
// console.log(Number.parseInt(-5.5)) // -5
// console.log(Number.parseInt(true)) // NaN

// console.log(Math.sign(5)) // 1
// console.log(Math.sign(-5)) // -1
// console.log(Math.sign(0)) // 0
// console.log(Math.sign(NaN)) // NaN
// console.log(Math.sign(true)) // 1
// console.log(Math.sign(false)) // 0

console.log(Math.cbrt(8))  // 2
console.log(Math.cbrt('abcde')) // NaN