import React, { Component } from 'react'; 
import LessonLayout from './layout/LessonLayout' 
import Stage from './Stage'

class App extends Component {
  render() {
    return (
      <LessonLayout
        stage={<Stage/>}
        footer={<div id='textArea' style={{ color: "#fff" }}></div>} 
      />
    );
  }
}

export default App;