var crypto=require('crypto');
var User_model=require('../../../../Desktop/noded/models/user_model.js');


exports.checkname=function(req, res, next){
	var name=req.body.username;
	if(name=="laoshan"){
		var str='{"id":1,"name":"laoshan"}';
		//var str="{'id':1,'name':'laoshan'}";
		//res.json(str);
		res.send(str);
		//res.send('success');
	}else{
		res.send('error');
	}
}

exports.reg=function(req, res, next){
	//console.log('reging');
	res.render('reg');
}


exports.do_reg=function(req, res, next){
	var name=req.body.username;
	var pass=req.body.pass;

	//console.log(name);
	
	var mpass=xmd5(pass);
	//console.log(mpass);

	User_model.sel_data(function(data){
		console.log(data);
	});


}


function xmd5(str){
	var hash=crypto.createHash('md5');
	hash.update(str);
	var md5str=hash.digest('hex');
	return md5str;
}