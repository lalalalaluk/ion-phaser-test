export class StartScene extends Phaser.Scene {
    helloWorld: Phaser.GameObjects.Text;
    bg1: Phaser.GameObjects.TileSprite;
    planet1: Phaser.GameObjects.Sprite;
    planet2: Phaser.GameObjects.Sprite;
    planet3: Phaser.GameObjects.Sprite;
    planet4: Phaser.GameObjects.Sprite;
    planet6: Phaser.GameObjects.Sprite;
    planet5: Phaser.GameObjects.Sprite;
    planet7: Phaser.GameObjects.Sprite;
    planet8: Phaser.GameObjects.Sprite;
    button: Phaser.GameObjects.Sprite;

    luckyPlanet: Phaser.GameObjects.Image;
    cellWidth: number;
    cellHeight: number;


    preload() {
        this.load.image('bg1', 'assets/background.png');
        this.load.image('luckyPlanet', 'assets/Lucky Planet.png');

        this.load.image('planet1', 'assets/planet1.png');
        this.load.image('planet2', 'assets/planet2.png');
        this.load.image('planet3', 'assets/planet3.png');
        this.load.image('planet4', 'assets/planet4.png');
        this.load.image('planet8', 'assets/planet8.png');
        this.load.image('planet6', 'assets/planet6.png');
        this.load.image('planet5', 'assets/planet5.png');
        this.load.image('planet7', 'assets/planet7.png');

        this.load.image('buttom', 'assets/buttom.png');


        this.cellWidth = this.cameras.main.width / 100;
        this.cellHeight = this.cameras.main.height / 100;
    }

    create() {

        this.bg1 = this.add.tileSprite(this.cellWidth * 50, this.cellHeight * 50, this.cellWidth * 100, this.cellHeight * 100, 'bg1');
        this.luckyPlanet = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY - this.cellHeight * 10, 'luckyPlanet');

        this.planet1 = this.add.sprite(this.cellWidth * 28, this.cellHeight * 10, 'planet1');
        this.planet1.setScale(0.4, 0.4);

        this.planet2 = this.add.sprite(this.cellWidth * 99, this.cellHeight * 30, 'planet2');
        this.planet2.setScale(0.5, 0.5);
        this.planet2.rotation = 0.1;


        this.planet4 = this.add.sprite(this.cellWidth * 10, this.cellHeight * 50, 'planet4');
        this.planet4.setScale(0.3, 0.3);

        this.planet8 = this.add.sprite(this.cellWidth * 1, this.cellHeight * 90, 'planet8');
        this.planet8.setScale(0.6, 0.6);
        this.planet8.rotation = -10;

        this.planet6 = this.add.sprite(this.cellWidth * 40, this.cellHeight * 80, 'planet6');
        this.planet6.setScale(0.5, 0.5);
        this.planet6.rotation = -15;

        this.planet7 = this.add.sprite(this.cellWidth * 80, this.cellHeight * 95, 'planet7');
        this.planet7.setScale(1.5, 1.5);

        this.planet5 = this.add.sprite(this.cellWidth * 90, this.cellHeight * 60, 'planet5');
        this.planet5.setScale(0.5, 0.5);

        this.planet3 = this.add.sprite(this.cellWidth * 80, this.cellHeight * 1, 'planet3');
        this.planet3.setScale(0.5, 0.5);
        this.planet3.rotation = -0.3;


        this.button = this.add.sprite(this.cameras.main.centerX + this.cellWidth * 20,
            this.cameras.main.centerY + this.cellHeight * 10, 'buttom').setInteractive();

        this.button.on('pointerup', () => {
            this.scene.start('ChooseScene');

        });

        //   this.input.keyboard.on('keyup_C', function () {
        //     this.scene.start(
        //       this.scene.key === SCENES.FIRST ?
        //         SCENES.SECOND : SCENES.FIRST
        //     );
        //   }, this);
    }

    update() {
        this.bg1.tilePositionX += 1;

    }


}
