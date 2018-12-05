var http=require('http');
var url=require('url');
var fs=require('fs');

http.createServer(function(req,res){
	var pathname=url.parse(req.url).pathname;
	var realPath=__dirname+'/static'+pathname;
	//console.log(pathname);
	if(pathname=='favicon.ico'){
		return;
	}else if(pathname=='/index' ||pathname=='/'){
		goIndex(res);
	}else{
		dealWithStatic(pathname,realPath,res);
	}



	/*
	var pathname=__dirname+"/static/"+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname,"utf-8");
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(indexPage);*/
}).listen(3000);

function goIndex(res){
	var readPath=__dirname+'/'+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(readPath,"utf-8");
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(indexPage);
}

function dealWithStatic(pathname,realPath,res){
	fs.exists(realPath,function(exists){
		if(!exists){
			res.writeHead(404,{'Content-type':'text/plain'});
			res.write('this request url:'+pathname+" was wrong");
			res.end();
		}else{
			//console.log(123);
			var pointPositon=pathname.lastIndexOf('.');
			var mmiestring=pathname.substring(pointPositon+1);
			//console.log(mmiestring);
			var mmieType;
			switch(mmiestring){
				case 'css':
					mmieType="text/css";
					break;
				case 'jpg':
					mmieType="image/jpeg";
				default:
					mmieType="text/plain";
			}

			fs.readFile(realPath,'binary',function(err,file){
				if(err){
					res.writeHead(500,{'Content-type':'text/plain'});
					res.end(err);
				}else{
					res.writeHead(200,{'Content-type':mmieType});
					res.write(file,'binary');
					res.end();
				}
			});

		}
	})
}


console.log('server start');