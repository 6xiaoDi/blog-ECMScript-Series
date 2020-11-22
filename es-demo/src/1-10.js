let target = {
    a: {
        b: {
            c: 1
        },
        e: 4,
        f: 5,
        g: 6
    }
}
let source = {
    a: {
        b: {
            c: 1
        },
        e: 2,
        f: 3
    }
}
Object.assign(target, source)
console.log(target)