/*게임에서의 체력을 정의한다*/

class BossHP{
    constructor(container,width){
        this.width=width;
        this.div=document.createElement("div");
        this.div.style.width=this.width/30 +"px";
        this.div.style.height=10+"px";
        this.div.style.background="red";
        this.div.style.float="left";
        container.appendChild(this.div);
    }

    setBg(bg){
        this.div.style.background=bg;
    }
}