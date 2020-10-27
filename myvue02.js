class Vue{
    constructor(options){
        this.$options = options; // 仿照VUE，一些框架底层属性都会加一些特殊的符号（跟自己的属性做区分）
        this.observer(this.$options.data); // 监听数据
        this.compile();
    }
    observer(data){
        let keys = Object.keys(data);
        keys.forEach(key=>{
            let value = data[key];
            Object.defineProperty(data,key,{
                configurable:true,
                enumerable:true,
                get(){
                    console.log("get...111");
                    return value;
                },
                set(newValue){
                    console.log("set..");
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
                }
            }
        })
    }
}