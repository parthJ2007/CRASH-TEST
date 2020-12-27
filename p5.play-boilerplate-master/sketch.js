var car, wall;  
var speed, weight;
function setup() 
{
  createCanvas(800,400);
  speed = random(55,90);
  weight1 = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(750, 200, 60, height/2);
  wall.shapeColor = "#000000";
}

function draw() 
{
  background(255,255,255); 
  car.velocityX = speed; 
  car.weight = weight1;
  if(wall.x - car.x < (car.width + wall.width)/2) 
  {
    car.velocityX = 0;
    var deformation = 0.5 * width * speed * speed/22509;
    if(deformation > 180)
    {
      car.shapeColor = color(255, 0, 0);
    }
    if(deformation < 180 && deformation > 100)
    {
      car.shapeColor = "#FFFF00"
    }
    if(deformation < 100)
    {
      car.shapeColor = color(0, 255, 0);
    }
  }
  drawSprites();
}