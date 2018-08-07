import React, { Component } from 'react';
import * as Pixi from 'pixi.js';
import myImage from '../../static/assets/img/ship.png'

class Stage extends Component {
  
  pixiContainer = React.createRef();
  
  componentDidMount(){
    console.log(this.pixiContainer.current.offsetWidth);
    this.pixiApp = new Pixi.Application({
      width:this.pixiContainer.current.offsetWidth, 
      height: 600,
      antialias: true,
      transparent: true,
      resolution:1 
     })

     console.log(this.pixiContainer)
      this.pixiContainer.current.appendChild(this.pixiApp.view);
      //The setup function is a custom function that we created to add the sprites. We will this below
      this.setup();
    
  }
  

  setup = () => {
    
    Pixi.loader
      .add("avatar", myImage)
      .load(this.initialize);
  };
  initialize = () => {
    
    this.avatar = new Pixi.Sprite(Pixi.loader.resources["avatar"].texture);
    this.pixiApp.stage.addChild(this.avatar);

  };
 
  render() {
    return (
      <div ref={this.pixiContainer} />
    );
  }
}

export default Stage;