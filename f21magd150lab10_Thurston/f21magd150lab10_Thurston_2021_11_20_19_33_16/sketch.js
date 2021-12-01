let bridge;
let flower;
let rainbow;
let data;
let url='https://docs.google.com/spreadsheets/d/1hyHZpPuXQ0v53He40KDXxAT7Bilh0WF-mmYHxKUcfwQ/edit#gid=0'

function preload(){
  bridge=loadImage('rockfordbridge.jpg');
  rainbow=loadImage('rockfordmural1.jpg');
  flower=loadImage('rockfordmural2.jpg');
  data=loadTable('tornadoes.csv','csv','header');
  
}
function setup() {
  createCanvas(750, 500,WEBGL);

}

function draw() {
  background(0);
 
  let dirX = (mouseX / width - 0.5) * 2;
  let dirY = (mouseY / height - 0.5) * 2;
  directionalLight(255, 255, 255, -dirX, -dirY, -1);
 
   let cam=map(mouseX, 0,width, -100,300);
 camera(cam, 0, (height/2.0) / tan(PI*30.0 / 180.0), 0, 0, 0, 0, 1, 0);

  push();
   translate(-80, -130, 0);
  rotateZ(frameCount * 0.01);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  noStroke();
  texture(bridge);
  box(100, 80, 80);
  pop();
  
  push();
  translate(-250, -20, 0);
  rotateY(frameCount * 0.02);
  noStroke();
  texture(flower);
  sphere(40);
  pop();
  
  push();
   let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(250, 250, 250, locX, locY, 150);
  translate(150,-20,0);
  rotateX(frameCount * 0.02);
  noStroke();
  texture(rainbow);
  plane(100);
  pop();
  
  
  
  if (data){
   let numRows=data.getRowCount();
    let torn=data.getColumn('Number of Tornadoes');
    //print(torn);
    for(let t=0; t< numRows; t++){
      let x=-350;
      let y=50+(t*15);
      let w=torn[t];
      let h=10;
      
      fill('#F00E16');
      noStroke();
      rect(x,y,w,h);
      
    }     
  }
}