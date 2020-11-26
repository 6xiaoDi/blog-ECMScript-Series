// function* foo() {
//     for (let i = 0; i < 3; i++) {
//         yield i
//     }
// }
// console.log(foo())
// let f = foo()
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

// function* gen(args) {
//     args.forEach(item => {
//         yield item + 1
//     })
// }

// function* gen(x) {
//     let y = 2 * (yield(x + 1))
//     let z = yield(y / 3)
//     return x + y + z
// }
// let g = gen(5)
// console.log(g.next()) // 6
// console.log(g.next()) // NaN
// console.log(g.next()) // NaN

// let g = gen(5)
// console.log(g.next()) // 6
// console.log(g.next(12)) // y=24  8
// console.log(g.next(13)) // z=13 x=5 42

function* count(x = 1) {
    while (true) {
        if (x % 7 === 0) {
            yield x
        }
        x++
    }
}
let n = count()
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)
console.log(n.next().value)

