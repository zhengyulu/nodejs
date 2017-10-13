/*
可使用 express.Router 类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”。
*/
var express = require('express');
var router = express.Router();

router.get('/',(req,res)=>{
	res.end('root get')
})
router.post('/',(req,res)=>{
	res.end('root post')
})

module.exports=router;