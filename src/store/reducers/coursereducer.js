import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses:[]
}

export const CourseReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.CREATE_COURSE:
       
        return {
            ...state,
            courses: state.courses.concat(action.course)
        }

        default:
        return state
    }
}

export default CourseReducer;