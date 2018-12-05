var MainIndex=require('./main_index.js');
var ParseDNS=require('./parse_dns.js');

exports.router=function(res,req,pathname){
	switch(pathname){
		case '/' :
			//goIndex(res);
			MainIndex.getIndex(res,req);
			break;
		case '/parse':
			//goDns(res);
			ParseDNS.goDns(res,req);
			break;
		default:
			res.writeHead(404,{'Content-type':'text/plain'});
			res.end('no page find');
	}
}