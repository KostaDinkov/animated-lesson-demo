import React, { Component } from 'react';

class Button extends Component {

  points = '142 12 252 12 272 32 272 62 162 62 142 42 142 12';
  render() {
    return (
      <g>
          
          <text transform="translate(151 44)" fill={this.props.textColor}>{this.props.text}</text>
          <polygon 
            onMouseOver={(evt)=>evt.target.setAttribute('fill-opacity', this.props.hoverOpacity)}
            vectorEffect="non-scaling-stroke" 
            fill={this.props.fill} 
            fillOpacity={this.props.fillOpacity}
            stroke={this.props.stroke} 
            strokeWidth={this.props.strokeWidth} 
            points={this.props.points}/>
      </g> 
    );
  }
}

export default Button;