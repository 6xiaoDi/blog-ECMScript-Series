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

// function foo(x = 5) {
//     // let x = 1
//     const x = 1
// }
// foo()

// function foo(x, x, y = 5) {
// }
// foo(1, 2)

// function foo(x, y = 5, z) {
//     console.log(x, y, z)
// }
// foo(1, 2)

// function foo(x, z, y = 5) {
//     console.log(x, y, z)
// }
// foo(1, 2)

function foo({x, y = 5}){
    console.log(x, y)
}

foo({})
foo({
    x: 1,
    y: 2
})
