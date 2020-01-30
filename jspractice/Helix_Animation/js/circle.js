function Circle(ctx, canvas,frames){

   var circles = [];
   var maxHeight = canvas.height;
   var maxWidth =canvas.width;
   this.radius= 10;

   this.totalballs=10;

    this.init = function(){
        ctx.beginPath();
        
        for(var i = 1;i<=this.totalballs;i++){
            circles.push(this.make(i));
        }
        // this.draw(circles);
    }

    this.draw = function(circles){
        console.log(circles);
        for(var i=0;i<=circles.length;i++){
            circles[i].createrect();
            circles[i].update();
        }
        // console.log(this.colss);
        // for(var k = 0; k<this.colss.length; k++){
        //     var nx=this.colss[k];
        //     ctx.arc(nx.x, this.y+this.radius, this.radius ,0, 2*Math.PI);
        //     // ctx.arc(this.x, this.y, this.radius ,0, 2*Math.PI);
        //     ctx.fillStyle ="red";
        //     ctx.fill();

        // }

        // if(this.y>this.maxHeight-100){
        //     this.changeDir= true;
        //     console.log("cross");
        // }
        // else if(this.y <= 100){
        //     this.changeDir=false;
        // }
        // this.changePosition();
    }
    this.make =function(i){
        this.i = i;
        this.p = i*0.2;
        this.pos = {
            x:0,
            y:i*maxWidth/20};

        this.createrect= function(){
           ctx.arc(this.pos.x,this.pos.y,this.radius,maxWidth/20,maxHeight/20);
        }
        this.update = function(){
            console.log(this.pos);
            this.pos.y=Math.floor(Math.sin(this.p),-1,1,0,maxWidth);
            this.p +=0.1;      
        }
    }

    this.changePosition = function(){
        if(this.changeDir == true){
            this.speed = -0.5;
        }
        else{
            this.speed=0.5;
        }
    }
}