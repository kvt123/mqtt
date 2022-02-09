let mosca = require('mosca')
let setting = {port:1883}
let broker= new mosca.Server(setting)

broker.on('ready',()=>{
    console.log('broker ready!')
})

broker.on('published',(packet)=>{
    message= packet.payload.toString()
    console.log(message)
})
