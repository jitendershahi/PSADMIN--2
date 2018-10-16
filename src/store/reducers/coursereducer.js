import * as actionTypes from '../actions/actionTypes';

let initialState = {
    courses:[]
}

export const CourseReducer = (state = initialState.courses, action) => {

    switch(action.type) {
        case actionTypes.LOAD_COURSE:
        return action.course
        // return {
        //     ...state,
        //     courses: action.course
        // }

        case actionTypes.CREATE_COURSE_FORM:
        return [
            ...state,
            Object.assign({}, action.data)
        ]
        // let course = {
        //     ...action.data
        // }
        // return {
        //     ...state,
        //     courses:state.courses.concat(course)
        // }

        case actionTypes.UPDATE_COURSE_FORM:
        console.log(state)
        let array = state.filter(course => course.id != action.data.id)
        array.push(action.data)
        console.log(array)
        return  array
            // ...state.filter(course => course.id !== action.data.id),
            // Object.assign({},action.data)
        
        // let editCourse = [ ...state.courses.filter(course => course.id !== action.data.id) ,Object.assign({} ,action.data) ]
        // return {
        //     ...state,
        //     courses : editCourse
        // }

        default:
        return state
    }
}

export default CourseReducer;