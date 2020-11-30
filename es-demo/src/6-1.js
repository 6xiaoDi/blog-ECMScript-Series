const str = `
    <html>
        <body>
            <div>第一个div</div>
            <p>这是p</p>
            <div>第二个div</div>
            <span>这是span</span>
            <div>第三个div</div>
        </body>
    </html>
`
// exec g
function selectDiv(regExp, str){
    let matches = [] // 输出匹配结果数组
    while(true){
        // console.log(regExp.lastIndex)
        const match = regExp.exec(str)
        // console.log(match)
        // 未匹配上
        if(match == null){
            break
        }
        matches.push(match)
    }
    return matches
}
const regExp = /<div>(.*)<\/div>/g
const res = selectDiv(regExp, str)
console.log(res)