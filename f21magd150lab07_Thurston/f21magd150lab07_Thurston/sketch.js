
let pumpkin1;
var words = ["Happy","Halloween"];
var index = 0;

function setup() {
  createCanvas(400, 400);
 pumpkin1=new pumpkin(); //One instance of the pumpkinis shown
 

}

function draw() {
  background('#172911');
 pumpkin1.move();
  pumpkin1.draw();  
  
  
  fill('#F56E00');
  textSize(32);
  //text(words[0],20,40);
  //text(words[1],230,380);
  if (keyIsPressed) { //When any key is pressed, the colors of the words will change.
    fill('#F56E00');
  } else {
    fill('#FFD301');
  }
   text(words[0],20,40); //the zero in the brackets refers to the "Happy" in the array
  text(words[1],230,380);
}



class pumpkin{
  constructor(){
    this.x=200;
    this.y=230;
    this.a=200;
    this.b=150;
  }
  move(){
    this.a = this.a += round(random(-1,1)); //
    this.b = this.b + round(random(-1,1));
  }
  
  draw(){
    noStroke();
  fill('#F56E00');
  ellipse(160,200,this.x,this.x); 
  ellipse(this.y,200,this.x,this.x); //the variables from the constructor are used for the ellipse values
    
    noStroke();
    fill('#FFD301');
    triangle(140,150,170,this.a,110,this.a);
    triangle(250,this.b,280,this.a,220,this.a);
  }
}



