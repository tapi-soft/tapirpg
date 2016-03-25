/// <reference path="./main.d.ts" />

class EmitData {
    public playerNum: number;
    public monsterNum: number;
    public emitPlayerData = [];
    public emitMonsterData = [];

    constructor() {
        this.playerNum = 0;
        this.monsterNum = 0;
    }

    public setPlayerData(n: number, data: EmitPlayerData) {
        this.emitPlayerData[n] = data;
        this.playerNum++;
    }

    public setMonsterData(n: number, data: EmitMonsterData) {
        this.emitMonsterData[n] = data;
        this.monsterNum++;
    }
}
