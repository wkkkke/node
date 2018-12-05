//回调函数 可以是同步也可以是异步

function waitFive(name,function_name){
	var pus=0;
	var currentDate=new Date();
	while(pus<5000){
		var now=new Date();
		pus=now-currentDate;
	}

	function_name(name);
}

function echo(name){
	console.log(name);
}


waitFive('laoshan',echo); //laoshan
console.log('its over');
