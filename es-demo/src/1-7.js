// 扩展运算符
function foo(a, b, c) {
    console.log(a, b, c)
}
let arr = [1, 2, 3]
foo(...arr)
console.log(...arr)