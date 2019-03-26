import React, { Component } from 'react';
import './App.css';
import Main from './hoc/layout'
import PlanOnDay from './components/planOnDay/planOnDay'
import Tasks from './components/tasks/tasks'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main>
          <PlanOnDay/>
          <Tasks/>
        </Main>
      </div>
    );
  }
}

export default App;
