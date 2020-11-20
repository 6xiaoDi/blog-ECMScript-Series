let arr = [1, 2, 3, 2, 4]

// for
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2){
//         break;
//     }
//     console.log(arr[i])
// }

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i] == 2){
//         continue;
//     }
//     console.log(arr[i])
// }

// forEach
// arr.forEach(function(elem, index, array){
//     if(arr[i] == 2){
//         break;
//     }
//     console.log(elem, index)
// })

// arr.forEach(function(elem, index, array){
//     if(arr[i] == 2){
//         continue;
//     }
//     console.log(elem, index)
// })

// map
// arr.map(function(value){
//    console.log(value)
// })

// let result = arr.map(function(value){
//    value += 1
//    return value
// })
// console.log(arr, result)

// filter
// let result = arr.filter(function (value) {
//     return value == 2
// })
// console.log(arr, result)

// some
let result = arr.some(function (value) {
    console.log(value)
})
