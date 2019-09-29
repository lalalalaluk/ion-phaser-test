export class StartScene extends Phaser.Scene {
    helloWorld: Phaser.GameObjects.Text;

    init() {
        this.cameras.main.setBackgroundColor('#24252A');
    }

    create() {
        this.helloWorld = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Hello World', {
            font: '40px Arial',
            fill: '#ffffff'
        }
        );
        this.helloWorld.setOrigin(0.5);

        //   this.input.keyboard.on('keyup_C', function () {
        //     this.scene.start(
        //       this.scene.key === SCENES.FIRST ?
        //         SCENES.SECOND : SCENES.FIRST
        //     );
        //   }, this);
    }

    update() {
        this.helloWorld.setX(100);
    }


}
