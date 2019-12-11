function Back(cv, ctx){
    this.x= 0;
    this.height= cv.height-100;
    this.y =0;
    this.width = cv.width;

    this.draw = function(){
        // console.log("drawing");
        ctx.fillStyle = "#000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
function Fore(cv,ctx,fore){
    this.x= 0;
    this.height= 300;
    this.y = cv.height-this.height;
    this.width = cv.width;
    this.fores = [fore, fore];


    this.draw = function(){
        ctx.beginPath();
        // console.log(this.fores[0].width);
        for(var i = 0; i< this.fores.length; i++){
            ctx.drawImage(this.fores[0], this.x ,cv.height-141);
            ctx.drawImage(this.fores[i],this.x+this.fores[0].width,cv.height-141);
        }
        ctx.fill();
    }
    this.update = function(){
        this.x -=1.2;
        for(var i = 0; i< this.fores.length; i++){
            // console.log(this.x+this.fores[0].width);
            if(this.x + this.fores[i].width <= 0){
                console.log("gay0");
                this.x = 0;
            }
        }
    }
}

function Navingation(canvas,ctx,heart,ammo,coin,pause){
    // var that = this;
    this.x=10;
    this.y=20;
    this.width=100;
    this.height= 20;
    this.radius = 20;
    this.healhval = this.width-5;
    this.circX = canvas.width/2-this.radius+20;
    this.playkY = this.y+10;
    
    this.drawHealth = function(){
        // console.log(this.healhval);
        ctx.beginPath();
        ctx.drawImage(heart, this.x-5, this.y-5,30,30);
        
        ctx.beginPath();
        ctx.rect(this.x+25, this.y+2, this.width, this.height-7);
        ctx.strokeStyle = "#bcac73";
        ctx.lineWidth = 4;
        ctx.stroke();
        
        ctx.beginPath();
        ctx.rect(this.x+27, this.y+4.5, this.healhval, this.height-12);
        ctx.fillStyle = "#57cf47";
        ctx.fill();
    }
    
    this.updateHealth = function(collidehealth){
        this.healhval -= collidehealth;
        if(this.healhval>=0){
            ctx.clearRect(this.x+26,this.y+4,this.width-4, this.height-11);
            this.drawHealth();
        }
        else{
            console.log("sakiyo",this.healhval);
        }
    }



    this.drawAmmo = function(){
        ctx.beginPath();
        ctx.drawImage(ammo, this.x+this.width+40, this.y-5, 30, 30);

        ctx.beginPath();
        ctx.rect(this.x+this.width+70, this.y, this.width, this.height-6);
        ctx.strokeStyle = "#b5a56d";
        ctx.lineWidth = 4;
        ctx.stroke();
                
        ctx.beginPath();
        ctx.rect(this.x+this.width+73, this.y+3.5, this.width-6, this.height-12);
        ctx.fillStyle = "#efe22c";
        ctx.fill();
        // ctx.stroke();

    }
    
    this.drawCoin = function(){
        ctx.beginPath();
        ctx.drawImage(coin, canvas.width-this.width-50, this.y-8, 32, 35);
        
        ctx.beginPath();
        ctx.rect(canvas.width-this.width-20, this.y,this.width,this.height);
        ctx.fillStyle= "#b8a870";
        ctx.lineWidth = 4;
        ctx.stroke();

        ctx.beginPath();
        ctx.rect(canvas.width-this.width-18, this.y+2,this.width-4,this.height-4);
        ctx.fillStyle = "#5f5c4c";
        ctx.fill();
    }
    
    this.playPause = function(){
        ctx.beginPath();
        ctx.drawImage(pause, this.circX, this.y-8, 32, 35);
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