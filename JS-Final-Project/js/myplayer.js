function Player(canvas, ctx,bullet,image) {

    // var that = this;
    this.height= 100;
    this.jumping= true;
    this.width= 90;
    this.x= canvas.width/2-this.width;
    this.x_velocity= 0;
    this.y= canvas.height - 140 - this.height;
    this.y_velocity= 0;
    this.fires = [];
    this.ammoFire = 0;

    //drawing the player
    this.draw = function(){
        
        //drawing the player bullet
        for(var i = 0; i<this.fires.length;i++){
            this.fires[i].draw(ctx,bullet);
        }

        // drawing a player
        ctx.beginPath();
        ctx.drawImage(image,this.x, this.y, this.width, this.height);
        ctx.fill();
    }
   
    //making a player fire a bullet
    this.fire = function(){
        var f = new Bullet(this.x+this.width/2, this.y+this.height/2);
        this.fires.push(f);
    }

    //updating a player
    this.update = function(left,right,up) {
        //updating the bullet position
        for(var i = 0; i<this.fires.length;i++){
            this.fires[i].update();
            this.ammoFire ++;

            //if the bullet cross the fence deleing the bullet from the array
            if(this.fires[i].x >= canvas.width){
                this.fires.shift();
            }
        }

        // moving a player to the left
        if (left) {
            console.log('left');
            this.x_velocity -= 0.5;

        }

        //jumping a player 
        if (up && this.jumping == false) {
            console.log('up');

            this.y_velocity -= 35;
            this.jumping = true;

        }


        //moving a player to right
        if (right) {
            console.log('right');

            this.x_velocity += 0.5;

        }

        //increasing the velocity when the player move
        this.y_velocity += 1.5;
        this.x += this.x_velocity;
        this.y += this.y_velocity;
        this.x_velocity *= 0.9;
        this.y_velocity *= 0.9;

        //checking if the player and ground collision
        if (this.y > canvas.height - 140-this.height) {

            this.jumping = false;
            this.y = canvas.height - 140- this.height;
            this.y_velocity = 0;

        }

        //checking if the player and left fence is collided
        if (this.x < 10) {

            this.x = 10;

        } 
        //checking if the player and right fence is collided
        else if (this.x > canvas.width - this.width-10) { 
            this.x = canvas.width - this.width -10;
        }

        //drawing the player at the updated position
        this.draw();
    }
    this.changeDirection = function(dir){
        console.log(image);
        if(dir >0){
            image.style.transform = "rotateX(180deg)";
        }
        else{

        }
    }
}