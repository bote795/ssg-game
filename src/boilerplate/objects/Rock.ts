/**
 * @author       WaxNick2020 
 * @copyright    2020
 * @description  Rock Object
 * @license      WaxNick2020
 */

export class Rock extends Phaser.GameObjects.Graphics 
{
    constructor(scene, params) 
    {
      super(scene, params);
      this.x = params.xPos;
      this.y = params.yPos;
      this.fillStyle(0x61e85b, 0.8);
      this.fillRect(params.fSize, params.fSize, params.fSize, params.fSize);
      this.scene.add.existing(this);
    }
  
    /**
     * Randomly generate new apple position on the field
     * @param _rndX [Random X Position]
     * @param _rndY [Random Y Position]
     */
    public newRockPosition(_rndX, _rndY): void 
    {
      this.x = _rndX;
      this.y = _rndY;
    }
}
  