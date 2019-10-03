var myState = 0;
var myTimer = 200;
var pic1;
var pic2;
var pic3;
var pic4;
var pic5;
var song1;

function preload() {
  song1 = loadSound('assets/supremeratatat.mp3');
}


function setup(){
  createCanvas(windowWidth, windowHeight);
  background('black')
  pic1 = loadImage('assets/pic1.jpg');
  pic2 = loadImage('assets/pic2.jpg');
  pic3 = loadImage('assets/pic3.jpg');
  pic4 = loadImage('assets/pic4.png');
  pic5 = loadImage('assets/pic5.png');
  song1.play();
}

function draw (){
  switch(myState){
    case 0:

    image(pic1, 10,10, 500,500);
    myTimer++
    if (myTimer>=200){
      myTimer=0;
      myState=1;
    }
    break;

    case 1:

    image(pic2, 10,10, 500,500);
    myTimer++
    if (myTimer>=200){
      myTimer=0;
      myState=2;
    }
    break;

    case 2:

    image(pic3, 10,10, 500,500);
    myTimer++
    if (myTimer>=200){
      myTimer=0;
      myState=3;
    }
    break;

    case 3:

    image(pic4, 10,10,500,500);
    myTimer++
    if (myTimer>=200){
      myTimer=0;
      myState=4;
    }
    break;

    case 4:

    image(pic5, 10,10, 500, 500);
    myTimer++
    if (myTimer>=200){
      myTimer=0;
      myState=0;
    }
    break;
  }
}
function mouseReleased() {
  // pause all the songs
if (song1.isPlaying()){
  song1.pause();
  }
  else{
    song1.play();
  }
}
