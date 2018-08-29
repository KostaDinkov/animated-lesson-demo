import Player from "./Player";

export default class Game {

  constructor() {
    this.workspace = Blockly.inject('blockly', {
      toolbox: document.getElementById('toolbox')
    });
    
    this.gameInstance = null;
    
    this.player = new Player();
    window.GameController = this;

  }

  
}