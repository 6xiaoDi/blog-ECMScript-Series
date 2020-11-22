// 类
// 构造函数
function People(name, age) {
    console.log(this)
    // 实例属性
    this.name = name
    this.age = age
    // 静态属性
    People.count++
}

// 静态属性
People.count = 0
// 静态方法
People.getCount = function(){
    console.log(this)
    console.log(this.age) // undefined
    console.log('当前共有' + People.count + '个人')
}

// 实例方法
People.prototype.showName = function () {
    console.log('我的名字是' + this.name)
}

// 实例化对象
let p1 = new People('张三', 24)
console.log(p1)
p1.showName()

let p2 = new People('李四', 20)
console.log(p2)
p2.showName()

// 查看实例化次数
console.log(People.count)
People.getCount()

// 静态方法
// console.log(Math.max(4, 5))
// console.log(Math.random())
