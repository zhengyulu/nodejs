/*
* @Author: Administrator
* @Date:   2017-10-11 11:09:01
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-11 11:10:38
*/
const express=require('express');
const app=express();

app.get('',(req,res)=>{
	res.send('ok')
}).listen(3000,()=>{
	console.log('running...')
})