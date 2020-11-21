// function foo(x, y){
//     y = y || 'world'
//     console.log(x, y)
// }
// // foo('hello')
// foo('hello', 0)

// function foo(x, y = 'world'){
//     console.log(x, y)
// }
// foo('hello', 0)
// foo('hello')

function foo(x = 5) {
    // let x = 1
    const x = 1
}
foo()