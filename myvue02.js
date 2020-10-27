class Vue extends EventTarget{
    constructor(options){
        super();
        this.$options = options; // 仿照VUE，一些框架底层属性都会加一些特殊的符号（跟自己的属性做区分）
        this.observer(this.$options.data); // 监听数据
        this.compile();
    }
    observer(data){
        let keys = Object.keys(data);
        let _this = this;
        let dep = new Dep(); // 实例化管理器
        keys.forEach(key=>{
            let value = data[key];
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    // Dep.target == watcher实例；
                    if(Dep.target){
                        console.log("get...111");
                        dep.addSub(Dep.target); // 添加到订阅者队列（实现订阅者）
                    }
                    return value;
                },
                set(newValue){
                    console.log("set..");
                    // key 这里传参必须是独一无二的事件名称
                    // 重新编译；二次渲染；自定义事件；（观察者模式--订阅发布模式）
                    // let event = new CustomEvent(key,{detail:newValue});
                    // _this.dispatchEvent(event);
                    dep.notify(newValue);
                    console.log(dep);
                    if(newValue !== value)
                        value = newValue;
                }
            })
        })
    }
    compile(){
        let ele = document.querySelector(this.$options.el); // 确定查找范围
        this.compileNode(ele);
    }
    compileNode(ele){
        let childNodes = ele.childNodes;
        console.log(childNodes);
        childNodes.forEach(node=>{
            //  1元素节点 2属性节点 3文本节点
            if(node.nodeType===1){
                console.log("元素节点")
                this.compileNode(node); // 递归子节点
            }else if(node.nodeType===3){
                // ()是进行分组
                let reg = /\{\{\s*(\S+)\s*\}\}/g;
                if(reg.test(node.textContent)){
                    // 取字符
                    let $1 = RegExp.$1; // $1代表分组里的具体内容，第一个分组，$2 第二个分组
                    node.textContent = node.textContent.replace(reg,this.$options.data[$1]);
                    // 绑定事件处理函数
                    // this.addEventListener($1,e=>{
                    //     let newValue = e.detail;
                    //     // 匹配旧值；
                    //     let oldValue = this.$options.data[$1];
                    //     // reg = /oldValue/g;（这种写法是错误的，oldValue是变量，这里会把它当成字符串）
                    //     reg = new RegExp(oldValue,"g"); // 全局匹配旧值
                    //     node.textContent = node.textContent.replace(reg,newValue);
                    // });
                    new Watcher(this.$options.data,$1,(newValue)=>{
                        let oldValue = this.$options.data[$1];
                        reg = new RegExp(oldValue,"g");
                        node.textContent = node.textContent.replace(reg,newValue);
                    })

                }
            }
        })
    }
}

// 管理器（订阅者列表）；
class Dep{
    constructor(){
        this.subs = [];  // 订阅者队列
    }
    addSub(sub){
        this.subs.push(sub);
    }
    // 发布
    notify(newValue){
        this.subs.forEach(sub=>{
            sub.update(newValue);
        })
    }
}

// 订阅者
// cb 回调函数
class Watcher{
    constructor(data,key,cb){
        Dep.target = this; // this指向实例化的Watcher（静态属性）
        this.cb = cb;
        //人为触发get添加 watcher，之后再清空（寄存器）Dep.target
        data[key];
        Dep.target = null;
    }
    update(newValue){
        this.cb(newValue); // 执行回调
    }
}