import React, { Component } from 'react';
import LessonLayout from './layout/LessonLayout'
import CodeRunner from './CodeRunner';



class App extends Component {
  render() {
    return (
      <LessonLayout
        
        footer={<CodeRunner/>}
      />
    );
  }
}

export default App;