var http=require('http');
var url=require('url');
var querystring=require('querystring');

http.createServer(function(req,res){
	var param=url.parse(req.url).query;
	var paramobj=querystring.parse(param);
	console.log(paramobj.name);
	if('/favicon.ico'==pathname){
		return;
	}
	//console.log(paramobj);
	/*
	var parr=param.split('&');
	var num=parr.length-1;
	var strnext=parr[num];
	console.log(strnext);*/
	//console.log(parr);

}).listen(3000);

console.log('server start');