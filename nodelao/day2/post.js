var http=require('http');
var fs=require('fs');
var url=require('url');
var querystring=require('querystring');


http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	switch(pathname){
		case "/" :
			goLogin(res,req);
			break;
		case "/add" :
			goPost(res,req);
			break;
		default :
			res.writeHead(404,{'Content-type':'text/plain'});
			res.end('not page found');
	}
}).listen(3000);

function goLogin(res,req){
	var pathname=__dirname+'/module/'+url.parse('login.html').pathname;
	var loginData=fs.readFileSync(pathname,'utf-8');
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(loginData);
}

function goPost(res,req){
	var postData="";
	req.setEncoding('utf8');
	req.addListener('data',function(postChunkData){
		postData+=postChunkData;
	});
	req.addListener('end',function(){
		//console.log(postData);
		var paramobj=querystring.parse(postData);
		console.log(paramobj.username);
	});
}

console.log('server start');