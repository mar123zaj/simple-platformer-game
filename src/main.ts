import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

new Phaser.Game({
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  render: { pixelArt: true },
  physics: { default: 'arcade', arcade: { debug: true, gravity: { y: 600 } } },
  scene: [MainScene],
});
