function setup() {
  // put setup code here
  createCanvas(500,500);
}

function draw() {
  // put drawing code here



  if (mouseIsPressed) {
    fill('red');
    rect(225,250, 50, 100);

    fill('green');
    ellipse(250, 250, 50, 200);
    rect(240,340, 5, 100);
    rect(225,440, 20, 5);
    rect(255,340, 5, 100);
    rect(255,440, 20, 5);
    rect(275,250, 50,5);
    rect(175,250, 50,5);

    fill('black');
    ellipse(240,200,5,5);
    ellipse(255,200,5,5);
    ellipse(245,215,10,10);



  }


  else {

    fill('green');
    ellipse(250, 250, 50, 200);
    rect(240,340, 5, 100);
    rect(225,440, 20, 5);
    rect(255,340, 5, 100);
    rect(255,440, 20, 5);

    fill('black');
    ellipse(240,200,5,5);
    ellipse(255,200,5,5);

  }

}

function mouseReleased () {
  console.log(mouseX + ',' + mouseY)
}
