let mqtt = require('mqtt');
let client = mqtt.connect("mqtt://localhost:1883");
let topik= 'set_kvt_123';

client.on('message',(topik,message)=>{
    message =message.toString()
    console.log(message)
})

client.on('connect',()=>{
    client.subscribe(topik)
    console.log("ok")
})