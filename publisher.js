// pubber.js
var zmq = require('zeromq')
  , sock = zmq.socket('pub');

const Game = require('./gamefiles/game');
const myGame = new Game();

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher was bound to localhost port 3000');


setInterval(function(){
  console.log('Sending Game Data');
  sock.send(['Bouncy Ball', JSON.stringify(myGame.getUpdate())]);
}, 500);