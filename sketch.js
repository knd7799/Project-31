const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1,divide1,divide2,divide3,divide4,divide5,divide6,divide7,divide8,divide9,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20;
var p21,p22,p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p33,p34,p35,p36,p37,p38,p39,p40;
var particles = [];
var divisionHeight=300;

function setup() {
  var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    ground1 = new ground(250,795,500,10);
   divide1= new Division(60,691,5,200);
   divide2=new Division(120,691,5,200);
   divide3=new Division(180,691,5,200);
   divide4=new Division(240,691,5,200);
   divide5=new Division(300,691,5,200);
   divide6=new Division(360,691,5,200);
   divide7=new Division(420,691,5,200);
  divide8=new Division(3,691,5,200);
  divide9=new Division(478,691,5,200);
   p1=new Plinko(10,450,10);
   p2=new Plinko(50,450,10);
   p3=new Plinko(100,450,10);
   p4=new Plinko(150,450,10);
   p5=new Plinko(200,450,10);
   p6=new Plinko(250,450,10);
   p7=new Plinko(300,450,10);
   p8=new Plinko(350,450,10);
   p9=new Plinko(400,450,10);
   p10=new Plinko(450,450,10);
   p11=new Plinko(10,380,10);
   p12=new Plinko(50,380,10);
   p13=new Plinko(100,380,10);
   p14=new Plinko(150,380,10);
   p15=new Plinko(200,380,10);
   p16=new Plinko(250,380,10);
   p17=new Plinko(300,380,10);
   p18=new Plinko(350,380,10);
   p19=new Plinko(400,380,10);
   p20=new Plinko(450,380,10);
  p21=new Plinko(10,310,10);
  p22=new Plinko(50,310,10);
  p23=new Plinko(100,310,10);
  p24=new Plinko(150,310,10);
  p25=new Plinko(200,310,10);
  p26=new Plinko(250,310,10);
  p27=new Plinko(300,310,10);
  p28=new Plinko(350,310,10);
  p29=new Plinko(400,310,10);
  p30=new Plinko(450,310,10);
  p31=new Plinko(10,240,10);
  p32=new Plinko(50,240,10); 
  p33=new Plinko(100,240,10);
  p34=new Plinko(150,240,10);
  p35=new Plinko(200,240,10);
  p36=new Plinko(250,240,10);
  p37=new Plinko(300,240,10);
  p38=new Plinko(350,240,10);
  p39=new Plinko(400,240,10);
  p40=new Plinko(450,240,10);

}

function draw() {
  background(0);  
  Engine.update(engine);

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }


ground1.display();
divide1.display();
divide2.display();
divide3.display();
divide4.display();
divide5.display();
divide6.display();
divide7.display();
divide8.display();
divide9.display();
p1.display();
p2.display();
p3.display();
p4.display();
p5.display();
p6.display();
p7.display();
p8.display();
p9.display();
p10.display();
p11.display();
p12.display();
p13.display();
p14.display();
p15.display();
p16.display();
p17.display();
p18.display();
p19.display();
p20.display();
p21.display();
p22.display();
p23.display();
p24.display();
p25.display();
p26.display();
p27.display();
p28.display();
p29.display();
p30.display();
p31.display();
p32.display();
p33.display();
p34.display();
p35.display();
p36.display();
p37.display();
p38.display();
p39.display();
p40.display();

for(var j=0; j<particles.length; j++){

  particles[j].display();
}
}



  