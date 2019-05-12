class EnemyBullet extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
        this.flagX = true;
    }
    //오버라이드!!
    //화면 밖으로 나가는 상황에 대한 판단은 부모 클래스의 tick()에 없다
    //따라서 현재 내 현실에 적용할 수 없으므로
    //부모의 메서드를 나한테 맞게 커스터마이징 해야한다 = 오버라이딩


    move() {
        if (this.flagX) {//flagX가 참인동안
            this.x += this.velX;
        }
        else {
            this.x -= this.velX;
        }
        if (this.x >= 840 || this.x <= 0) { this.flagX = !this.flagX; }
        this.div.style.left = this.x + "px";

    }

    tick() {
        if (this.flagX) {//flagX가 참인동안
            this.x += this.velX;
        }
        else {
            this.x -= this.velX;
        }
        this.y += this.velY;


        //this.x = this.x + (this.targetX-this.x)/this.velX;
        //this.y = this.y + (this.targetY-this.y)/this.velY;
        //this.x값을 증가시켜나가다가 적군과 충돌했으면 제거
        //총알인 나와 적군은 일대다 관계이다 따라서 반복문
/*
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "HERO") {
                if (collisionCheck(obj, this)) {
                    objectManager.removeObject(this);
                    objectManager.removeObject(obj);

                    hpArray[hpcount].setBg("none");
                    hpcount--;

                    if (hpcount == 2) {
                        for (var i = hpcount; i >= 0; i--) {
                            hpArray[i].setBg("orange");
                        }
                    }
                    if (hpcount == 1) {
                        for (var i = hpcount; i >= 0; i--) {
                            hpArray[i].setBg("yellow");
                        }
                    }
                    if (hpcount == 0) {
                        for (var i = hpcount; i >= 0; i--) {
                            hpArray[i].setBg("red");
                        }
                    }

                }
            }
        }*/
        if (this.x >= 840 || this.x <= 0) { this.flagX = !this.flagX; }



        //적군을 무사히 피한경우 화면밖으로 나가면 제거
        if (this.y > 800 || this.y < 0) {
            objectManager.removeObject(this);

        }

    }


}