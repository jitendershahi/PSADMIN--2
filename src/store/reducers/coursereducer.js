import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses:[]
}

export const CourseReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.LOAD_COURSE:
        return {
            ...state,
            courses: action.course
        }

        case actionTypes.CREATE_COURSE_FORM :
        console.log(action)
        let course = {
            ...action.data
        }
        return {
            ...state,
            courses:state.courses.concat(course)
        }

        case actionTypes.UPDATE_COURSE_FORM:
        console.log(action)
        // if(state.courses.filter(course => course.id !== action.data.id)){
        //     let Dcourse = {
        //         ...action.data
        //     }
        // }
        return {
            ...state,
            courses:[...state.courses.filter(course => course.id !== action.data.id),state.courses.concat(action.data) ]
        }

        default:
        return state
    }
}

export default CourseReducer;