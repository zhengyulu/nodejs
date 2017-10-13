/*
* @Author: Administrator
*/

var sum=function(a,b){
	return parseInt(a)+parseInt(b);
}
var subtract=function(a,b){
	return parseInt(a)-parseInt(b);
}
var multiply=function(a,b){
	return parseInt(a)*parseInt(b);
}
var divide=function(a,b){
	return parseInt(a)/parseInt(b);
}
//导出模块成员,如果导出单个成员用这个
/*exports.sum=sum;
exports.subtract=subtract;
exports.multiply=multiply;
exports.divide=divide;*/

//module 导出方法 ，要导出的成员比较多
// module.exports = sum;
module.exports ={
	sum:sum,
	subtract:subtract,
	multiply:multiply,
	divide:divide
}