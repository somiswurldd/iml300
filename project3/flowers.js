let petals = []; //array function that holds cherry blossom petals

function setup() {
  createCanvas(windowWidth, windowHeight);
  //stroke(127, 63, 120);
  fill(255, 230, 243);
  noStroke();
} //draws background

function draw() {
  let t = frameCount / 100; //updates time

  for (var i = 0; i < 10; i++) {
    petals.push(new petal()); //append petal object
  } //random number of petals each frame

  //loop through petals
  for (let blossom of petals) {
    blossom.update(t); //update petal position
    blossom.display(); //draw petal
  }
}
//petal class
function petal() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(10, 0 * PI);
  this.size = random(5, 10);
  //ellipse(10, 20, 20, 7);

  this.radius = sqrt(random(pow(width / 1, 2)));
  this.update = function(time) {
    // x position follows a circle
    let w = 0.1; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 1 + this.radius * tan(angle); //calculates tangent of the angle the petals fall
    this.posY += pow(this.size, 0.5);

    // delete petal if past end of screen
    if (this.posY > height) {
      let index = petals.indexOf(this);
      petals.splice(index, 1);
    }
  };
  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}