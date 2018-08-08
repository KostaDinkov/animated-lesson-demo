import React, { Component } from 'react';


class Unity extends Component {

  gameInstance = null;
  componentDidMount() {
    this.gameInstance = UnityLoader.instantiate("gameContainer", "./unity/Build/unity.json", { onProgress: UnityProgress });
  }

  handlePrint= (e)=>{
    this.gameInstance.SendMessage("Text","Print","HELLO HELLO HELLO");
  }
  render() {
    return (
      <div className="webgl-content">
        <div id="gameContainer" style={{ width: 800, height: 600 }}></div>
        <div className="footer">
          <div className="webgl-logo"></div>
          <div className="fullscreen"></div>
          <div className="title">TestProject</div>
        </div>
        <button onClick = {this.handlePrint}>Print</button>
      </div>
    );
  }
}

export default Unity;