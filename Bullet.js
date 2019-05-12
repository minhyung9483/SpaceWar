class Bullet extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);
    }

    tick() {
        this.x = this.x + this.velX;
        this.y = this.y + this.velY;
        //this.x값을 증가시켜나가다가 적군과 충돌했으면 제거
        //총알인 나와 적군은 일대다 관계이다 따라서 반복문

        for (var i = 0; i < objectManager.objectArray.length; i++) {
            var obj = objectManager.objectArray[i];
            if (obj.type == "ENEMY") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(obj);

                    objectManager.removeObject(this);

                    // for(var j=0;j<explode.length;j++){
                    //   obj.img.src="./"+explode[j]+".png";
                    //   }


                    leftEnemy--;
                    score += 10;
                    showScore();


                }
            }
            if (obj.type == "BOSS") {
                if (collisionCheck(this, obj)) {
                    objectManager.removeObject(this);

                    bosshpArray[bosshpcount].setBg("none");
                    bosshpcount--;

                    if (bosshpcount < 0) {

                        objectManager.removeObject(obj);
                        leftEnemy--;
                        score += 100;
                        showScore();
                        
                    }
                }
            }
        }

        //적군을 무사히 피한경우 화면밖으로 나가면 제거
        if (this.y < 0) {
            objectManager.removeObject(this);
        }

        if (leftEnemy <= 0) {
            gamePlay = false;
            var x = objectManager.objectArray.length;
            for (var i = 0; i < x; i++) {
                objectManager.removeObject(objectManager.objectArray[0]);
            }
            for (var a = 0; a < 4; a++) {

                hero.sensorArray.splice(0, 1);
            }
            alert("STAGE " + mystage + " CLEAR!!");
            nextStage();
        }
    }
}