// includes -> boolean
// const arr = ['es6', 'es7', 'es8']
// console.log(arr.includes('es7')) // true
// console.log(arr.includes('es9')) // false
// console.log(arr.includes('es7', 1)) // true
// console.log(arr.includes('es7', 2)) // false
// console.log(arr.includes('es7', -1)) // false
// console.log(arr.includes('es7', -2)) // true

// console.log(arr.indexOf('es7'))
// console.log(arr.indexOf('es7') > -1)

const arr = ['es6', ['es7', 'es8'], 'es9']
console.log(arr.includes(['es7', 'es8'])) // false
console.log(arr.indexOf(['es7', 'es8'])) // -1