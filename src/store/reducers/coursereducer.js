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

        default:
        return state
    }
}

export default CourseReducer;