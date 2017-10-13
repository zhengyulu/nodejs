/*

*/
const express = require('express');
const path = require('path');
const template = require('art-template');
const app = express();

//设置模板的路径
app.set('views',path.join(__dirname,'view'));
//设置模板引擎,第二个参数为模板的后缀
app.set('view engine', 'art')
//使express兼容art-template
app.engine('art', require('express-art-template'));


app.get('/list',(req,res)=>{
	let data={
		title:'水果',
		list:['apple','orange','banana']
	}
	//参数一：模板名称，参数二：渲染模板数据
	res.render('list',data)
})

app.listen(3000,()=>{
	console.log('running...')
})