import os
clear = lambda: os.system('cls')

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
