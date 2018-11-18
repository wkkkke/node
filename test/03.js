for(var i=1;i<=3;i++){
    setTimeout(function(){
        console.log(i);
    },0);
}

console.log('end');

//代码是从上向下执行的
//i=1时，执行到settimeout判断当前是否异步 ，若异步，就产生一个事件队列，把这些先放到事件队列中
//异步不产生阻塞1.当前进程空闲2.满足触发条件
//当console.log('end')完成，当前进程就空闲了，触发条件为0秒