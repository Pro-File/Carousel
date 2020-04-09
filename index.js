console.log("conected");

var image = document.getElementsByClassName("image");
var i;
var left_btn = document.getElementById("left");
var right_btn = document.getElementById("right");

var SliderIndex = 1;
arr(SliderIndex);

function next(n){
    SliderIndex = SliderIndex + n;
    arr(SliderIndex);
}

right_btn.addEventListener("click",function(e){
   e.preventDefault();
    next(1);
});

left_btn.addEventListener("click",function(e){
    e.preventDefault();
    next(-1);
});

function arr(index){
    if(index > image.length) {
        SliderIndex = 1;
    }
    if(index < 1) { 
        SliderIndex = image.length;
    }
    for(i=0; i<image.length; i++){
        image[i].style.display = "none";
    }
    image[SliderIndex-1].style.display = "block"; 
}