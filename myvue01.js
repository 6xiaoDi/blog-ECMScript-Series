class Vue{
    constructor(options){
        this.$options = options; // 仿照VUE，一些框架底层属性都会加一些特殊的符号（跟自己的属性做区分）
        this.compile();
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
            }else if(node.nodeType===3){
                console.log("文本节点",node.textContent);
                let reg = /\{\{\s*(\S+)\s*\}\}/g;
                // 正则匹配
                if(reg.test(node.textContent)){
                    // 取字符
                    let $1 = RegExp.$1; // $1代表分组里的具体内容，第一个分组，$2 第二个分组
                    // 替换数据内容
                    node.textContent = this.$options.data[$1];
                }
            }
        })
    }
}