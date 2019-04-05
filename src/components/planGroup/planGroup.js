import React, { Component } from 'react';
import './planGroup.css';
import OneTask from '../oneTask/oneTask'

class PlanGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        event.preventDefault();

        this.props.times.addTaskToDayPlan({
            mainData: this.props.mainData.draggableElementId,
            eventId: event.target.id
        });
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
                            <h1 onDrop={this.stopDrop}>{times.start}</h1>
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
