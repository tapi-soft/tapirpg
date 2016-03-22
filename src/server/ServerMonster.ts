/// <reference path="../main.d.ts"/>

class ServerMonster extends ServerCharacter {
    private kind: number;
    private moveFlame: number;

    constructor() {
        super();
        this.kind = 0;
        this.moveFlame = 100;
    }

    public update(): void {
        super.update();
        this.moveFlame--;
        if (this.moveFlame <= 0) {
            this.moveFlame = 200;
            var x = this.getTargetX() + Math.random() * 500 - 250;
            var y = this.getTargetY() + Math.random() * 500 - 250;
            if (x < 0) { x = 0; }
            if (y < 0) { y = 0; }
            this.setTargetX(x);
            this.setTargetY(y);
        }
    }

    public setKind(_kind: number): void { this.kind = _kind; }

    public getKind(): number { return this.kind; }
}
