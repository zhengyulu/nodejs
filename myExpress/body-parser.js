/*
body-parser  中间件 支持表单提交的处理   也支持json 形式的处理
*/
/*****************************支持表单提交的处理**************************************/ 
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//挂在启用内置中间件
app.use(express.static('public'))

// parse application/x-www-form-urlencoded 解析这种格式的数据  （挂在参数处理中间件，处理post提交）
app.use(bodyParser.urlencoded({ extended: false }))

// 处理 json格式的参数 application/json/*****************************支持json 形式的处理**************************************/ 
app.use(bodyParser.json())


//处理get提交参数
app.get('/login',(req,res)=>{
	let data = res.query;  //get方式获取参数
	console.log(data);
	res.send('get ok')
})
//处理post提交参数
app.post('/login', (req, res)=>{
/*  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')*/
  let data = req.body;//post方式获取表单提交的数据
  console.log(data)
  res.send('post ok')
  // res.send(JSON.stringify(data, null, 2))
})


app.listen(3000,()=>{
	console.log('running...')
})