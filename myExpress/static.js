/*
托管静态文件
可以指定虚拟目录
可以指定多个目录
*/
const express=require('express');
const app=express();

let server = app.use('abc',express.static('public'));  //第一个参数是加的虚拟目录   http://localhost:3000/abc/hello.html
//可以指定多个目录
app.use('nihao',express.static('nihao')); // http://localhost:3000/nihao/haha.html

server.listen(3000,()=>{
	console.log('running...')
})


// 、、、、、、、、、、、、、、、、、、、、、、、、、、、简洁的方式
/*app.use('abc',express.static('public'));
app.use('nihao',express.static('nihao'));
app.listen(3000,()=>{
	console.log('running...')
})*/