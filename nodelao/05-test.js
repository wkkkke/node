/*
var fs=require('fs');

var data=fs.readFileSync('file.txt','utf-8');
console.log(data);
console.log('end');*/


var fs=require('fs');
fs.readFile('file.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		console.log(data);
	}
});

console.log('end');


/*
ajax
$.post('user/checkname',{'id':1},function(data){
	console.log(data);
},'text');*/