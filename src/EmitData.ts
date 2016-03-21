/// <reference path="./main.d.ts" />

class EmitData {
    private playerNum: number;
    private emitPlayerData = [];

    constructor() {
        this.playerNum = 0;
    }

    public addPlayerData(data: EmitPlayerData) {
        this.emitPlayerData[this.playerNum] = data;
        this.playerNum++;
    }

    public getEmitPlayerData(n: number): EmitPlayerData {
        return this.emitPlayerData[n];
    }
}
