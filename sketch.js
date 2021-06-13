var fixedRect, movingRect;
var obj1,obj2,obj3,obj4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  obj1 = createSprite(100,100,50,50);
  obj1.shapeColor= "green";

  obj2 = createSprite(200,100,50,50);
  obj2.shapeColor= "green";

  obj3 = createSprite(300,100,50,50);
  obj3.shapeColor= "green";

  obj4 = createSprite(400,100,50,50);
  obj4.shapeColor= "green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  if(isTouching(movingRect,obj3) ){
    movingRect.shapeColor = "red";
  obj3.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
  obj3.shapeColor = "green";

  }
  drawSprites();
}


function isTouching(p1,p2){
  if (p1.x - p2.x < p2.width/2 + p1.width/2
    && p2.x - p1.x < p2.width/2 + p1.width/2
    && p1.y - p2.y < p2.height/2 + p1.height/2
    && p2.y - p1.y < p2.height/2 + p1.height/2) {
     
      return true;
  
}
else {
  return false;
  
}

}