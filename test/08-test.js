//读取1.txt 然后停2s结束
var fs=require('fs');
fs.readFile('./1.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        getData(data);
    }
});
console.log('end');
function getData(data){
    
    console.log(123)
    setTimeout(function(){
          console.log(data)
    },2000);
}
