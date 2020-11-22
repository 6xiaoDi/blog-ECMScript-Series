// let target = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 4,
//         f: 5,
//         g: 6
//     }
// }
// let source = {
//     a: {
//         b: {
//             c: 1
//         },
//         e: 2,
//         f: 3
//     }
// }
// Object.assign(target, source)
// console.log(target)

// 深拷贝
// let a = 5
// let b = a
// a = 6
// console.log(a, b)
// 浅拷贝
// let obj1 = {
//     name: 'lisi',
//     age: 30
// }
// let obj2 = obj1
// obj1.age = 18
// console.log(obj1)
// console.log(obj2)

//JSON => '{"a": "hello", "b": "world"}'
// let obj = JSON.parse('{"a": "hello", "b": "world"}')
// console.log(obj)
// let str1 = JSON.stringify(obj)
// console.log(str1)
//
// let obj1 = {
//     name: 'lisi',
//     age: 30
// }

// 深拷贝
// let str2 = JSON.stringify(obj1)
// let obj2 = JSON.parse(str2)
// obj1.age = 18
// console.log(obj2)
// console.log(obj1)


// 检查类型
let checkType = data => {
    return Object.prototype.toString.call(data).slice(8, -1);
}

// 深拷贝
let deepClone = target => {
    let targetType = checkType(target)
    let result
    // 对象
    if (targetType === 'Object') {
        result = {}
    // 数组
    } else if (targetType === 'Array') {
        result = []
    // 基本数据类型、函数类型等
    } else {
        return target
    }
    for (let i in target) {
        let value = target[i]
        let valueType = checkType(value)
        // 数组、对象则深拷贝
        if (valueType === 'Object' || valueType === 'Array') {
            result[i] = deepClone(value) // 递归
        // 基本数据类型、函数类型等 直接赋值
        } else {
            result[i] = value
        }
    }
    return result
}

let arr1 = [1, 2, {age: 18}]
let arr2 = deepClone(arr1)
arr2[2].age = 34
console.log(arr1)

let obj1 = {
    name: 'lisi',
    hobby: ['coding', 'playing basketball']
}
let obj2 = deepClone(obj1)
obj2.hobby[0] = 'sleeping'
console.log('obj1 => ')
console.log(obj1);
console.log('obj2 => ')
console.log(obj2);