function Player(mainC){
    this.width = 60; //player width
    this.height= 130; //player height
    
    this.trackSize = mainC.offsetWidth/3; //Track width

    this.trackSpace = (this.trackSize - this.width)/2; //each track space
    
    this.maxWidth = mainC.offsetWidth; // total width

    this.x = this.trackSize + this.trackSpace; //xposition of player
    this.y = mainC.offsetHeight-this.height-10; //y positon of player

    
    this.fires = [];
    this.ammoFire = 0;
    var direction = 0;
    
    this.element = null;

    var car = document.createElement('div');
    var that = this;

    this.draw = function(){
        // drawing the player bullet
        for(var i = 0; i<this.fires.length;i++){
            this.fires[i].draw();
        }

        car.style.height = this.height+'px';
        car.style.width = this.width +'px';
        car.style.position="absolute";
        car.style.background = "url(images/car.png)";
        car.style.backgroundSize = "cover";
        car.style.overflow = "hidden";
        car.style.zIndex="2";

        car.classList.add('car');
        mainC.appendChild(car);        

        this.element = car;
        this.element.style.left = this.x+'px';
        this.element.style.top = this.y+'px';
    }
       
    //making a player fire a bullet
    this.fire = function(){
        var f = new Bullet(mainC,that.x+that.width/2-5, that.y);
        this.fires.push(f);
    }

    this.update = function(left,right){
        // updating the bullet position
        for(var i = 0; i<this.fires.length;i++){
            this.fires[i].update();
            this.ammoFire++;

            //if the bullet cross the fence deleing the bullet from the array
            if(this.fires[i].y < 0){
                this.fires.shift();
                document.getElementById('bullet').remove();
            }
        }

        // moving a player to the left
        if(left) { 
            direction = -1;
            this.x += direction*this.trackSize;
        }
        
        //moving a player to right
        if(right){
            direction = 1;
            this.x += direction*this.trackSize;
        }
        console.log(this.x)


        if(this.x <= this.trackSpace){
            this.x = this.trackSpace;
        }
        if(this.x >= this.maxWidth-this.trackSpace-this.width){
            this.x= this.maxWidth-this.trackSpace-this.width;
        }
    }
}