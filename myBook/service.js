/*
* 具体的业务流程
*/
const data=require('./data.json');
const fs=require('fs');
const path=require('path');
const db=require('./db.js'); //读取数据库数据

//自动生成图书编号
let maxBookCode = ()=>{
	let arr=[];
	data.forEach((item)=>{
		arr.push(item.id)
	})
	return Math.max.apply(null,arr);
}

//把内存数据写入文件
let writeDataToFile=(res)=>{
	fs.writeFile(path.join(__dirname,'data.json'),JSON.stringify(data),(err)=>{
		if(err){
			res.send('server err')
		}
		//文件写入成功后重新跳转到新页面
		res.redirect('/')
	})
}


//渲染主页面
exports.showIndex=(req,res)=>{
	//从数据库读数据
	let sql='select * from myBook'
	db.base(sql,null,(results)=>{
		res.render('index',{list:results})
	})
	
}
//跳转到添加图书
exports.toAddBook=(req,res)=>{
	res.render('addBook',{})
}

//添加图书并且保存数据
exports.addBook=(req,res)=>{
	let info=req.body;
	let book={};
	for(let key in info){
		book[key]=info[key];
	}

	let sql='insert into myBook set ?';
	db.base(sql,book,(results)=>{
		if(results.affectedRows==1){
			res.redirect('/');
		}
	})
	/*book.id=maxBookCode()+1;
	data.push(book);

	//把内存中的数据写入文件
	writeDataToFile(res);*/
}

//编辑图书
exports.toEditBook=(req,res)=>{
	let id=req.query.id;
	let sql='select * from myBook where id=?';
	let data=[id];
	db.base(sql,data,(results)=>{
		res.render('editBook',results[0]);
	})
	/*let book={};
	data.forEach((item)=>{
		if(id == item.id){
			book=item;
			return;
		}
	})
	res.render('editBook',book);*/
}

//编辑图书并且保存数据
exports.editBook=(req,res)=>{
	let info=req.body;

	let sql='update myBook set name=?,author=? where id=?';
	let data=[info.name,info.author,info.id];
	db.base(sql,data,(results)=>{
		if(results.affectedRows==1){
			res.redirect('/');
		}
	})

	/*data.forEach((item)=>{
		if(info.id == item.id){
			for(let key in info){
				item[key]=info[key];
			}
		}
	})
	//把内存中的数据写入文件
	writeDataToFile(res);*/
}
//删除图书提交信息
exports.deleteBook=(req,res)=>{
	let id=req.query.id;

	let sql='delete from myBook where id=?';
	let data=[id];
	db.base(sql,data,(results)=>{
		if(results.affectedRows==1){
			res.redirect('/');
		}
	})

	/*data.forEach((item,index)=>{
		if(id == item.id){
			data.splice(index,1)
		}
		return;
	})
	//把内存中的数据写入文件
	writeDataToFile(res);*/
}