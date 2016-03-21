/// <reference path="main.d.ts"/>

class EmitPlayerData extends EmitCharacterData {
    constructor() {
        super();
    }

    public setData(data: ServerPlayer): void {
        this.setX(data.getX());
        this.setY(data.getY());
        this.setTargetX(data.getTargetX());
        this.setTargetY(data.getTargetY());
        this.setDire(data.getDire());
    }
}
    
