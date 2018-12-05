//读取file.txt 然后停2S再结束
var fs=require('fs');
fs.readFile('../file.txt','utf-8',function(err,data){
	if(err){
		console.log(err);
	}else{
		//console.log(data);
		//getData(data);
		
		setTimeout(function(){
			console.log(data);
		},2000);
	}
});

function getData(data){
	setTimeout(function(){
		console.log(data);
	},2000);
}

/*
$sql="select * from user where name='$name'";
$query=mysqli_query($link,$sql);
mysqli_fetch_array($query,function($err,$rs){
	if($err){
		//处理错误
	}
	if(!$rs){
		$sql="insert into user(id,name,pass) values(null,'$name','$pass')";
		mysqli_query($link,$sql,function($query){
			if($query){
				//跳转代码
			}
		});
	}
});*/
	