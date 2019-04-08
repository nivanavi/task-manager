import React, { Component } from 'react';
import './planGroup.css';
import OneTask from '../oneTask/oneTask'

class PlanGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        event.preventDefault();
if (this.props.mainData.draggableElementId.length !== 0) {
    this.props.times.addTaskToDayPlan({
        mainData: this.props.mainData.draggableElementId,
        eventId: event.target.id
    });
    this.props.times.rootEdit.styleInPlan({
        mainData: this.props.mainData.draggableElementId,
        switchValue: true
    })
}
        this.props.mainData.draggableElementId.splice(0, 9);

    };

    stopDrop = (event) => {
        event.stopPropagation();
    };

    render() {
        return (
            <div>
                {   this.props.times.times.times.map((times) => {
                    return (
                        <div id={times.id} className='planGroup' key={times.id} onDragOver={this.dragOver} onDrop={(event) => {this.onDrop(event)}}>
                            <div className='timeHeader' onDrop={this.stopDrop}>{times.start}</div>
                            {times.tasks.map((task) => {
                                        return (
                                           <OneTask
                                               idPlanGroup={times.id}
                                               dragId={this.props.mainData}
                                               key={task.id}
                                               id={task.id}
                                               title={task.title}
                                               description={task.description}
                                               deletePlan={this.props.times}
                                               important={task.important}
                                           />
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
