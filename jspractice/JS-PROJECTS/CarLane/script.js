function Container(mainC){
    this.width = 60;
    this.height= 130;
    
    this.trackSpace = (mainC.offsetWidth/3 - this.width)/2;
    this.x = 100 + this.trackSpace;
    this.y = 460;
    
    this.element = null;

    this.containerWid = mainC.offsetWidth;
    this.containerHig = mainC.offsetHeight;
    this.incX= 10;
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
    this.y = -100;
    this.mainC=mainC;
    this.multicars =["url(images/car.png)", "url(images/green.png)", "url(images/yellow.png)", "url(images/blue.png)"];

    this.initEnemyCar= function(){
      //  console.log("am i even here");
        var enemycar = document.createElement('div');
      //  console.log("enemycar",enemyCar);
        enemycar.style.height = this.height+'px';
        enemycar.style.width = this.width +'px';
        enemycar.style.position="absolute";
        
        enemycar.style.background = this.multicars[Math.floor(Math.random()*5)];
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
}
// function Road(mainC){
//     this.width = mainC.offsetWidth;
//     this.height= mainC.offsetHeight;
//     this.roadElement = null;
//     this.mainC=mainC;
//     this.incX=10;
    

//     this.initRoad= function(){
//       //  console.log("am i even here");
//         var road = document.createElement('div');
//       //  console.log("road",road);
//         road.style.height = this.height+'px';
//         road.style.width = this.width +'px';
//         road.style.position="absolute";
//         road.style.backgroundPositionY= this.incX+"px";
//         road.style.background = "url(images/road.png)";
//         road.style.backgroundSize = "cover";

//        // road.classList.add('road');
//         this.mainC.appendChild(road);        

//         this.roadElement = road;
//         // console.log(this.enemyElement);
    
//         // return this;

//     }

//     this.drawRoad = function(){
//         this.roadElement.style.left = this.x+'px';
//         this.roadElement.style.top = this.y+'px';
//     }
    
//     this.updateRoad= function(x,y){
//         this.x = x;
//         this.y += this.incX;
//     }
// }

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
    this.newRoadPosition=0;
    this.initEnemyCount=0;
    this.initRoad=0;
    this.roadSpeed=20;
    this.roadArr= [];
    this.score=0;


    var myCar = new Container(this.mainContainer);
    var enemyCarsObj=null;

    this.enemyCarArr= [];
    this.act = myCar.width; 
    this.curr= (mainC.offsetWidth/3  - this.act)/2;
    
    this.startGame  = function(){
        myCar.init();
        this.keyInput();
        // this.scoreCount();
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
        
    }
    
    this.checkCollision = function(){
        for(var i =0;i<this.enemyCarArr.length;i++){
            if(this.enemyCarArr[i].x == myCar.x && this.enemyCarArr[i].y + this.enemyCarArr[i].height== myCar.y){
                console.log("collision");
                var scoreBoard = document.createElement('div');
                scoreBoard.style.width = this.mainContainer.offsetWidth+"px";
                scoreBoard.style.height = this.mainContainer.offsetHeight+"px";
                scoreBoard.style.background = "rgba(0,0,0,0.6)";
                scoreBoard.style.position = "absolute";
                scoreBoard.style.color="#fff";
                scoreBoard.innerHTML += 'Game Over!! <br>';
                scoreBoard.style.fontSize="32px";
                scoreBoard.style.textAlign= 'center';
                scoreBoard.style.lineHeight= "500px";
                scoreBoard.classList.add("scoreboard");
                
                this.mainContainer.appendChild(scoreBoard);
                this.scoreBoard = scoreBoard;

                this.x = this.enemyCarArr[i].x;
                this.y =this.enemyCarArr[i].y;
                new ClearInterval(); 
            }
        }
    }
    this.scoreCount =function(){
        var scoreboard = document.getElementById('player-score');
        that.element = scoreboard;
        // console.log(that.enemyCarArr);
        for(var i =0;i<that.enemyCarArr.length;i++){
            console.log(that.mainContainer.offsetHeight);
            if(that.enemyCarArr[i].y > that.mainContainer.offsetHeight){
                that.score=10*i;
                console.log("score",that.score);
                that.element.innerHTML = that.score;
                console.log(that.score);
            }
        }
    }
    
    this.setI= setInterval(function(){
      
      if(that.initEnemyCount==40){
        that.generateEnemyArr();
        that.initEnemyCount=0;
      }

      if(that.enemyCarArr.length>0){
        that.moveCar();
        that.checkCollision();
        that.scoreCount();
      }
      if(that.roadArr.length>0){
          that.moveRoad(4);
      }
       
    //  console.log("counter", that.initEnemyCount);
    //  that.keyInput();
     that.initEnemyCount++;   
     that.mainContainer.style.backgroundPosition=0+"px "+that.initRoad+"px";
     that.initRoad+=that.roadSpeed;
     
     },100);
}


function ClearInterval(){
    clearInterval(gameplay.setI);
    console.log("Interval Cleared");
}

var gameC = document.getElementById('gameContainer');
var gameplay = new Game(gameC);
var trackSize = gameC.offsetWidth/3;
// console.log(trackSize);

gameplay.startGame();