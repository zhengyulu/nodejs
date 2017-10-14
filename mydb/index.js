/*
操作数据库的基本步骤
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
//操作数据库
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
//关闭数据库
connection.end();