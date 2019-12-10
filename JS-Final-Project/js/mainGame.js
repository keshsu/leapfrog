function Game(){
    var that = this;
    var canvas = document.getElementById('gameCanvas');
    canvas.width= 650;
    canvas.height = 400;
    canvas.style.border = "1px solid black";
    var ctx = canvas.getContext("2d");
    var heart = document.getElementById("heart");
    var ammo = document.getElementById("ammo");
    var coin = document.getElementById("coin");

    var back = new Back(canvas,ctx);
    var fore = new Fore(canvas,ctx);
    var myplayer = new Player(canvas,ctx);
    var enplayer = new enemyPlayer(canvas,ctx);
    var nav = new Navingation(canvas,ctx,heart,ammo,coin);

    this.up= false;
    this.left= false;
    this.right= false;
    
    this.keyListener=function(event) {
        // console.log("event", event);
        var keyPrs = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37: // left key
                that.left = keyPrs;
                break;
            case 38: // up key
                that.up = keyPrs;
                break;
            case 32: // space key
                that.up = keyPrs;
                break;
            case 39: // right key
                that.right = keyPrs;
                break;

        }
        // console.log(this.left, this.up, this.right);
    }
    
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
        // console.log(that.left,that.right,that.up);
        myplayer.update(that.left,that.right,that.up);
        enplayer.update();
        this.checkCollision();

    }
    this.checkCollision = function(){
        var enplayerx = enplayer.x.toFixed(4);
        var myplayerx = myplayer.x.toFixed(4);
        // console.log(enplayerx);

        console.log("x =",Math.floor(enplayer.x));
        if(myplayerx+myplayer.width>=enplayerx){
            console.log("collision bhayo");
        }
    }
}
var gameback = new Game();
gameback.init();

window.addEventListener("keydown", gameback.keyListener);
window.addEventListener("keyup", gameback.keyListener);

setInterval(function(){
    gameback.update();
},1000/60);