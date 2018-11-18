//node 原生模块（原生模块，自定义模块，第三方模块）
//原生模块--http://node.js.cn//api/ require('fs') require('http')
//自定义模块 require('./01-test.js')
//第三方模块 require('request') require('mysql')
//安装第三方模块 npm install request (当前目录) npm install -g request(全局)
//fs模块读取1.txt文件中的内容
//fs.readFile(path[,options],callback)   fs模块提供了一些api,用于与文件系统进行交互
//fs.readFileSync(path[,options])  sync:同步 path:路径 options:对解码等
var fs=require('fs');
//同步
// var data=fs.readFileSync('./1.txt','utf-8');//utf-8解码
// console.log(data);
// console.log('end');//<Buffer 68 65 6c 6c 6f>
//                    //end
fs.readFile('./1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
console.log('end');



