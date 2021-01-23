import zmq
import time
from gamefiles.gamedraw import gamedraw
import json
ctx = zmq.Context()
sock = ctx.socket(zmq.SUB)


sock.connect("tcp://127.0.0.1:3000")
sock.subscribe("Bouncy Ball") # Subscribe to all topics

while True:
    data = sock.recv_string()
    if(data != "Bouncy Ball"):
        gamedraw(json.loads(data))
    #gamedraw(json.loads(data[1]))

sock.close()
ctx.term()