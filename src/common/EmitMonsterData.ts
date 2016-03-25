/// <reference path="./main.d.ts"/>

class EmitMonsterData extends EmitCharacterData {
    public kind;

    constructor() {
        super();
    }

    public setData(data: ServerMonster): void {
        this.kind = data.getKind();
        this.x = data.getX();
        this.y = data.getY();
        this.targetX = data.getTargetX();
        this.targetY = data.getTargetY();
        this.dire = data.getDire();
    }
}
