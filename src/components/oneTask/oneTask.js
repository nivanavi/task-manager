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


    render() {
        return (
            <div id={this.props.id} className='oneTask' draggable='true' onDragStart={(event) => {this.dragStart(event)}} onDrop={this.stop}>
               <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default OneTask;
