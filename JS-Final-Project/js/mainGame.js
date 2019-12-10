function Game(){
    var that = this;
    var canvas = document.getElementById('gameCanvas');
    canvas.width= 650;
    canvas.height = 400;
    canvas.style.border = "1px solid black";
    var ctx = canvas.getContext("2d");

    var back = new Back(canvas,ctx);
    var fore = new Fore(canvas,ctx);
    var myplayer = new Player(canvas,ctx);
    var enplayer = new enemyPlayer(canvas,ctx);
    var nav = new Navingation(canvas,ctx);


    this.init= function(){
        this.update();
        // this.checkCollision();
        this.draw();
    }
    
    this.draw = function(){
        back.draw(); // callling the BackGround
        fore.draw(); //calling the foreground
        nav.drawHealth(); //calling the health 
        nav.drawAmmo(); //calling the ammo 
        nav.playPause(); //calling the playPause 
        nav.drawCoin();// calling the coin
        enplayer.draw(); // calling the enemy
        // myplayer.draw(); //calling the player
    }
    
    this.update = function(){
        ctx.clearRect(0,60,canvas.width,canvas.height-160);
        fore.update();
        myplayer.update();
        enplayer.update();
        this.checkCollision();
        
                
    }
    this.checkCollision = function(){
        // console.log(myplayer.x);
        // console.log(enplayer.x);
    }
    
}
var gameback = new Game();
gameback.init();
setInterval(function(){
    gameback.update();
},1000/60)
// window.requestAnimationFrame(gameback.update);