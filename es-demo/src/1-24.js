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

function foo(flag) {
    if (flag) {
        return new Promise(resolve => {
            // 异步操作
            resolve('success')
        })
    } else {
        // return 'fail'
        return Promise.reject('fail')
    }
}

foo(true).then(res => {
    console.log(res)
})

foo(false).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})
