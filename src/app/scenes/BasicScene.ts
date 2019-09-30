export class ChooseScene extends Phaser.Scene {
    helloWorld: Phaser.GameObjects.Text;
    bg1: Phaser.GameObjects.TileSprite;

    luckyPlanet: Phaser.GameObjects.Image;
    cellWidth: number;
    cellHeight: number;


    preload() {
        this.load.image('bg1', 'assets/background.png');
        this.load.image('luckyPlanet', 'assets/Lucky Planet.png');


        this.cellWidth = this.cameras.main.width / 100;
        this.cellHeight = this.cameras.main.height / 100;
    }

    create() {
        this.luckyPlanet = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY , 'luckyPlanet');
        this.bg1 = this.add.tileSprite(this.cellWidth * 50, this.cellHeight * 50, this.cellWidth * 100, this.cellHeight * 100, 'bg1');


        this.helloWorld = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Hello World', {
            font: '40px Arial',
            fill: '#ffffff'
        }
        );
        this.helloWorld.setOrigin(0.5);
    }

    update() {
        this.bg1.tilePositionX += 1;

    }


}
