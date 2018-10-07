import * as actionTypes from './actionTypes';

import CourseApi from '../../fakeBackend/mockCourseApi'

export const loadCourse = (data) => {
    return {
        type: actionTypes.LOAD_COURSE,
        course: data  
    }
}

export const getCourses = () => {
    return dispatch => {
        CourseApi.getAllCourses()
            .then((data) => {
                console.log(data)
                dispatch(loadCourse(data))
            }).catch(error => {
                throw(error)
                console.log(error)
            })
    }
}
