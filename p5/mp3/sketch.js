var cars = [];
var frogPos;
var myState = 0;
var timer = 0;
var resetTheGame;
var trump, trumpright, trumpleft;
var bird;
var trumpkiss;
var trumpangry;
var trumpstupidface;


function setup() {

  createCanvas(800, 800);
  // spawning cars
  for (var i = 0; i < 40; i++) {
    cars.push(new Car());
  }

  trumpright = loadImage("assets/trumpeat.png", 300,300,300,300);
  trumpleft = loadImage("assets/trumpeatflip.png", 300, 300,300,300);
  trump= trumpright;
  bigmac = loadImage("assets/bigmac.png",300,300,300,300);
  trumpkiss = loadImage("assets/trumpkiss.png",300,300,300,300);
  trumpangry = loadImage("assets/trumpangry.png",300,300,300,300);
  trumpstupidface = loadImage("assets/trumpstupidface.png",300,300,300,300);

  // initialize frog position
  frogPos = createVector(width / 2, height - 80);
  rectMode(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

}

function draw() {
  switch (myState) {
    case 0:
      background('blue');
      text('trump eat hamburger', 150, 200);
      text('click to play', 200, 150);
      image(trumpstupidface,400,400);
      textSize(50);
      break;

    case 1:
    background('white')
      game();
      timer++;
      if (timer > 2500) {
        timer = 0;
        myState = 2;
      }
      break;

    case 2:
    background('red')
      text('u f*cking suck', 400, 600);
      textSize(40);
      image(trumpangry, 300,300,300,300);
      break;

    case 3:
    background('purple')
      text('u win baby!', 150,400);
      textSize(40);
      image(trumpkiss,150,150,500,400);

  }
}

function resetTheGame() {
  cars = [];
  for (var i = 0; i < 5; i++);
  cars.push(new Car());
}


function Car() {
  this.r = random(255);
  this.b = random(255);
  this.g = random(255);
  this.pos = createVector(random(width), random(width));
  this.vel = createVector(random(-5, 5), random(-5, 5));

  this.display = function() {
    noStroke();
    fill(this.r, this.g, this.b);
  //  rect(this.pos.x, this.pos.y, 80, 45);
  //  fill(this.r, this.g, this.b);
  //  ellipse(this.pos.x - 15, this.pos.y + 25, 20, 20);
  //  ellipse(this.pos.x + 15, this.pos.y + 25, 20, 20);
  image(bigmac, this.pos.x, this.pos.y, 100,100);
  }

  this.drive = function() {
    this.pos.add(this.vel);
    if (this.pos.x > width) this.pos.x = 0;
    if (this.pos.x < 0) this.pos.x = width;
    if (this.pos.y > height) this.pos.y = 0;
    if (this.pos.y < 0) this.pos.y = height;
  }
}

function keyPressed(){
  if (keyCode === LEFT_ARROW) trump = trumpleft;
  if (keyCode === RIGHT_ARROW) trump = trumpright;
}

function checkForKeys() {
  if (keyIsDown(LEFT_ARROW)) frogPos.x = frogPos.x - 5;
  if (keyIsDown(RIGHT_ARROW)) frogPos.x = frogPos.x + 5;
  if (keyIsDown(UP_ARROW)) frogPos.y = frogPos.y - 5;
  if (keyIsDown(DOWN_ARROW)) frogPos.y = frogPos.y + 5;

}

function game() {
  background(100);
  //iterate for cars array
  for (var i = 0; i < cars.length; i++) {
    cars[i].display();
    cars[i].drive();
    // test if car is close to frog
    if (cars[i].pos.dist(frogPos) < 50) {
      cars.splice(i, 1);
    }
  }
  if (cars.length == 0) {
    timer = 0;
    myState = 3;
  }
  // draw the frog
  fill('green');
//  ellipse(frogPos.x, frogPos.y, 60, 60);
  image(trump, frogPos.x, frogPos.y, 300,300);
  checkForKeys();
}

function mouseReleased() {
  switch (myState) {
    case 0:
      myState = 1;
      break;

    case 2:
      myState = 0;
      resetTheGame();
      break;

    case 3:
      myState = 0;
      resetTheGame();
      break;
  }
}
