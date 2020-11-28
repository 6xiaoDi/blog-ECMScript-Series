// dot  www.baidu.com  dotAll
// .
const reg = /./
console.log(reg.test('5')) // true
console.log(reg.test('x')) // true
console.log(reg.test('\n')) // false
console.log(reg.test('\r')) // false
console.log(reg.test('\u{2028}')) // false
console.log(reg.test('\u{2029}')) // false