// console.log(sum(4, 5))

// function sum(x, y) {
//     return x + y
// }

// console.log(sum)
// console.log(sum(4, 5))
// let sum = function(x, y){
//     return x + y
// }

// let sum = (x, y) => {
//     return x + y
// }

// let sum = (x, y) => x + y
// console.log(sum(3, 4))

// let x = x => x

// let x = function(x){
//     return x
// }

let oBtn = document.querySelector('#btn')
oBtn.addEventListener('click', function () {
    setTimeout(function(){
        console.log(this)
    }, 1000)
})