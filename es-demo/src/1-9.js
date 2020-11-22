// let name = 'zhangsan'
// let age = 30
// let s = 'school'
// let obj = {
//     name,
//     age,
//     [s]: 'abcdefg',
//     // study(){
//     //     console.log(this.name + '正在学习')
//     // }
//     study:() => {
//         console.log(this.name + '正在学习')
//     }
// }
// console.log(obj)
// obj.study()

// console.log(Object.is(2, '2'))
// console.log(Object.is(NaN, NaN))
// console.log(Object.is(+0, -0))

let obj1 = {  // new Object()
    name: 'lisi',
    age: 30
}

let obj2 = { // new Object()
    name: 'lisi',
    age: 30
}
console.log(obj1 == obj2) // false

console.log(Object.is(obj1, obj2)) // false
