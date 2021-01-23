module.exports = class Ball {
    constructor(){
        this.initBall();
    }

    getPosition(){
        return {
            x:this.x, 
            y:this.y
        };
    }

    initBall(){        
        this.x = 1;
        this.y = 1;
        this.xVelocity = 4;
        this.yVelocity = 2;
    }
    
    updatePosition(){
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    bouncedOffBottomOrTop(){
        this.yVelocity *= -1;
    }

    bouncedOffRightOrLeft(){
        this.xVelocity *= -1;
    }
    
    snapX(x){        
        this.x = x;        
    }

    snapY(y){        
        this.y = y;
    }
}