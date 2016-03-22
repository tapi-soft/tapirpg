class ClientMyself extends ClientCharacter {
    constructor() {
        super();
    }

    public changeTarget(mousex: number, mousey: number): void {
        this.setTargetX(this.getX() + mousex - (1024 / 2));
        this.setTargetY(this.getY() + mousey - (600 / 2));
        this.setDire(this.calcDire());
    }
}
