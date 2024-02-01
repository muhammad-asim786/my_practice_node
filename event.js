const exprese = require('express');
const EventEmitter = require('events');
const app = exprese();
const event = new EventEmitter();
let x = 10;
console.log(x++);

let count = 0;
// this is ontrigger even;
event.on('Increment',()=>{
    count++
    console.log('Api hit',count);
})

app.get('/',(req,resp)=>{
    resp.send("api is working");
    // for emit/generate the event;
    event.emit('Increment');
})

app.listen(5000);