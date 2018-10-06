import * as actionTypes from './actionTypes';

export const createCourse = (data) => {
    return {
        type:actionTypes.CREATE_COURSE,
        course:data
    }
}
