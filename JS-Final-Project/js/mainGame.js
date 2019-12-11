function Game(){
    var that = this;
    var canvas = document.getElementById('gameCanvas');
    canvas.width= 1000;
    canvas.height = 630;
    canvas.style.border = "1px solid black";
    var ctx = canvas.getContext("2d");
    var heart = document.getElementById("heart");
    var ammo = document.getElementById("ammo");
    var coin = document.getElementById("coin");
    var fore = document.getElementById("fore");
    var pause = document.getElementById("playk");

    var back = new Back(canvas,ctx);
    var fore = new Fore(canvas,ctx,fore);
    var enplayer = new enemyPlayer(canvas,ctx);
    var myplayer = new Player(canvas,ctx);
    var nav = new Navingation(canvas,ctx,heart,ammo,coin,pause);

    this.up= false;
    this.left= false;
    this.right= false;
    this.collidedHealth = 0;
    
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
    
    this.draw = function(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        back.draw(); // callling the BackGround
        fore.draw(); //calling the foreground
        nav.drawHealth(); //calling the health 
        nav.drawAmmo(); //calling the ammo 
        nav.playPause(); //calling the playPause 
        nav.drawCoin();// calling the coin
        myplayer.draw(); //calling the player
        enplayer.draw(); // calling the enemy
    }
    
    this.update = function(){

        fore.update();
        myplayer.update(that.left,that.right,that.up);
        enplayer.update();
        this.checkCollision();
        this.draw();

    }
    this.checkCollision = function(){
        if (myplayer.x < enplayer.x + enplayer.width &&
            myplayer.x + myplayer.width > enplayer.x &&
            myplayer.y < enplayer.y + enplayer.height &&
            myplayer.y + myplayer.height > enplayer.y) {
            console.log("collsion bhayo");
            this.collidedHealth = 0.5;
            nav.updateHealth(this.collidedHealth);
         }
    }
    this.findMouse = function(e){
        ctx.beginPath();
        ctx.moveTo(myplayer.x+myplayer.width/2,myplayer.y+myplayer.height/2);
        ctx.lineTo(e.clientX,e.clientY);
        console.log("mouse location:", e.clientX, e.clientY);
        ctx.strokeStyle = "red";
        // ctx.rotate(20 * Math.PI / 180);
        ctx.lineWidth = 1;
        ctx.fill();
        ctx.stroke();
    }
}
var gameback = new Game();
gameback.draw();

window.addEventListener("keydown", gameback.keyListener);
window.addEventListener("keyup", gameback.keyListener);
// window.addEventListener("mousemove", gameback.findMouse);
setInterval(function(){
    gameback.update();
},1000/60);