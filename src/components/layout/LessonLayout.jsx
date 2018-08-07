import React, { Component } from 'react';
import styled from 'styled-components';

const Page = styled.div`
  height:100%;
  display:grid;
  grid-template-columns: 1fr 1fr;
  /*grid-template-areas: 
    "header header" 
    "blocks stage" 
    "footer footer";*/
  grid-template-rows:1fr 5fr 1fr;
  
`
const Header = styled.div`
  grid-column:1/2;
  /*background:rgba(194,0,196,0.5);*/
`
const Blocks = styled.div`
  grid-column:1;
  /*grid-area:blocks;*/
  background:rgba(0,0,0,0.5);
`

const Stage = styled.div`
  grid-column:2;
  /*grid-area:stage;*/
  /*background:rgba(182,90,0,0.5);*/
`
const Footer = styled.div`
  grid-column:1/2;
  /*grid-area:footer;*/
  /*background:rgba(182,90,0,0.5);*/
`
class LessonLayout extends Component {
  render() {
    return (
      <Page>
        <Header>
          {this.props.header }
        </Header>
        <Blocks id='blockly'>
          {this.props.blocks }
        </Blocks>
        <Stage>
          {this.props.stage}
        </Stage>
        <Footer>
          {this.props.footer }
        </Footer>
      </Page>
    );
  }
}

export default LessonLayout;