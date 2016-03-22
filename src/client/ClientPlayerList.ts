/// <reference path="../main.d.ts"/>

class ClientPlayerList {
    private player = [];
    private isConnectFlag = [];

    constructor() {
        for (var i = 0; i < 100; i++) {
            this.player[i] = new ClientPlayer();
            this.isConnectFlag[i] = 0;
        }
    }

    public update(): void {
        for (var i = 0; i < 100; i++) {
            if (this.isConnectFlag[i] == 0) { continue; }
            this.player[i].update();
        }
    }

    public getPlayerData(n: number): ClientPlayer {
        return this.player[n];
    }

    public connect(n: number, data: any): void {
        this.isConnectFlag[n] = 1;
        this.player[n].setData(data);
    }

    public disconnect(n: number): void {
        this.isConnectFlag[n] = 0;
    }

    public isConnect(n: number): number {
        return this.isConnectFlag[n];
    }
}
