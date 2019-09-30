export class ChooseScene extends Phaser.Scene {
    bg1: Phaser.GameObjects.TileSprite;
    space1: Phaser.GameObjects.Sprite;
    space2: Phaser.GameObjects.Sprite;
    space3: Phaser.GameObjects.Sprite;
    space4: Phaser.GameObjects.Sprite;
    space5: Phaser.GameObjects.Sprite;
    space6: Phaser.GameObjects.Sprite;
    space7: Phaser.GameObjects.Sprite;
    space8: Phaser.GameObjects.Sprite;

    buttom2: Phaser.GameObjects.Sprite;
    buttom3: Phaser.GameObjects.Sprite;
    spaceGroup: Phaser.GameObjects.Group;

    luckyPlanet: Phaser.GameObjects.Image;
    cellWidth: number;
    cellHeight: number;
    click = false;

    selectedSpace = 'space1';

    preload() {
        this.load.image('bg1', 'assets/background.png');
        this.load.image('space1', 'assets/space1.png');
        this.load.image('space2', 'assets/space2.png');
        this.load.image('space3', 'assets/space3.png');
        this.load.image('space4', 'assets/space4.png');
        this.load.image('space5', 'assets/space5.png');
        this.load.image('space6', 'assets/space6.png');
        this.load.image('space7', 'assets/space7.png');
        this.load.image('space8', 'assets/space8.png');

        this.load.image('buttom2', 'assets/buttom2.png');
        this.load.image('buttom3', 'assets/buttom3.png');



        this.cellWidth = this.cameras.main.width / 100;
        this.cellHeight = this.cameras.main.height / 100;
    }

    create() {
        this.luckyPlanet = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'luckyPlanet');
        this.bg1 = this.add.tileSprite(this.cellWidth * 50, this.cellHeight * 50, this.cellWidth * 100, this.cellHeight * 100, 'bg1');

        this.space1 = this.add.sprite(this.cameras.main.centerX - this.cellWidth * 30, this.cameras.main.centerY, 'space1');
        this.space1.setScale(0.2, 0.2);

        this.space2 = this.add.sprite(this.cameras.main.centerX, this.cameras.main.centerY, 'space2');
        this.space2.setScale(0.45, 0.45);

        this.space3 = this.add.sprite(this.cameras.main.centerX + this.cellWidth * 30, this.cameras.main.centerY, 'space3');
        this.space3.setScale(0.2, 0.2);

        this.space4 = this.add.sprite(this.cameras.main.centerX + this.cellWidth * 30 * 2, this.cameras.main.centerY, 'space4');
        this.space4.setScale(0.2, 0.2);

        this.space5 = this.add.sprite(this.cameras.main.centerX + this.cellWidth * 30 * 3, this.cameras.main.centerY, 'space5');
        this.space5.setScale(0.2, 0.2);

        this.space6 = this.add.sprite(this.cameras.main.centerX + this.cellWidth * 30 * 4, this.cameras.main.centerY, 'space6');
        this.space6.setScale(0.2, 0.2);

        this.space7 = this.add.sprite(this.cameras.main.centerX + this.cellWidth * 30 * 5, this.cameras.main.centerY, 'space7');
        this.space7.setScale(0.2, 0.2);

        this.space8 = this.add.sprite(this.cameras.main.centerX - this.cellWidth * 30 * 2, this.cameras.main.centerY, 'space8');
        this.space8.setScale(0.2, 0.2);

        this.buttom2 = this.add.sprite(this.cellWidth * 35, this.cellHeight * 90, 'buttom2').setInteractive();
        this.buttom2.setScale(0.9, 0.9);
        this.buttom2.on('pointerup', () => {
            this.scene.start('ExplainScene');

        });


        this.buttom3 = this.add.sprite(this.cellWidth * 65, this.cellHeight * 90, 'buttom3').setInteractive();
        this.buttom3.setScale(0.9, 0.9);
        this.buttom3.on('pointerup', () => {
            this.scene.start('GamingScene', { charactor: this.selectedSpace });

        });



        this.spaceGroup = this.add.group([this.space1, this.space2, this.space3, this.space4,
        this.space5, this.space6, this.space7, this.space8]);

        this.add.text(
            this.cellWidth * 10,
            this.cellHeight * 10,
            'Charactor',
            {
                font: '60px Arial',
                fill: '#ffffff',
            }
        );

        this.input.setHitArea(this.spaceGroup.getChildren()).on('gameobjectdown', function (pointer, gameObject) {

            console.log(gameObject.texture.key);
            if (gameObject.texture.key === 'buttom2') {
                return;

            } else if (gameObject.texture.key === 'buttom3') {
                return;
            }

            // 避免一個動畫沒跑完就跑下一個
            if (this.click === true) {
                return;
            }

            // 避免按到中間
            if (gameObject.x === this.cameras.main.centerX) {
                return;
            }
            this.selectedSpace = gameObject.texture.key;

            this.click = true;
            setTimeout(() => {
                if (this.spaceGroup.children) {
                    const gameObjects2 = this.spaceGroup.getChildren();
                    for (const one of gameObjects2) {
                        if (one.x === this.cameras.main.centerX + this.cellWidth * 30 * 6) {
                            one.x = this.cameras.main.centerX - this.cellWidth * 30 * 2;
                        } else if (one.x === this.cameras.main.centerX - this.cellWidth * 30 * 6) {
                            one.x = this.cameras.main.centerX + this.cellWidth * 30 * 2;
                        }
                    }
                    this.click = false;
                }
            }, 850);

            let moveX = 0;

            if (pointer.downX < this.cellWidth * 35) {
                moveX = +this.cellWidth * 30;
            } else if (pointer.downX > this.cellWidth * 55) {
                moveX = -this.cellWidth * 30;
            }

            const gameObjects = this.spaceGroup.getChildren();
            for (const one of gameObjects) {

                one.setScale(0.2, 0.2);

                this.tween = this.tweens.add({
                    targets: one,
                    x: one.x + moveX,
                    scaleX: 0.2,
                    scaleY: 0.2,
                    ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                    duration: 800,
                    repeat: 0,            // -1: infinity
                    yoyo: false,
                });
            }

            this.tween = this.tweens.add({
                targets: gameObject,
                scaleX: 0.45,
                scaleY: 0.45,
                ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
                duration: 800,
                repeat: 0,            // -1: infinity
                yoyo: false
            });

        }, this);
    }

    update() {
        this.bg1.tilePositionX += 1;

    }


}
