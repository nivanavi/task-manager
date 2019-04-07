import React, { Component } from 'react';
import './taskGroup.css';
import OneTask from '../oneTask/oneTask'
import AddTask from '../addTask/addTask'
import AddGroup from '../addGroup/addGroup'

class TaskGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event, groupId) => {
        event.preventDefault();
        let data = this.props.mainData.draggableElementId;
        this.props.all.dropTaskToGroup({
            mainData: data,
            eventId: event.target.id,
            groupId: groupId
        })
    };

    deleteGroup = (id) => {
        this.props.all.onDeleteGroup(id)
    };

    stopDrop = (event) => {
        event.stopPropagation();
    };

    // dragStartGroup = (event) => {
    //
    // };
    //
    // onDropGroup = (event, groupId) => {
    //     event.preventDefault();
    //     let data = this.props.mainData.draggableElementId;
    //     this.props.all.dropTaskToGroup({
    //         mainData: data,
    //         eventId: event.target.id,
    //         groupId: groupId
    //     })
    // };

    render() {
        return (
            <div>
                {/*<div id='0' className='dropGroup'*/}
                     {/*onDragOver={this.dragOver}*/}
                     {/*onDrop={(event) => {this.onDropGroup(event, this.props.groups.groups.id)}}>*/}
                {/*</div>*/}
            {   this.props.groups.groups.map((groups) => {
                // const dropNumGroup = this.props.groups.groups.indexOf(groups);
                    return (
                        <div key={groups.id}>
                        <div className='group'>
                            <div className='groupMargin'>
                                <div>
                                    <div onDrop={this.stopDrop}>
                                        <span className='groupName'>{groups.groupName}</span>
                                        <i className="fa fa-times deleteGroup" aria-hidden="true"
                                           onClick={() => {this.deleteGroup(groups.id)}}>
                                        </i>
                                    </div>
                                </div>
                                <div id='0' className='dropDiv'
                                     onDragOver={this.dragOver}
                                     onDrop={(event) => {this.onDrop(event, groups.id)}}>
                                </div>
                                { groups.tasks.map((tasks) => {
                                    const dropNumber = (groups.tasks.indexOf(tasks));
                                    return (
                                        <div key={tasks.id}>
                                        <OneTask
                                            groupId={groups.id}
                                            dragId={this.props.mainData}
                                            id={tasks.id}
                                            title={tasks.title}
                                            description={tasks.description}
                                            deleteGroup={this.props.all}
                                            important={tasks.important}
                                            done={tasks.done}
                                            later={tasks.later}
                                            inPlan={tasks.inPlan}
                                        />
                                            <div id={dropNumber + 1} className='dropDiv'
                                                 onDragOver={this.dragOver}
                                                 onDrop={(event) => {this.onDrop(event, groups.id)}}>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <AddTask all={this.props} groupId={groups.id}/>
                        </div>
                            {/*<div id={dropNumGroup + 1} className='dropGroup'*/}
                                 {/*onDragOver={this.dragOver}*/}
                                 {/*onDrop={(event) => {this.onDropGroup(event, groups.id)}}>*/}
                            {/*</div>*/}
                    </div>)
            })}
            <AddGroup all={this.props}/>
            </div>
        )
    }
}

export default TaskGroup;
