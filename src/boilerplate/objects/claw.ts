export class Claw extends  Phaser.GameObjects.Image {
    private incrementAngleBy: number;

    constructor(params) {
      super(params.scene, params.x, params.y, params.key, params.frame);
  
      this.initImage();
      this.scene.add.existing(this);
    }
  
    private initImage(): void {
      this.scaleX = .1; //110px  55
      this.scaleY = .1; //266px  113
      this.angle= 0; 
      this.incrementAngleBy = 1;
      this.setOrigin(.5, 0);
    }

    extend(): void {

    }
  
    update(): void {
      //limits -90 to 90
      const LEFT_BOUND = 90;
      const RIGHT_BOUND = -90;
      
      if(LEFT_BOUND <= this.angle){
        this.incrementAngleBy=-1;
      } else if(RIGHT_BOUND >= this.angle){
        this.incrementAngleBy=1;
      }
      this.angle += this.incrementAngleBy;
    }
    
  }
