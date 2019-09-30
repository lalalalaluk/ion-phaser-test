import { Planet1 } from './objects/planet1';
import { Planet2 } from './objects/planet2';
import { Planet3 } from './objects/planet3';
import { Planet4 } from './objects/planet4';
import { Planet5 } from './objects/planet5';
import { Planet6 } from './objects/planet6';
import { Planet7 } from './objects/planet7';
import { Planet8 } from './objects/planet8';


const getRandom = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export class GamingScene extends Phaser.Scene {

    bg1: Phaser.GameObjects.TileSprite;
    // space: Phaser.GameObjects.Image;

    space: any;

    planet1: any;
    planet2: any;
    planet3: any;
    planet4: any;
    planet5: any;
    planet6: any;
    planet7: any;
    planet8: any;

    cellWidth: number;
    cellHeight: number;
    gameStop = false;
    selectedSpace: string;
    cursors: any;
    TimeStep = 0;  // 遊戲時間
    timeText: Phaser.GameObjects.Text;
    monsterArr = [];   // 存放所有星球實體

    init(data) {
        // this.spaceString = data.charactor;
        this.selectedSpace = 'space8';
        this.gameStop = false;
        this.TimeStep = 0;
    }

    preload() {
        this.load.image('bg1', 'assets/background.png');
        this.load.image('space', 'assets/' + this.selectedSpace + '.png');
        this.load.image('planet1', 'assets/planet1.png');
        this.load.image('planet2', 'assets/planet2.png');
        this.load.image('planet3', 'assets/planet3.png');
        this.load.image('planet4', 'assets/planet4.png');
        this.load.image('planet5', 'assets/planet5.png');
        this.load.image('planet6', 'assets/planet6.png');
        this.load.image('planet7', 'assets/planet7.png');
        this.load.image('planet8', 'assets/planet8.png');
        this.load.image('gameover', 'assets/gameover.png');
        this.load.image('tryagain', 'assets/buttom6.png');
        this.load.image('back', 'assets/buttom4.png');



        this.cellWidth = this.cameras.main.width / 100;
        this.cellHeight = this.cameras.main.height / 100;
    }

    create() {
        this.cursors = this.input.keyboard.createCursorKeys();

        this.bg1 = this.add.tileSprite(this.cellWidth * 50, this.cellHeight * 50, this.cellWidth * 100, this.cellHeight * 100, 'bg1');

        this.space = this.physics.add.image(this.cameras.main.centerX + 50, this.cameras.main.centerY, 'space');
        this.space.setSize(this.space.width - this.cellWidth * 20 * 2, this.space.height - this.cellWidth * 10 * 2, 0, 0);
        this.space.body.offset.x = this.cellWidth * 20;
        this.space.body.offset.y = this.cellWidth * 10;
        this.space.setCollideWorldBounds(true);
        this.space.setBounce(0.5);

        this.space.setScale(0.15, 0.15);

        // 設定文字
        this.timeText = this.add.text(this.cellWidth * 5, this.cellHeight * 5, `TIME: ${this.TimeStep}`,
            { fontSize: '22px', fill: '#FFFFFF' })

        // 遊戲計時器
        const gametime = setInterval(() => {
            this.TimeStep++;
            // 重新設定文字
            this.timeText.setText(`TIME: ${this.TimeStep}`);
        }, 1000);

        // 碰撞到後停止遊戲
        const hittest = (player, planet) => {
            this.gameStop = true;
            this.space.setVelocity(0);
            this.space.body.moves = false;
            planet.body.moves = false;
            clearInterval(gametime);
            this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, 'gameover');

            this.add.text(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                'Score : ' + this.TimeStep,
                {
                    font: '40px Arial',
                    fill: '#ffffff'
                }
            );
            const tryAgainBtn = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY + this.cellHeight * 10, 'tryagain');
            tryAgainBtn.setInteractive();
            tryAgainBtn.on('pointerdown', () => this.scene.restart({ charactor: this.selectedSpace }));

            const back = this.add.image(this.cameras.main.centerX - this.cellWidth * 10,
                this.cameras.main.centerY + this.cellHeight * 10, 'back');
            back.setInteractive();
            back.on('pointerdown', () => this.scene.start('ChooseScene'));
        };

        // 產生行星怪物
        for (let i = 0; i < 1; i++) {
            const BoolIdx = getRandom(2, 0);

            // this['space' + i] = this.physics.add.sprite(100, 100, 'planet1');
            // this['space' + i].body.moves = false;
            // this['space' + i].setCircle(this.cellH        this.body.setVelocity(100, 100);eight * 12);


            // this.monsterArr.push(this['space' + i]);
            // this.physics.add.collider(this.space, this['space' + i], hittest);
            // this.physics.add.existing(this['space' + i]);


            // tt.setBody({
            //     type: 'circle',
            //     radius: 48
            // });
            // tt.setAngularVelocity(0.01);
            // tt.setBounce(1);
            // tt.setFriction(0, 0);
        }

        const planet1 = new Planet2({ scene: this, x: 500, y: 500 });
        // planet1.body.setVelocity(100, -100);


        this.physics.add.collider(this.space, planet1, hittest);


    }

    update() {
        if (this.gameStop) {
            return;
        }

        this.bg1.tilePositionX += 1;

        // this.space.setVelocity(0);

        if (this.cursors.left.isDown) {
            this.space.setVelocityX(-300);
            this.space.flipX = false;

        } else if (this.cursors.right.isDown) {
            this.space.setVelocityX(300);
            this.space.flipX = true;

        }

        if (this.cursors.up.isDown) {
            this.space.setVelocityY(-300);
        } else if (this.cursors.down.isDown) {
            this.space.setVelocityY(300);
        }
    }


}
