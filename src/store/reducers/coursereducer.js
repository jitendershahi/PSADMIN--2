import * as actionTypes from '../actions/actionTypes';

let initialState = {
    courses: []
}

export const CourseReducer = (state = initialState.courses, action) => {

    switch (action.type) {
        case actionTypes.LOAD_COURSE:
            return action.course

        case actionTypes.CREATE_COURSE_FORM:
            return [
                ...state,
                Object.assign({}, action.data)
            ]

        case actionTypes.UPDATE_COURSE_FORM:
            let array = state.filter(course => course.id !== action.data.id)
            array.push(action.data)
            return [
                ...array
            ]

        default:
            return state
    }
}

export default CourseReducer;