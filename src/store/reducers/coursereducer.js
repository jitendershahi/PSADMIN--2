import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses:[]
}

const CourseReducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.CREATE_COURSE:
        return {
            ...state,
            courses: action.data
        }

        default:
        return state
    }
}

export default CourseReducer;