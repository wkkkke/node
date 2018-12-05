//var arr=['www.qq.com','www.baidu.com','www.sohu.com'];
var http=require('http');
urls=['www.qq.com','www.baidu.com','www.sohu.com'];

function fetchPage(url){
	var start=new Date();
	http.get({'host':url},function(res){
		console.log("Got respone from : "+url);
		console.log("request took: ",(new Date()-start)," ms");
	});
}

for(var i=0;i<urls.length;i++){
	fetchPage(urls[i]);
}



/*
var dns=require('dns');
dns.resolve4('www.baidu.com',function(err,addresses){
	if(err){
		console.log(err);
	}else{
		console.log(addresses);
	}
});*/