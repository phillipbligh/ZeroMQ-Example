
# import only system from os 
from os import system, name 
  
# import sleep to show output for some time period 
from time import sleep 
  
# define our clear function 
def clear(): 
  
    # for windows 
    if name == 'nt': 
        _ = system('cls') 
  
    # for mac and linux(here, os.name is 'posix') 
    else: 
        _ = system('clear') 


def gamedraw(gamedata):
    ball = gamedata['ball']
    gameBoard = gamedata['room']     
    clear()    
    print(' ' + ('_' * gameBoard['width']))
    for y in range(gameBoard['height']):
        stringToPrint = '|'
        for x in range(gameBoard['width']):
            if (ball['x'] == (x + 1)) and (ball['y'] == (y+1)):
                stringToPrint = stringToPrint + '*'
            else:
                stringToPrint = stringToPrint + ' '
        print(stringToPrint + '|')
    print(' ' + ('_' * gameBoard['width']))
