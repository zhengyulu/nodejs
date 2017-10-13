/*
* @Author: Administrator
* @Date:   2017-10-11 10:58:37
* @Last Modified by:   Administrator
* @Last Modified time: 2017-10-11 11:06:31
*/
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(3000, 'localhost',function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});