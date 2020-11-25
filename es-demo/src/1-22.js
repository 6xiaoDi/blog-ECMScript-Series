// const a = 2
// const b = 3
// console.log("同步任务",a + b) // 同步任务
// 异步任务
// setTimeout(() => {
//     console.log(a + b)
// }, 1000)
// console.log('异步任务')

// 1 3 2
// console.log(1)
// setTimeout(() => {
//     console.log(2)
// }, 0)
// console.log(3)

// Ajax的原理
function ajax(url, callback) {
    // 1、创建XMLHttpRequest对象
    var xmlhttp
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest() // IE7之后的版本
    } else { // 兼容早期浏览器
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
    }
    // 2、发送请求
    xmlhttp.open('GET', url, true)
    xmlhttp.send()
    // 3、服务端响应
    xmlhttp.onreadystatechange = function () {
        // 正确返回
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            var obj = JSON.parse(xmlhttp.responseText)
            // console.log(obj)
            callback(obj)
        }
    }
}

// var url = 'http://abcxsdsa.com'
// ajax(url, res => {
//     console.log(res)
// })