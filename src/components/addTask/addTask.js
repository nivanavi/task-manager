import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {

    taskAdder = (id) => {
        let title = this.refs.title;
        let content = this.refs.content;
        let check = this.refs.check.checked;
        const idTask = (Math.round(Math.random() * 10000)).toString();
        let important;

        if (check === true) {
            important = true;
        } else {
            important = false;
        }
        let allGroups = this.props.all.groups.groups;
        for (let i = 0; i < allGroups.length; i++) {
            if (allGroups[i].id === id) {
                if (title !== "" && content !== "") {
                    allGroups[i].tasks.push( {title: title.value, description: content.value, id: idTask, important: important})
                }
            }
        }

        title.value = '';
        content.value = '';


        return allGroups;
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
                                this.props.all.all.addTaskToGroup(this.taskAdder(this.props.groupId))
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
