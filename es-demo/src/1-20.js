// ES5
// let obj = {}
// let newVal = '123456'
// Object.defineProperty(obj, 'name', {
//     get(){
//         console.log('get')
//         return newVal
//     },
//     set(val){
//         console.log('set')
//         // this.name = val 会造成死递归，内存溢出
//         newVal = val
//     }
// })
// obj.name = 'es'
// console.log(obj.name)

// proxy
// let obj = {}
// let p = new Proxy(obj, {})
// p.name = 'lisi'
// console.log(obj.name)
// for(let key in obj){
//     console.log(key)
// }

// get
// let arr = [7, 8, 9]
// arr = new Proxy(arr, {
//     get(target, prop) {
//         console.log(target, prop)
//         return prop in target ? target[prop] : 'error'
//     }
// })
// console.log(arr[1])
// console.log(arr[10])

// let dict = {
//     'hello': '你好',
//     'world': '世界'
// }
// dict = new Proxy(dict, {
//     get(target, prop) {
//         return prop in target ? target[prop] : prop
//     }
// })
// console.log(dict['world'])
// console.log(dict['abc'])

// set
// let arr = []
// arr = new Proxy(arr, {
//     set(target, prop, val) {
//         if (typeof val === 'number') {
//             target[prop] = val
//             return true
//         } else {
//             return false
//         }
//     }
// })
// arr.push(5)
// arr.push(6)
// console.log(arr[0], arr[1], arr.length)

// has
// let range = {
//     start: 1,
//     end: 5
// }

// range = new Proxy(range, {
//     has(target, prop){
//         return prop >= target.start && prop <= target.end
//     }
// })
// console.log(2 in range)
// console.log(9 in range)

// ownKeys
// let obj = {
//     name: 'lisi',
//     [Symbol('es')]: 'es6'
// }
// console.log(Object.getOwnPropertyNames(obj))  // 非Symbol的键名
// console.log(Object.getOwnPropertySymbols(obj))  // 仅Symbol的键名
// console.log(Object.keys(obj))  // 非Symbol的键名
// for(let key in obj){ //非Symbol的键名
//     console.log(key)
// }

// let userinfo = {
//     username: 'lisi',
//     age: 30,
//     _password: '***'
// }
// userinfo = new Proxy(userinfo, {
//     ownKeys(target) {
//         return Object.keys(target).filter(key => !key.startsWith('_'))
//     }
// })

// for (let key in userinfo) {
//     console.log(key)
// }
// console.log(Object.keys(userinfo))

let user = {
    name: 'lisi',
    age: 30,
    _password: '***'
}
user = new Proxy(user, {
    get(target, prop) {
        // 防止对私有属性的访问
        if (prop.startsWith('_')) {
            throw new Error('不可访问')
        } else {
            return target[prop]
        }
    }
})

// get拦截
console.log(user.age)
console.log(user._password)



