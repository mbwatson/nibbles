function Snake() {
	this.color = color(100,100,255);
	this.head = createVector(
		res * floor(width / res) / 2,
		res * floor(height / res) / 2
	);
	this.dir = 1;
	this.dx = 1;
	this.dy = 0;
	this.tail = [];
	this.eats = -1;
	this.dead = false;
	
	this.update = function() {
		this.tail.unshift(createVector(this.head.x, this.head.y));
		this.tail.pop();
		this.head.x += this.dx * res;
		this.head.y += this.dy * res;
		this.head.x = constrain(this.head.x, 0, width - res);
		this.head.y = constrain(this.head.y, 0, height - res);
		if (this.hits(wall) >= 0) {
			console.log('A wall!');
			for (var i = 0; i < this.tail.length; i++) {
				wall.push(new Block(this.tail[i].x, this.tail[i].y));
			}
			this.tail = [];
		}
		if (this.hits(this.tail) >= 0) {
			console.log('My tail!');
			for (var i = 0; i < this.tail.length; i++) {
				wall.push(new Block(this.tail[i].x, this.tail[i].y));
			}
			this.tail = [];
		}
		if (this.eats() >= 0) {
			console.log('Mmmm...');
			s.grow();
			food[this.eats()] = new Pellet();
		}
	}

	this.show = function() {
		fill(this.color);
		rect(this.head.x, this.head.y, res, res);
		for (var i = 0; i < this.tail.length; i++) {
			rect(this.tail[i].x, this.tail[i].y, res, res);
		}
	}

	this.dir = function(x, y) {
		this.dx = x;
		this.dy = y;
	}

	this.grow = function() {
		this.tail.unshift(createVector(this.head.x,this.head.y));
	}

	this.hits = function(cells) {
		for (var i = 0; i < cells.length; i++) {
			if (cells[i].x === this.head.x && cells[i].y === this.head.y) {
				return i;
			}
		}
		return -1;
	}

	this.eats = function() {
		return this.hits(food);
		// for (var i = 0; i < food.length; i++) {
		// 	if (food[i].x === this.head.x && food[i].y === this.head.y) {
		// 		return i;
		// 	}
		// }
		// return -1;
	}
}
