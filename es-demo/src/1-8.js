// console.log(sum(4, 5))

// function sum(x, y) {
//     return x + y
// }

// console.log(sum)
// console.log(sum(4, 5))
// let sum = function(x, y){
//     return x + y
// }

// let sum = (x, y) => {
//     return x + y
// }

// let sum = (x, y) => x + y
// console.log(sum(3, 4))

// let x = x => x

// let x = function(x){
//     return x
// }

// let oBtn = document.querySelector('#btn')
// oBtn.addEventListener('click', function () {
//     setTimeout(() => {
//         console.log(this)
//     }, 1000)
// })

// 类
// function People(name, age){
//     console.log(this)
//     this.name = name
//     this.age = age
// }
let People = (name, age) => {
    this.name = name
    this.age = age
}
let p1 = new People('zhangsan', 30)
console.log(p1)