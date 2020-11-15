/**
 * @author       Digitsensitive <digit.sensitivee@gmail.com>
 * @copyright    2018 - 2019 digitsensitive
 * @license      {@link https://github.com/digitsensitive/phaser3-typescript/blob/master/LICENSE.md | MIT License}
 */


import { Claw } from "../objects/claw";

export class MainScene extends Phaser.Scene {
  private phaserSprite: Phaser.GameObjects.Sprite;
  private claw: Claw;

  constructor() {
    super({
      key: "MainScene"
    });
  }

  preload(): void {
    // this.load.image("myImage", "../assets/phaser.png");
  }

  create(): void {
    // this.phaserSprite = this.add.sprite(400, 300, "myImage");
    this.claw = new Claw({ scene: this, opt: {} });

  }
}
