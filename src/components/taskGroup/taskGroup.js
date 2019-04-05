import React, { Component } from 'react';
import './taskGroup.css';
import OneTask from '../oneTask/oneTask'
import AddTask from '../addTask/addTask'
import AddGroup from '../addGroup/addGroup'

class TaskGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        event.preventDefault();
        let data = this.props.mainData.draggableElementId;
        this.props.all.dropTaskToGroup({
            mainData: data,
            eventId: event.target.id
        })
    };

    deleteGroup = (id) => {
        this.props.all.onDeleteGroup(id)
    };

    stopDrop = (event) => {
        event.stopPropagation();
    };

    render() {
        return (
            <div>
            {   this.props.groups.groups.map((groups) => {
                    return (
                        <div className='group' key={groups.id}>
                            <div className='groupMargin' id={groups.id} onDragOver={this.dragOver} onDrop={(event) => {this.onDrop(event)}}>
                                <div>
                                    <h1 className='groupName' onDrop={this.stopDrop}>{groups.groupName}
                                    <button className='deleteGroup'
                                            onClick={() => {this.deleteGroup(groups.id)}}>
                                        завершить
                                    </button>
                                    </h1>
                                </div>
                                { groups.tasks.map((tasks) => {
                                    return (
                                        <OneTask
                                            groupId={groups.id}
                                            dragId={this.props.mainData}
                                            key={tasks.id}
                                            id={tasks.id}
                                            title={tasks.title}
                                            description={tasks.description}
                                            deleteGroup={this.props.all}
                                            important={tasks.important}
                                        />
                                    )
                                })}
                            </div>
                            <AddTask all={this.props} groupId={groups.id}/>
                        </div>
                    )
            })}
            <AddGroup all={this.props}/>
            </div>
        )
    }
}

export default TaskGroup;
