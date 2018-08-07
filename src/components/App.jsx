import React, { Component } from 'react';
import LessonLayout from './layout/LessonLayout'

class App extends Component {
  render() {
    return (
      <LessonLayout footer={<div id='textArea' style={{color:"#fff"}}></div>}/>
    );
  }
}

export default App;