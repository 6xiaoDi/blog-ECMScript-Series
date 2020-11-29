const str = '   abcde   '
// 正则
console.log(str)
console.log(str.replace(/^\s+/g, '')) // 去掉前面的空格
console.log(str.replace(/\s+$/g, '')) // 去掉后面的空格

