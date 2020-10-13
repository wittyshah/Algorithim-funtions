var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 80, 50);
  movingRect = createSprite(400,700,50,80);
  fixedRect.velocityY = 5;
  movingRect.velocityY = -5;
  
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "red";
}

function draw() {
  background(0);  
  bounceOff(fixedRect, movingRect);

  drawSprites();
}