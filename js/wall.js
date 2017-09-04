function Block(x, y) {
	this.x = x;
	this.y = y;
	this.color = color(255,204,0);

	this.show = function() {
		fill(this.color);
		rect(this.x, this.y, res, res);
	}
}