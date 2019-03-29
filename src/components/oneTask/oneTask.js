import React, { Component } from 'react';
import './oneTask.css';

class OneTask extends Component {

    dragStart = (event) => {
        const dragId = this.props.dragId.draggableElementId;
        dragId.splice(0, 5);
        dragId.push(event.target.id, this.props.title, this.props.description, this.props.groupId, this.props.igPlanGroup);
        console.log(dragId)
    };

    stop = (event) => {
        event.stopPropagation();
    };

    delete = () => {
        let allGroups;
        let planGroup;

        if (this.props.deleteGroup !== undefined) {
            allGroups = this.props.deleteGroup.groups.groups;
            allGroups.map((group) => {
                group.tasks.map((task) => {
                    if (task.id === this.props.id) {
                        group.tasks.splice(group.tasks.indexOf(task), 1)
                        return this.props.deleteGroup.onDeleteInGroup(allGroups)
                    }
                    return null;
                })
                return null;
            })
        }

        if (this.props.deletePlan !== undefined) {
            planGroup = this.props.deletePlan.times.times;
            planGroup.map((group) => {
                group.tasks.map((task) => {
                    if (task.id === this.props.id) {
                        group.tasks.splice(group.tasks.indexOf(task), 1)
                        return this.props.deletePlan.onDeleteInPlan(planGroup)
                    }
                    return null;
                })
                return null;
            })
        }
    };


    render() {
        return (
            <div id={this.props.id} className='oneTask' draggable='true' onDragStart={(event) => {this.dragStart(event)}} onDrop={this.stop}>
               <div className='oneTaskHeader'>
                <h2>{this.props.title}</h2>
                <span onClick={this.delete}>x</span>
               </div>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default OneTask;
