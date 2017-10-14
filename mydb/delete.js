/*
* @Author: diamondlee
* @Date:   2017-10-14 14:41:44
* @Last Modified by:   diamondlee
* @Last Modified time: 2017-10-14 14:42:25
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

let sql='delete from myBook where id=?';
let data=[2]
//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  if(results.affectedRows == 1){
  	console.log('删除成功');
  }
  
});
//关闭数据库
connection.end();