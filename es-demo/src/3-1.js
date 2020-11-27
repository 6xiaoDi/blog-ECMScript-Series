// async function foo(){
//     return 'hello' // Promise.resolve('hello')
// }
// console.log(foo())

// async function foo() {
//     let result = await 'hello'
//     console.log(result)
// }
// foo()

function timeout() {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(1)
        }, 1000)
    })
}

async function foo(){
    const res = await timeout()
    console.log(res)
    console.log(2)
}
foo()