// for(let item of 'abc123'){
//     console.log(item)
// }

// const str1 = '阿斯顿发斯\n'
// + '蒂芬阿萨德法师法\n'
// + '师按时发顺丰'
// console.log(str1);

// const str3 = `阿斯顿发斯
// 蒂芬阿萨德法师法
// 师按时发顺丰`
// console.log(str3);

// const str4 = `
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// `
// console.log(str4)


// const a = 20
// const b = 14
// const c = '李四'
// const str2 = '我的年龄是:' + (a + b) + ',我是' + c
// console.log(str2)

// const str5 = `我的年龄是:${a+b},我是${c}`
// console.log(str5)

// 嵌套模板
// const isLargeScreen = () => {
    // 不用关心这里的逻辑
//     return true
// }
// let class1 = 'icon'
// class1 += isLargeScreen() ? ' icon-big':' icon-small'
// console.log(class1)

// const class2 = `icon icon-${isLargeScreen()?'big':'small'}`
// console.log(class2)

// 带标签的模板字符串
// const foo = (a, b, c, d) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// foo(1, 2, 3, 4)
// const name = 'lisi'
// const age = 30
// foo`这是${name},他的年龄是${age}岁`

// console.log(String.fromCharCode(0x20BB7)) // ES5
// console.log(String.fromCodePoint(0x20BB7)) // ES6

// indexOf
const str = 'abcdef'
console.log(str.indexOf('cdef'))
console.log(str.indexOf('acdef'))
console.log(str.includes('cdef'))
console.log(str.includes('acdef'))
console.log(str.startsWith('abc'))
console.log(str.endsWith('cdef'))
const newStr = str.repeat(10)
console.log(newStr)