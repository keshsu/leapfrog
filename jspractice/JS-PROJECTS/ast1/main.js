var index=1;

var time = 2000;

var slider_content = document.getElementById('image-slider-wrapper');
var slider_image = document.getElementById('slideimage');
var button = document.getElementsByTagName('button');


var images= document.getElementsByTagName('img');


var img_width = images[index].width;    
var img_height = images[index].height;    
var len = images.length;
var total_wid = len * img_width;


var left = 0;
var currentPos = 0;


init(img_width,img_height);

function init(x,y){
    var container = document.querySelector('.main-carousal-container');
    container.style.width= x+'px';
    container.style.height= y+'px';
    
    container.style.position= "relative";
    container.style.overflow= "hidden";
    container.style.margin = 20+'px auto';
    
    
    
    slider_content.style.width= total_wid+'px';
    slider_content.style.position="absolute";
    slider_content.style.fontSize=0+'px';
    slider_image.style.float="left";
    // console.log(container);
    // this.getButton(){

    // }

}
function slideImage(){
    currentPos= left+ index * img_width;
    console.log(currentPos);
    slider_content.style.left=-currentPos+'px';
    slider_content.style.transition = "left 2.5s ease-in-out";

    index++;    

    if(currentPos == total_wid- img_width){
        index = 0;
    }
}


setInterval(function(){
    // slideImage();
},3000);


function changeimage(direction){
    currentPos = currentPos + direction * img_width;
        
        
    if(currentPos<0){
        currentPos= total_wid - img_width;

        console.log("current position starts:",currentPos);
    }
    else if(currentPos >= total_wid){
        currentPos= 0;
    }
    
    slider_content.style.left = -currentPos + 'px';
    

}

// function draw(){
//     var dots= [];
//     var dotscontainer = document.getElementById('dots-container');

//     for(var i=0; i<len;i++){
//         var dot = document.createElement("span");
//         dot.classList.add("dots");
//         dotscontainer.append(dot);
//         dots.push(dot);
//     }
//     images[index].style.display ="block";

//     dots[index].classList.add("active");

//     // nextImage(index,len,dots,images);
// }
// draw();

// var currentindex=0;

// function slideImage(index){
//     index++;
//     // console.log(index);

//     images[index].style.display ="block";
//     images[index-1].style.display ="none";
//     console.log(index);
    
    
//     // console.log(len);
//     if(index >= len-1){
//         index= -1;
//     }
// }
// function changeimage(change){
//     if(change>0){
//         index = index + change;
//         // console.log(index);
//         images[index].style.display ="block";
//         images[index-1].style.display ="none";
//         // dots[index].classList.add('active');

//         console.log(index);

//         // console.log(len);
//         if(index >= len-1){
//             images[index].style.display ="none";
//             index= -1;
//         }

//         // console.log(len);
//         if(index == 0){
//             index= len-1;
//             console.log(index);

//         }

//     }
// }
// // setInterval(slideImage, 1000);
