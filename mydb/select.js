/*
* @Author: diamondlee
* @Date:   2017-10-14 14:43:01
* @Last Modified by:   diamondlee
* @Last Modified time: 2017-10-14 14:46:01
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
//查询所有
/*let sql='select * from myBook';
let data=null;*/
//查询id为多少的数据
let sql='select * from myBook where id=?';
let data=[3];
//操作数据库
connection.query(sql,data, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
  
});
//关闭数据库
connection.end();