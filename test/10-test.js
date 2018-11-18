//urls=['www.qq.com','ww.baidu.com','www.sohu.com'];
//chrome向servs发起一个http请求 发送一个get就可以
//http.get(options[,callback])
//通过读取相应文件到内存进行显示，去确定他的文件IO和网络IO
var http=require('http');
urls=['www.qq.com','www.baidu.com','www.sohu.com'];
function fetchPage(url){
    var start=new Date();
    http.get({'host':url},function(res){
        console.log("Got a request from :"+url);
        console.log('request took:',(new Date()-start),'ms');
    })
}

for (var i=0;i<=urls.length;i++){
    fetchPage(urls[i]);
}

//node 有些原生模块不需要异步加载：console,global,timer,process
