/// <reference path="../main.d.ts"/>
//
class ClientEffectList {
    private effect = [];

    constructor() {
        for (var i = 0; i < 100; i++) {
            this.effect[i] = new ClientEffect();
        }
    }

    public update(): void {
        for (var i = 0; i < 100; i++) {
            this.effect[i].update();
        }
    }

    public create(x: number, y: number, kind: number, frame: number) {
        for (var i = 0; i < 100; i++) {
            if (this.effect[i].isExist() == false) {
                this.effect[i].create(x, y, kind, frame);
            }
        }
    }

    public getEffectData(n: number): ClientEffect {
        return this.effect[n];
    }
}
