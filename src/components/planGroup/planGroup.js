import React, { Component } from 'react';
import './planGroup.css';
import OneTask from '../oneTask/oneTask'

class PlanGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event, groupId) => {
        event.preventDefault();
        event.target.classList.add('enterRemove');
if (this.props.mainData.draggableElementId.length !== 0) {
    this.props.times.addTaskToDayPlan({
        mainData: this.props.mainData.draggableElementId,
        groupId: groupId,
        eventId: event.target.id
    });
    this.props.times.rootEdit.styleInPlan({
        mainData: this.props.mainData.draggableElementId,
        switchValue: true
    });
}
        this.props.mainData.draggableElementId.splice(0, 9);
    };

    stopDrop = (event) => {
        event.stopPropagation();
    };

    onDragEnterSort = (event) => {
        let check = this.props.mainData.draggableElementId;
        if (check[0] !== undefined) {
            event.target.classList.remove('enterRemove');
            event.target.classList.add('enter')
        }


    };

    onDragLeaveSort = (event) => {
        let check = this.props.mainData.draggableElementId;
        if (check[0] !== undefined) {
            event.target.classList.add('enterRemove');
            event.target.classList.remove('enter')
        }
    };

    render() {
        return (
            <div>
                {   this.props.times.times.times.map((times) => {
                    return (
                        <div id={times.id} className='planGroup' key={times.id}>
                            <span className='timeHeader' onDrop={this.stopDrop}>{times.start}</span>
                            <div className='sortInPlan' id='0'
                                 onDragOver={this.dragOver}
                                 onDrop={(event) => {this.onDrop(event, times.id)}}
                                 onDragEnter={this.onDragEnterSort}
                                 onDragLeave={this.onDragLeaveSort}>
                            </div>
                            {times.tasks.map((task) => {
                                let count = times.tasks.indexOf(task);
                                        return (
                                            <div key={task.id}>
                                           <OneTask
                                               idPlanGroup={times.id}
                                               dragId={this.props.mainData}
                                               id={task.id}
                                               title={task.title}
                                               description={task.description}
                                               deletePlan={this.props.times}
                                               important={task.important}
                                               done={task.done}
                                               later={task.later}
                                           />
                                                <div className='sortInPlan' id={count + 1}
                                                     onDragOver={this.dragOver}
                                                     onDrop={(event) => {this.onDrop(event, times.id)}}
                                                     onDragEnter={this.onDragEnterSort}
                                                     onDragLeave={this.onDragLeaveSort}>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default PlanGroup;
