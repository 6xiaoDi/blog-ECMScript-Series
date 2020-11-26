// let p1 = Promise.resolve('success')
// console.log(p1)
// p1.then(res => {
//     console.log(res)
// })

// let p2 = Promise.reject('fail')
// console.log(p2)
// p2.catch(err => {
//     console.log(err)
// })

// function foo(flag) {
//     if (flag) {
//         return new Promise(resolve => {
//             // 异步操作
//             resolve('success')
//         })
//     } else {
//         // return 'fail'
//         return Promise.reject('fail')
//     }
// }
//
// foo(true).then(res => {
//     console.log(res)
// })
//
// foo(false).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(1)
        resolve('1成功')
    }, 2000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(2)
        // resolve('2成功')
        reject('2失败')
    }, 1000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(3)
        resolve('3成功')
    }, 3000)
})

// Promise.all([p1, p2, p3]).then(res => {
//     console.log(res)
// }, err => {
//     console.log(err)
// })

Promise.race([p1, p2, p3]).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})
