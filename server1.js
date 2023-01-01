var mqtt= require('mqtt');
var client = mqtt.connect("mqtt://localhost:1883");
//var client = mqtt.connect("mqtt://113.168.12.142:1883");
const express = require('express');
var cors = require('cors');
 const app= express();
//Tạo HTTP server listening ở port 3001
const server1 = app.listen(3001, () => {
console.log(`Express running → PORT ${server1.address().port}`);
});
 
//Xử lý route phương thức GET khi nhận dữ liệu điều khiển từ website với URL
//có dạng là: http://localhost:3001/control?RL={relay}&val={state}
//với {relay} là số thứ tự hoặc tên relay và {state} là trạng thái relay
app.get('/control', function (req, res) {
//var led1 = req.query.LED1;
//var led2 = req.query.LED2;
var che_do = req.query.che_do;
var lich = req.query.lich;
var bnt = req.query.bnt;

 if(che_do=='1')
 {
console.log("1");
var cmd_str = "1";

 }
 if(che_do=='0')
 {
console.log("0");
var cmd_str = "0";
 }
 if(lich=='2')
 {
console.log("2");
var cmd_str = "2";
 }
 if(lich=='3')
 {
console.log("3");
var cmd_str = "3";

 }

 if(bnt=='4')
 {
console.log("4");
var cmd_str = "4";

 }

 if(bnt=='5')
 {
console.log("5");
var cmd_str = "5";

 }
//Tạo chuỗi dữ liệu
//var cmd_str = "RL" + rl + val;
//var cmd_str =  "{\"led1\":\""+led1 +"\",\"led2\":\""+led2+"\"}";
//Publish đến thiết bị
 client.publish('s_kvt_123', cmd_str, function(err) {
 if (err) {
 res.send("FAILED");
 }
 else {
 res.send("OK");
 }
 });
})
