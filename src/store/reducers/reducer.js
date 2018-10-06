import * as actionTypes from '../actions/actionTypes';

const initialState = {
    courses:[]
}

export const Reducer = (state = initialState, action) => {

    switch(action.type) {
        case actionTypes.CREATE_COURSE:
        return {
            ...state,
            courses: action.data
        }
    }
}