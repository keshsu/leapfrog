function Back(cv, ctx){
    this.x= 0;
    this.height= cv.height-100;
    this.y =0;
    this.width = cv.width+100;

    this.draw = function(){
        // console.log("drawing");
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function Fore(cv,ctx){
    this.fores = [];
    this.x= 0;
    this.height= 100;
    this.y = cv.height-this.height;
    this.width = cv.width;

    this.draw = function(){
        // console.log("drawing");
        var gr =  
            ctx.createLinearGradient(50, 0, 350, 0); 
        gr.addColorStop(0, "#ffd271"); 
        gr.addColorStop(1, "#fff3af"); 
        ctx.fillStyle = gr;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.update = function(){
        // this.fores.push( );
        this.x -=2;
        if(this.x + this.width <= cv.width){
            this.x = 0;
        }
    }
}

function Navingation(canvas,ctx){
    // var that = this;
    this.x=10;
    this.y=20;
    this.width=100;
    this.height= 20;
    this.radius = 20;

    this.drawHealth = function(){
        ctx.beginPath();
        ctx.rect(this.x-5, this.y-5, 30, 30);
        // ctx.fillStyle = "#fff"; 
        
        // ctx.drawImage("./images/heart.png", this.x-5, this.y=5)
        ctx.rect(this.x+25, this.y, this.width, this.height);
        ctx.fillStyle = "#aff";
        ctx.fill();
        ctx.stroke();
    }
    this.drawAmmo = function(){
        ctx.beginPath();
        ctx.rect(this.x+this.width+60-5, this.y-5, 30, 30);
        
        ctx.rect(this.x+this.width+60, this.y, this.width+30, this.height);
        ctx.fillStyle = "#fff"; 
        ctx.fill();
        // ctx.stroke();
    }
    this.playPause = function(){
        ctx.fillStyle= "#fff";
        ctx.beginPath();
        ctx.arc(canvas.width/2-this.radius+20, this.y+10, this.radius,0,2*Math.PI);
        ctx.fill();
    }
    this.drawCoin = function(){
        ctx.fillStyle= "#fff";
        ctx.beginPath();
        ctx.rect(canvas.width-this.width-20, this.y,this.width,this.height);
        ctx.fill();
        ctx.stroke();
    }
}



// Ready State
function getReady(canvas,ctx) {
    this.w  =  173;
    this.h  =  152;
    this.y  =  80;
    this.x= maxWidth/2;
    this.draw =  function(current,state){
    }
       
    
}

// Game over State
function gameOver(canvas,ctx) {
    this.w  =  225;
    this.h  =  202;
    this.x  =  maxWidth/2;
    this.y  =  90;
    
    this.draw =  function(current,state){
       
    }
    
}