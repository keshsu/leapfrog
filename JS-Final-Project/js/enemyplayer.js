function enemyPlayer(canvas, ctx) {

    // var this =this;
    var count =0;

    this.enemyArr = {
        0:{width:30,height:30},
        1:{width:50,height:50},
        2:{width:60,height:60}
    };

    this.enemyYpos = [-10,canvas.height-150];
    this.enemyXpos = [-10,canvas.width+10];

    // this.x = Math.random()*(canvas.width-0)+0;

    this.x = canvas.width;

    this.y = this.enemyYpos[Math.floor(Math.random()*this.enemyYpos.length)];

    console.log(this.y);

    this.x_velocity = 0;
    this.y_velocity = 0;
    this.newY = Math.floor(this.y);
    this.speed = 0.15;
    this.direction = 0;

    // this.dir = Math.random() * (1.99 - 0)+0;
    // this.dir = Math.floor(this.dir);
    
    this.randomEmeny = function(){
        this.newEnemy = this.enemyArr[Object.keys(this.enemyArr)[Math.floor(Math.random()*Object.keys(this.enemyArr).length)]];
        console.log(this.newEnemy);
    }
    

    console.log(this.newY);
    
    this.draw =function(){
        ctx.fillStyle = "#aff"; 
        ctx.beginPath();
        ctx.rect(this.x, this.newY, this.width, this.height);
        ctx.fill();
    }



    this.update = function() {
        // console.log(count);
        // if(count==100){
            this.randomEmeny();
            // count=0;
        // }
        if(this.newEnemy.width == 30 && this.newEnemy.height==30 && this.y == -10){
            this.x = Math.random()*(canvas.width-0)+0;

            // this.y_velocity *=0.9;
            // this.y +=this.y_velocity;
            // this.x_velocity += this.speed;
            // this.x -= this.x_velocity;
            // this.x_velocity *= 0.9;
            
    
            if (this.x < -64) {
    
                this.x = -64;
    
            } else if (this.x > canvas.width) {
    
                this.x = canvas.width - 42;
    
            }
            this.width = this.newEnemy.width;
            this.height = this.newEnemy.height;
        }
        else if(this.newEnemy.width == 50 && this.newEnemy.height==50 && this.y == canvas.height-150){
            this.x_velocity += this.speed;
            this.x -= this.x_velocity;
            this.x_velocity *= 0.9;
            
    
            if (this.x < -64) {
    
                this.x = -64;
    
            } else if (this.x > canvas.width) {
    
                this.x = canvas.width - 42;
    
            }
            this.width = this.newEnemy.width;
            this.height = this.newEnemy.height;
        }
        else if(this.newEnemy.width == 60 && this.newEnemy.height == 60){
            // this.x = Math.random()*(canvas.width-0)+0;


        }

        this.draw();
        count++;

    }

}