// const arr1 = [1, 2, 3]
// const arr2 = [4, 5, 6]
// const arr3 = [...arr1, ...arr2]
// console.log(arr3)

const obj1 = {
    name: 'lisi',
    age: 24
}
const obj2 = {
    school: 'QH',
    age: 18
}

// 克隆对象
// const obj3 = {
//     ...obj1
// }
// obj1.age = 18
// console.log(obj3)

// 合并对象
const obj4 = {...obj1, ...obj2}
console.log(obj4)