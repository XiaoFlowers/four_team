var express = require('express');
var router = express.Router();
var db=require('../config/mysql')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  db.query('select * from user',function(err,data){
  	// console.log(data);
  	res.send(data)
  	
  })
});

module.exports = router;
