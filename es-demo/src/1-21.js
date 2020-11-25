// Object -> Reflect
let obj = {}
let newVal = ''
Reflect.defineProperty(obj, 'name', {
    get() {
        return newVal
    },
    set(val) {
        console.log('set')
        newVal = val
    }
})
obj.name = 'es'
console.log(obj.name)