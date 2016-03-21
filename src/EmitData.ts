/// <reference path="./main.d.ts" />

class EmitData {
    private emitPlayerData = [];

    constructor() {
        for (var i = 0; i < 100; i++) {
            this.emitPlayerData[i] = new EmitPlayerData();
        }
    }
}
