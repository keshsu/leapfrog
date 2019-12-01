function Container(mainC){
    this.width = 60;
    this.height= 130;
    
    this.trackSpace = (mainC.offsetWidth/3 - this.width)/2;
    this.x = 100 + this.trackSpace;
    this.y = 460;
    
    this.element = null;

    this.containerWid = mainC.offsetWidth;
    this.containerHig = mainC.offsetHeight;
    // mainC.style.background = "url(images/road.gif) center";
    // mainC.style.background = "url(images/roadslow.gif) center";
    mainC.style.background = "url(images/road.png) center";
    mainC.style.backgroundSize = "cover";
    mainC.style.bottom = "0";
    
    this.init=function(){
        var car = document.createElement('div');
        car.style.height = this.height+'px';
        car.style.width = this.width +'px';
        // car.style.margin = '0 20px';
        car.style.position="absolute";
        car.style.background = "url(images/car.png)";
        car.style.backgroundSize = "cover";

        car.classList.add('car');
        mainC.appendChild(car);        

        this.element = car;
        
        this.drawCar();
        return this;
    }
    this.setPositionCar = function(x,y){
        this.x = x;
        this.y = y;
    }
    this.drawCar = function(){
        this.element.style.left = this.x+'px';
        this.element.style.top = this.y+'px';
    }
    this.updateCar = function(direction){
        this.current = mainC.offsetWidth/3;

        this.x += direction*this.current;

        if(this.x <= 0){
            this.x = 0;
        }
        if(this.x >= this.containerWid){
            this.x= this.containerWid-100;
        }
        console.log("Moving to",this.x);

        this.drawCar();
    }
    
}
function EnemyCar(mainC){
    this.width = 60;
    this.height= 130;

    this.trackSpace = (mainC.offsetWidth/3 - this.width)/2;
    this.enemyElement = null;
    

    this.anotherCar= function(x,y){
        var enemycar = document.createElement('div');
        enemycar.style.height = this.height+'px';
        enemycar.style.width = this.width +'px';
        enemycar.style.position="absolute";
        
        enemycar.style.background = "url(images/car.png)";
        enemycar.style.backgroundSize = "cover";
        enemycar.style.transform="rotate(180deg)";

        enemycar.classList.add('enemycar');
        mainC.appendChild(enemycar);        

        this.enemyElement = enemycar;
        this.drawCar();
        this.updateCar(x,y); 
        return this;
    }

    this.drawCar = function(){
        this.enemyElement.style.left = this.x+'px';
        this.enemyElement.style.top = this.y+'px';
    }
    
    this.updateCar= function(x,y){
        this.x = x;
        this.y = y;

        this.drawCar();
    }
    this.removeCar = function(){
        this.enemyElement.style.display="none";
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
function Game(mainC){
    this.mainContainer = mainC;
    this.speed=1;
    this.scoreBoard= null;
    this.singleTrackWid= this.mainContainer.offsetWidth/3;
    myCar = new Container(this.mainContainer);
    enemyCar = new EnemyCar(this.mainContainer);
    this.enemycars= [];
    this.act = myCar.width; 
    this.curr= (mainC.offsetWidth/3  - this.act)/2;
    
    // console.log(this.curr);s

    this.startGame  = function(){
        myCar.init();
        this.keyInput();
        this.randomCar();
    }
    this.keyInput=function(){
        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 37) {
                myCar.updateCar(-1);
            }
            else if(event.keyCode == 39) {
                myCar.updateCar(1);
            }
        });
    }
    
    this.randomCar = function(){
        this.rand= getRandomArbitrary(0,2.9);
        this.x = this.curr + Math.floor(this.rand) * this.singleTrackWid;

        this.enemycars.push(enemyCar.anotherCar(this.x, 10));

        this.enemycars.forEach(element => {
            console.log(element.x,  element.y);
            setTimeout(this.moveCar(element.x,  element.y),1000);
            
            
        });
    }

    console.log(this.enemycars);
    this.moveCar = function(x,y){
        this.speed++;
        this.x =  x;
        this.y =y * this.speed;
    
        if(this.y>=this.mainContainer.offsetHeight){
            
            enemyCar.removeCar();
            new ClearInterval();
        }
        this.checkCollision();      
        enemyCar.updateCar(this.x,this.y);  
    }
    
    this.checkCollision = function(){
        
        if(enemyCar.x== myCar.x && enemyCar.y+enemyCar.height>= myCar.y){
            console.log("collision");
            var scoreBoard = document.createElement('div');
            scoreBoard.style.width = 600+"px";
            scoreBoard.style.height = 600+"px";
            scoreBoard.style.background = "rgba(0,0,0,0.3)";
            scoreBoard.style.position = "absolute";
            scoreBoard.style.color="#fff";
            scoreBoard.innerHTML += 'Game Over!! <br>';
            scoreBoard.style.fontSize="32px";
            scoreBoard.style.textAlign= 'center';
            scoreBoard.style.lineHeight= "500px";
            scoreBoard.classList.add("scoreboard");
            
            this.mainContainer.appendChild(scoreBoard);
            this.scoreBoard = scoreBoard;

            this.x= enemyCar.x;
            this.y =enemyCar.y;
        }   
        return this.x,this.y;
    }
}
var count = 0;
var movecar = setInterval(function(){
    // gameplay.moveCar(trackSize,10);
    gameplay.randomCar();
    count++;
    if(count>1){
        ClearInterval();
    }
},2000);

function ClearInterval(){
    clearInterval(movecar);
    console.log("Interval Cleared");
}

var gameC = document.getElementById('gameContainer');
var gameplay = new Game(gameC);
var trackSize = gameC.offsetWidth/3;

gameplay.startGame();