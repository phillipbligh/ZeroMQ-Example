# ZeroMQ-Example

This project contains simple publish subscribe examples for zeromq. The publisher is implimented in Node javascript and the subscriber is implimented in Node Javacript and in Python.

For messages I am using a gameboard and ball. This is the beginning stages of a pong game. The publisher calls the games update method and passes the game state to the subscriber. The subscriber calls the gamedraw method which draws the ASCII graphics to the screen. In this way the publisher is acting as the game server, while the subscribers are acting like game clients. 

You can run multiple subscriber terminals in different languages and they will all receive the game state as it is updated by the publisher. All subscriber terminals should be in Sync with each other.


To run this project you need
git
npm
node
python latest is fine, I am using 3.7

You will need the zeromq for node
npm install zeromq

You will need to install zmq for python
pip install zmq


Assuming you have your python envinormental variables setup properly
you should be able to run the publisher, subscriber files in separate terminals:
You can run as many subscribers as you like but since the publisher is bound to a port you
can only run one a single machine.


node publisher.js
node subscriber.js
python subscriber.py

Because of the way zeromq works you do not need to run these process on a single machine.
When the IP and port are configured properly you should be able to connect them on different machines on your local network.


#