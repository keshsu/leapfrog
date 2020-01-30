function mainContainer(){

    var canvas = document.getElementById('helixCanvas');
    canvas.width= 500;
    canvas.height = 400;
    canvas.style.border="1px solid black";
    
    var ctx =  canvas.getContext("2d");
    var frames = 0;
    var circleObj = new Circle(ctx, canvas,frames);
    this.init =function(){
        this.update();
        this.draw();
    }
    this.draw = function(){
        circleObj.init();
    }
    this.update = function(){
        this.interv = setInterval(() => {
            // circleObj.update();
            frames++;
        }, 10);
    }
}
var mainc= new mainContainer();
mainc.init();