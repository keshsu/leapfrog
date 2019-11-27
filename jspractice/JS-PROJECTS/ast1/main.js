var index=0;
var images= [];
var time = 2000;

var silder_content = document.getElementById('image_silder_wrapper');

images = document.getElementsByTagName('img');
// console.log(images);
// var imgwid = 

// var img_width = images[i].offsetWidth;    
var len = images.length;
// console.log(len);
// console.log(img_wi);
// document.getElementById('image-slider-wrapper').width= len * img_width;














function draw(){
    var dots= [];
    var dotscontainer = document.getElementById('dots-container');

    for(var i=0; i<len;i++){
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dotscontainer.append(dot);
        dots.push(dot);
    }
    images[index].style.display ="block";

    dots[index].classList.add("active");

    // nextImage(index,len,dots,images);
}
draw();

var currentindex=0;

function slideImage(index){
    index++;
    // console.log(index);

    images[index].style.display ="block";
    images[index-1].style.display ="none";
    console.log(index);
    
    
    // console.log(len);
    if(index >= len-1){
        index= -1;
    }
}
function changeimage(change){
    
    index = index + change;
    // console.log(index);
    images[index].style.display ="block";
    images[index-1].style.display ="none";
    dots[index].classList.add('active');
    
    console.log(index);

    // console.log(len);
    if(index >= len-1){
        index= -1;
    }
    else if(index <= -1){
        images[len-2].style.display ="none";
        console.log(index);
    }
}
// setInterval(slideImage, 1000);
