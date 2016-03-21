/// <reference path="./typings/main.d.ts" />

class MainDraw {
    private imageMap;
    private imageChara = [];

    constructor() {
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
                    x * this.imageMap.width,
                    y * this.imageMap.height);
            }
        }
    }

    private drawMyself(context: any): void {
        context.drawImage(
            this.imageChara[0],
            1024 / 2 - this.imageChara[0].width / 2,
            600 / 2 - this.imageChara[0].height / 2);
    }
}
