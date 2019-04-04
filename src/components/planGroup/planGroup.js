import React, { Component } from 'react';
import './planGroup.css';
import OneTask from '../oneTask/oneTask'

class PlanGroup extends Component {

    dragOver = (event) => {
        event.preventDefault();
    };

    onDrop = (event) => {
        event.preventDefault();
        let data = this.props.mainData.draggableElementId;
        let arrTimes = this.props.times.times.times;
        let allGroups = [];

        document.getElementById(data[0]).style.borderTop = '2px solid yellow';

        arrTimes.map((group) => {
            allGroups.push(group.id);
            return null
        });




        if (data[4] !== undefined) {
        arrTimes.map((groups) => {
            if (groups.id === data[4]) {
                groups.tasks.map((task) => {
                    if (task.id === data[0]) {
                        groups.tasks.splice(groups.tasks.indexOf(task), 1)
                    }
                    return null;
                })
            }
            return null;
        });
    }


        if (data[3] !== undefined) {
            arrTimes.map((groups) => {
                    groups.tasks.map((task) => {
                        if (task.id === data[0]) {
                            groups.tasks.map((task) => {
                                if (task.id === data[0]) {
                                    groups.tasks.splice(groups.tasks.indexOf(task), 1)
                                }
                                return null;
                            })
                        }
                        return null;
                    });
                return null;
            });
        }

        if(allGroups.indexOf(event.target.id) !== -1) {
                arrTimes.map((group) => {
                    if (event.target.id === group.id) {
                        group.tasks.push({title: data[1], description: data[2], id: data[0]})
                    }
                    return null;
                })
        }

        return arrTimes;
    };

    stopDrop = (event) => {
        event.stopPropagation();
    };

    render() {
        return (
            <div>
                {   this.props.times.times.times.map((times) => {
                    return (
                        <div id={times.id} className='planGroup' key={times.id} onDragOver={this.dragOver} onDrop={(event) => {this.props.times.addTaskToDayPlan(this.onDrop(event))}}>
                            <h1 onDrop={this.stopDrop}>{times.start}</h1>
                            {times.tasks.map((task) => {
                                        return (
                                           <OneTask
                                               igPlanGroup={times.id}
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
