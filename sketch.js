var bgImage;
var rect1 , rect2, rect3 , rect4 , rect5 , rect6, rect7 , rect8 , rect9, rect10, rect11 , rect12 , rect13 , rect14 , rect15 , rect16 , rect17 , rect18 , rect19 , rect20 , rect21 , rect22 , rect23 , rect24 , rect25;
var coin1 , coin2 , coin3 , coin4 , coinImg;
var treasure , treasureImg;
var octopus , octopusImg;
var score=0;

function preload(){
bgImage=loadImage('images/oceanBG.jpg')
coinImg=loadImage('images/coin.png')
treasureImg=loadImage('images/treasure.png')
octopusImg=loadImage('images/octopus.png')
}

function setup(){
  createCanvas(500,500)
  edges=createEdgeSprites()

rect1=createSprite(20,60,100,20);
rect1.shapeColor= 'brown'
rect2=createSprite(130,5,20,200);
rect2.shapeColor='brown'
rect3=createSprite(25,190,20,150);
rect3.shapeColor='brown'
rect4=createSprite(100,160,75,20);
rect4.shapeColor='brown'
rect5=createSprite(100,220,75,20);
rect5.shapeColor='brown'
rect6=createSprite(230,35,100,20);
rect6.shapeColor='brown'
rect7=createSprite(280,118,20,100);
rect7.shapeColor='brown'
rect8=createSprite(170,160,20,100);
rect8.shapeColor='brown'
rect9=createSprite(200,80,70,20);
rect9.shapeColor='brown'
rect10 =createSprite(245,134,50,20);
rect10.shapeColor='brown'
rect11=createSprite(223,220,20,100);
rect11.shapeColor='brown'
rect12=createSprite(344,98,70,20);
rect12.shapeColor='brown'
rect13=createSprite(330,175,20,100);
rect13.shapeColor='brown'
rect14=createSprite(276,203,30,30);
rect14.shapeColor='brown'
rect15=createSprite(125,264,70,20);
rect15.shapeColor='brown'
rect16=createSprite(285,285,20,100);
rect16.shapeColor='brown'
rect17=createSprite(370,283,70,20);
rect17.shapeColor='brown'
rect18=createSprite(40,340,20,100);
rect18.shapeColor='brown'
rect19=createSprite(135,360,100,20);
rect19.shapeColor='brown'
rect20=createSprite(130,330,20,40);
rect20.shapeColor='brown'
rect21=createSprite(198,310,70,20);
rect21.shapeColor='brown'
 rect22=createSprite(265,380,100,20);
rect22.shapeColor='brown'

coin1=createSprite(300,50,20,20)
coin1.addImage(coinImg)
coin1.scale=0.2
coin2=createSprite(200,340,20,20)
coin2.addImage(coinImg)
coin2.scale=0.2
coin3=createSprite(100,190,20,20)
coin3.addImage(coinImg)
coin3.scale=0.2;
coin4=createSprite(195,240,20,20)
coin4.addImage(coinImg)
coin4.scale=0.2

treasure=createSprite(400,350,50,50)
treasure.addImage(treasureImg)
treasure.scale=0.2

octopus=createSprite(30,29,10,10)
octopus.shapeColor='green'
//octopus.addImage(octopusImg)
//octopus.scale=0.09
 }

function draw(){
  background(bgImage)
  textSize(20)
  text ('Score : '+ score , 400,30);
  


  if(keyDown('up')){
    octopus.velocityY=-3;
    octopus.velocityX=0;
  }
  if(keyDown('down')){
    octopus.velocityY=3;
    octopus.velocityX=0
  }

  if(keyDown('left')){
    octopus.velocityX=-3;
    octopus.velocityY=0;
  }

  if(keyDown('right')){
    octopus.velocityX=3;
    octopus.velocityY=0;
  }

  octopus.bounceOff(edges);
  octopus.bounceOff(rect1);
  octopus.bounceOff(rect2);
  octopus.bounceOff(rect3);
  octopus.bounceOff(rect4);
  octopus.bounceOff(rect5);
  octopus.bounceOff(rect6);
  octopus.bounceOff(rect7);
  octopus.bounceOff(rect8);
  octopus.bounceOff(rect9);
  octopus.bounceOff(rect10);
  octopus.bounceOff(rect11);
  octopus.bounceOff(rect12);
  octopus.bounceOff(rect13);
  octopus.bounceOff(rect14);
  octopus.bounceOff(rect15);
  octopus.bounceOff(rect16);
  octopus.bounceOff(rect17);
  octopus.bounceOff(rect18);
  octopus.bounceOff(rect19);
  octopus.bounceOff(rect20);
  octopus.bounceOff(rect21);
  octopus.bounceOff(rect22);

  if(octopus.isTouching(coin1)){
    score=score+10;
    coin1.destroy()
 }

 if(octopus.isTouching(coin2)){
  score=score+10;
  coin2.destroy()
}

if(octopus.isTouching(coin3)){
  score=score+10;
  coin3.destroy()
}

if(octopus.isTouching(coin4)){
  score=score+10;
  coin4.destroy()
}

if(score==40 && octopus.isTouching(treasure)){

treasure.destroy()
octopus.velocityY=0;
octopus.velocityX=0;
textSize(40)
text('WINNER!', 250 , 250)


}




  
  drawSprites()
}