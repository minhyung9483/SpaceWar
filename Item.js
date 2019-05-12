class Item extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
        this.flagX = true;
        this.flagY = true;
    }

    tick(){
        if (this.flagX) {//flagX가 참인동안
			this.x += this.velX;
		}
		else {
			this.x -=this.velX;
		}
		if (this.flagY) {//flagX가 참인동안
			this.y += this.velY;
		}
		else {
			this.y -= this.velY;
		}
		if (this.x >= 800 || this.x <= 0) { this.flagX = !this.flagX; }
		if (this.y >= 760 || this.y <= 0) { this.flagY = !this.flagY; }
		
    }
}