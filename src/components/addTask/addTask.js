import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {

    taskAdder = (id) => {
        const title = document.getElementById(id + 'title');
        const content = document.getElementById(id + 'content');
        const check = document.getElementById(id + 'check');
        const idTask = (Math.round(Math.random() * 10000)).toString();
        let important;

        if (check.checked === true) {
            important = true;
        } else {
            important = false;
        }
        let allGroups = this.props.all.groups.groups;
        for (let i = 0; i < allGroups.length; i++) {
            if (allGroups[i].id === id) {
                if (title.value !== "" && content.value !== "") {
                    allGroups[i].tasks.push( {title: title.value, description: content.value, id: idTask, important: important})
                }
            }
        }

        title.value = '';
        content.value = '';
        check.cheked = false;


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
                                <textarea id={this.props.groupId + 'title'}/>
                            </div>
                            <div className='content'>
                                <h3>введите описание</h3>
                                <textarea id={this.props.groupId + 'content'}/>
                            </div>
                            <button className='add' onClick={() => {
                                this.props.all.all.addTaskToGroup(this.taskAdder(this.props.groupId))
                            }}>+
                            </button>
                            <p className='check'>важно? <input id={this.props.groupId + 'check'} type="checkbox"/></p>
                        </div>

                    </div>
                </div>
            )
    }
}

export default AddTask;
