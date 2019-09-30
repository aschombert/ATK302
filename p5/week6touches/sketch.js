function setup() {
  // put setup code here
  createCanvas(800, 800);
  textSize(40);
}

function draw() {
  // put drawing code here
  background('green');
  if (touches.length > 0) {
    for (var i = 0; i < touches.length; i++) {
      text("touches x = " + touches[i].x + ", " + touches[i].y, 20, 50 * (i+1));
    }
  }
}

//console.log(touches) ;
