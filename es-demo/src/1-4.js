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

arr.forEach(function(elem, index, array){
    if(arr[i] == 2){
        continue;
    }
    console.log(elem, index)
})