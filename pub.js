let mqtt = require('mqtt');
let client = mqtt.connect("mqtt://localhost:1883");

let topik= 'set_kvt_123';
let message='tran van khanh';

client.on('connect',()=>{
    //setInterval(()=>{
        client.publish(topik,message)
        console.log(message)
    //},5000)
})