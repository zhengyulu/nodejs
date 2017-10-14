/*
测试通用api
*/
const db=require('./db.js')

//插入操作
let sql='insert into myBook set ?';
let data={
	name:'名产',
	author:'hahah'
}
db.base(sql,data,(results)=>{
	console.log(results)
})
