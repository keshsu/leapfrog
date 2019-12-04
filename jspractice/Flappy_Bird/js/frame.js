// BACKGROUND
function Back(ctx,sprite, maxHeight) {
    this.sX = 0;
    this.sY = 0;
    this.w = 275;
    this.h = 226;
    this.x = 0;
    this.y = maxHeight - 226;
    
    this.draw = function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        // MAKING DUPLICATE TO FILL THE IMAGE
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    }
    
}

// FOREGROUND
function Fore(ctx,sprite,maxHeight) {
    this.sX= 276;
    this.sY= 0;
    this.w= 224;
    this.h= 112;
    this.x= 0;
    this.y= maxHeight - 112;
    
    this.dx = 2,
    
    this.draw = function(){
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        
        ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x + this.w, this.y, this.w, this.h);
    },
    
    this.update= function(current,state){
        if(current == state.game){
            this.x = (this.x - this.dx)%(this.w/2);
        }
    }
}


// GET READY MESSAGE
function getReady(sprite,maxWidth,ctx) {
    this.sX  =  0;
    this.sY  =  228;
    this.w  =  173;
    this.h  =  152;
    this.x  =  maxWidth/2 - 173/2;
    this.y  =  80;
    
    this.draw =  function(current,state){
        if(current == state.getReady){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);
        }
    }
    
}

// GAME OVER MESSAGE
function gameOver(sprite,maxWidth,ctx) {
    this.sX  =  175;
    this.sY  =  228;
    this.w  =  225;
    this.h  =  202;
    this.x  =  maxWidth/2 - 225/2;
    this.y  =  90;
    
    this.draw =  function(current,state){
        if(current == state.over){
            ctx.drawImage(sprite, this.sX, this.sY, this.w, this.h, this.x, this.y, this.w, this.h);   
        }
    }
    
}