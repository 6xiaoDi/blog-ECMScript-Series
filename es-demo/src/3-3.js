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
    writable: false,
    configurable: false,
    enumerable: false
})

console.log(obj)
obj.name = 'zhangsan'
console.log(obj)

