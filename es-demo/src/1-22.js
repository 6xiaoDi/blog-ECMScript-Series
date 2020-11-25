// const a = 2
// const b = 3
// console.log("同步任务",a + b) // 同步任务
// 异步任务
// setTimeout(() => {
//     console.log(a + b)
// }, 1000)
// console.log('异步任务')

// 1 3 2
console.log(1)
setTimeout(() => {
    console.log(2)
}, 0)
console.log(3)
