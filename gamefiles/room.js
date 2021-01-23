module.exports = class Room {
    constructor(){
        this.initRoom();
    }

    initRoom(){        
        this.width = 14;
        this.height = 10;
    }

    getBounds(){
        return {width:this.width, height:this.height};
    }

    xGreaterThanRoomBounds(x){
        return x > this.width;
    }
    
    yGreaterThanRoomBounds(y){
        return y > this.height;
    }
    
    xLessThanRoomBounds(x){
        return x < 1;
    }
    
    yLessThanRoomBounds(y){
        return y < 1;
    }
    
}