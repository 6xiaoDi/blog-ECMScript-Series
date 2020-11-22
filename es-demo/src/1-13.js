class People {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    showName() {
        console.log(this.name)
    }
}
let p1 = new People('zhangsan', 30)
console.log(p1)