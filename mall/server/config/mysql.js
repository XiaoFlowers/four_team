// 配置数据库的连接

let mysql = require('mysql');

let db = mysql.createConnection({
	// 设置数据库的基本信息
	host:'localhost',
	port:'3306',
	user:'root',
	password:'123456',
	database:'flower'
})
db.connect();
module.exports=db;