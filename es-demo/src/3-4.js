// const str = 'baidu'
// console.log(str.padStart(8, 'x'))
// console.log(str.padEnd(8, 'y'))
// console.log(str.padStart(8))

// yyyy-mm-dd  2020-11-01
const now = new Date()
const year = now.getFullYear()
const month = (now.getMonth() + 1).toString().padStart(2, '0') // 0~11
const day = (now.getDate()).toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`)

