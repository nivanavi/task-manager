import React, { Component } from 'react';
import PlanGroup from '../planGroup/planGroup'
import './planOnDay.css';
import {connect} from "react-redux";

class PlanOnDay extends Component {

 render() {
     return (
         <div className="plan">
             <div className='headerPlan'><h1>План дня</h1></div>
             <div className='placeForeTasksInPlan'>
                 <PlanGroup times={this.props} mainData={this.props.mainData}/>
             </div>
         </div>
     )
 }
}

function mapStateToProps(state) {
    return {
        times: state.dayPlan,
        mainData: state.mainData
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTaskToDayPlan: (task) => dispatch({
            type: 'addTaskToDayPlan',
            payload: task
        }),
        onDeleteInPlan: (task) => dispatch({
            type: 'onDeleteInPlan',
            payload: task
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanOnDay);
