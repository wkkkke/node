//commonjs

// var demo=require('./12-test.js').demo;//自定义模块
// console.log(demo.demo.a);
// demo.bb();

var Demo=require('./12-test.js');
var demo=new Demo();
demo.bb();