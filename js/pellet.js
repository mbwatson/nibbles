function Pellet() {
	this.x = res * floor(random(width / res));
	this.y = res * floor(random(height / res));
	this.color = color(255,0,204);

	this.show = function() {
		fill(this.color);
		rect(this.x, this.y, res, res);
	}
}