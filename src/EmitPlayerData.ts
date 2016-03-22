/// <reference path="main.d.ts"/>

class EmitPlayerData extends EmitCharacterData {
    constructor() {
        super();
    }

    public setData(data: ServerPlayer): void {
        this.x = data.getX();
        this.y = data.getY();
        this.targetX = data.getTargetX();
        this.targetY = data.getTargetY();
        this.dire = data.getDire()
    }
}
    
