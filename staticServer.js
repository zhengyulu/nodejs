/*
* @Author: Administrator
* @Date:   2017-10-10 13:37:25
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-10 13:49:15
*/
const fs=require('fs');
const path=require('path');

exports.staticServer = (req,res,root)=>{
	fs.readFile(path.join(root,req.url),(err,fileContent)=>{
		if(err){
			res.writeHead(404,{
				'Content-Type':'text/plain;charset=utf8'
			})
			res.end('页面被狗狗叼走了')
		}else{
			res.writeHead(200,{
				'Content-Type':'text/html;charset=utf8'
			})
			res.end(fileContent)
		}
	})
}