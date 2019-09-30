var myState =0;
var myTimer = 0;

function setup(){
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
}


function draw(){

  fill('yellow');
  rect(width/2, height/2, 150, 400);

  fill("#1f4706")

  fill("#a8ab09")

  fill("#7d0000")

switch (myState) {
  case 0:
  fill('green');
  ellipse(width/2,height/1.65, 100, 100);
  myTimer++
  if (myTimer>=200){
    myTimer=0;
    myState=1;
  }

  break;

  case 1:
  fill('yellow');
  ellipse(width/2,height/2, 100, 100);
  myTimer++
  if (myTimer>=200){
    myTimer=0;
    myState=2;
  }
  break;

  case 2:
  fill('red');
  ellipse(width/2,height/2.5, 100, 100);
  myTimer++
  if (myTimer>=200){
    myTimer=0;
    myState=0;
  }
  break;
}
}
//console.log(touches) ;
