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
    mainC.style.overflow = "hidden";
    mainC.style.bottom = "0";
    
    this.init=function(){
        var car = document.createElement('div');
        car.style.height = this.height+'px';
        car.style.width = this.width +'px';
        // car.style.margin = '0 20px';
        car.style.position="absolute";
        car.style.background = "url(images/car.png)";
        car.style.backgroundSize = "cover";
        car.style.overflow = "hidden";

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
        // console.log(this.x);

        if(this.x <= this.trackSpace){
            this.x = this.trackSpace;
        }
        if(this.x >= this.containerWid){
            console.log(this.trackSpace);
            this.x= this.containerWid-this.trackSpace-this.width;
        }
        console.log("Moving to",this.x);

        this.drawCar();
    }
    
}
function EnemyCar(mainC){
    this.width = 60;
    this.height= 130;
    this.enemyElement = null;

    this.trackSpace = (mainC.offsetWidth/3 - this.width)/2;
    this.x = 0 + this.trackSpace;
    this.y = 0;
    this.mainC=mainC;
    

    this.initEnemyCar= function(){
      //  console.log("am i even here");
        var enemycar = document.createElement('div');
      //  console.log("enemycar",enemyCar);
        enemycar.style.height = this.height+'px';
        enemycar.style.width = this.width +'px';
        enemycar.style.position="absolute";
        
        enemycar.style.background = "url(images/car.png)";
        enemycar.style.backgroundSize = "cover";
        enemycar.style.transform="rotate(180deg)";

       // enemycar.classList.add('enemycar');
        this.mainC.appendChild(enemycar);        

        this.enemyElement = enemycar;
        // console.log(this.enemyElement);
    
        // return this;

    }

    this.drawCar = function(){
       // console.log("draw",this.enemyElement);
        this.enemyElement.style.left = this.x+'px';
        this.enemyElement.style.top = this.y+'px';
    }
    
    this.updateCar= function(x,y){
      //  console.log(x,y);
        this.x = x;
        this.y = y;

       // this.drawCar();
    }
    this.removeCar = function(){
        this.enemyElement.style.display="none";
        // mainC.removeChild(this.enemyContainer);
    }
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
function Game(mainC){
    var that = this;
    this.mainContainer = mainC;
    this.myCar;
    this.speed=1;
    this.enemyCar;  
    this.scoreBoard= null;
    this.singleTrackWid= this.mainContainer.offsetWidth/3;
    this.newXPosition=0;
    this.initEnemyCount=0;

    var myCar = new Container(this.mainContainer);
    var enemyCarsObj=null;

    this.enemyCarArr= [];
    this.act = myCar.width; 
    this.curr= (mainC.offsetWidth/3  - this.act)/2;
    
    this.startGame  = function(){
        myCar.init();
        this.keyInput();
    }
    this.generateEnemyArr=function(){
        enemyCarsObj = new EnemyCar(this.mainContainer);
        enemyCarsObj.initEnemyCar();  
        this.randomXPosition();
        enemyCarsObj.updateCar(this.newXPosition,enemyCarsObj.y);

        //enemyCarsObj.updateCar();
       
        this.enemyCarArr.push(enemyCarsObj);

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
    
    this.randomXPosition = function(){
        this.rand= getRandomArbitrary(0,2.9);
        this.newXPosition = this.curr + Math.floor(this.rand) * this.singleTrackWid;

    }

    this.moveCar = function(){

        for(var i =0;i<this.enemyCarArr.length;i++){
            // this.enemyCarArr[i].x = this.newXPosition;
            this.enemyCarArr[i].y+=10;
           //console.log("inside move car", this.enemyCarArr); 
           this.enemyCarArr[i].drawCar();
            // console.log(this.enemyCarArr[i]);
           
        }


    //    this.checkCollision();      
         

    }
    
    this.checkCollision = function(){
        for(var i =0;i<this.enemyCarArr.length;i++){
            console.log(myCar.x);
            if(this.enemyCarArr[i].x == myCar.x && this.enemyCarArr[i].y + this.enemyCarArr.height>= myCar.y){
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
                ClearInterval();
            }   
        }
    }
    setInterval(function(){
        // var xP=gameplay.randomXPosition();
         //sgameplay.moveCar(xP);
        // console.log("every 2sec");
      //  that.randomXPosition();

      if(that.initEnemyCount==40){
        that.generateEnemyArr();
        that.initEnemyCount=0;
      }

      if(that.enemyCarArr.length>0){
        that.moveCar();
        that.checkCollision();
      }
       
     console.log("counter", that.initEnemyCount);
    //  that.keyInput();
     that.initEnemyCount++;    
     
     },100);
}


function ClearInterval(){
    clearInterval(movecar);
    console.log("Interval Cleared");
}

var gameC = document.getElementById('gameContainer');
var gameplay = new Game(gameC);
var trackSize = gameC.offsetWidth/3;
// console.log(trackSize);

gameplay.startGame();