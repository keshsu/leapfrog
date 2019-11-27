var canvas = document.getElementById("gcanvas");
var ctx = canvas.getContext("2d");
var points = [
    {x: 10, y: 20},
    {x: 40, y: 40},
    {x: 60, y: 20},
    {x: 260, y: 120},
    {x: 160, y: 20},
    {x: 80, y: 20},
];

var len = points.length;
var x,y;
points.forEach(function(points){
    ctx.beginPath();
    ctx.arc(points.x,points.y, 5 ,0,2*Math.PI);
 
    ctx.fillStyle ="blue";
    ctx.fill();
    }
);

