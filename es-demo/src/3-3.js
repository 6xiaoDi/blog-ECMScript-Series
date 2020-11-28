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
    configurable: false,
    enumerable: false
})

console.log(obj)
obj.name = 'zhangsan'
console.log(obj)
delete obj.name
console.log(obj)

