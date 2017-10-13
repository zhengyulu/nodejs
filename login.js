/*
* @Author: Administrator
* @Date:   2017-10-10 13:53:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-10 14:40:13
*/
const http=require('http');
const ss=require('./staticServer.js');
const url=require('url');  //处理get请求的路由 
const querystring=require('querystring');//处理post请求的路由


http.createServer((req,res)=>{
	//启动静态资源服务
	if(req.url.startsWith('/www')){
		ss.staticServer(req,res,__dirname);
	}
	//启动动态资源服务
	if(req.url.startsWith('/login')){

		//get请求
		if(req.method == 'GET'){  //这里需要大写！！！！！！
			// res.end('get')
			let param = url.parse(req.url,true).query; //第二个参数为true时，url参数query会以对象的形式呈现，否则为字符串
			if(param.username == 'admin'&& param.password == '123'){
				res.end('get success')
			}else{
				res.end('get failure')
			}
		}
		//post请求
		if(req.method == 'POST'){ //这里需要大写！！！！！！
			// res.end('post')
			let pdata='';
			req.on('data',(chunk)=>{
				pdata+=chunk;
			});
			req.on('end',()=>{
				let obj=querystring.parse(pdata);
				if(obj.username=='admin' && obj.password=='123'){
					res.end('success')
				}else{
					res.end('failure')
				}
			})
		}
	}
}).listen(3000,()=>{
	console.log('running...')
})