// subber.js
var zmq = require('zeromq')
  , sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('Bouncy Ball');
console.log('Subscriber connected to port 3000');

const gameDraw = require('./gamefiles/gamedraw');


sock.on('message', function(topic, message) {
  //console.log('received a message related to:', String(topic), 'containing message:', JSON.parse(String(message)));
    gameDraw(JSON.parse(String(message)));
});