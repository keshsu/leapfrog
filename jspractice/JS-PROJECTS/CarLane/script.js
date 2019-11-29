function Container(mainC){
    this.width = 60;
    this.height= 130;
    this.x = 115;
    this.y = 460;
    
    this.element = null;

    this.containerWid = mainC.width;
    this.containerHig = mainC.height;
    mainC.style.backgroundSize = "cover";
    mainC.style.background = "url(images/carlane.png) center";
    
    this.init=function(){
        var car = document.createElement('div');
        car.style.height = this.height+'px';
        car.style.width = this.width +'px';
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
        this.x- x;
        this.y = y;
    }
    this.drawCar = function(){
        this.element.style.left = this.x+'px';
        this.element.style.top = this.y+'px';
    }
    this.updateCar = function(current,direction){
        this.current = current;
        console.log(current);

        this.x += direction*this.current;

        console.log("Moving to",this.x);

        this.drawCar();
    }
    
}
function Game(mainC){
    var cars = [];  
    this.mainContainer = mainC;
    this.myCar;
    // console.log("maincontainer",this.mainContainer);

    this.startGame  = function(){
        myCar = new Container(mainC).init();
        
        this.keyInput();
    }
    this.keyInput=function(){
        document.addEventListener('keydown', function(event) {
            if(event.keyCode == 37) {
                myCar.updateCar(myCar.x,-1);
            }
            else if(event.keyCode == 39) {
                myCar.updateCar(myCar.x,1);
            }
        });
    }

    this.moveCar = function(y,seed){
        this.moveCanvas(y, speed);
    }
}

var gameC = document.getElementById('gameContainer');
var gameplay = new Game(gameC);
gameplay.startGame();