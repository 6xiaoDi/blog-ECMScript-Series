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
let arr = [7, 8, 9]
arr = new Proxy(arr, {
    get(target, prop) {
        console.log(target, prop)
        return prop in target ? target[prop] : 'error'
    }
})
console.log(arr[1])
console.log(arr[10])
