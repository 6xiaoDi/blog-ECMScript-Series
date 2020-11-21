// function foo(x, y){
//     y = y || 'world'
//     console.log(x, y)
// }
// // foo('hello')
// foo('hello', 0)

function foo(x, y = 'world'){
    console.log(x, y)
}
// foo('hello', 0)
foo('hello')