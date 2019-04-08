import React, { Component } from 'react';
import './tasks.css';
import TaskGroup from '../taskGroup/taskGroup'
import AddTask from '../addTask/addTask'
import {connect} from "react-redux";


class Tasks extends Component {

    render() {
        let classForDoneBtn = ["fa fa-check-square showDone"];
        let classForLaterBtn = ["fa fa-hourglass-start showLater"];

        if (this.props.filterDone === true) {
            classForDoneBtn.push('showDoneTrue')
        }

        if (this.props.filterLater === true) {
            classForLaterBtn.push('showLaterTrue')
        }

        return (
            <div className="tasks">
                <div className='header'>
                    <h1 className='headerName'>Задачи</h1>
                        <i className={classForDoneBtn.join(" ")} id='done' aria-hidden="true"
                        onClick={this.props.showDone}>
                        </i>
                        <i className={classForLaterBtn.join(" ")} id='later' aria-hidden="true"
                           onClick={this.props.showLater}>
                        </i>
                    <div>
                        <i className="fa fa-search search" aria-hidden="true">
                        </i>
                        <input className='searchSome'/>
                    </div>
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
        mainData: state.mainData,
        filterDone: state.allTasks.filterDone,
        filterLater: state.allTasks.filterLater
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTaskToGroup: (task) => dispatch({
            type: 'addTaskToGroup',
            payload: task
        }),
        addGroup: (group) => dispatch({
            type: 'addGroup',
            payload: group
        }),
        dropTaskToGroup: (task) => dispatch({
            type: 'dropTaskToGroup',
            payload: task
        }),
        onDeleteInGroup: (task) => dispatch({
            type: 'onDeleteInGroup',
            payload: task
        }),
        onDeleteGroup: (group) => dispatch({
            type: 'onDeleteGroup',
            payload: group
        }),
        onDone: (task) => dispatch({
            type: 'onDone',
            payload: task
        }),
        onLater: (task) => dispatch({
            type: 'onLater',
            payload: task
        }),
        showDone: (task) => dispatch({
            type: 'showDone',
            payload: task
        }),
        showLater: (task) => dispatch({
            type: 'showLater',
            payload: task
        }),
        editTitle: (task) => dispatch({
            type: 'editTitle',
            payload: task
        }),
        sortGroup: (task) => dispatch({
            type: 'sortGroup',
            payload: task
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
