var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.send('Hello node!');
});

router.get('/set', function(req, res){
	res.send('Hello node!');
});

module.exports = router;