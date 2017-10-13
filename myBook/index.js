/*
* 图书管理系统-入口文件
*/
/******************需要下载express  art-template   body-parser这三个包**********************/
const express=require('express');
const path=require('path');
const template=require('art-template');
const bodyParser=require('body-parser');
const router=require('./router.js');
const app=express();

/*****************启动静态资源服务,第一个参数是虚拟路径，第二个参数是引用路径*****************/
app.use('/www',express.static('public'))

/******************设置模板引擎 ，还需依赖express-art-template,需要下载*********************/
//设置模板的路径
app.set('views',path.join(__dirname,'views'));
//设置模板引擎,第二个参数为模板的后缀
app.set('view engine', 'art')
//使express兼容art-template
app.engine('art', require('express-art-template'));

/*****************************************处理请求参数**************************************/
// parse application/x-www-form-urlencoded 解析这种格式的数据  （挂在参数处理中间件，处理post提交）
app.use(bodyParser.urlencoded({ extended: false }))
// 处理 json格式的参数 application/json
app.use(bodyParser.json())

/****************************************启动服务器功能*************************************/
//设置路由
app.use(router)

//监听端口
app.listen(3000,()=>{
	console.log('running...')
})