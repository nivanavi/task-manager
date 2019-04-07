import React, { Component } from 'react';
import '../addTask/addTask.css';

class AddGroup extends Component {

    groupAdder = (event) => {
        if (event.which === 13 || event.which === undefined) {
            event.preventDefault();
            const title = this.refs.titleGroup;

            if (title.value !== " ") {
                this.props.all.all.addGroup({
                    title: title.value
                })
            }


            title.value = '';
        }
    };

    render() {
        return (
            <div id='add'>
                <div className='addTask'>
                    <div className='adder'>
                        <div className='title'><textarea ref='titleGroup' placeholder='название группы' onKeyPress={this.groupAdder}/>
                            <i className="fa fa-plus-circle add" aria-hidden="true"
                               onClick={this.groupAdder}>
                            </i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddGroup;
