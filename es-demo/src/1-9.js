let name = 'zhangsan'
let age = 30
let s = 'school'
let obj = {
    name,
    age,
    [s]: 'abcdefg',
    study(){
        console.log(this.name + '正在学习')
    }
}
console.log(obj)
obj.study()