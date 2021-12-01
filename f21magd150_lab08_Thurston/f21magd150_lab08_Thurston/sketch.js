let white;
let stars;
let p;
let v;
let loc=20;
var pdf;

function preload(){
  //the images and fonts are called from the sketch files
  white = loadImage('magd150movieimage.jpg'); 
  stars=loadImage('magd150movieimage3.png');
  p=loadFont('Playball-Regular.ttf');
  v=loadFont('Vidaloka-Regular.ttf');
  loadStrings("Plot.txt");
  
}
function setup() {
  createCanvas(400, 500,P2D);
  stars.filter(ERODE);
  tint('#E19DFA');  //There is a tint of purple laid over the images
 pdf = createPDF();
    pdf.beginRecord();
  }


function draw() {
  background(220);
  image(white,0,0,width,height);
  image(stars,0,0,width,350);
  
  push();
  textFont(v);
  fill(255);
  textSize(70);
  textAlign(CENTER); //the La La Land text is centered on the page
  text("La La Land",width/2,140);
  pop();
  
  push();
  textFont(p);
  fill(255);
  textSize(20);
  textAlign(LEFT);
  text("City of Stars...",loc, 180); //the "City of Stars" slides across the screen and returns back
  loc=loc+10;
  if(loc-40>width){
    loc=-40;
  }
  pop();
  }

function mouseIsPressed(){
  pdf.save();
}