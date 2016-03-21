class Myself {
    private x: number;
    private y: number;
    private targetX: number;
    private targetY: number;
    private dire: number;

    constructor() {
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.dire = 0;
    }

    public clickProcess(mousex: number, mousey: number): void {
        this.targetX = this.x + mousex - (1024 / 2 - 50 / 2);
        this.targetY = this.y + mousey - (600 / 2 - 100 / 2);
        this.dire = this.getDire();
    }

    public getDire(): number {
        var x1: number = this.x;
        var y1: number = this.y;
        var x2: number = this.targetX;
        var y2: number = this.y * 2 - this.targetY;
        var radian: number = Math.atan2(y2 - y1, x2 - x1);
        var degree: number = radian * 180 / Math.PI;
        degree += 180;
        if (degree > 22 && degree <= 67) { return 5; }
        if (degree > 67 && degree <= 112) { return 4; }
        if (degree > 112 && degree <= 157) { return 3; }
        if (degree > 157 && degree <= 202) { return 2; }
        if (degree > 202 && degree <= 247) { return 1; }
        if (degree > 247 && degree <= 292) { return 0; }
        if (degree > 292 && degree <= 337) { return 7; }
        if (degree > 337 || degree <= 22) { return 6; }
        return 0;
    }
}
