var dns=require('dns');
var querystring=require('querystring');

exports.goDns=function(res,req){
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
	});
}