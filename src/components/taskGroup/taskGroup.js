import React, { Component } from 'react';
import './taskGroup.css';
import OneTask from '../oneTask/oneTask'
import AddTask from '../addTask/addTask'

class TaskGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event) => {
        event.preventDefault();
        var data = this.props.mainData.draggableElementId;
        var that = document.getElementById(event.target.id);
        var arr = this.props.mainData.arrayCheck;

        var allGroups = [];

        this.props.groups.groups.map((group) => {
            allGroups.push(group.id)
            return null
        })

        if(allGroups.indexOf(event.target.id) !== -1) {
            if(arr.indexOf(data[0]) === -1) {
                arr.push(data[0])
            }
            that.appendChild(document.getElementById(data[0]))
        }

        if(allGroups.indexOf(event.target.id) !== -1) {
            if(arr.indexOf(data[0]) !== -1) {
                arr.splice(arr.indexOf(data[0]), 1);
            }
            that.appendChild(document.getElementById(data[0]))
        }
    }

    render() {
        return (
            <div>
            {   this.props.groups.groups.map((groups) => {
                return (
                    <div className='group' key={groups.id}>
                    <div className='groupMargin' id={groups.id} onDragOver={this.dragOver} onDrop={this.onDrop}>
                    <h1 className='groupName'>{groups.groupName}</h1>
                        { groups.tasks.map((tasks) => {
                            return (
                    <OneTask
                        dragId={this.props.mainData}
                        key={tasks.id}
                        id={tasks.id}
                        title={tasks.title}
                        description={tasks.description}
                    />
                            )
                        })}
                    </div>
                        <AddTask all={this.props} groupId={groups.id} whatAdd={'задачу'}/>
                    </div>
            )
            })}
            </div>
        )
    }
}

export default TaskGroup;
