/*
http://localhost:3000/  ---index.html
http://localhost:3000/img  ----123.jpg*/
var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	switch(pathname){
		case '/img':
			getImg(res,req);
			break;
	}
}).listen(3000);

function getImg(res,req){
	var pathname=__dirname+'/img/'+url.parse('123.jpg').pathname;
	var imgData=fs.readFileSync(pathname);
	res.writeHead(200,{'Content-type':'image/jpeg'});
	res.end(imgData);
}
console.log("server start");