import Player from "./Player";

import  '../../static/unity/TemplateData/UnityProgress'
import  '../../static/unity/Build/UnityLoader'

export default class Game {

  
  constructor() {
    this.workspace = Blockly.inject('blockly', {
      toolbox: document.getElementById('toolbox')
    });
    
    this.gameInstance = UnityLoader.instantiate('gameContainer','../../unity/Build/Space-Shooter-KiberLab-build.json');
    this.player = new Player(this.gameInstance);
    window.GameController = this;
  }

  blocklyCode = '';

  nextChallenge = () =>{
    console.log('starting next challenge');
    this.gameInstance.SendMessage('GameController','NextChallenge')
  }

  restartChallenge = ()=>{
    console.log('restarting challenge');
    this.gameInstance.SendMessage("GameController", "RestartChallenge");
  }

  startNthChallenge=(challengeNumber)=>{
    console.log(`Starting ${challengeNumber} challenge`)
    this.gameInstance.SendMessage("GameController","StartNthChallenge",challengeNumber)
  }


}