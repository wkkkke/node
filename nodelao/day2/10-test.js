var http=require('http');
var url=require('url');
var fs=require('fs');
var dns=require('dns');
var querystring=require('querystring');
var router=require('./router.js');

http.createServer(function(req,res){
	//console.log(req.headers);
	//console.log(url.parse(req.url));
	//console.log(req.url);
	var pathname=url.parse(req.url).pathname;
	router.router(res,req,pathname);
	/*
	switch(pathname){
		case '/' :
			goIndex(res);
			break;
		case '/parse':
			goDns(res);
			break;
		default:
			res.writeHead(404,{'Content-type':'text/plain'});
			res.end('no page find');
	}*/
}).listen(3000);

/*
function goIndex(res){
	var pathname=__dirname+"/module/"+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname,'utf-8');
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(indexPage);
}

function goDns(res){
	//var ndomain="www.qq.com";
	
	dns.resolve4("www.qq.com",function(err,addresses){
		if(err){
			console.log(err);
		}else{
			//console.log(addresses);
			var str=querystring.stringify(addresses);
			res.writeHead(200,{'Content-type':'text/plain'});
			//res.end(addresses[0]);
			res.end(str);
		}
	})
}*/


console.log('server start');