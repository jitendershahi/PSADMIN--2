import * as actionTypes from './actionTypes';

import CourseApi from '../../fakeBackend/mockCourseApi'
import AuthorApi from '../../fakeBackend/mockAuthorApi';

// export const loadCourse = (data) => {
//     return {
//         type: actionTypes.LOAD_COURSE,
//         course: data  
//     }
// }

// export const getCourses = () => {
//     return dispatch => {
//         CourseApi.getAllCourses()
//             .then((data) => {
//                 dispatch(loadCourse(data))
//             }).catch(error => {
//                 throw(error)
//             })
//     }
// }

export const authorsSuccess = (data) => {
    return {
        type:actionTypes.LOAD_AUTHORS,
        authors:data
    }
}

export const getAuthors = () => {
    return dispatch => {
        AuthorApi.getAllAuthors()
         .then((data) => {
            dispatch(authorsSuccess(data))
         }).catch(error => {
             throw(error)
         })
    }
}
