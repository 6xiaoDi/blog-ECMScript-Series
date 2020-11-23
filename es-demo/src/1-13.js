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

class Coder extends People {
    constructor(name, age, company) {
        super(name, age)
        this.company = company
    }
    showCompany() {
        console.log(this.company)
    }
}

let c1 = new Coder('lisi', 25, 'Tecent')
console.log(c1)
c1.showName()
c1.showCompany()
