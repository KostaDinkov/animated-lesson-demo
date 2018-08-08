import React, { Component } from 'react';
import LessonLayout from './layout/LessonLayout'
import Stage from './Stage'
import CodeRunner from './CodeRunner';
import Unity from './Unity';

class App extends Component {
  render() {
    return (
      <LessonLayout
        stage={<Unity />}
        footer={<CodeRunner/>}
      />
    );
  }
}

export default App;