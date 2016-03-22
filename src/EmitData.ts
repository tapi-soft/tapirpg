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

    public addPlayerData(data: EmitPlayerData) {
        this.emitPlayerData[this.playerNum] = data;
        this.playerNum++;
    }

    public addMonsterData(data: EmitMonsterData) {
        this.emitMonsterData[this.monsterNum] = data;
        this.monsterNum++;
    }
}
