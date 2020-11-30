var bullet, wall;

var speed, weight;

var thickness;

var damage;

function setup() {
  createCanvas(1600,400);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  bullet = createSprite(50, 200, 25, 10);
  bullet.shapeColor = "white";

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet.velocityX = speed;
  damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background(0,0,0);  

  console.log(damage);

  if(collided(wall,bullet)) {
    bullet.velocityX = 0;
    if(damage > 10) {
      wall.shapeColor = "red";
    }
    if(damage < 10) {
      wall.shapeColor = "green";
    }
  }

  drawSprites();
}