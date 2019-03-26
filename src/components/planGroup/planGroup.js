import React, { Component } from 'react';
import './planGroup.css';
import OneTask from '../oneTask/oneTask'

class PlanGroup extends Component {

    // dragOver = (event) => {
    //     event.preventDefault();
    // }
    //
    // onDrop = (event) => {
    //     event.preventDefault();
    //     var data = this.props.mainData.draggableElementId;
    //     var that = document.getElementById(event.target.id);
    //     var arr = this.props.mainData.arrayCheck;
    //
    //
    //     if(event.target.id === 'planOnDay') {
    //         if(arr.indexOf(data[0]) !== -1) {
    //             arr.splice(arr.indexOf(data[0]), 1);
    //         }
    //         that.appendChild(document.getElementById(data[0]));
    //     }
    //
    //     if(allGroups.indexOf(event.target.id) !== -1) {
    //         if(arr.indexOf(data) === -1) {
    //             arr.push(data)
    //         }
    //         that.appendChild(document.getElementById(data))
    //         data.splice(0, 1)
    //     }
    //
    //     if(allGroups.indexOf(event.target.id) !== -1) {
    //         if(arr.indexOf(data) !== -1) {
    //             arr.splice(arr.indexOf(data), 1);
    //         }
    //         that.appendChild(document.getElementById(data))
    //         data.splice(0, 1)
    //     }
    //
    // }

    dragOver = (event) => {
        event.preventDefault();
    }

    onDrop = (event) => {
        event.preventDefault();
        var data = this.props.mainData.draggableElementId;
        var that = document.getElementById(event.target.id);
        var arr = this.props.mainData.arrayCheck;

        var allGroups = [];

        this.props.times.times.times.map((group) => {
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
                {   this.props.times.times.times.map((times) => {
                    return (
                        <div id={times.id} className='planGroup' key={times.id} onDragOver={this.dragOver} onDrop={this.onDrop}>
                            <h1>{times.start}</h1>
                            {times.tasks.map((task) => {
                                        return (
                                           <OneTask
                                               dragId={this.props.mainData}
                                               key={task.id}
                                               id={task.id}
                                               title={task.title}
                                               description={task.description}
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
