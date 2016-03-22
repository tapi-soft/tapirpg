class ClientMonsterList {
    private monster = [];
    private isConnectFlag = [];

    constructor() {
        for (var i = 0; i < 100; i++) {
            this.monster[i] = new ClientMonster();
            this.isConnectFlag[i] = 0;
        }
    }

    public update(): void {
        for (var i = 0; i < 100; i++) {
            if (this.isConnect(i) == 0) { continue; }
            this.monster[i].update();
        }
    }

    public connect(n: number, data: any): void {
        this.isConnectFlag[n] = 1;
        this.monster[n].setData(data);
    }

    public disconnect(n: number): void {
        this.isConnectFlag[n] = 0;
    }
    
    public isConnect(n: number): number { return this.isConnectFlag[n]; }

    public getMonster(n: number): ClientMonster { return this.monster[n]; }
}
