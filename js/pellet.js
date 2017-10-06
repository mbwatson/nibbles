function Pellet() {
	this.x = res * floor(random(width / res));
	this.y = res * floor(random(height / res));
	this.color = color(255,0,204);
}

Pellet.prototype.show = function() {
	this.show = function() {
		fill(this.color);
		rect(this.x, this.y, res, res);
	}
}