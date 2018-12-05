var url=require('url');
var fs=require('fs');

exports.getIndex=function(res,req){
	var pathname=__dirname+"/module/"+url.parse('index.html').pathname;
	var indexPage=fs.readFileSync(pathname,'utf-8');
	res.writeHead(200,{'Content-type':'text/html'});
	res.end(indexPage);
}