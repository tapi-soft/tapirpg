/// <reference path="../main.d.ts"/>

class ServerMonster extends ServerCharacter {
    private kind: number;

    constructor() {
        super();
        this.kind = 0;
    }

    public setKind(_kind: number): void { this.kind = _kind; }

    public getKind(): number { return this.kind; }
}
