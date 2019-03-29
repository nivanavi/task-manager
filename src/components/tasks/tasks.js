import React, { Component } from 'react';
import './tasks.css';
import TaskGroup from '../taskGroup/taskGroup'
import AddTask from '../addTask/addTask'
import {connect} from "react-redux";


class Tasks extends Component {

    render() {
        return (
            <div className="tasks">
                <div className='header'>
                    <h1>Задачи</h1>
                    <button className='showSome'>Показать сделанные</button>
                    <button className='showSome'>Показать "потом"</button>
                    <input className='showSome' placeholder='не работает' />
                </div>
                <TaskGroup dayPlan={this.props.dayPlan} all={this.props} groups={this.props.groups} mainData={this.props.mainData}/>
                <AddTask whatAdd={'группу'}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        dayPlan: state.dayPlan.times,
        groups: state.allTasks,
        mainData: state.mainData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTaskToGroup: (task) => dispatch({
            type: 'addTaskToGroup',
            payload: task
        }),
        dropTaskToGroup: (task) => dispatch({
            type: 'dropTaskToGroup',
            payload: task
        }),
        onDeleteInGroup: (task) => dispatch({
            type: 'onDeleteInGroup',
            payload: task
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
