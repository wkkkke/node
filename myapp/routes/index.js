var express = require('express');
var router = express.Router();
var User=require('../controllers/user.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/xx',function(req, res, next){
	// res.writeHead(200,{'Content-type':'text/plain'});
	// res.end('laoshan loves xiaowu');
	res.send('laoshan loves laoxie');
});

router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.post('/checkname',User.checkname);


/*
'{"id":1,"name":"laoshan","age":19}'

$.post('/user/checkname',{'username':name},function(data){
	JSON.parse(data);
},'json');


funciton checkname(){
	$name=$this->input->post('username');
	$rs=$this->user_model->get_name($name);
	echo json_encode($rs);

}*/


module.exports = router;

