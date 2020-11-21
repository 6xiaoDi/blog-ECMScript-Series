function foo(x, y){
    y = y || 'world'
    console.log(x, y)
}
// foo('hello')
foo('hello', 0)