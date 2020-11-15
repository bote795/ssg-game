export class Claw extends Phaser.GameObjects.Image {
    private clawSpeed: number;
  
    constructor(params) {
      super(params.scene, params.x, params.y, params.key);
  
      this.rotation = params.rotation;
      this.initImage();
      this.scene.add.existing(this);
    }
  
    private initImage(): void {
     
    }

    extend(): void {

    }
  
    update(): void {}
  }
  