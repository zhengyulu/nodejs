/*
* 静态服务器功能
*/
const http=require('http');
const path=require('path');
const fs=require('fs');
const url=require('url'); //路由：get请求获取URL参数
const querystring=require('querystring')//路由：post请求获取URL参数

http.createServer((req,res)=>{
	// res.end('hello world!')
	// if(req.url.startWith('/index')){
	// 	res.end('index')
	// }
	
	// res.end(req.url)
	// res.end(__dirname);
	// res.end(path);
	
	//文件路径 path.parse
	// let obj=path.parse(__filename)
	// res.end(path.parse(__filename));
	
	// //路由：get请求获取URL参数
	var pathname = url.parse(req.url).pathname;
	res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("Hello World");
	res.end();
}).listen(3000,()=>{
	console.log('running....')
})