function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(1000, 500);
}
  function draw () {
  background('#0394fc');
  noStroke();

  fill('brown');
  rect(195,200,20,100);

  fill('green');
  ellipse(205,175,70,70);

  fill('yellow');
  ellipse(644,44,72,72);
  fill(255);
  text(mouseX + ',' + mouseY, 20,20)

  ellipse(50,50,60,50);
  ellipse(80,40,60,50);
  ellipse(130,50,60,50);
  ellipse(70,70,60,50);
  ellipse(110,65,60,50);

  fill('green');
  rect(0,300,1000, 500);


  //x=x+1;
  //if (x> width) {
  //  x = 0;
  //}
}
  function mouseReleased() {

  print(mouseX + ',' + mouseY, 20,20)
  }
