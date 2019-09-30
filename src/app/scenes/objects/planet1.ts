export class Planet1 extends Phaser.GameObjects.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, 'planet1');

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.allowGravity = false;
        this.body.isCircle = true;

        this.body.moves = true;

        //     this.body.setAngularVelocity(1);
        //     this.body.setFriction(0, 0, 0);
        //     this.body.setBounce(1);

        //     this.body.setAllowRotation(false);
    }


    // update() {
    //     this.body.rotation += 0.1;
    // }


}
