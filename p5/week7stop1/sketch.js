var myState =0;
var timer =200;
var x =0;
var vel=3;

function setup(){
  createCanvas(windowWidth,windowHeight);
  rectMode(CENTER);
  ellipseMode(CENTER);
}


function draw(){

  background(100);
  fill('#f7ff3c');
  rect(width/2, height/2, 150, 400);

  switch (myState) {
    case 0:
    fill('grey');
    ellipse(width/2, height/2, 100, 100);
    ellipse(width/2, height/2-125,100, 100);
    fill('green');
    ellipse(width/2, height/2+125, 100, 100);

    doTimer(1, 100);
    vel=3;
    break;

    case 1:
    fill('grey');
    ellipse(width/2, height/2+125, 100, 100);
    ellipse(width/2, height/2-125,100, 100);
    fill('yellow');
    ellipse(width/2, height/2, 100, 100);
    doTimer(2, 50);
    vel=1;
    break;

    case 2:
    fill('grey');
    ellipse(width/2, height/2, 100, 100);
    ellipse(width/2, height/2+125, 100, 100);
    fill('red');
    ellipse(width/2, height/2-125,100, 100);
    doTimer(0, 15);
    vel=0;
    break;
  }

  fill('purple')
  rect(x, height-100, 80, 50);
  x=x+vel;
  if (x > width) {
    x=0;
  }
}

function doTimer(whichState, variableTimer){
  timer--;
  if (timer <= 0){
    timer = variableTimer;
    myState = whichState;
  }
}
