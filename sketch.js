var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 80, 50);
  movingRect = createSprite(700,100,50,80);
  gameObject = createSprite(100,100,50,50);
 
  fixedRect.shapeColor = "blue";
  movingRect.shapeColor = "red";
  gameObject.shapeColor = "white";
}

function draw() {
  background(0);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(fixedRect, movingRect)){
    
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    
    fixedRect.shapeColor = "blue";
    movingRect.shapeColor = "red";
  }

  if(isTouching(gameObject, movingRect)){

    gameObject.shapeColor = "yellow";
  }
  else{
    gameObject.shapeColor= "white";
  }
  
  drawSprites();
}

