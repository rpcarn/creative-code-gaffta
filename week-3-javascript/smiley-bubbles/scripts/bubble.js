//bubble.js
function Bubble(tempx, tempy){
  this.x = tempx;
  this.y = tempy;

  this.speed = 3;
  this.wiggle = 0;
  this.angle = random(0,TWO_PI);
  this.spin = this.angle;

  this.display = function(){
    stroke(0);
//    noStroke();
    fill(255);
    push();
    translate(this.x+this.wiggle,this.y);
    rotate(this.spin);
    ellipse(0,0,20,20);

    stroke(0);
    fill(255);
//    fill(255);
    //shiny
    //arc(this.x+this.wiggle,this.y,10,10,0,HALF_PI);

    // smily face
    fill(0);
    ellipse(0-5,0-3,2,2,0,PI);
    ellipse(0+5,0-3,2,2,0,PI);
    fill(255);
    arc(0,0,10,10,.5,PI-.5);
    pop();
  }

  this.move = function(){
    this.y = this.y - this.speed;

  	// bubble wiggle
  	this.wiggle = sin(this.angle += QUARTER_PI/2)*2;
    this.spin += .1
  }

  this.offScreen = function(){
      if(this.y<-50){
        return true;
      } else{
        return false;
      }
  }

  this.popped = function(){
    var distance = dist(this.x, this.y, mouseX, mouseY);
    if(distance<20){
        return true;
    } else {
      return false;
    }
  }
}
