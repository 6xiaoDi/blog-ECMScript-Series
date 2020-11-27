// async function foo(){
//     return 'hello' // Promise.resolve('hello')
// }
// console.log(foo())

async function foo() {
    let result = await 'hello'
    console.log(result)
}
foo()