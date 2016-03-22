/// <reference path="./main.d.ts" />

class EmitData {
    public playerNum: number;
    public emitPlayerData = [];

    constructor() {
        this.playerNum = 0;
    }

    public addPlayerData(data: EmitPlayerData) {
        this.emitPlayerData[this.playerNum] = data;
        this.playerNum++;
    }
}
