//读取内置模块http，这个模块开发服务器用的
var http = require("http");
//创建一个服务器
var server=http.createServer(function(req,res){
   res.writeHead(200,{'Content-type':'text/html'});
   res.end('<h3>hello</h3>');
});
server.listen(3000);
console.log('server start port 3000');

