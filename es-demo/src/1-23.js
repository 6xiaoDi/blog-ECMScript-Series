// 状态管理
// resolve 成功
// reject 失败
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('123')
        resolve('成功')
    }, 1000)
}).then(res => {
    console.log(res)
}, err => {
    console.log(err)
})