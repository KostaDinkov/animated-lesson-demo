import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import './styles/main.scss';

ReactDom.render(<App/>,document.getElementById("app"));

//inject blockly
let workspace = Blockly.inject('blockly',
     {toolbox: document.getElementById('toolbox')});

function myUpdateFunction(event) {
  var code = Blockly.JavaScript.workspaceToCode(workspace);
  document.getElementById('textArea').innerHTML = code;
}
workspace.addChangeListener(myUpdateFunction);

