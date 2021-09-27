var i = 0;
var images = [];
var time = 3000;
              
// Image list
images[0] = 'Image/1.png';
images[1] = 'Image/2.png';
images[2] = 'Image/3.png';
              
                // Change image
function changeImage(){             
    document.slide.src = images[i];               
    if(i <images.length - 1){
        i++;                  
    } else {
        i = 0;
    }
    setTimeout("changeImage()", time);
    }
    window.onload = changeImage;