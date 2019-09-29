import { Component } from '@angular/core';
import * as Phaser from 'phaser';
import { BootScene } from './scenes/BootScene';


interface GameInstance extends Phaser.Types.Core.GameConfig {
  instance: Phaser.Game;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lucky-planet';
  initialize = false;
  game: GameInstance = {
    width: '100',
    height: '100%',
    type: Phaser.AUTO,
    scene: BootScene,
    instance: null
  }

  getInstance() {
    return this.game.instance;
  }

  initializeGame() {
    this.initialize = true;
  }

}


