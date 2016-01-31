var img;
function preload(){
  img = loadImage("assets/cat.jpg");
}
function setup(){
  createCanvas(500,500,WEBGL);
  rads = 20;
}
function draw(){
  rads = rads+1;
  background(255);
  texture(img);
  rotateX(radians(rads));
    rotateZ(rads * 0.001);
    rotateX(rads * 0.001);
    rotateY(rads * 0.001);

  box(150);
}