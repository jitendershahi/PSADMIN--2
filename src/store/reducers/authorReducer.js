import * as actionTypes from '../actions/actionTypes';

const initialState = {
    authors:[]
}

export const AuthorReducer = (state = initialState, action) => {

    switch(action.type){
        case actionTypes.LOAD_AUTHORS:
        return {
            ...state,
            authors:action.author
        }

        default:
        return state

    }
}

export default AuthorReducer;