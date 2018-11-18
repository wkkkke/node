//路径，fs文件读取，http res发送给Chrome
var fs=require('fs');
var http=require('http');
var url=require('url');

http.createServer(function(req,res){
  //读取文件路径
  //基础模块加载用global
  var readPath=__dirname+'/mmm/'+url.parse('11-test.html').pathname;
  var indexPage=fs.readFileSync(readPath,'utf-8');
  res.writeHead(200,{'Content-type':'text/html'});
  res.end(indexPage);

//   console.log(readPath);
}).listen(3000);

console.log('serve start port at 3000')