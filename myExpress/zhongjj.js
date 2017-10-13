/*
中间件,next  :把请求传递到下个函数（中间件），中间件实质上就是函数
*/
//用use的方式加载中间件
const express=require('express');
const app = express();
let total=0;

/*app.use('/user',(req,res,next)=>{
	console.log(Date.now());
	next()
})
app.use('/user',(req,res,next)=>{
	console.log('访问了url');
	next()
})
app.use('/user',(req,res)=>{
	total++;
	console.log(total);
})
app.listen(3000,()=>{
	console.log('running...')
})*/

//用路由的方式加载中间件
app.get('/abc',(req,res,next)=>{
	console.log(1);
	next()
},(req,res)=>{
	console.log(2);
	res.end('abc')
})
app.listen(3000,()=>{
	console.log('running...')
})