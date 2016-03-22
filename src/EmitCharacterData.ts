/// <reference path="main.d.ts"/>

class EmitCharacterData {
    public x: number;
    public y: number;
    public targetX: number;
    public targetY: number;
    public dire: number;

    constructor() {
        this.init();
    }

    private init(): void {
        this.x = 0;
        this.y = 0;
        this.targetX = 0;
        this.targetY = 0;
        this.dire = 0;
    }
}
