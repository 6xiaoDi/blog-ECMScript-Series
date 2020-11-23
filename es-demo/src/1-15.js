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
// let arr = [1, 2, 3, 4, 2, 3]
// let s = new Set(arr)
// console.log(s)

// 合并去重 set->array
let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]
// let s = new Set([...arr1, ...arr2])
// console.log(s)
// Set转为数组（两种方法）
// console.log([...s])
// console.log(Array.from(s))

// 交集
let s1 = new Set(arr1)
let s2 = new Set(arr2)
// let result = new Set(arr1.filter(item => s2.has(item)))
// console.log(Array.from(result))

// 差集
let arr3 = new Set(arr1.filter(item => !s2.has(item)))
let arr4 = new Set(arr2.filter(item => !s1.has(item)))
console.log(arr3)
console.log(arr4)
console.log([...arr3, ...arr4])