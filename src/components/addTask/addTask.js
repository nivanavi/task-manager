import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {

    taskAdder = () => {
        let title = this.refs.title;
        let content = this.refs.content;
        let check = this.refs.check.checked;
        let important = false;

        if (check === true) {
            important = true;
        }

        if (title.value !== "" && content.value !== "") {
            this.props.all.all.addTaskToGroup({
                groupId: this.props.groupId,
                important: important,
                title: title.value,
                content: content.value
            });
        }

        title.value = '';
        content.value = '';
    };


    render() {
        if (this.props.groupId === undefined) {
            return null;
        }
            return (
                <div id='add'>
                    <div id={this.props.groupId + 'addButton'} className='addTask'>
                        <div>добавить задачу</div>

                        <div className='adder'>
                            <div className='title'>
                                <h3>введите название</h3>
                                <textarea ref='title'/>
                            </div>
                            <div className='content'>
                                <h3>введите описание</h3>
                                <textarea ref='content'/>
                            </div>
                            <button className='add' onClick={() => {
                                this.taskAdder()
                            }}>+
                            </button>
                            <p className='check'>важно? <input ref='check' type="checkbox"/></p>
                        </div>

                    </div>
                </div>
            )
    }
}

export default AddTask;
