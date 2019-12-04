multiple = [];
function Container(mainparent){
    this.width = 30;
    this.height = 30;
    this.x= 20;
    this.y = 20;
    this.directionX =1;
    this.directionY= 1;

    this.element= null;
    this.mainContainer= mainparent;
    // this.mainContainer.onClick= "smash()";

    this.container_wid = document.getElementById('game-container').offsetWidth;
    this.container_heigh = document.getElementById('game-container').offsetHeight;
    // console.log(this.mainContainer);
    
    //initializing box element
    this.init = function(){
        var box = document.createElement('div');
        // console.log(box);
        
        box.style.height = this.height+"px";
        box.style.width = this.width+'px';
        box.style.position = "absolute";
        box.style.background = "url(ant.gif)";
        box.style.backgroundSize = "cover";
        box.style.cursor = "pointer";
        box.onclick=killant;
        box.classList.add('box');
        this.mainContainer.appendChild(box);
        this.element = box;  

        this.drawElement();
        return this;
    }
    
    //setting the position
    this.setPosition = function(x,y){
        this.x= x;
        this.y= y;

        this.findPositon(this.x,this.y);
        
    }
  

    this.update= function(speed){
        this.x += speed* this.directionX;
        this.y += speed*this.directionY;

        this.drawElement();
    }

    //drawing the element 
    this.drawElement= function(){
        this.element.style.left = this.x+'px';
        this.element.style.top = this.y+'px';
    }

    this.findPositon = function(first, second){
        var single=[];

        single.push(first, second);

        
        multiple.push(single);
        
    }
    
    var checklen = multiple.length;
    // console.log(checklen);   

    this.checkCollision = function(boxes, current, index){
        this.boxes = boxes;
        this.current = current;

        for(var i=0; i< boxes.length; i++) {

        if( i != index){
            if (this.current.x < this.boxes[i].x + this.width &&
                this.current.x + this.width > this.boxes[i].x &&
                this.current.y < this.boxes[i].y + this.height &&
                this.current.y + this.height > this.boxes[i].y) {

                console.log("collide");
                this.directionY *= -1;
                this.directionX *= -1;
                }
            }

        }  
    
    }
}


function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function Game(mainparent, totalboxes){

    var boxes = [];
    this.totalboxes= totalboxes;
    var MAX_WIDTH = document.getElementById('game-container').offsetWidth;
    var MAX_HEIGHT = document.getElementById('game-container').offsetHeight;
    
    this.mainContainer= mainparent;
    
    this.startGame=function(){
        for(var i=0; i < this.totalboxes; i++) {
            var box = new Container(mainparent).init();
            // console.log("box width:", box.width);
            box.setPosition(
                getRandomArbitrary(0, MAX_WIDTH -box.width),
                getRandomArbitrary(0, MAX_HEIGHT- box.height)
            );  
            box.drawElement();
            boxes.push(box);
        }
        // console.log(00);
        
        setInterval(this.moveBoxes.bind(this), 30);
        
        // box.checkCollision(); 
    }
    this.moveBoxes = function() {
        for(var i=0; i< this.totalboxes; i++) {

            boxes[i].update(1);
            
            // console.log(boxes[0]);
            // console.log(boxes[i].x);
            var lastx= boxes[i].x + boxes[i].width;
            var lasty= boxes[i].y + boxes[i].height;

            // console.log(MAX_WIDTH);
            
            // console.log(lastx, lasty);
            if(lasty >= MAX_HEIGHT){

                boxes[i].directionY = -1;   
            }
            
            else if( lastx >= MAX_WIDTH){
                boxes[i].directionX = -1;
            }

            else if(boxes[i].x <= 0){

                boxes[i].directionX = 1;
                
            }
            
            else if( boxes[i].y <= 0){
                boxes[i].directionY = 1;
            }
            
            boxes[i].checkCollision(boxes, boxes[i], i);
        }
    }
    this.killant =function(){
        
        console.log("kill");
        console.log("element");
        // for(var k = 0; k<this.totalboxes;k++){
        //     if(boxes[i].)
        //     boxes[i].display =none;
        //     this.element.style.display = "none";
        // }
    }


}
var mainparent = document.getElementById('game-container');
var gamePlay = new Game(mainparent , 20);
gamePlay.startGame();