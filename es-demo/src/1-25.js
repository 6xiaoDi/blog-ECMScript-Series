function* foo() {
    for (let i = 0; i < 3; i++) {
        yield i
    }
}
console.log(foo())
let f = foo()
console.log(f.next())
console.log(f.next())
console.log(f.next())
console.log(f.next())