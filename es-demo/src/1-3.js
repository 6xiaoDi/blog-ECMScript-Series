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

let user = {
    name: '6xd',
    age: 28
}
// let name = user.name
// let age = user.age
// let {age, name} = user;
// console.log(name, age);
let {age: uage, name: uname} = user
uname = 'xm'
uage = 99
console.log(uname, uage)
let {age, name} = user;
console.log(name, age)