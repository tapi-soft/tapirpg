/// <reference path="../main.d.ts"/>

class ServerCharacter {
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

    public setX(_x: number): void { this.x = _x; }
    public setY(_y: number): void { this.y = _y; }
    public setTargetX(_targetX: number): void { this.targetX = _targetX; }
    public setTargetY(_targetY: number): void { this.targetY = _targetY; }
    public setDire(_dire: number): void { this.dire = _dire; }

    public getX(): number { return this.x }
    public getY(): number { return this.y }
    public getTargetX(): number { return this.targetX; }
    public getTargetY(): number { return this.targetY; }
    public getDire(): number { return this.dire; }
}
