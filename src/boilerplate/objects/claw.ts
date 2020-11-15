export class Claw extends Phaser.GameObjects.Graphics {
    private clawSpeed: number;
  
    constructor(params) {
        super(params.scene, params.opt);
  
      this.initImage();
      this.scene.add.existing(this);
    }
  
    private initImage(): void {
        this.lineStyle(4, 0x00ff00);
        this.strokeRect(32, 100, 50, 10);
    }

    extend(): void {

    }
  
    update(): void {}
  }
