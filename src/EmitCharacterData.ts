/// <reference path="main.d.ts"/>

class EmitCharacterData {
    private x: number;
    private y: number;
    private targetX: number;
    private targetY: number;
    private dire: number;

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
    
    public setX(_x: number) { this.x = _x; }
    public setY(_y: number) { this.y = _y; }
    public setTargetX(_targetX: number) { this.targetX = _targetX; }
    public setTargetY(_targetY: number) { this.targetY = _targetY; }
    public setDire(_dire: number) { this.dire = _dire; }

    public getX(): number { return this.x; }
    public getY(): number { return this.y; }
    public getTargetX(): number { return this.targetX; }
    public getTargetY(): number { return this.targetY; }
    public getDire(): number { return this.dire; }
}
