
import { SCENES } from '../const';
import { StartScene } from './StartScene';
import { ChooseScene } from './ChooseScene';
import { GamingScene } from './GamingScene';
import { ExplainScene } from './ExplainScene';

export class BootScene extends Phaser.Scene {

    create() {
        this.scene.add(SCENES.STARTSCENE, StartScene, false);
        this.scene.add(SCENES.CHOOSESCENE, ChooseScene, false);
        this.scene.add(SCENES.EXPLAINSCENE, ExplainScene, false);
        this.scene.add(SCENES.GAMINGSCENE, GamingScene, false);

        // this.scene.start(SCENES.STARTSCENE);
        this.scene.start(SCENES.GAMINGSCENE);
    }
}
