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

// let obj1 = {  // new Object()
//     name: 'lisi',
//     age: 30
// }

// let obj2 = { // new Object()
//     name: 'lisi',
//     age: 30
// }
// console.log(obj1 == obj2) // false

// console.log(Object.is(obj1, obj2)) // false
// let obj2 = obj1
// console.log(Object.is(obj1, obj2)) // true

// let x = {
//     a: 3,
//     b: 4
// }
// let y = {...x}
// let y = {
//     c: 5,
//     a: 6
// }
// // Object.assign(y, x)
// console.log(y)
// console.log('a' in x)
// console.log('aa' in x)

// let arr = [1, 2, 3]
// console.log(2 in arr)

let obj = {
    name: 'lisi',
    age: 30,
    school: 'beida'
}
// for(let key in obj){
//     console.log(key, obj[key])
// }
Object.keys(obj).forEach(key => {
    console.log(key, obj[key])
})