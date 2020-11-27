// function makeIterator(arr) {
//     let nextIndex = 0
//     return {
//         next() {
//             return nextIndex < arr.length ? {
//                 value: arr[nextIndex++],
//                 done: false
//             } : {
//                 value: undefined,
//                 done: true
//             }
//         }
//     }
// }
// let it = makeIterator(['a', 'b', 'c'])
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// for(let c of courses){
//     console.log(c)
// }

// let arr = ['a', 'b', 'c']
// console.log(arr)
// let it = arr[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

// let map = new Map()
// map.set('name', 'es')
// map.set('age', 5)
// map.set('school', 'QH')
// console.log(map)
// let it = map[Symbol.iterator]()
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())
// console.log(it.next())

let courses = {
    allCourse: {
        frontend: ['ES', '小程序', 'Vue', 'React'],
        backend: ['Java', 'Python', 'SpringBoot'],
        webapp: ['Android', 'IOS']
    }
}

// courses[Symbol.iterator] = function () {
//     let allCourse = this.allCourse
//     let keys = Reflect.ownKeys(allCourse)
//     let values = []
//     return {
//         next() {
//             if (!values.length) {
//                 if (keys.length) {
//                     values = allCourse[keys[0]]
//                     keys.shift()
//                 }
//             }
//             return {
//                 done: !values.length,
//                 value: values.shift()
//             }
//         }
//     }
// }

// for (let c of courses) {
//     console.log(c)
// }

courses[Symbol.iterator] = function* () {
    let allCourse = this.allCourse
    let keys = Reflect.ownKeys(allCourse)
    let values = []
    while (1) {
        if (!values.length) {
            if (keys.length) {
                values = allCourse[keys[0]]
                keys.shift()
                yield values.shift()
            } else {
                // 遍历完毕后，退出
                return false
            }
        }else{
            yield values.shift()
        }
    }
}

for (let c of courses) {
    console.log(c)
}