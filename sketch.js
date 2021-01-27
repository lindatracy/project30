
const Engine=Matter.Engine;
const World=Matter.World;
const Render=Matter.Render;
const Body=Matter.Body;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var pos;
function preload(){
    polygonImage=loadImage("polygon.png");
}


function setup(){
 canvas=createCanvas(1200,600);
 engine=Engine.create();
 world=engine.world;

 polygon=Bodies.rectangle(100,100,50,50);
 World.add(world,polygon);
 
 
 
 ground1=new Ground(300,450);
 ground2=new Ground(600,265);
 
 box1=new box(250,425);
 box1.color="red";
 box2=new box(280,425);
 box3=new box(310,425);
 box3.color="green";
 box4=new box(340,425);
 box5=new box(265,385);
 box5.color="pink"
 box6=new box(295,385);
 box7=new box(325,385);
 box7.color="purple";
 box8=new box(280,345);
 box9=new box(310,345);
 box9.color="blue"
 box10=new box(295,305);
 box10.color="white"

 box11=new box(550,260);
 box12=new box(580,260);
 box13=new box(610,260);
 box13.color="red";
 box14=new box(640,260);
 box15=new box(565,185);
 box16=new box(595,185);
 box16.color="violet"
 box17=new box(625,185);
 box17.color="lightgreen"
 box18=new box(580,145);
 box19=new box(610,145);
 box20=new box(590,105);
 box20.color="skyblue";

 sling=new Slingshot(polygon,{x:200,y:100})

 /*var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });*/
  console.log(polygon)

 //Render.run(render);
}
function draw(){
 background(0);
 Engine.update(engine);
 
 pos=polygon.position;
 image(polygonImage,pos.x,pos.y,50,50);


 ground1.display();
 ground2.display();
 box1.display();
 box2.display();
 box3.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 box13.display();
 box14.display();
 box15.display();
 box16.display();
 box17.display();
 box18.display();
 box19.display();
 box20.display();

 sling.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
  if(keyCode===32){
  sling.attach(polygon);
}}