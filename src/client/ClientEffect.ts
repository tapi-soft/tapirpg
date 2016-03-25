class ClientEffect {
    private exist: boolean;
    private x: number;
    private y: number;
    private kind: number;
    private nowImage: number;
    private maxImage: number;
    private nowFrame: number;
    private maxFrame: number;

    constructor() {
        this.exist = false;
    }
    
    public update(): void {
        if (this.exist == false) { return; }

        this.nowFrame++;
        if (this.nowFrame >= (this.nowImage + 1) * (this.maxFrame / this.maxImage)) {
            this.nowImage++;
        }
        if (this.nowImage > this.maxImage) {
            this.destruction();
        }
    }

    public create(_x: number, _y:number, _kind: number, _frame: number) {
        this.exist = true;
        this.x = _x;
        this.y = _y;
        this.kind = _kind;
        this.nowImage = 0;
        // this.maxImage = ; // データ呼び出して設定
        this.maxImage = 4;
        this.nowFrame = 0;
        this.maxFrame = _frame;
    }

    public destruction() {
        this.exist = false;
    }

    public isExist(): boolean {
        return this.exist;
    }

    public getX(): number { return this.x; }
    public getY(): number { return this.y; }
    public getImage(): number { return this.nowImage; }
}
