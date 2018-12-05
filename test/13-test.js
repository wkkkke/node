//commonjs

// var demo=require('./12-test.js');//自定义模块
// console.log(demo.demo.a);
// demo.demo.bb();

var Demo=require('./12-test.js');
var demo=new Demo();
demo.bb();