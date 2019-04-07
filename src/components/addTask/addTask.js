import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {

    taskAdder = () => {
        let title = this.refs.title;
        let check = this.refs.check.checked;
        let important = false;

        if (check === true) {
            important = true;
        }

        if (title.value !== "") {
            this.props.all.all.addTaskToGroup({
                groupId: this.props.groupId,
                important: important,
                title: title.value
            });
            title.value = '';
        }
    };


    render() {
        if (this.props.groupId === undefined) {
            return null;
        }
            return (
                <div id='add'>
                    <div id={this.props.groupId + 'addButton'} className='addTask'>
                        <div className='adder'>
                            <div className='title'>
                                <textarea ref='title' placeholder='задача'/>
                            <i className="fa fa-plus-circle add" aria-hidden="true"
                               onClick={() => {
                                   this.taskAdder()
                               }}>
                            </i>
                            </div>
                            <div className='checkDiv'>
                                <i className="fa fa-question-circle check" aria-hidden="true"></i>
                                <input ref='check' type="checkbox"/>
                            </div>

                        </div>
                    </div>
                </div>
            )
    }
}

export default AddTask;
