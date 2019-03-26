import React, { Component } from 'react';
import './oneTask.css';

class OneTask extends Component {

    dragStart = (event) => {
        const dragId = this.props.dragId.draggableElementId;
        dragId.splice(0, 1);
        dragId.push(event.target.id);
        console.log(this.props.dragId.draggableElementId)
    }


    render() {
        return (
            <div id={this.props.id} className='oneTask' draggable='true' onDragStart={(event) => {this.dragStart(event)}}>
               <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

export default OneTask;
