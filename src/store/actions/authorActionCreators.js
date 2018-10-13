import * as actionTypes from './actionTypes';
import AuthorApi from '../../fakeBackend/mockAuthorApi';
import CourseApi from '../../fakeBackend/mockCourseApi';



export const authorSucess = (data) => {
    return {
        type:actionTypes.LOAD_AUTHORS,
        author:data
    }
}

export const getAuthorsList = () => {
    return dispatch => {
        AuthorApi.getAllAuthors()
         .then((response) => {
             dispatch(authorSucess(response))
         }).catch((error) => {
             throw(error)
         })
    }
}

export const updateCourseSuccess = (courseForm) => {
    return {
        type:actionTypes.UPDATE_COURSE_FORM,
        data:courseForm
    }
}


export const createCourseSuccess = (courseForm) => {
    return {
        type:actionTypes.CREATE_COURSE_FORM,
        data:courseForm
    }
}

export const saveCourse = (course) => {
    return dispatch => {
        console.log(course)
        CourseApi.saveCourse(course)
         .then((response) => {
            course.id ? dispatch(updateCourseSuccess(response)) : dispatch(createCourseSuccess(response))
         }).catch((error) => {
             throw(error)
         })
    }
}