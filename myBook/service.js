/*
* 具体的业务流程
*/
const data=require('./data.json')

//自动生成图书编号
let maxBookCode=()=>{
	let arr=[];
	data.forEach((item)=>{
		arr.push(item.id)
	})
	return Math.max.apply(null,arr);
}
//渲染主页面
exports.showIndex=(req,res)=>{
	res.render('index',{list:data})
}
//跳转到添加图书
exports.toAddBook=(req,res)=>{
	res.render('addBook',{})
}

//添加图书并且保存数据
exports.addBook=(req,res)=>{
	let info=req.body;
	res.render('addBook',{})
}
