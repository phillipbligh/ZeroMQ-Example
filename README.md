# ZeroMQ-Example

## Inroduction

This project contains two simple examples for the use of the networking library known as ZeroMQ. 

ZeroMQ libraries are available in many different languages (check 0mq website for details). In this example I am using Python and Javascript(Node.js) 

There are quite a few different communication models implimented in ZeroMQ, I have only provided demonstrations in this project to two of those.

**Push-Pull** (in development) - files to run are worker.js and producer.js
**Publish-Subscribe** (completed) - files to run are publisher.js, subscriber.js and subscriber.py

### Publish Subscribe Example

This example contains one publisher and two subscriber implimentations. The Publisher module produces a message on a give topic ( *string name* ). Subscribers subscribe to that topic and recieve messages.

What good would a demonstration about networking be without some interesting messages to pass back and forth?

For messages, I am using a simple games state. In this example I am using the beginning stages of a pong game where a ball bounces around the room forever.  The publisher calls the games update method and passes the game state to all subscribers. The subscriber receives the message and calls the gamedraw method passing it the message. The game draw method draws the games ASCII graphics to the screen. In this way the publisher is acting as the game server, while the subscribers are acting like game clients. 

You can run multiple subscriber terminals in Node or Python and they will all receive the game state as it is updated by the publisher. All subscriber terminals should be in Sync with each other. You can only run a signle publisher on a given machine because it binds to a port, which other ZeroMQ applications from binding to that port.

#### Setup

To run this project you need to have the following installed
git - latest
npm - latest 
node - latest
python - the latest Python should be fine, I am using 3.7


assuming you are in terminal navigated to the folder that you set up for this poject

clone the project:
git clone https://github.com/phillipbligh/ZeroMQ-Example.git
install the node modules
npm install

pip install zmq

#### Running

Assuming you have your python envinormental variables setup properly
you should be able to run the publisher, subscriber files in separate terminals:
You can run as many subscribers as you like but since the publisher is bound to a port you
can only run one a single machine.

node publisher.js
node subscriber.js
python subscriber.py


#### Extrapolating

If you were to change the IP addresses and ports appropriately you could get this to run on a local network. If you added security, and configured your router to allow port forwarding you could get this same application to run across the internet. 

