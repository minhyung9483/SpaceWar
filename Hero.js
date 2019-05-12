class Hero extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);

        this.sensorArray = [];
        this.leftSensor = new Sensor("SENSOR", container, getSensorSize("LEFT", x, y, width, height), 0, 0, "none", "");
        this.rightSensor = new Sensor("SENSOR", container, getSensorSize("RIGHT", x, y, width, height), 0, 0, "none", "");
        this.upSensor = new Sensor("SENSOR", container, getSensorSize("UP", x, y, width, height), 0, 0, "none", "");
        this.downSensor = new Sensor("SENSOR", container, getSensorSize("DOWN", x, y, width, height), 0, 0, "none", "");

        this.sensorArray.push(this.leftSensor);
        this.sensorArray.push(this.rightSensor);
        this.sensorArray.push(this.upSensor);
        this.sensorArray.push(this.downSensor);
    }

    tick() {

        //this.x값을 증가시켜나가다가 적군과 충돌했으면 제거
        //총알인 나와 적군은 일대다 관계이다 따라서 반복문
        var hitCount = [0, 0, 0, 0]; //몇번째 센서가 충돌되었는지 그 정보를 알 수 있는 변수


        /*블럭과의 충돌체크*/
        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "WALL") {
                //우리가 만든 4면의 센서들과 충돌하는지
                for (var a = 0; a < this.sensorArray.length; a++) {
                    var s = this.sensorArray[a];
                    if (hitTest(obj, s, this.velX, this.velY)) {
                        hitCount[a]++;
                        console.log(hitCount, "충돌");
                    }
                }
            }
        }

        if (hitCount[0] > 0 && key == 37) {//좌측이 닿으면
            this.velX = 0;
        }
        if (hitCount[1] > 0 && key == 39) {//우측이 닿으면
            this.velX = 0;
        }
        if (hitCount[2] > 0 && key == 38) {//상단이 닿으면 
            this.velY = 0;
        }
        if (hitCount[3] > 0 && key == 40) {//하단이 닿으면
            this.velY = 0;
        }

        for (var i = 0; i < this.sensorArray.length; i++) {
            var s = this.sensorArray[i];
            s.tick(s.x + this.velX, s.y + this.velY);
            s.render();
        }

        this.x = this.x + this.velX;
        this.y = this.y + this.velY;

        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "ENEMY") {
                if (collisionCheck(this, obj)) {
                    // objectManager.removeObject(this);
                    //obj.img.src = "./explode.png";
                    objectManager.removeObject(obj);

                    hpArray[hpcount].setBg("none");
                    hpcount--;
                    score-=10;

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
                    if (hpcount < 0) {
                        objectManager.removeObject(this);
                        gameOver();

                    }
                }


            }
            if (obj.type == "ENEMYBULLET") {
                if (collisionCheck(obj, this)) {
                    //  objectManager.removeObject(this);
                    objectManager.removeObject(obj);

                    hpArray[hpcount].setBg("none");
                    hpcount--;
                    score-=10;

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
                    if (hpcount < 0) {
                        objectManager.removeObject(this);
                        gameOver();

                    }

                }
            }
            if (obj.type == "BITEM") {
                if (collisionCheck(obj, this)) {
                    objectManager.removeObject(obj);
                    eatItem = true;
                }
            }
            if (obj.type == "HPITEM") {
                if (collisionCheck(obj, this)) {
                    objectManager.removeObject(obj);
                    hpcount = 3;
                    for (var i = 0; i < hpArray.length; i++) {
                        hpArray[i].setBg("lightgreen");
                    }
                }
            }
        }
        showScore();

    }

}