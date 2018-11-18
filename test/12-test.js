//exports和module.exports
//区别：直接赋值和引用赋值 exports是module.exports的引用
//module.exports不仅可以返回类还可以返回一个对象，还有字符串和数组
//exports必须采用引用赋值，返回一个对象
//

function Demo(){
    this.a='123';
    this.bb=function(){
        console.log("456");
    }
}
// exports.demo=new Demo()

// var demo=new Demo();
// console.log(demo.a);
// demo.bb();
module.exports=Demo;

