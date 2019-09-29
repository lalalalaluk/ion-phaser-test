
import { SCENES } from '../const';
import { StartScene } from './StartScene';

export class BootScene extends Phaser.Scene {

    create() {
        this.scene.add(SCENES.STARTSCENE, StartScene, false);

        this.scene.run(SCENES.STARTSCENE);
    }
}
