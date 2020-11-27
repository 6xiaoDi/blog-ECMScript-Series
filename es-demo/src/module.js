// export const a = 5
// export const b = 'QACC'
// export const sum = (x, y) => x + y
// const obj = {
//     name: 'es'
// }
// export {obj}

// const a = 5
// const b = 'QACC'
// const sum = (x, y) => x + y
// const obj = {
//     name: 'es'
// }
//
// class People {
//     constructor(name) {
//         this.name = name
//     }
//     showName() {
//         console.log(this.name)
//     }
// }
//
// export {
//     a,
//     b,
//     sum,
//     obj,
//     People
// }

// const a = 5
// export default a
// const b = 'QACC'
// export default b

// export default const a = 5 // 错误

// function sum(x, y) {
//     return x + y
// }
// export default sum
//
// export const str = 'abc'

const a = 5
const b = 'abc'
const sum = (x, y) => x + y
const obj = {
    name: 'es'
}
class People {
    constructor(name) {
        this.name = name
    }
    showName() {
        console.log(this.name)
    }
}
export default {
    a,
    b,
    sum,
    obj,
    People
}


