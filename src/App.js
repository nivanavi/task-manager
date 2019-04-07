import React, { Component } from 'react';
import './App.css';
import Main from './hoc/layout'
import PlanOnDay from './components/planOnDay/planOnDay'
import Tasks from './components/tasks/tasks'
import {connect} from "react-redux";

class App extends Component {

  render() {
    return (
      <div className="App">
        <Main>
          <PlanOnDay rootEdit={this.props}/>
          <Tasks rootEdit={this.props}/>
        </Main>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        state
    }
}

function mapDispatchToProps(dispatch) {
    return {
        editTitleInPlan: (task) => dispatch({
            type: 'editTitleInPlan',
            payload: task
        }),
        rootDeleteInPlan: (task) => dispatch({
            type: 'rootDeleteInPlan',
            payload: task
        }),
        styleInPlan: (task) => dispatch({
            type: 'styleInPlan',
            payload: task
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

