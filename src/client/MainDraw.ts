/// <reference path="./main.d.ts" />

class MainDraw {
    private imageMap;
    private imageChara = [];
    private myself: ClientMyself;

    constructor(public _myself: ClientMyself) {
        this.myself = _myself;
        this.imageMap = new Image();
        this.imageMap.src = "image/map/map1.png";
        for (var n = 0; n < 8; n++) {
            this.imageChara[n] = new Image();
            this.imageChara[n].src = "image/chara/chara1_"+n+".png";
        }
    }

    private draw(context: any): void {
        this.drawMap(context);
        this.drawMyself(context);
    }

    private drawMap(context: any): void {
        for (var y = 0; y < 20;  y++) {
            for (var x = 0; x < 20; x++) {
                context.drawImage(
                    this.imageMap,
                    x * this.imageMap.width + this.getBasePosX(),
                    y * this.imageMap.height + this.getBasePosY());
            }
        }
    }

    private drawMyself(context: any): void {
        context.drawImage(
            this.imageChara[this.myself.getDire()],
            this.getCenterPosX() - this.imageChara[0].width / 2,
            this.getCenterPosY() - this.imageChara[0].height / 2);
    }

    public getCenterPosX(): number { return 1024 / 2; }
    public getCenterPosY(): number { return 600 / 2; }
    public getBasePosX(): number { return this.getCenterPosX() - this.myself.getX(); }
    public getBasePosY(): number { return this.getCenterPosY() - this.myself.getY(); }
}
