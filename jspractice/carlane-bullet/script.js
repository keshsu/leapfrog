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
        car.style.zIndex="2";

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
    this.y = -30;
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
        enemycar.style.zIndex="2";
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
function Bullet(mainC , carpos){
    this.width = 10;
    this.height= 50;
    this.BulletElement = null;
    this.mainC=mainC;
    // this.incX=10;
    this.x = carpos+25;
    this.y = 460;
    

    this.initBullet= function(){
      //  console.log("am i even here");
        var bullet = document.createElement('div');
      //  console.log("bullet",bullet);
        bullet.style.height = this.height+'px';
        bullet.style.width = this.width +'px';
        bullet.style.position="absolute";
        bullet.style.background = "url(images/flames.png) center";
        bullet.style.backgroundSize = "cover";
        bullet.style.zIndex = "1";

       // bullet.classList.add('bullet');
        this.mainC.appendChild(bullet);        

        this.BulletElement = bullet;
        // console.log(this.enemyElement);
    
        this.drawBullet();
        // return this;

    }

    this.drawBullet = function(){
        this.BulletElement.style.left = this.x+'px';
        this.BulletElement.style.top = this.y+'px';
    }
    
    this.updateBullet= function(x,speed){
        // console.log("position set");
        this.x = x;
        this.y -= speed;

        this.drawBullet();
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
    this.newRoadPosition=0;
    this.initEnemyCount=0;
    this.initRoad=10;
    this.roadSpeed=20;
    this.roadArr= [];
    this.score=0;
    this.lane=1;
    this.highscore =  window.localStorage.getItem('HighScore');
    document.getElementById('player-hscore').innerHTML= this.highscore;
    
    
    var startBullet = false;
    var myCar = new Container(this.mainContainer);
    var myBullet = new Bullet(this.mainContainer, myCar.x);
    var enemyCarsObj=null;


    this.enemyCarArr= [];
    this.bullets= [];
    this.act = myCar.width; 
    this.curr= (mainC.offsetWidth/3  - this.act)/2;
    
    this.startGame  = function(){
        myCar.init();
        this.keyInput();
        // this.scoreCount();
        myBullet.initBullet();
        for(var k = 1;k<=20;k++){
            this.bullets.push(myBullet);
        }
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
                this.lane=this.lane -1;
                var pos= myCar.x+25;
                myBullet.updateBullet(pos);
                if(startBullet==true){
                     myBullet.updateBullet(pos,10);
                }
            }
            else if(event.keyCode == 39) {
                myCar.updateCar(1);
                var pos= myCar.x+25;
                myBullet.updateBullet(pos);
                if(startBullet==true){
                    myBullet.updateBullet(pos,10);
               }
                
            }
            else if(event.keyCode == 32) {
                startBullet = true;
                myBullet.y =460;
                myBullet.initBullet();
                console.log(startBullet);
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
    this.moveBullet =function(){
        
        this.bulletspeed = 10;
        // console.log(myCar.x);
        var mycarp = myCar.x + 25;
        if(myBullet.y >= 0)
        {
            // that.myBullet.y+=10;
            myBullet.updateBullet(mycarp, this.bulletspeed);
            this.bulletspeed++;
        }
        else{
            myBullet.y=-100;
        }
    }
    this.checkBulletCollision=function(){
        for(var i =0;i<this.enemyCarArr.length;i++){
            console.log(myBullet.y);
            // console.log(myCar.x+25);

            if(this.enemyCarArr[i].y+this.enemyCarArr[i].height == myBullet.y && this.enemyCarArr[i].x == myBullet.x-25){
                console.log("bullet collided at", myBullet.y, this.enemyCarArr[i].y);
                this.enemyCarArr[i].enemyElement.style.display="none";
                this.enemyCarArr.pop(this.enemyCarArr[i]);
                this.score= i*10;
                document.getElementById('player-score').innerHTML= this.score;
                document.getElementById('pla')
            }
        }
    }
    this.checkCollision = function(){
        for(var i =0;i<this.enemyCarArr.length;i++){
            if(this.enemyCarArr[i].x == myCar.x && this.enemyCarArr[i].y + this.enemyCarArr[i].height >= myCar.y || 
                this.enemyCarArr[i].y== myCar.y && this.enemyCarArr[i].x == myCar.x){
                console.log("collision");
                var scoreBoard = document.createElement('div');
                scoreBoard.style.width = this.mainContainer.offsetWidth+"px";
                scoreBoard.style.height = this.mainContainer.offsetHeight+"px";
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

                this.x = this.enemyCarArr[i].x;
                this.y =this.enemyCarArr[i].y;
                ClearInterval(); 
            }
        }
        console.log(this.startBullet);
    }
    this.scoreCount =function(){
        var scoreboard = document.getElementById('player-score');
        that.element = scoreboard;
        // console.log(that.enemyCarArr);
        for(var i =0;i<that.enemyCarArr.length;i++){
            // console.log(that.mainContainer.offsetHeight);
            if(that.enemyCarArr[i].y > that.mainContainer.offsetHeight){
                that.score=10*(i+1);
                that.element.innerHTML = that.score;
                if(that.highscore<that.score){      
                    window.localStorage.setItem('HighScore', that.score);
                }
                // console.log(that.score);
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
        that.checkBulletCollision();
        that.scoreCount();
      }
      if(that.roadArr.length>0){
          that.moveRoad(10);
      }
      if(startBullet == true){

          that.moveBullet();
        //   startBullet= false;
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
// var gameC = document.getElementById('gameContainer-next');
var gameplay = new Game(gameC);
// var anothergamePlay = new Game(gameC);   
var trackSize = gameC.offsetWidth/3;
// console.log(trackSize);

gameplay.startGame();