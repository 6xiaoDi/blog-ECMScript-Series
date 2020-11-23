// let m = new Map()
// let obj = {
//     name: 'lisi'
// }
// m.set(obj, 'es')
// console.log(m)
// console.log(m.get(obj))
// console.log(m.has(obj))
// m.delete(obj)
// console.log(m)

let map = new Map([
    ['name', 'lisi'],
    ['age', 5]
])
console.log(map.size)
console.log(map.has('name'))
console.log(map.get('age'))
map.set('name', 'zhangsan')
console.log(map)

