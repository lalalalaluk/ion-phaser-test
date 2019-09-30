export class Planet2 extends Phaser.GameObjects.Sprite {
    cellWidth: number;
    cellHeight: number;


    constructor(config) {
        super(config.scene, config.x, config.y, 'planet2');

        config.scene.physics.world.enable(this);
        config.scene.add.existing(this);

        this.body.allowGravity = false;

        this.cellWidth = config.scene.cameras.main.width / 100;

        this.body.moves = true;
        this.body.offset.x = this.cellWidth * 2;
        this.body.setSize(this.cellWidth * 8, this.cellWidth * 8, 0, 0);
        this.body.isCircle = true;


    }


}
