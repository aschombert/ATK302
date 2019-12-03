var myState = 0;
var myTimer = 0;
let value = 0;
let mic;
var song;
var song1;
var song2;
var song3;
var song4;

function preload() {
  song = loadSound('assets/rec1.m4a');
  song1 = loadSound('assets/rec2.m4a');
  song2 = loadSound('assets/rec3.m4a');
  song3 = loadSound('assets/rec4.m4a');
  song4 = loadSound('assets/youlose.wav');

  song.loop();
  song.stop();
  song1.loop();
  song1.stop();
  song2.loop();
  song2.stop();
  song3.loop();
  song3.stop();
  song4.loop();
  song4.stop();

}



function setup() {

  // put setup code here

  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();

}



function draw() {

  let vol = mic.getLevel();

  // put drawing code here

  fill(value);
  rect(25, 25, 50, 50);



  switch (myState) {

    case 0:
      background('red');
      textSize(72);
      text("HOME", width / 2, height / 2);

      myTimer++;

      if (mouseIsPressed) {
        myTimer = 0;
        myState = 100;
      }

      break;



    case 1:

      song.play();
      myState = 11;

      break;

    case 2:

      song1.play();
      myState = 12;
      break;



    case 3:

      song2.play();
      myState = 13;

      break;



    case 4:
      song3.play();
      myState = 14;

      break;

    case 5:
      song4.play();

      background('purple');
      textSize(72);
      text("LOSE", width / 2, height / 2);

      myTimer++;
      if (mouseIsPressed) {
        myTimer = 0;
        myState = 0;
      }
      break;

    case 11:
      background('green');
      textSize(72);
      text("BOP IT", width / 2, height / 2);

      myTimer++;

      if (myTimer >= 500) {

        myState = 5;

      }



      if (mouseIsPressed) {

        myTimer = 0;
        myState = 100;

      }
      break;

    case 12:
      background('blue');
      textSize(72);
      text("SHAKE IT", width / 2, height / 2);

      myTimer++;
      if (myTimer >= 500) {
        myState = 5;
        myTimer = 0;

      }
      break;

    case 13:
      background('yellow');
      textSize(72);
      text("YELL IT", width / 2, height / 2);

      myTimer++;
      if (myTimer >= 500) {
        myTimer = 0;
        myState = 5;

      }

      console.log(vol);
      if (vol > 0.12) {
        myTimer = 0;
        myState = 100;

      }

      break;

    case 14:

      background('orange');

      textSize(72);
      text("PASS IT", width / 2, height / 2);

      myTimer++;

      if (myTimer >= 500) {

        myTimer = 0;

        myState = 100;

      }

      break;




    case 100:

      song.pause();
      song1.pause();
      song2.pause();
      song3.pause();
      song4.pause();
      myState = floor(random(1, 5));

      break;

  }

}



function deviceShaken() {

  if (myState == 2) {
    myState = 100;
    myTimer = 0;
  }

}



/*   function mouseReleased() {

    myState = myState + 1;

    if (myState > 6) {

    myState = 0;

    }

  }

   */

function touchStarted() {

  getAudioContext().resume();

}
