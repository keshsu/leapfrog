
function Bird(height,frames,ctx,fgh,deg, state){

    
    this.animation = [
        {bX: 276, bY : 112},
        {bX: 276, bY : 139},
        {bX: 276, bY : 164},
        {bX: 276, bY : 139}
    ];
    // console.log(ctx);
    this.x = 50;
    this.y = 150;
    this.w = 34;
    this.h = 26;
    this.DEGREE  = deg;
    
    this.radius = 12;
    
    this.frame = 0;
    
    this.gravity = 0.25;
    this.jump = 4.6;
    this.speed = 0;
    this.rotation = 0;


    this.draw=function(){
        var bird = this.animation[this.frame];
        
        // console.log(bird.bY);
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.drawImage(sprite, bird.bX, bird.bY, this.w, this.h, -this.w/2,  -this.h/2, this.w, this.h);
        
        ctx.restore();
        
    }
    
    this.flap =function(){
        this.speed = - this.jump;
        console.log(this.speed ); 
        
    }
    this.update = function(current){
        // console.log(current, state);
        // IF THE GAME STATE IS GET READY STATE, THE BIRD MUST FLAP SLOWLY
        this.period = current == state.getReady ? 10 : 5;
        
        this.frame += frames%this.period == 0 ? 1 : 0;
        
        // FRAME GOES FROM 0 To 4, THEN AGAIN TO 0
        this.frame = this.frame%this.animation.length;
        // console.log(current);
        
        // WE INCREMENT THE FRAME BY 1, EACH PERIOD
        if(current == state.getReady){
            this.y = 150; // RESET POSITION OF THE BIRD AFTER GAME OVER
            this.rotation = 0 * this.DEGREE;
        }
        else{
            console.log(this.y); 
            this.speed += this.gravity;
            this.y += this.speed;
            if(this.y + this.h >= height - fgh){
                this.y =150;
                if(current == state.game){
                    current = state.over;
                    DIE.play();
                }
            }
            
            // IF THE SPEED IS GREATER THAN THE JUMP MEANS THE BIRD IS FALLING DOWN
            if(this.speed >= this.jump){
                this.rotation = 50 * this.DEGREE;
                this.frame = 1;
            }else{
                this.rotation = -20 * this.DEGREE;
            }
        }
        
    }
    this.speedReset = function(){
        this.speed = 0;
    }
}