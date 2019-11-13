var namesArray = [];
var vodka;
var slurpee;
var bistro;
function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1ScuaqtYGNk2ZhOro1XVq-PO4hfC001Tu79UzfvMvaFI'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  imageMode(CENTER);

  vodka= loadImage('assets/vodka.jpg', 50,100,100,100);
  slurpee= loadImage('assets/slurpee1.jpg',100,100,100,100);
  bistro= loadFont('assets/bistro.ttf')
}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called namesArray
  for (let i = 0; i < data.length; i++) {
    namesArray.push(new Vodka(data[i].Name, data[i].Drink));
  }

}


function draw() {
  background('blue');

  // // iterate through the namesArray and display the objects!
  for (let i = 0; i < namesArray.length; i++) {
    namesArray[i].display();
  }

}


// my circle class
function Vodka(myName, myDrink) {
  this.pos = createVector(random(width), random(height));
  this.name = myName;
  this.drink = myDrink;


  this.display = function() {
    if (this.drink == "vodka") {
      image(vodka, this.pos.x, this.pos.y, 100, 100);
    } else {
      image(slurpee, this.pos.x, this.pos.y, 100, 100);
    }
    textFont(bistro);
    text(this.name, this.pos.x, this.pos.y);
  }

}
