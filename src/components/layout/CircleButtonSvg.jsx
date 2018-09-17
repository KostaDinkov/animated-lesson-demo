import React, { Component } from 'react';
import styled from 'styled-components';

const Circle = styled.circle`
  fill: ${props => props.active ? '#00cef4': "#333"};
  fill-opacity:0.4;
  stroke: ${props => props.active ? (props.current?"#b7e528":"#00cef4"):"#666"};

  stroke-width:1px;
  cursor:pointer;
  &:hover{
    fill-opacity:0.8;
  }
`


class CircleButtonSvg extends Component {

  handleOnclick = ()=>{
    if(this.props.active){
      console.log(`load challange ${this.props.index}`);
      window.GameController.startNthChallenge(this.props.index);
      this.props.updateCurrentChallenge(this.props.index);
    }
    
  }
  render() {
    
      return (
        <Circle 
          active = {this.props.active}
          current = {this.props.current}
          className = {this.props.className} 
          cx={this.props.x} 
          cy={this.props.y} 
          r="10"
          onClick={this.handleOnclick} 
        />
      );
    
    
  }
}





export default CircleButtonSvg;