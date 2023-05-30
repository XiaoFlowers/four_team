var express = require('express');
var router = express.Router();
var db=require('../config/mysql')
/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.query);
  res.send("1")
});

module.exports = router;
