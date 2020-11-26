let p1 = Promise.resolve('success')
console.log(p1)
p1.then(res => {
    console.log(res)
})