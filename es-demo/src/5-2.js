const str = '   abcde   '
// 正则
// console.log(str)
// console.log(str.replace(/^\s+/g, '')) // 去掉前面的空格
// console.log(str.replace(/\s+$/g, '')) // 去掉后面的空格
// console.log(str.replace(/^\s+/g, '').replace(/\s+$/g, ''))

// 去掉前面的空格（两种写法）
console.log(str.trimStart())
console.log(str.trimLeft())
// 去掉后面的空格（两种写法）
console.log(str.trimEnd())
console.log(str.trimRight())
// 去除前后空格
console.log(str.trim())