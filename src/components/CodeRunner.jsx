import React, { Component } from 'react';

class CodeRunner extends Component {
  handleRunCode = (e)=>{

    let code = Blockly.JavaScript.workspaceToCode(window.GameController.workspace);
    
    eval(code);
  }
  render() {
    return (
      <div>
        <div id='textArea' style={{ color: "#fff" }}>
        </div>
        <button onClick={this.handleRunCode}>Run Code</button>
      </div>
    );
  }
}

export default CodeRunner;