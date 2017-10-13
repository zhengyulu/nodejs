/*
路径：根据请求路径和请求方式进行路径分发处理
http的常用请求方式：
get
post
put
delete
*/
const express=require('express');
const app=express();
//1、基本的路由处理

/*// 接受 get 请求
app.get('/', function (req, res) {
  res.send('get!');
});

// 接受 POST 请求
app.post('/', function (req, res) {
  res.send('post');
});

// 节点接受 PUT 请求
app.put('/', function (req, res) {
  res.send('put');
});

//节点接受 DELETE 请求
app.delete('/', function (req, res) {
  res.send('delete');
});*/


//2、使用app.use()不管哪种请求都可以接受，可以处理所有的路由请求
/*app.use((req,res)=>{
	res.send('ok')
})*/


//3、app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求加载中间件。
// 在下面的例子中，来自 “/secret” 的请求，不管使用 GET、POST、PUT、DELETE 或其他任何 http 模块支持的 HTTP 请求，句柄都会得到执行。

/*app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...');
  next(); // pass control to the next handler
});*/


//4.express.Router
//可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”。
const router = require('./myRouter.js');

app.use(router);

app.listen(3000,()=>{
	console.log('running...')
})