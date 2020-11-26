// 状态管理
// resolve 成功
// reject 失败
// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('123')
//         // resolve('成功')
//         reject('失败')
//     }, 1000)
// }).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

// let p = new Promise((resolve, reject) => {
//     console.log(1)
//     resolve()
// })
// console.log(2)
// p.then(res => {
//     console.log(3)
// })

let p1 = new Promise((resolve, reject) => {
    resolve(1)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2)
    }, 1000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(3)
    }, 1000)
})
console.log(p1) // resolved
console.log(p2) // pending
console.log(p3) // pending

setTimeout(() => {
    console.log(p2)
}, 2000)
setTimeout(() => {
    console.log(p3)
}, 2000)

p1.then(res => {
    console.log(res)
})
p2.then(res => {
    console.log(res)
})
p3.catch(err => {
    console.log(err)
})
