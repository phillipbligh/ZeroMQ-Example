const Ball = require('./ball');
const Room = require('./room');

//This game board allows a single ball to bounce around a room

module.exports = class Game {
    constructor(){
        this.ball = new Ball();
        this.room = new Room();    
    }

    //keeps the ball from being outside of the room's boundries
    //returns either one or two true parameters if the ball has bounced 
    //off from one of two sets of walls and all false if no bounce occured
    snapToBounds(){
        var bounces = {leftOrRight:false, topOrBottom:false};

        if (this.room.xLessThanRoomBounds(this.ball.x)){
            this.ball.snapX(1);
            bounces.leftOrRight = true; 
        } else if (this.room.xGreaterThanRoomBounds(this.ball.x)){
            bounces.leftOrRight = true;
            this.ball.snapX(this.room.width);
        }
        if (this.room.yLessThanRoomBounds(this.ball.y)){
            bounces.topOrBottom = true;
            this.ball.snapY(1);
        } else if (this.room.yGreaterThanRoomBounds(this.ball.y)){
            this.ball.snapY(this.room.height)
            bounces.topOrBottom = true;
        }
        return bounces;
    }

    
    getUpdate(){        
        //move the ball 
        this.ball.updatePosition();
        //snap ball to room boundries
        const bounces = this.snapToBounds();
        if(bounces.leftOrRight){
            //ball responds to bouncing
            this.ball.bouncedOffRightOrLeft();
        }
        if(bounces.topOrBottom){
            //ball responds to bouncing
            this.ball.bouncedOffBottomOrTop();
        }
        return {ball:this.ball.getPosition(), room:this.room.getBounds()}
    }

}