/*
* @Author: Administrator
* @Date:   2017-10-13 14:06:20
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-13 15:04:03
*/
const express = require('express');
const router = express.Router();
const service=require('./service.js')

//路由处理，单纯的路由处理，业务处理写在service.js中
router.get('/',service.showIndex)
//添加图书
router.get('/toAddBook',service.toAddBook)
//添加图书（提交表单）
router.post('/addBook',service.addBook)

module.exports=router;