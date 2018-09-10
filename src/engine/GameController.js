import Player from "./Player";

import  '../../static/unity/TemplateData/UnityProgress'
import  '../../static/unity/Build/UnityLoader'

export default class Game {

  blocklyCode = '';
  constructor() {
    this.workspace = Blockly.inject('blockly', {
      toolbox: document.getElementById('toolbox')
    });
    
    this.gameInstance = UnityLoader.instantiate('gameContainer','../../unity/Build/Space-Shooter-KiberLab-build.json');
    this.player = new Player();
    window.GameController = this;
  }
}