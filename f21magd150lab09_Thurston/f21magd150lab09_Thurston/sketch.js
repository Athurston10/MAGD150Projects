
let mySound;
let vid;
let osc;

function preload() {
  soundFormats('mp3');
 mySound = loadSound('dream.mp3'); //sound is loaded from the files to play
}

function setup() {
  createCanvas(400,800);
  button=createButton("play");
  button.mousePressed(togglePlaying);
 
  osc = new p5.Oscillator();
  osc.setType('sine');
  osc.freq(120);
  osc.start();
 
 
  
  vid = createVideo(['mirror.mp4']);
  vid.hide();
}

function draw() {
  background(100);
  image(vid, 0, 0,400,800);
  
  

}
function togglePlaying(){ //the sound will only play when the play button is pressed
  if (!mySound.isPlaying()){
    mySound.play();
    mySound.setVolume(0.1);
    button.html("pause"); //sound will pause and resume when the button is pressed
    
  }else {
    mySound.pause();
    button.html("play");
  }
}

function mousePressed() { //when the canvas is pressed, the video will begin playing on a loop
 vid.loop();}

