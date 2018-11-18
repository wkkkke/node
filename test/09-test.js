//node fs/dns/http
//www.qq.com www.baidu.com -->IP/IP数组
//dns.resolve4(hostname[,options],callback) host:需要解析的主机名
//dns.resolve6(hostname[,options],callback)

//拿到qq的IP地址
var dns=require('dns');
dns.resolve4('www.qq.com',function(err,addresses){
    if(err){
        console.log(err);
    }else{
        console.log(addresses);
    }
});
console.log('end');
