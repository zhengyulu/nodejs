/*
把data.js文件中的数据拼接成insert语句
*/
const path=require('path');
const fs=require('fs');

fs.readFile(path.join(__dirname,'../','data.json'),'utf8',(err,content)=>{
	if(err)return;
	let list=JSON.parse(content);
	let arr=[];
	list.forEach((item)=>{
		let sql=`insert into myBook (name,author) values ('${item.name}','${item.author}');`
		arr.push(sql);
	})
	
	fs.writeFile(path.join(__dirname,'data.sql'),arr.join(''),'utf8',(err)=>{
		if(err)return;
		console.log('init...')
	})
})