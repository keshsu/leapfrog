

function GameContainer(index,keyX){
    var degree = Math.PI / 180;
    // LOAD SPRITE IMAGE
    var sprite = new Image();
    sprite.src = "images/sprite.png";

    // LOAD SOUNDS
    var SCORE_S = new Audio();
    SCORE_S.src = "audio/sfx_point.wav";

    var FLAP = new Audio();
    FLAP.src = "audio/sfx_flap.wav";

    var HIT = new Audio();
    HIT.src = "audio/sfx_hit.wav";

    var SWOOSHING = new Audio();
    SWOOSHING.src = "audio/sfx_swooshing.wav";

    var DIE = new Audio();
    DIE.src = "audio/sfx_die.wav";

    var state = {
        current : 0,
        getReady : 0,
        game : 1,
        over : 2
    }

    var startBtn = {
        x : 120,
        y : 263,
        w : 83,
        h : 29
    }
    var canvas= document.getElementsByTagName('canvas')[index];
    
    canvas.width= 320;
    canvas.height= 480;
    canvas.style.border= "1px solid black";
    canvas.style.margin= "0 auto";
    
    var ctx = canvas.getContext("2d");
    
    var MAX_WIDTH = canvas.width;
    var MAX_HEIGHT = canvas.height;
    var frames = 0;
    var count =0;
    
    // SCORE
    const score= {
        best : parseInt(localStorage.getItem("best")) || 0,
        value : 0,
        
        draw : function(){
            ctx.fillStyle = "#FFF";
            ctx.strokeStyle = "#000";
            
            if(state.current == state.game){
                ctx.lineWidth = 2;
                ctx.font = "40px Teko";
                ctx.fillText(this.value, canvas.width/2, 50);
                ctx.strokeText(this.value, canvas.width/2, 50);
                
            }else if(state.current == state.over){
                // SCORE VALUE
                ctx.font = "25px Teko";
                ctx.fillText(this.value, 225, 186);
                ctx.strokeText(this.value, 225, 186);
                // BEST SCORE
                ctx.fillText(this.best, 225, 228);
                ctx.strokeText(this.best, 225, 228);
            }
        },
        
        reset : function(){
            this.value = 0;
        }
    }
        
    var backObj = new Back(ctx,sprite,MAX_HEIGHT);
    var foreObj = new Fore(ctx,sprite,MAX_HEIGHT);
    var getreadyObj = new getReady(sprite,MAX_WIDTH,ctx);
    var gameoverObj = new gameOver(sprite,MAX_WIDTH,ctx);
    var birdObj = new Bird(sprite,MAX_HEIGHT,frames,ctx,foreObj.h,degree,state,DIE);

    var obstacleObj = new Obstacle(sprite,frames,ctx,birdObj,state,score,HIT,SCORE_S);
    
    canvas.addEventListener("click", function(evt){
        switch(state.current){
            case state.getReady:
                state.current = state.game;
                SWOOSHING.play();
                break;
            case state.game:
                if(birdObj.y - birdObj.radius <= 0) return;
                FLAP.play();
                break;
                case state.over:
                    var rect = canvas.getBoundingClientRect();
            var clickX = evt.clientX - rect.left;
            var clickY = evt.clientY - rect.top;
            
            // CHECK IF WE CLICK ON THE START BUTTON
            if(clickX >= startBtn.x && clickX <= startBtn.x + startBtn.w && clickY >= startBtn.y && clickY <= startBtn.y + startBtn.h){
                obstacleObj.reset();
                birdObj.speedReset();
                score.reset();
                state.current = state.getReady;
            }
            break;
        }
    });

      
      
    this.init = function(){
        document.addEventListener('keydown', jumpBird.bind(this));  
        
        this.loop();
    }
    function jumpBird() {    
        if(event.keyCode == keyX) {
            birdObj.jump = 7;
            birdObj.flap();
            state.current = state.game;

        }
        
    }
        
    this.startGame = function(){
            ctx.fillStyle = "#70c5ce";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            
            backObj.draw();
            obstacleObj.draw();
            foreObj.draw();
            birdObj.draw();
            getreadyObj.draw(state.current,state);
            gameoverObj.draw(state.current,state);
            score.draw();
    }
    this.update = function(){

        birdObj.update(state.current);
        obstacleObj.update(state.current,MAX_WIDTH);
        foreObj.update(state.current, state);
        count++;
    }
    this.loop = function(){
        setInterval(() => {
            this.update();
            this.startGame();
            frames++;
        }, 40);
    }
}

var game1 = new GameContainer(0,32).init();
var game2 = new GameContainer(1,38).init();
