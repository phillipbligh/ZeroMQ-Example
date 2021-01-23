// producer.js
var zmq = require('zeromq')
  , sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

var index  = 0;



//setInterval(function(){
//    index++;
//    const message = 'Producer Message' + index;
//    console.log('Sending: ',message);
//    sock.send(message); 
//}, 500);


console.log('Send 1');
sock.send('1');
console.log('Send 2');
sock.send('2');
console.log('Send 3');
sock.send('3');