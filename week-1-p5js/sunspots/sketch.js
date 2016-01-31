function setup() {
  createCanvas(400,400);
  // createCanvas(windowWidth, windowHeight);
  noStroke(0);
  fill(0,0,0)
  x = 195;
  x_stat = 195;
  
  y = 195;
  y_stat = 195;

  x_max = 210;
  x_min = 180;
  limit = x_max;
  r=random(1,10)
  dirspeed=random(-.5,.5)
  dir=.5;
  r_max=10;
  speed=.5;
}

function draw() {
  if(x<=limit){
    x=x+dir;
    limit=x_stat+random(0,50);
  }else{
    x=x-dir;
    limit=x_stat+random(-50,0);
  }
  
  if(y<=limit){
    y=y+dir;
    limit=y_stat+random(0,50);
  }else{
    y=y-dir;
    limit=y_stat+random(-50,0);
  }
  
  
  background("#d9d934");

// center bottom
  fill("#aaaaaa")
  ellipse(200+random(-1, 1),350+random(-1, 1),50+random(-1, 1),40+random(-1, 1)).maxspeed = 3;

  fill("#333333")
  ellipse(200+random(-1, 1),350+random(-1, 1),25+random(-1, 1),20+random(-1, 1));
  
// center
  sizeadj2 = .80;
  fill("#aaaaaa")
//  ellipse(x,195+random(-1, 1),(50*sizeadj2)+random(-1, 1),(40*sizeadj2)+random(-1, 1));
  ellipse(x,y,(50*sizeadj2)+random(-1, 1),(40*sizeadj2)+random(-1, 1));

  fill("#333333")
  ellipse(195,195,(25*sizeadj2),(20*sizeadj2));
  
// top left
  sizeadj3 = .40;
  fill("#aaaaaa")
  ellipse(125+random(-1, 1),185+random(-1, 1),(50*sizeadj3)+random(-1, 1),(40*sizeadj3)+random(-1, 1));

  fill("#333333")
  ellipse(125,185,25*sizeadj3,20*sizeadj3);
}