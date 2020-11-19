// let arr = [1, 2, 3]
// let a = arr[0]
// let b = arr[1]
// let c = arr[2]
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)

// let [a, b, [c, d]] = [1, 2, [3, 4]]
// console.log(a, b, c, d)

// let [a, b, [c]] = [1, 2, [3, 4]]
// console.log(a, b, c)

// let [a, b, c] = [1, 2, [3, 4]]
// console.log(a, b, c)

// let [a, b, c, d] = [1, 2, [3, 4]]
// console.log(a, b, c, d)

// let [a, b, c, d = 5] = [1, 2, [3, 4]]
// console.log(a, b, c, d)

// let [a, b, c, d = 5] = [1, 2, [3, 4], 6]
// console.log(a, b, c, d)

// let user = {
//     name: '6xd',
//     age: 28
// }
// let name = user.name
// let age = user.age
// let {age, name} = user;
// console.log(name, age);
// let {age: uage, name: uname} = user
// uname = 'xm'
// uage = 99
// console.log(uname, uage)
// let {age, name} = user;
// console.log(name, age)

// let str = 'Github'
// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }
// let [a, b, c, d, e, f] = str
// console.log(a, b, c, d, e, f)

// let [a, b, c = 8] = [4, 5, 6]
// console.log(a, b, c)

// let {name, age = 18} = {
//     name: "6xiaodi",
//     // age: 28
// }
// console.log(name, age)

function foo(){
    console.log(123)
}
// let [a = foo()] = [1]
let [a = foo()] = []