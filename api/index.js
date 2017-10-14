/*
api 应用程序编程接口
后台接口开发
*/
const express=require('express');
const app=express();
const db=require('./db.js')

//制定API路径 allBooks   json 接口  调用：http://localhost:3000/allBooks
/*app.get('/allBooks',(req,res)=>{
	let sql='select * from myBook';
	db.base(sql,null,(result)=>{
		res.json(result);
	})
})*/

//制定API路径 allBooks   jsonp接口    调用：http://localhost:3000/allBooks?callback=foo
//修改callback的名字
//app.set('jsonp callback name','cb')  调用：http://localhost:3000/allBooks?cb=foo
app.get('/allBooks',(req,res)=>{
	let sql='select * from myBook';
	db.base(sql,null,(result)=>{
		res.jsonp(result);
	})
})


//监听端口
app.listen(3000,()=>{
	console.log('running...')
})