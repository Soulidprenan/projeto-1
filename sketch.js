
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyDown("up")){
  background("blue");
}
if(keyDown("down")){
  background("red");
}
if(keyDown("left")){
  background("yellow");
}
if(keyDown("right")){
  background("green");
}
}