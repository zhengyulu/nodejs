/*
* @Author: Administrator
* @Date:   2017-10-10 13:53:28
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-10 16:18:15
*/
const http=require('http');
const path=require('path');
const fs=require('fs');
const url=require('url');  //处理get请求的路由 
const querystring=require('querystring');//处理post请求的路由
const scoreData=require('./score.json');
const template=require('art-template');


http.createServer((req,res)=>{
	
	if(req.url.startsWith('/query') && req.method=='GET'){

		let content = template(path.join(__dirname,'view','index.art'),{})
			res.end(content)
	
	}else if(req.url.startsWith('/score') && req.method=='POST'){
				
		let pdata='';
		req.on('data',(chunk)=>{
			pdata+=chunk;
		});

		req.on('end',()=>{
			let obj=querystring.parse(pdata);
			let result=scoreData[obj.code];

			//返回内容之前要进行数据渲染
			let content = template(path.join(__dirname,'view','result.art'),result)
			res.end(content)

		})
		
	}else if(req.url.startsWith('/all') && req.method=='GET'){
		//全部成绩
		let arr=[];
		for(let key in scoreData){
			arr.push(scoreData[key]);
		}
		let content = template(path.join(__dirname,'view','list.art'),{
			list:arr
		})
		res.end(content)
	}
}).listen(3000,()=>{
	console.log('running111...')
})