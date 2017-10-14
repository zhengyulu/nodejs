/*
restful api 是从URL格式来表述的
get      http://localhost:3000/books
get      http://localhost:3000/books
post     http://localhost:3000/books
get      http://localhost:3000/books/1
put      http://localhost:3000/books
delete   http://localhost:3000/books/book/2

传统的URL风格
http://localhost:3000/
http://localhost:3000/toAddBook
http://localhost:3000/addBook
http://localhost:3000/toEditBook?id=1
http://localhost:3000/editBook
http://localhost:3000/deleteBook?id=2
*/

const express=require('express');
const app=express();
const db=require('./db.js');
const bodyParser=require('body-parser');


/*app.get('/books',(req,res)=>{
	let sql='select * from myBook';
	db.base(sql,null,(result)=>{
		res.json(result);
	})
})*/
//http://localhost:3000/books/book/1
app.get('/books/book/:id',(req,res)=>{
	let id=req.params.id;  //获取后面的id 1
	let data=[id];
	let sql='select * from myBook';
	db.base(sql,null,(result)=>{
		res.json(result[0]);
	})
})

//http://localhost:3000/books
app.get('/books',(req,res)=>{
	let sql='select * from myBook'
	db.base(sql,null,(results)=>{
		res.json(results);
	})
})
//http://localhost:3000/books/book
// parse application/x-www-form-urlencoded 解析这种格式的数据  （挂在参数处理中间件，处理post提交）
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.post('/books/book',(req,res)=>{
	let info=req.body;
	//	let book={};
	//for(let key in info){
	//	book[key]=info[key];
	//}

	let sql='insert into myBook set ?';
	db.base(sql,info,(result)=>{
		if(result.affectedRows == 1){
			res.json({flag : 1});
		}else{
			res.json({flag : 2});
		}
	})
})

//监听端口
app.listen(3000,()=>{
	console.log('running...')
})