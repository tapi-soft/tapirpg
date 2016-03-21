/// <reference path="./typings/main.d.ts" />

class MainDraw {
    private imageMap;

    constructor() {
        this.imageMap = new Image();
        this.imageMap.src = "image/map/map1.png";
    }

    private draw(context: any): void {
        for (var y = 0; y < 20;  y++) {
            for (var x = 0; x < 20; x++) {
                context.drawImage(
                    this.imageMap,
                    x * this.imageMap.width,
                    y * this.imageMap.height);
            }
        }
    }
}
