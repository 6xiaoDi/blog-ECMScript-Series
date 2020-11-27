// async function foo(){
//     return 'hello' // Promise.resolve('hello')
// }
// console.log(foo())

// async function foo() {
//     let result = await 'hello'
//     console.log(result)
// }
// foo()

// function timeout() {
//     return new Promise(resolve => {
//         setTimeout(()=>{
//             resolve(1)
//         }, 1000)
//     })
// }

// async function foo(){
//     const res = await timeout()
//     console.log(res)
//     console.log(2)
// }
// foo()

// function timeout() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject('fail')
//         }, 1000)
//     })
// }
// async function foo() {
//     return await timeout()
// }
// foo().then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err)
// })

import ajax from './ajax'

function request(url) {
    return new Promise(resolve => {
        ajax(url, res => {
            resolve(res)
        })
    })
}
async function getData(){
    const res1 = await request('static/a.json')
    console.log(res1)
    const res2 = await request('static/b.json')
    console.log(res2)
    const res3 = await request('static/c.json')
    console.log(res3)
}
getData()