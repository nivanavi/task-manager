import React, { Component } from 'react';
import './App.css';
import Main from './hoc/layout'
import PlanOnDay from './components/planOnDay/planOnDay'
import Tasks from './components/tasks/tasks'
import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        fetch('/groups')
            .then(res => res.json())
            .then(groups => this.props.getGroups({all: groups}));
    }

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
        filter: state.mainData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getGroups: (tasks) => dispatch({
            type: 'getGroups',
            payload: tasks
        }),
        getTasksInPlan: (tasks) => dispatch({
            type: 'getTasksInPlan',
            payload: tasks
        }),
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
        }),
        rootEditTitleGroup: (task) => dispatch({
            type: 'rootEditTitleGroup',
            payload: task
        }),
        rootLaterGroup: (task) => dispatch({
            type: 'rootLaterGroup',
            payload: task
        }),
        rootDoneGroup: (task) => dispatch({
            type: 'rootDoneGroup',
            payload: task
        }),
        rootLaterPlan: (task) => dispatch({
            type: 'rootLaterPlan',
            payload: task
        }),
        rootDonePlan: (task) => dispatch({
            type: 'rootDonePlan',
            payload: task
        })

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

