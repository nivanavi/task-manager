import React, { Component } from 'react';
import './addTask.css';

class AddTask extends Component {

    taskAdder = (id) => {
        const title = document.getElementById(id + 'title');
        const content = document.getElementById(id + 'content');
        const idTask = (Math.round(Math.random() * 10000)).toString();
        let allGroups = this.props.all.groups.groups;
        for (let i = 0; i < allGroups.length; i++) {
            if (allGroups[i].id === id) {
                if (title.value !== "" && content.value !== "") {
                    allGroups[i].tasks.push( {title: title.value, description: content.value, id: idTask})
                }
            }
        }

        title.value = '';
        content.value = '';


        return allGroups;

    }


    render() {
        return (
            <div id='add'>
            <div id={this.props.groupId + 'addButton'} className='addTask'>
                <div>добавить {this.props.whatAdd}</div>

                <div className='adder'>
                <div className='title'>
                    <h3>введите название</h3>
                <textarea id={this.props.groupId + 'title'} />
                </div>
                <div className='content'>
                    <h3>введите описание</h3>
                <textarea id={this.props.groupId + 'content'} />
                </div>
                <button className='add' onClick={() => {this.props.all.all.addTaskToGroup(this.taskAdder(this.props.groupId))}}>+</button>
                </div>

            </div>
            </div>
        )
    }
}

export default AddTask;
