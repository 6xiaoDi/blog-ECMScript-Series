// 唯一的
// let s = new Set([1, 2, 3, 2])
// 添加数据
// s.add('abc').add('def')
// 删除数据
// s.delete(2)
// 判断是否有某个值
// console.log(s.has('abc'))
// console.log(s)
// 长度
// console.log(s.size)
// 清空数据
// s.clear()
// console.log(s)
// console.log(s.size)

// 遍历
// s.forEach(item => console.log(item))
//
// for (let item of s) {
//     console.log(item)
// }
//
// for (let item of s.keys()) {
//     console.log(item)
// }
// for (let item of s.values()) {
//     console.log(item)
// }
// for (let item of s.entries()) {
//     console.log(item[0], item[1])
// }

// 数组去重
let arr = [1, 2, 3, 4, 2, 3]
let s = new Set(arr)
console.log(s)