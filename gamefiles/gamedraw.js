
//Draw the gameboard and the ball using ASCII graphics (TEXT)
module.exports = (gameData) => {
    const ball = gameData.ball;
    const gameBoard = gameData.room;
    console.clear();    
    console.log(' ' + '_'.repeat(gameBoard.width));
    for(var y = 0; y < gameBoard.height; y++){
        var stringToPrint = '|'
        for(var x = 0; x < gameBoard.width; x++){
            if((ball.x === (x + 1) && (ball.y === (y+1))) ){
                stringToPrint+= '*';
            } else {
                stringToPrint+= ' ';
            }
        }        
        console.log(stringToPrint + '|');
    }    
    console.log(' ' + '_'.repeat(gameBoard.width));
}
