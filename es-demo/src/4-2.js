// dot  www.baidu.com  dotAll
// .
// const reg = /./
// console.log(reg.test('5')) // true
// console.log(reg.test('x')) // true
// console.log(reg.test('\n')) // false
// console.log(reg.test('\r')) // false
// console.log(reg.test('\u{2028}')) // false
// console.log(reg.test('\u{2029}')) // false

// const reg = /./s
// console.log(reg.test('5')) // true
// console.log(reg.test('x')) // true
// console.log(reg.test('\n')) // true
// console.log(reg.test('\r')) // true
// console.log(reg.test('\u{2028}')) // true
// console.log(reg.test('\u{2029}')) // true

// 具名组匹配
// const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-01-01')
// console.log(date)
// console.log(date[1])  // 年
// console.log(date[2])  // 月
// console.log(date[3])  // 日

// const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
// console.log(reg.exec('2020-02-01'))
// const groups = reg.exec('2020-02-01').groups
// const {year, month, day} = groups
// console.log(year, month, day)

//  先行断言（es5）
const str = '123ecmascript'
console.log(str.match(/ecma(?=script)/))
