var http=require('http');


http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.end('<h3>hello world</h3>');

	/*
	数据包：包头 包体
	文件编码  ANSI  unicode  utf-8
	浏览器解码 gbk gb2312 gb18030
	数据库编码*/
}).listen(3000);

console.log('server start');