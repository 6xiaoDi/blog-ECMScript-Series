// const obj = {
//     name: 'baidu',
//     target: 'es'
// }
//
// const desc = Object.getOwnPropertyDescriptors(obj)
// console.log(desc)

const obj = {}
Reflect.defineProperty(obj, 'name', {
    value: 'lisi',
    writable: true,
    configurable: true,
    enumerable: false
})
Reflect.defineProperty(obj, 'age', {
    value: 34,
    writable: true,
    configurable: true,
    enumerable: true
})

// console.log(obj)
// obj.name = 'zhangsan'
// console.log(obj)
// delete obj.name
// console.log(obj)

for(let key in obj){
    console.log(key)
}

