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
            console.log(1)
            resolve()
        }, 1000)
    })
}

async function foo(){
    await timeout()
    console.log(2)
}
foo()