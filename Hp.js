/*게임에서의 체력을 정의한다*/

class HP{
    constructor(container){
        this.div=document.createElement("div");
        this.div.style.width=55 +"px";
        this.div.style.height=60+"px";
        this.div.style.background="lightgreen";
        this.div.style.float="left";
        container.appendChild(this.div);
    }

    setBg(bg){
        this.div.style.background=bg;
    }
}