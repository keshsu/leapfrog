// var canvas = document.getElementById('gcanvas');
// canvas.height = 600; canvas.width = 600;
// var ctx = canvas.getContext('2d');

// var x = 300, y = 20;

// function draw(y) {
//     ctx.clearRect(0,0, canvas.width,canvas.height);
//     ctx.beginPath();
//     ctx.arc(x, y, 20, 0, 2 * Math.PI);
//     ctx.fillStyle = 'blue';
//     ctx.fill();
// }
// draw(x,y);
// var du= 5;
// setInterval(function(){
//     y+=du;
//     if(y+20>canvas.height){
//         du-=5;
//     }
//     else if(y-20<=0){
//         du+=5;
//     }
//     draw(y); 
// },20);


var mainc = document.getElementById('manic');
var childc  = document.getElementById('circle');

var act_width = mainc.offsetWidth;
var act_height = mainc.offsetHeight;

var top_place = 0;
var left_place = 0.5* act_width;
console.log(top_place, left_place);


var child_top= childc.offsetTop;

childc.style.left= left_place-20 +'px';

var inc = 5;
function draw(top){
    childc.style.top= top +'px';
}
setInterval(function(){
    child_top += inc;
    if(child_top+45>act_height){
       inc -=5;
    }
    else if(child_top<=0){
        inc+=5;
    }
    draw(child_top);
},20);