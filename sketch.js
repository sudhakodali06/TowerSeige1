
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;

var a;
var circles=[];
var ground,ball;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12
var c1,c2,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13;
var backgroundImg;
var hexa,sling;

function setup() {
  createCanvas(1000,1000);
  //stroke("black")
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground(500,700,1000,10);
  stand1 = new Stand(390,500,250,10);
  block2 = new Block(330,480,30,30);
  block3 = new Block(360,480,30,30);
  block4 = new Block(390,480,30,30);
  block5 = new Block(420,480,30,30);
  block6 = new Block(450,480,30,30);
  //block7 = new Block(480,480,30,30);
  //b8 = new Block(315,450,30,30);
  b9 = new Block(345,450,30,30);
  b10 = new Block(375,450,30,30);
  b11 = new Block(405,450,30,30);
  b12 = new Block(435,450,30,30);
  //b13 = new Block(465,450,30,30);
  b14 = new Block(375,420,30,30);
  b15 = new Block(405,420,30,30);  
  b16 = new Block(391,390,30,30);
  stand2 = new Stand(800,400,250,10);
  c1 = new Block(800,380,30,30);
  c2 = new Block(830,380,30,30);
  c3 = new Block(860,380,30,30);
  c4 = new Block(770,380,30,30);
  c5 = new Block(740,380,30,30);
  c6 = new Block(755,330,30,30);
  c7 = new Block(785,330,30,30);
  c8 = new Block(815,330,30,30);
  c9 = new Block(845,330,30,30);
  c10 = new Block(769,310,30,30);
  c11 = new Block(798,310,30,30);
  c12 = new Block(828,310,30,30);
  c13 = new Block(790,290,30,30);
  hexa = new Hexagon(400,200,60,60);
  //ball= Bodies.circle(50,200,20)
  //World.add(world,ball);
  console.log(hexa);
  sling = new Slingshot(hexa.body,{x:200,y:250});
  }

function draw() {
  background(255) 
  ground.display();
  stand1.display();
  //block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  //block7.display();
  //b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
 // b13.display();
  b14.display();
  b15.display();
  stand2.display();
  b16.display();
  c1.display();
  c2.display();
  c3.display();
  c4.display();
  c5.display();
  c6.display();
  c7.display();
  c8.display();
  c9.display();
  c10.display();
  c11.display();
  c12.display();
  c13.display();
  hexa.display();
  sling.display();

 // a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  /*
 for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 //drawSprites();*/
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 
function mouseDragged()
{
    Matter.Body.setPosition(hexa.body,{x:mouseX,y:mouseY});
}
function mouseReleased()
{
    sling.fly();

}
function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(hexa.body,{x:200,y:250});
    sling.attach(hexa.body);
  }
}