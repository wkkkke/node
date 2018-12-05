var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){
	//找到文件路径
	//console.log(url.parse(req.url));
	var readPath=__dirname+'/module/'+url.parse('index.html').pathname;
	//把文件加载到内存
	var data=fs.readFileSync(readPath,'utf-8');
	//把数据打成数据包发回
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(data);
	//res.writeHead()
	//console.log(readPath);
}).listen(3000);

console.log('server start');
/*
(1)server读取文件到内存  处理路径? url
(2)把内存数据变成数据包
(3)发送数据包并结包*/

/*
http.createServer(function(req,res){
	res.writeHead(200,{'Content-type':'text/html'});
	res.end('<h3>helloo</h3>');
}).listen(3000);

console.log('server start');*/


//mime头  409种文件格式  PE ELF