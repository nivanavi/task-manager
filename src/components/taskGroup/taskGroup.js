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
        let all = this.props.groups.groups;
        let allGroups = [];

        all.map((group) => {
            allGroups.push(group.id);
            return null
        });

        if (data[3] === undefined) {
            return all;
        }

        if (data[4] === undefined) {
            all.map((groups) => {
                if (groups.id === data[3]) {
                    groups.tasks.map((task) => {
                        if (task.id === data[0]) {
                            groups.tasks.splice(groups.tasks.indexOf(task), 1)
                        }
                        return null;
                    })
                }
                return null;
            })
        }



        if(allGroups.indexOf(event.target.id) !== -1) {
                all.map((group) => {
                    if (event.target.id === group.id) {
                        group.tasks.push({title: data[1], description: data[2], id: data[0]})
                    }
                    return null;
                })
        }
        return all;
    };

    stop = (event) => {
        event.stopPropagation();
    };

    render() {
        return (
            <div>
            {   this.props.groups.groups.map((groups) => {
                    return (
                        <div className='group' key={groups.id}>
                            <div className='groupMargin' id={groups.id} onDragOver={this.dragOver} onDrop={(event) => {this.props.all.dropTaskToGroup(this.onDrop(event))}}>
                                <h1 className='groupName' onDrop={this.stop}>{groups.groupName}</h1>
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
