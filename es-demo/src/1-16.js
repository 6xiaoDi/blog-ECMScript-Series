let m = new Map()
let obj = {
    name: 'lisi'
}
m.set(obj, 'es')
console.log(m)
console.log(m.get(obj))
console.log(m.has(obj))
m.delete(obj)
console.log(m)
