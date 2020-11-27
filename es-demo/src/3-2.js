const obj = {
    name: 'baidu',
    web: 'www.baidu.com',
    target: 'es'
}
console.log(Object.keys(obj))
const res = Object.keys(obj).map(key => obj[key])
console.log(res)