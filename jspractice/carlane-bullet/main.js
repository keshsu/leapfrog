function Gameplay(maingame){
    var that = this;
    this.mainGame = maingame;

    var player = new Player(this.mainGame);
    // var enemyplayer = new EnemyCar(this.mainGame);

    this.up= false;
    this.left= false;
    this.right= false;
    
    // Handling the events
    this.keyListener=function(event) {
        var keyPrs = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {

            case 37: // left key
                that.left = keyPrs;
                break;
            case 39: // right key
                that.right = keyPrs;
                break;
            case 32: //space key
                that.up = keyPrs;
                that.fireBullet();
                break;
        }
    }


    this.drawRoad = function(){ 
        //Drawing the road
        this.mainGame.style.background = "url(images/road.png) center";
        this.mainGame.style.backgroundSize = "cover";
        this.mainGame.style.overflow = "hidden";
        this.mainGame.style.bottom = "0";
    }
    
    this.draw = function(){
        this.drawRoad();
        player.draw(); //Drawing the player
        // enemyplayer.draw();
    }

    this.update = function(){
        console.log(that.left, that.right);
        player.update(that.left,that.right);
        this.draw();
    }

    this.fireBullet = function(){
        if(that.up){
            player.fire();
        }
    }
    
    setInterval(function(){
        that.update();
    },1000/60);
    
}
var mainContainer = document.getElementById("gameContainer");

var gameplay = new Gameplay(mainContainer);

window.addEventListener("keydown", gameplay.keyListener);
window.addEventListener("keyup", gameplay.keyListener);
gameplay.draw();
