import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './styles/main.scss';
import GameController from './engine/GameController';

ReactDom.render(<App/>,document.getElementById("app"));

window.GameController = new GameController();

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(window.GameController.workspace);
  window.GameController.blocklyCode = code;
}
window.GameController.workspace.addChangeListener(myUpdateFunction);


