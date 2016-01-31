// var y;
// var speed = 3;
// var wiggle = 0;
// var angle = 0;

var numBubbles = 50;
var bubbles = [];

function setup(){
	//var canvas =
	createCanvas(windowWidth, windowHeight);
//	y = windowHeight;
	frameRate(30);

	for(var i = 0; i<numBubbles; i ++){
		bubbles.push(new Bubble(random(0,windowWidth), random(0,windowHeight)));
	}

}

function draw(){
	background(200,200,255);

	for(var i = 0; i< bubbles.length; i++){
		bubbles[i].display();
		bubbles[i].move();
	}

	for(var i = bubbles.length-1; i>=0; i--){
		var abubble = bubbles[i];
		if(abubble.offScreen() == true || abubble.popped()){
			bubbles.splice(i,1);
		}
	}

	if(bubbles.length<=numBubbles){
		bubbles.push(new Bubble(random(0,windowWidth), random(windowHeight+50,windowHeight)));
	}

	console.log(bubbles.length);
	// noStroke();
	// fill(255);
	// y = y - speed;
	// ellipse(windowWidth/2+wiggle,y,20,20);
	// // bubble wiggle
	// wiggle = sin(angle += QUARTER_PI/3)*2;
}

function windowResized(){
	resizeCanvas(windowWidth, windowHeight);
}
