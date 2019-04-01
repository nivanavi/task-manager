import React, { Component } from 'react';
import '../addTask/addTask.css';

class AddGroup extends Component {

    groupAdder = () => {
        const title = document.getElementById('titleGroup');
        const idGroup = (Math.round(Math.random() * 10000)).toString();

        let allGroups = this.props.all.groups.groups;

                if (title.value !== "") {
                    allGroups.push({groupName: title.value,
                        id: idGroup,
                        tasks: []
                    })
                }


        title.value = '';

        return allGroups;
    };


    render() {
        return (
            <div id='add'>
                <div className='addTask'>
                    <div>добавить группу</div>

                    <div className='adder'>
                        <div className='title'>
                            <h3>введите название</h3>
                            <textarea id='titleGroup' />
                        </div>
                        <button className='add' onClick={() => {this.props.all.all.addGroup(this.groupAdder())}}>+</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default AddGroup;
