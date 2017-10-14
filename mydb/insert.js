/*
* @Author: diamondlee
* @Date:   2017-10-14 14:33:58
* @Last Modified by:   diamondlee
* @Last Modified time: 2017-10-14 14:37:48
*/
//加载数据库驱动
const mysql      = require('mysql');
//创建数据库连接
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  database : 'myBook'
});
//实行连接操作
connection.connect();

let sql='insert into myBook set ?';
let data={
	name:'名产',
	author:'hahah'
}
//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1){
  	console.log('插入成功');
  }
  
});
//关闭数据库
connection.end();