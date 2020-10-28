console.log("a文件");
// let a = 10;
//
// let obj = {
//     name:"张三",
//     age:20,
//     fn:function(){
//         console.log("fn...")
//     }
// }

let fn = function(){
    console.log(1111);
}

export default fn;
let num = 10;
let str = "我是字符串";
export { num }
// 别名 as
// export { str };
export {str as mystr}