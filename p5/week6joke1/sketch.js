var myState = 0;

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  textSize(40);
}

function draw() {
    background(100);

  switch(myState) {

      case 0:
      text('you dont need a parachute to go skydiving,',100,100);
      break ;

      case 1:
      text('you need one to go skydiving twice.',100,100);
      break ;
    }
}
function mouseReleased(){
  myState = myState = 1;
  if (myState >1){
    myState =0;
  }
}



//console.log(touches) ;
