function havelunch(food,drink,callback){
	console.log('Having lunch of'+food+","+drink);
	if(callback && typeof(callback)==='function'){
		//1、callback();
		//setTimeout(callback(),5000);
		
		setTimeout(function(){
			callback();
		},5000);
	}
}


havelunch('toast','coffee',function(){
	console.log('Finished lunch');
})