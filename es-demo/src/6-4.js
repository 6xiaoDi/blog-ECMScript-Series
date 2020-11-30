Promise.all([
    Promise.resolve({
        code: 200,
        data: [1, 2, 3]
    }),
    Promise.resolve({
        code: 200,
        data: [4, 5, 6]
    }),
    Promise.resolve({
        code: 200,
        data: [7, 8, 9]
    }),
]).then(res=>{
    console.log(res)
    console.log('成功')
}).catch(err=>{
    console.log(err)
    console.log('失败')
})