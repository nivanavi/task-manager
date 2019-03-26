import React, {Component} from 'react'
import './layout.css'

class Main extends Component {
    render() {
        return (
            <div className='main'>
                {this.props.children}
            </div>
        )
    }
}

export default Main;
