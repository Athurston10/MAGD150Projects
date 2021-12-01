var c=70
var d=440
var e=130
var f=40

var g=350
var h=460
var i=60
var j=60


function setup() {
  createCanvas(500, 500);


x=25;
y=height/2;
}
function draw() {
  background(200);
  
  push();
  fill('#2E2723');
  noStroke();
rect(0,400,500,100)
  pop();
  
  push();
  fill('#71BD3E');
  noStroke();
  rect(c,d,e,f);
  pop();
  
  push();
  fill('#BD353F');
  noStroke();
  ellipse(g,h,i,j);
  pop();

   push();
  textSize(24);
  fill(255);
  a= "Play";
 text(a, 110,466);
  pop();
  
  push();
  textSize(20);
  fill(255);
  b="Stop";
  text(b,329,465);
  pop();
  
  if(mouseX>c && mouseX <c+e && mouseY>d && mouseY <d+f){
    print("hello"); 
    push();
  fill('#88F043');
  noStroke();
  rect(c,d,e,f);
  pop();
     }
  print(mouseIsPressed);
  if (mouseIsPressed){
if(mouseX>c && mouseX <c+e && mouseY>d && mouseY <d+f){
    push();
  fill(0);
  noStroke();
  rect(random(0,500),random(0,500),e,f);
  pop();
     }
  }
  
  if(mouseX>g && mouseX<g+i && mouseY>h && mouseY <h+j){
      push();
  fill('#C87479');
  noStroke();
  ellipse(g,h,i,j);
  pop();
    }
  
  print(mouseIsPressed);
  if(mouseIsPressed){
if(mouseX>g && mouseX<g+i && mouseY>h && mouseY <h+j){
      push();
  fill('#D44531');
  noStroke();
  ellipse(random(0,500),random(0,500),i,j);
  pop();
    }
  }
  push();
noStroke();
  fill('#000A5C');
   ellipse(x,y,60,60);
  x+=10;
  
  if(x-25>width){
    x=-25;
  }
  
}
  
  