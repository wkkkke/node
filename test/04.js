var start = new Data();
setTimeout(function(){
    var end=new Data();
    console.log('Time elapsed:',(end-start),'ms');

},500);

while(new Data-start<1000){}

//要使当前进程空闲，就要执行最后一句，先空跑1000ms。