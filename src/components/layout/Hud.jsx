import React, { Component } from 'react';
import classnames from 'classnames';
import styles from './hud.css';
import styled from 'styled-components'


class Hud extends Component {
  state = {
    objectives:'Move the ship through the asteroid field and reach the platform without crashing. Good luck cadet!',
    currentLevel:1,
    isLevelComplete:false,
    score:0,
    courseName:'Code Cadet',
    isLoading: false,
    currentChallange:2,
    isChallengeComplete:false

  }

  handleStartBtn = (e)=>{
    console.log(window.GameController.blocklyCode);
    eval(window.GameController.blocklyCode);
  }
  render() {
    return (
      
      <svg version ='1.1' id="Layer_1" 
        xmlnsXlink="http://www.w3.org/1999/xlink" 
        x="0px" y="0px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox ="0 0 604 754.52"
        height = "100%"
        width = "100%"
        preserveAspectRatio="none"
      >
        <filter id="sofGlow" height="300%" width="300%" x="-75%" y="-75%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blurred" />
          <feFlood floodColor="rgb(0,186,255)" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlow_colored" />
          <feMerge>
            <feMergeNode in="softGlow_colored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        
        <g className={classnames(styles.shape, styles.fillBackground, styles.blur)} filter="url(#sofGlow)">
          <polygon vectorEffect="non-scaling-stroke" points="2 2 262.42 2 282 22 452 22 472.85 2 581.44 2 601.97 22.52 602 92 582 112 442 112 422 112 402 92 292 92 272 72 152 72 132 52 2 52 2 2"/>
          <polygon id='objectivesPanel' vectorEffect="non-scaling-stroke" points="2,92 132,92 152,72 272,72 292,92 401.8,92 421.8,112 422,162 442,182 422,202 
	422,252 392.5,252 382.5,262 210,262 197.5,252 2,252 2,231.7 12,222 12,132 2,122 "/>
          <polygon vectorEffect="non-scaling-stroke"  points="2,252 49.7,252 197.5,252 210,262 382.5,262 392,252 582,252 602,272 602,382 582,402 
	582,672 602,692 601.8,731.7 581.8,751.7 451.4,751.7 431.3,732 152,732.2 131.6,752.5 2,752.5 2,721.9 11.9,711.9 11.9,632 
	2,621.9 "/>
        </g>

        <g  className={styles.button} filter="url(#sofGlow)" >
          <polygon  vectorEffect="non-scaling-stroke" className={classnames(styles.shape)} points="142 12 252 12 272 32 272 62 162 62 142 42 142 12"/>
          <text transform="translate(155 44)" className={classnames(styles.fontRobot, styles.fontBig)}>Level {this.state.currentLevel}</text>
        </g>

        <g className={styles.button} filter="url(#sofGlow)" onClick={this.handleStartBtn}>
          <polygon vectorEffect="non-scaling-stroke" className={classnames(styles.shape)} points="463.82 692 570.18 692 582 702 582 722 570.18 732 463.82 732 452 722 452 702 463.82 692"/>
          <text transform="translate(470 720)" className={classnames(styles.fontRobot, styles.fontBig)}>START</text>
        </g>

        <g className={styles.button} filter="url(#sofGlow)">
          <polygon vectorEffect="non-scaling-stroke" className={classnames(styles.shape)} points="437 127 582 127 602 147 602 177 457 177 437 157 437 127"/>
          <text transform="matrix(1 0 0 1 470 159)" className={classnames(styles.fontRobot, styles.fontBig)}>Restart</text>
        </g>
        
        <g className={styles.button} filter="url(#sofGlow)" >
          <polygon vectorEffect="non-scaling-stroke" className={classnames(styles.shape)} points="602 187 457 187 437 207 437 237 582 237 602 217 602 187"/>
          <text transform="matrix(1 0 0 1 487 217)" className={classnames(styles.fontRobot, styles.fontBig)}>Next</text>
        </g>

        <foreignObject  
          transform = "translate(50 120)" 
          width="350px" 
          height="100px"
        >
          <p style={{color:"#00cef4", fontSize:"18px", fontFamily:"Classic Robot Condensed", fontStyle:"italic"}}>{this.state.objectives}</p>
        </foreignObject>

        
        
        <g className = {classnames(styles.fontRobot, styles.mainFill)}>
        <text transform="matrix(1 0 0 1 471 30)" className={styles.fontBig}>SCORE</text>
        <text transform="matrix(1 0 0 1 154 93)" className={styles.fontMedium}>Objectives</text>
        <text transform="matrix(1 0 0 1 490 65)" className={styles.fontHuge}>{this.state.score}</text>
        <text transform="matrix(1 0 0 1 437 88)" className={styles.fontMedium}>Lines of code</text>
        <text transform="matrix(1 0 0 1 7 32)" className={styles.fontMedium}>{this.state.courseName}</text>
        </g>
  </svg>
  

    );
  }
}

export default Hud;