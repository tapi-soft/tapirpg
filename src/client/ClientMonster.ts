class ClientMonster extends ClientCharacter {
    private kind: number;

    constructor() {
        super();
    }

    public setKind(_kind: number): void { this.kind = _kind; }

    public getKind(): number { return this.kind; }
}
