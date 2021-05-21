function preload(){
  coinImg = loadImage('sprites/coin.gif');
  pigImg = loadImage('sprites/piggy_bank1.png');

}
function setup() {
  createCanvas(800,600);
  coin1 = createSprite(50,100)
  coin2 = createSprite(700,100)
  coin3 = createSprite(50,550)
  coin4 = createSprite(700,550)
coin1.addImage(coinImg)
coin2.addImage(coinImg)
coin3.addImage(coinImg)
coin4.addImage(coinImg)
coin1.scale = 0.1;
coin2.scale = 0.1;
coin3.scale = 0.1;
coin4.scale = 0.1;
  pig = createSprite(600,100)
  pig.addImage(pigImg)
pig.scale = 0.1;
 
}

function draw() {
  background('cyan')
pig.x = World.mouseX;
pig.y = World.mouseY;
if(pig.isTouching(coin1)){
  pig.scale = pig.scale + 0.06;
  coin1.destroy();
}
else if(pig.isTouching(coin2)){
  pig.scale = pig.scale + 0.06;
  coin2.destroy();
}
else if(pig.isTouching(coin3)){
  pig.scale = pig.scale + 0.06;
  coin3.destroy();
}
else if(pig.isTouching(coin4)){
  pig.scale = pig.scale + 0.06;
  coin4.destroy();
}
  drawSprites();
}
