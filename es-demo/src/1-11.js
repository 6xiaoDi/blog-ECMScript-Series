// 类
// 构造函数
function People(name, age) {
    console.log(this)
    // 实例属性
    this.name = name
    this.age = age
}

// 实例化对象
let p1 = new People('张三', 24)
console.log(p1)

let p2 = new People('李四', 20)
console.log(p2)
