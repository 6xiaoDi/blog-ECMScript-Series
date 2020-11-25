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
let obj = {}
let p = new Proxy(obj, {})
p.name = 'lisi'
console.log(obj.name)
for(let key in obj){
    console.log(key)
}
