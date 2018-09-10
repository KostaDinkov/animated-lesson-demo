import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Hud from './Hud';
import UnityGame from '../UnityGame'



const Page = styled.div`
  height:95vh;
`
const HudGameContainer = styled.div`
  height:100%;
  display:grid;
  grid-template-columns: 1fr 1fr ;
  grid-template-rows: 1fr 2fr;
   ;
`
const HudArea = styled.div`
  grid-column: 1;
  grid-row:1/3;
  
  /* background:rgba(194,0,196,0.5); */
`

const BlocklyContainer = styled.div`
  justify-self:center;
  align-self:center;
  height:90%;
  width:93%;
  grid-row: 2;
  grid-column:1;
  /* background:rgba(194,0,196,0.5); */
`

const GameArea = styled.div`
  grid-column:2;
  grid-row:1/3;
  /*grid-area:stage;*/
  /*background:rgba(182,90,0,0.5);*/
`



class LessonLayout extends Component {


  render() {
    return (
      <Page>
       
        <HudGameContainer>
          <HudArea>
            <Hud />
          </HudArea>

          <BlocklyContainer id='blockly'/>
          <GameArea>
            {/* <UnityGame/> */}
          </GameArea>
        </HudGameContainer>
      </Page>
    );
  }
}

export default LessonLayout;