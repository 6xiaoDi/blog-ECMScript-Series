// const foo = (a, b, c, d) => {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
// }
// 正常调用
// foo(1, 2, 3, 4)

// es6中带标签的模版字符串
// const name = 'lisi'
// const age = 24
// foo`这是${name}, 他的年龄是${age}岁`

const foo = arg => {
    console.log(arg)
}
// foo`\u{61} and \u{62}`
foo`\u{61} and \unicode`