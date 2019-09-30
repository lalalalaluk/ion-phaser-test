export class Planet4 extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, 'planet4');

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.allowGravity = false;
        this.body.isCircle = true;

        this.body.moves = true;

  
    }



}
