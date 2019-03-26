import {combineReducers} from 'redux'
import dayPlan from './dayPlan'
import allTasks from './allTasks'
import mainData from './mainData'


export default combineReducers({
    dayPlan,
    allTasks,
    mainData
})
