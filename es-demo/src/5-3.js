const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
console.log(arr.flat())
console.log(arr.flat().flat())
console.log(arr.flat().flat().flat())
console.log(arr.flat(3))
console.log(arr.flat(Infinity))