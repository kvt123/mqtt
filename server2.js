var mqtt= require('mqtt');

/*var options={
    //clientId:"mqttjs01",
    username:"mqttkvt123",
    password:"8464A2417DC24E76",
    };*/
var client = mqtt.connect("mqtt://localhost:1883");
//broker.hivemq.com  ngoinhaiot.com



var mysql= require('mysql');

var db= mysql.createConnection({
    host : 'localhost',
    user: 'admin',
    password : "030500",
    database : 'thuchanh'
})
db.connect(()=>{
    console.log('database connection.....')
})
// lấy thời gian
var today = new Date();//khai báo biến thời gian.
var h = today.getHours();//lấy dữ liệu ra
      var m = today.getMinutes();
      var s = today.getSeconds();
var gio=  h + ":" + m + ":" + s;
//ngay
var d = today.getDate();//lấy dữ liệu ra
      var mt = today.getMonth();
      var y = today.getFullYear();
var ngay=  y + "-" + mt + "-" + d;    
//////////////
client.on("connect",function(){
   client.subscribe("kvt_123");
   console.log("successfully");
});

client.on("error",function(error){
    console.log("Can't connect" + error);
    process.exit(1)});

client.on("message",function(topic,message){
    
    console.log(message.toString());
     var Obj = JSON.parse(message);
     //console.log(Obj.adc0);
       var dbstat = 'insert into thuchanh1 set ?'
       var data = {
           nhietdo : Obj.nd,
          doamkk : Obj.dak,
          doamdat : Obj.dad,
          trangthaibom : Obj.ttb,
           Date : ngay,
           Time : gio
       }
       db.query(dbstat,data,(error,output)=>{
           if(error){
               console.log(error)

           }else{
               console.log('data saved to database!')
           }

       })
       
    /////////////////////////////////////
    
    // var Obj = JSON.parse(message);

    //   var sql = "INSERT INTO logs (nhietdo, doam, anhsang)"
    //   "VALUES ('"+Obj.nhietdo + "', '"+ Obj.doam + "', '"+ Obj.anhsang+ "')"
    //   db.query(sql, function (err, result) {
    //      if (err) throw err;
    //      console.log("Insert relay data successfull!"); 
    //      });

    //client.end()
})
