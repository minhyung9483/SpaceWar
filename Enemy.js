class Enemy extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
        this.countMove = 0;
        this.count = 0;
    }
/*
    tick() {

        if (this.count % 20 == 0) {

            if (this.countMove < 5) {
                // this.velX=-this.velX;
                this.x += this.velX;

            }
            else {
                this.x -= this.velX;
                if(this.countMove==9){this.countMove=-1;}
            }
            this.countMove++;
        }

        this.count++;
    }
    */
}