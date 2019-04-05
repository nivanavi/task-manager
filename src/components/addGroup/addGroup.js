import React, { Component } from 'react';
import '../addTask/addTask.css';

class AddGroup extends Component {

    groupAdder = () => {
        const title = this.refs.titleGroup;

                if (title.value !== "") {
                    this.props.all.all.addGroup({
                        title: title.value
                    })
                }


        title.value = '';
    };


    render() {
        return (
            <div id='add'>
                <div className='addTask'>
                    <div>добавить группу</div>

                    <div className='adder'>
                        <div className='title'>
                            <h3>введите название</h3>
                            <textarea ref='titleGroup' />
                        </div>
                        <button className='add' onClick={this.groupAdder}>+</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default AddGroup;
