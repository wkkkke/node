/*
function Demo(){
	var x=789;
	this.a=123;
	this.bb=function(){
		console.log(456);
	};
	this.cc=function(){
		console.log(x);
	}

}
var demo=new Demo();*/
exports.mm={
	'a':1,
	'bb':function(){
		console.log(456);
	}
};

/*
Demo.prototype.call=function(){
	console.log('I am calling');
}

var demo=new Demo();
console.log(demo);*/

//Demo.prototype==demo.__proto__
//demo.call();
//demo.cc();
//console.log(demo.x);
//demo.bb();