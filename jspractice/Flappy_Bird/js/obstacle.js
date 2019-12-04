function Obstacle(sprite,frames,ctx,bird,state,score,HIT,SCORE_S){

    this.position = [];
        
    this.top = {
        sX : 553,
        sY : 0
    }
    this.bottom={
        sX : 502,
        sY : 0
    }

    this.w = 53,
    this.h = 400,
    this.gap = 85,
    this.maxYPos = -150,
    this.dx = 5,
    
    this.draw = function(){
        for(var i  = 0; i < this.position.length; i++){
            var p = this.position[i];
            
            var topYPos = p.y;
            var bottomYPos = p.y + this.h + this.gap;
            
            // top pipe
            ctx.drawImage(sprite, this.top.sX, this.top.sY, this.w, this.h, p.x, topYPos, this.w, this.h);  
            
            // bottom pipe
            ctx.drawImage(sprite, this.bottom.sX, this.bottom.sY, this.w, this.h, p.x, bottomYPos, this.w, this.h);  
        }
    }
    
    this.update=function(current,maxwidth){
        // console.log(bird);
        // console.log(bird);
        if(current !== state.game) return;

        
        if(frames%100 == 0){
            this.position.push({
                x : maxwidth,
                y : this.maxYPos * ( Math.random() + 1)
            });
        }
        // for(var l = 0; l < this.position.length; l++){
        var p = this.position[0];
        // console.log(p);
        var bottomPipeYPos = p.y + this.h + this.gap;
        
        // COLLISION DETECTION
        // TOP PIPE
        if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > p.y && bird.y - bird.radius < p.y + this.h){
            state.current = state.over;
            HIT.play();
        }
        // BOTTOM PIPE
        if(bird.x + bird.radius > p.x && bird.x - bird.radius < p.x + this.w && bird.y + bird.radius > bottomPipeYPos && bird.y - bird.radius < bottomPipeYPos + this.h){
            state.current = state.over;
            HIT.play();
        }
        
        // MOVE THE PIPES TO THE LEFT
        p.x -= this.dx;
        
        // if the pipes go beyond canvas, we devare them from the array
        if(p.x + this.w <= 0){
            this.position.shift();
            score.value += 1;
            SCORE_S.play();
            score.best = Math.max(score.value, score.best);
            localStorage.setItem("best", score.best);
        }
    // }
        
    }

    this.reset = function(){
        this.position = [];
    }

}
