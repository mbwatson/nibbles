let s;
const res = 10;
let f;
let food = [];
let food_count = 3;
let wall = [];

function setup() {
	createCanvas(600, 600);
	s = new Snake();
	for (var i = 0; i < food_count; i++) {
		food.push(new Pellet());
	}
	frameRate(10);
}

function draw() {
	background(51);
	s.update();
	showWall();
	s.show();
	for (var i = 0; i < food_count; i++) {
		food[i].show();
	}
	showScore();
}

function keyPressed() {
	if (keyCode === UP_ARROW) 		{ s.dir(0,-1); }
	if (keyCode === DOWN_ARROW) 	{ s.dir(0,1); }
	if (keyCode === LEFT_ARROW) 	{ s.dir(-1,0); }
	if (keyCode === RIGHT_ARROW) 	{ s.dir(1,0); }
	
	if (key === ' ')							{ s.grow() };
}

function showScore() {
  fill(255);
  scoreString = "Score: " + s.tail.length;
  text(scoreString, 10, 20);
}

function showWall() {
	for (var i = 0; i < wall.length; i++) {
		wall[i].show();
	}
}