/*
* @Author: Administrator
* @Date:   2017-10-13 14:06:20
* @Last Modified by:   diamondlee
* @Last Modified time: 2017-10-14 13:28:06
*/
const express = require('express');
const router = express.Router();
const service=require('./service.js')

//路由处理，单纯的路由处理，业务处理写在service.js中
router.get('/',service.showIndex)
//添加图书页面
router.get('/toAddBook',service.toAddBook)
//添加图书（提交表单）
router.post('/addBook',service.addBook)
//编辑图书页面
router.get('/toEditBook',service.toEditBook)
//编辑图书（提交表单）
router.post('/editBook',service.editBook)
//删除图书（提交表单）
router.get('/deleteBook',service.deleteBook)

module.exports=router;