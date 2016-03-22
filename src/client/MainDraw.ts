/// <reference path="./main.d.ts" />

class MainDraw {
    private imageMap;
    private imageChara = [];
    private imageMonster = [];
    private myself: ClientMyself;
    private player: ClientPlayerList;
    private monster: ClientMonsterList;

    constructor(public _myself: ClientMyself, public _player: ClientPlayerList, public _monster: ClientMonsterList) {
        this.myself = _myself;
        this.player = _player;
        this.monster = _monster;
        this.imageMap = new Image();
        this.imageMap.src = "image/map/map1.png";
        for (var n = 0; n < 8; n++) {
            this.imageChara[n] = new Image();
            this.imageChara[n].src = "image/chara/chara1_" + n + ".png";
        }
        for (var n = 0; n < 8; n++) {
            this.imageMonster[n] = new Image();
            this.imageMonster[n].src = "image/monster/monster1_" + n + ".png";
        }
    }

    private draw(context: any): void {
        this.drawMap(context);
        this.drawMyself(context);
        this.drawPlayer(context);
        this.drawMonster(context);
    }

    private drawMap(context: any): void {
        for (var y = 0; y < 20;  y++) {
            for (var x = 0; x < 20; x++) {
                context.drawImage(
                    this.imageMap,
                    Math.floor(x * this.imageMap.width + this.getBasePosX()),
                    Math.floor(y * this.imageMap.height + this.getBasePosY())
                );
            }
        }
    }

    private drawMyself(context: any): void {
        context.drawImage(
            this.imageChara[this.myself.getDire()],
            Math.floor(this.getCenterPosX() - this.imageChara[0].width / 2),
            Math.floor(this.getCenterPosY() - this.imageChara[0].height / 2)
        );
    }

    private drawPlayer(context: any): void {
        for (var i = 0; i < 100; i++) {
            if (this.player.isConnect(i) == 0) { continue; }
            var playerData = this.player.getPlayerData(i);
            context.drawImage(
                this.imageChara[playerData.getDire()],
                Math.floor(this.getBasePosX() - this.imageChara[0].width / 2 + playerData.getX()),
                Math.floor(this.getBasePosY() - this.imageChara[0].height / 2 + playerData.getY())
            );
        }
    }

    private drawMonster(context: any): void {
        for (var i = 0; i < 100; i++) {
            if  (this.monster.isConnect(i) == 0) { continue; }
            var monsterData = this.monster.getMonster(i);
            context.drawImage(
                this.imageMonster[monsterData.getDire()],
                Math.floor(this.getBasePosX() - this.imageMonster[0].width / 2 + monsterData.getX()),
                Math.floor(this.getBasePosY() - this.imageMonster[0].height / 2 + monsterData.getY())
            );
        }
    }

    public getCenterPosX(): number { return 1024 / 2; }
    public getCenterPosY(): number { return 600 / 2; }
    public getBasePosX(): number { return this.getCenterPosX() - this.myself.getX(); }
    public getBasePosY(): number { return this.getCenterPosY() - this.myself.getY(); }
}
